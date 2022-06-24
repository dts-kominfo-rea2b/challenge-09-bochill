// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from "react";

const Contact = ({ data }) => {
  const { name, phone, email, photo } = data;
  return (
    <div className="profil-konten">
      <div className="konten">
        <div className="foto-grid">
          <img src={photo} className="foto" />
        </div>
        <div className="kontak-grid">
          <div className="nama">{name}</div>
          <div className="telefon">{phone}</div>
          <div className="email">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
