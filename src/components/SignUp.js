import React, { useState, useEffect } from 'react';
import styles from './SingUp.module.css';
import { validate } from './validate';
import { notify } from './toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
      //States
      const [inputData, setInputData] = useState({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            isAccepted: false,
      });
      const [errors, setErrors] = useState({});
      const [touched, setTouched] = useState({});
      //Get inputs errors from validate component
      useEffect(() => {
            setErrors(validate(inputData));
      }, [inputData, touched]);
      const setFieldTouched = (e) => {
            setTouched({ ...touched, [e.target.name]: true });
      };
      // Destructure object
      const { name, email, password, confirmPassword, isAccepted } = inputData;
      //Handle inputs updating
      const inputOnChange = (e) => {
            if (e.target.name === 'isAccepted') {
                  setInputData({ ...inputData, [e.target.name]: e.target.checked });
            } else {
                  setInputData({ ...inputData, [e.target.name]: e.target.value });
            }
      };
      const formOnSubmit = (e) => {
            e.preventDefault();
            if (!Object.keys(errors).length) {
                  notify('success', 'You signed up successfuly');
            } else {
                  notify('error', 'Invalid data!');
                  setTouched({
                        name: true,
                        email: true,
                        password: true,
                        confirmPassword: true,
                        isAccepted: true,
                  });
            }
      };

      return (
            <div className={styles.container}>
                  <form className={styles.formContainer} onSubmit={formOnSubmit}>
                        <h2 className={styles.header}>SignUp</h2>
                        <div className={styles.formField}>
                              <label>Name</label>
                              <input
                                    className={errors.name && touched.name ? styles.uncompleted : styles.formInput}
                                    type='text'
                                    name='name'
                                    value={name}
                                    onChange={inputOnChange}
                                    onFocus={setFieldTouched}
                              />
                              {errors.name && touched.name && <span>{errors.name}</span>}
                        </div>
                        <div className={styles.formField}>
                              <label>Email</label>
                              <input
                                    className={errors.email && touched.email ? styles.uncompleted : styles.formInput}
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={inputOnChange}
                                    onFocus={setFieldTouched}
                              />
                              {errors.email && touched.email && <span>{errors.email}</span>}
                        </div>
                        <div className={styles.formField}>
                              <label>Password</label>
                              <input
                                    className={errors.password && touched.password ? styles.uncompleted : styles.formInput}
                                    type='password'
                                    email='password'
                                    value={password}
                                    onChange={inputOnChange}
                                    onFocus={setFieldTouched}
                              />
                              {errors.password && touched.password && <span>{errors.password}</span>}
                        </div>
                        <div className={styles.formField}>
                              <label>Confirm Password</label>
                              <input
                                    className={errors.confirmPassword && touched.confirmPassword ? styles.uncompleted : styles.formInput}
                                    type='password'
                                    name='confirmPassword'
                                    value={confirmPassword}
                                    onChange={inputOnChange}
                                    onFocus={setFieldTouched}
                              />
                              {errors.confirmPassword && touched.confirmPassword && <span>{errors.confirmPassword}</span>}
                        </div>
                        <div className={styles.formField}>
                              <div className={styles.checkboxContainer}>
                                    <label>I accept terms of privacy policy</label>
                                    <input
                                          type='checkbox'
                                          name='isAccepted'
                                          value={isAccepted}
                                          onChange={inputOnChange}
                                          onFocus={setFieldTouched}
                                    />
                              </div>
                              {errors.isAccepted && touched.isAccepted && <span>{errors.isAccepted}</span>}
                        </div>
                        <div className={styles.buttonsContainer}>
                              <button type='submit'>Sign Up</button>
                        </div>
                  </form>
                  <ToastContainer />
            </div>
      );
};

export default SignUp;
