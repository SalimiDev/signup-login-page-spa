export const validate = (inputData, type) => {
      const errors = {};

      if (!inputData.email) {
            errors.email = 'Email Required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputData.email)) {
            errors.email = 'Email is not valid';
      } else {
            delete errors.email;
      }

      if (!inputData.password) {
            errors.password = 'Password Required';
      } else if (inputData.password.length < 6) {
            errors.password = 'Password need to be 6 character or more';
      } else {
            delete errors.password;
      }

      if (type === 'Signup') {
            if (!inputData.name.trim()) {
                  errors.name = 'Name Required';
            } else {
                  delete errors.name;
            }

            if (!inputData.confirmPassword) {
                  errors.confirmPassword = 'Please confirm the Password';
            } else if (inputData.confirmPassword !== inputData.password) {
                  errors.confirmPassword = 'Those passwords didn’t match. Try again.';
            }

            if (inputData.isAccepted) {
                  delete errors.isAccepted;
            } else {
                  errors.isAccepted = 'Please Accept Our Regulations';
            }
      }

      return errors;
};
