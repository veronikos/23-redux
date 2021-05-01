import React, { useState } from "react";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NoPathFound from "./components/404";
import SignIn from "./components/SignIn";

function App() {
  // const adminUser = {
  //   email: "admin@admin.com",
  //   password: "a",
  // };

  const [user, setUser] = useState({ name: "", email: "", password: "", hoho: "Hello" });
  const [error, setError] = useState("");
  const [userA, setUserA] = useState({
    password: "",
    email: "",
    rememberMe: false,
  });

  const [loggedIn, setloggedIn] = useState({ isLoggedIn: false });

  const LoginIn = (details) => {
    setUserA({
      password: details.password,
      email: details.email,
      rememberMe: details.rememberMe,
    });

    if (details.email === user.email && details.password === user.password) {
      console.log("Loged In");
      setloggedIn({
        isLoggedIn: true,
      });
    } else {
      console.log("Details do not match!");
      setError(<div className="error">Details do not match!</div>);
    }
  };

  const GetUser = (details) => {
    setUser({
      password: details.password,
      email: details.email,
      name: details.name,
    });
  };
  console.log("user from signUp:", user);
  console.log("userA from signIN:", userA);
  console.log(loggedIn.isLoggedIn);

  const Logout = () => {
    setUser({ name: "", email: "", password: "" });
    setUserA({ password: "", email: "", rememberMe: false });
    setloggedIn({
      isLoggedIn: false,
    });
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <div className="App">
            <Link to="/signUp">Sign UP</Link>
          </div>
        </Route>
        <Route path="/signUp">
          {" "}
          <div className="App">
            {loggedIn.isLoggedIn ? (
              <div className="welcome">
                <Welcome user={user} Logout={Logout}></Welcome>
              </div>
            ) : (
              <div>
                <SignUp GetUser={GetUser} />
              </div>
            )}
          </div>
        </Route>
        <Route path="/signIn">
          <SignIn LoginIn={LoginIn} error={error}></SignIn>
        </Route>
        <Route path="*">
          <NoPathFound></NoPathFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
