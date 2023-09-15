import styles from "./Form.module.css";
import { useState } from "react";
import validation from "../Validation/validation";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChage = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChage}
        />
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChage}
        />
        {errors.password && <p>{errors.password}</p>}
        <hr />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
