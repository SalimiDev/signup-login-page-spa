import React, { useState } from 'react';
import styles from './SingUp.module.css';

const SignUp = () => {
     const [inputData, setInputData] = useState({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          isAccepted: false,
     });
     // Destructure object
     const { name, email, password, confirmPassword, isAccepted } = inputData;

     const inputOnChange = (e) => {
          if (e.target.name === 'isAccepted') {
               setInputData({ ...inputData, [e.target.name]: e.target.checked });
          } else {
               setInputData({ ...inputData, [e.target.name]: e.target.value });
          }
     };
     return (
          <div>
               <div className={styles.container}>
                    <form className={styles.formContainer}>
                         <h2 className={styles.header}>SignUp</h2>
                         <div className={styles.formField}>
                              <label>Name</label>
                              <input type='text' name='name' value={name} onChange={inputOnChange} />
                         </div>
                         <div className={styles.formField}>
                              <label>Email</label>
                              <input type='email' name='email' value={email} />
                         </div>
                         <div className={styles.formField}>
                              <label>Password</label>
                              <input type='password' name='password' value={password} onChange={inputOnChange} />
                         </div>
                         <div className={styles.formField}>
                              <label>Confirm Password</label>
                              <input type='password' name='confirmPassword' value={confirmPassword} onChange={inputOnChange} />
                         </div>
                         <div className={styles.formField}>
                              <div className={styles.checkboxContainer}>
                                   <label>I accept terms of privacy policy</label>
                                   <input type='checkbox' name='isAccepted' value={isAccepted} onChange={inputOnChange} />
                              </div>
                         </div>
                         <div className={styles.buttonsContainer}>
                              <button type='submit'>Sign Up</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default SignUp;
