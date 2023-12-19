// LoginForm.js

import React from "react";
import "./LoginForm.css";

const LoginForm = ({ onLogin }) => {
  const handleLogin = () => {
    // Burada herhangi bir kullanıcı adı ve şifre kontrolü yapmamıza gerek yok
    // Login butonuna basıldığında API'nin menüsüne yönlendir
    onLogin();
  };

  return (
    <div className="login-container">
      <h1>Hoşgeldiniz! Lütfen Giriş Yapın</h1> {/* Eklenen satır */}

      <div className="input-box">
        <input type="text" placeholder="Username" />
      </div>

      <div className="input-box">
        <input type="password" placeholder="Password" />
      </div>

      <button className="login-btn" onClick={handleLogin}>
        Login
      </button>

      <p className="text">Or login using</p>

      {/* Popup gibi bir hata mesajı eklemek isteriseniz buraya ekleyebilirsiniz */}
    </div>
  );
};

export default LoginForm;
