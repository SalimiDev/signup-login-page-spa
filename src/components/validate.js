export const validate = (inputData) => {
     const errors = {};
     const { name, email, password, confirmPassword, isAccepted } = inputData;
     if (!name.trim()) {
          errors.name = 'Name Required';
     } else {
          delete errors.name;
     }

     if (!email) {
          errors.email = 'Email Required';
     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          errors.email = 'Email is not valid';
     } else {
          delete errors.email;
     }

     if (!password) {
          errors.password = 'Password Required';
     } else if (password.length < 6) {
          errors.password = 'Password need to be 6 character or more';
     } else {
          delete errors.password;
     }

     if (!confirmPassword) {
          errors.confirmPassword = 'Please confirm the Password';
     } else if (confirmPassword !== password) {
          errors.confirmPassword = 'Those passwords didn’t match. Try again.';
     }

     if (isAccepted) {
          delete errors.isAccepted;
     } else {
          errors.isAccepted = 'Please Accept Our Regulations';
     }

     return errors;
};
