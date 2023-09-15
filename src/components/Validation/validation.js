const validation = (userData) => {
  const errors = {};

  if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "El email ingresado no es valido";
  }
  if (!userData.email) {
    errors.email = "Ingresa un email";
  }
  if (userData.email.length > 35) {
    errors.email = "El email no puede superar los 35 caracteres";
  }
  if (!/.*\d+.*/.test(userData.password)) {
    errors.password = "La constraseña debe contener al menos un numero";
  }
  if (userData.password.length < 6 || userData.password.length > 10) {
    errors.password =
      "La contraseña debe tener un tamaño entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
