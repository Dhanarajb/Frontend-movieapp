import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const addSign = () => {
    console.log(email, password);
    navigate('/dashborad')
  };
  const addSignn = () => {
    console.log(email, password);
    navigate('/home')
  };
  
  const signUp = () => {
    navigate("/signup");
  };
  return (
    <div>
      <header className="header">Movie App</header>
      <div className="admin">
        <div className="main-adddd">
          <h4>Normal User</h4>
          <input
            className="inp-add"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email..."
            required
          />
          <input
            className="inp-add"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password..."
            required
          />
          <div className="but">
            <button className="btn-add" onClick={addSignn}>
              Sign In
            </button>

            <button className="btn-add" onClick={signUp}>
              Sign Up
            </button>
          </div>
        </div>
        <div className="main-addd">
          <h4>Admin User</h4>
          <input
            className="inp-add"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email..."
            required
          />
          <input
            className="inp-add"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password..."
            required
          />
          <button className="btn-add" onClick={addSign}>
            Sign In
          </button>
        </div>
      </div>
      <footer className="footer">@Dhanarajbhaskar690@gmail.com</footer>
    </div>
  );
};

export default Login;
