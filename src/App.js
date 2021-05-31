import "./App.css";
import Cookies from "js-cookie";
import { useState } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// IMPORT CONTAINERS "PAGES WEB"
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import NoMatch from "./containers/NoMatch";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
// IMPORT COMPOSANT
import Header from "./component/Header";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  // creer Cookie
  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token, { expires: 3 });
      setUserToken(token);
    } else {
      // supprime token
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/signup">
          <Signup userToken={userToken} setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login userToken={userToken} setUser={setUser} />
        </Route>
        <Route path="/publish">
          <Publish userToken={userToken} />
        </Route>
        <Route path="/payment">
          <Payment userToken={userToken} setUser={setUser} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
