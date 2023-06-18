const validateNumber = (input) => {
  return /^[0-9]+$/.test(input);
};

const validateOnlyString = (input) => {
  return /^[a-z A-Z]+$/.test(input);
};

const validateEmail = (input) => {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
    input.toLowerCase()
  );
};

const validatePassword = (input) => {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/gm.test(input);
};

export { validateEmail, validateNumber, validateOnlyString, validatePassword };
