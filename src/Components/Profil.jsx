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
        <h2>Baran</h2>
        <p>Merhaba, ben Baran Yemek Tariflerine Hoş geldiniz.</p>
      </div>
      <button onClick={toLogin}>
        Kayıt olmak için son bir adım
      </button>
    </div>
  );
};

export default Profil;
