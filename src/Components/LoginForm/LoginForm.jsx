// LoginForm.js

import React from "react";
import "./LoginForm.css";
import resim from '../../assets/resim.jpg';

const LoginForm = ({ onLogin }) => {
  const handleLogin = () => {
    onLogin();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className='hidden sm:block'>
        <img src={resim} alt="" />
      </div>

      <div>
        <form>
          <h2>SIGN IN</h2>
          <div>
            <label>User Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <div>
              <p><input type="checkbox"/>Remember me</p>
              <p>Forgot Password</p>
          </div>
          <button className="login-btn" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
