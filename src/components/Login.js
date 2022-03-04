import React, { useState, useEffect } from 'react';
import { validate } from './validate';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { notify } from './toast';
import styles from './SingUp.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
      //States
      const [inputData, setInputData] = useState({
            email: '',
            password: '',
      });
      const [touched, setTouched] = useState({});
      const [errors, setErrors] = useState({});
      useEffect(() => {
            setErrors(validate(inputData, 'Login'));
      }, [inputData]);
      //Handle inputs updating
      const inputOnChange = (e) => {
            setInputData({ ...inputData, [e.target.name]: e.target.value });
      };
      const setFieldTouched = (e) => {
            setTouched({ ...touched, [e.target.name]: true });
      };
      const formOnSubmit = (e) => {
            e.preventDefault();
            if (!Object.keys(errors).length) {
                  notify('success', 'You Loged in successfuly');
            } else {
                  notify('error', 'Invalid data!');
                  setTouched({
                        email: true,
                        password: true,
                  });
            }
      };
      // Destructure object
      const { email, password } = inputData;
      return (
            <div className={styles.container}>
                  <form onSubmit={formOnSubmit} className={styles.formContainer}>
                        <h2 className={styles.header}>Login</h2>

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
                                    name='password'
                                    value={password}
                                    onChange={inputOnChange}
                                    onFocus={setFieldTouched}
                              />
                              {errors.password && touched.password && <span>{errors.password}</span>}
                        </div>
                        <div className={styles.buttonsContainer}>
                              <Link to={'/signup'}>Sign up</Link>
                              <button type='submit'>Login </button>
                        </div>
                  </form>
                  <ToastContainer />
            </div>
      );
};

export default Login;
