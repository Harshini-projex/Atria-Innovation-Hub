import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submit = (e) => {
    e.preventDefault();

    if (!email.includes("@")) {
      alert("Username must be a valid email");
      return;
    }
    if (pass.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }
    onLogin();
  };

  return (
    <div className="login-container">
      <form className="login-box" onSubmit={submit}>
        <h2>Atria Innovation Hub</h2>
        <input placeholder="Email ID" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e) => setPass(e.target.value)} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Login;
