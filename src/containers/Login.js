import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  // var onChange >> Password, Email, useHistory
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // var onChange >> Password, Email, Submit
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        email: email,
        password: password,
      };
      // richiesta serveur
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        data
      );
      // richiesta tokenXcoockie
      const token = response.data.token;
      setUser(token);
      history.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    // HTML form
    <div className="mainSignup">
      <div className="signupForm">
        <h2 className="signupH2">Se Connecter</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="inputEmail"
            onChange={handleEmail}
            placeholder={"Adresse email"}
            type={"email"}
          />
          <input
            className="inputPassword"
            onChange={handlePassword}
            placeholder={"Mot de passe"}
            type={"password"}
          />
          <input
            className="loginButton"
            type="submit"
            value="Se connecter"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
