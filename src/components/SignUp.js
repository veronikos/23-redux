import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp({ GetUser }) {
  const [details, setDetails] = useState({ name: "", email: "", password: ""});

  const submitHandler = (e) => {
    e.preventDefault();
    GetUser(details, 'thi is from signUp');
  };

  return (
<div className="App">
<form onSubmit={submitHandler}>
      <div className="form-inner">
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            value={details.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            value={details.email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setDetails({ ...details, password: e.target.value })}
            value={details.password}
          />
        </div>
        <input type="submit" value="Sign Up" />
        <Link to="/signIn">Sign IN</Link>
      </div>
    </form>
</div>
  );
}

export default SignUp;
