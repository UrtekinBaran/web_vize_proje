// Profil.js
import React from 'react';
import './Profil.css';

const Profil = ({toLogin}) => {
  return (
    <div className="profil-container">
      <div className="avatar-container">
      <img src="/img/resim1.jpg" alt="Kullanıcı Avatarı" />

      </div>
      <div className="bilgi-container">
        <h2>Kullanıcı Adı</h2>
        <p>Merhaba, benim adım Kullanıcı Adı. Kendimden biraz bahsedeyim...</p>
      </div>
      <button onClick={toLogin}>
        Login
      </button>
    </div>
  );
};

export default Profil;
