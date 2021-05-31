import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  // var onChange >> Username, Email, Password, Submit
  const handleUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };
  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const data = {
        username: username,
        email: email,
        password: password,
      };
      // richiesta serveur
      const response = await axios.post(
        "https://vinted-backend-first.herokuapp.com/user/signup",
        data
      );
      console.log(response.data);
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
        <h2 className="signupH2">S'inscrire</h2>
        <form className="formSignup" onSubmit={handleSubmit}>
          <input
            className="inputName"
            onChange={handleUsername}
            placeholder={"Nom d'utilisateur"}
            type={"text"}
          />
          <input
            className="inputEmail"
            onChange={handleEmail}
            placeholder={"Email"}
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
            value="SIGNUP"
            onClick={handleSubmit}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
