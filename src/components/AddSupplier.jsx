import React, { useState } from "react";
import axios from "axios";
import "../components/components.css";

const TambahSupplier = () => {
  const [namaSupplier, setNamaSupplier] = useState("");
  const [alamat, setAlamat] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const userData = JSON.parse(localStorage.getItem('userData'));

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://159.223.57.121:8090/supplier/create",
        {
          alamat,
          // id,
          namaSupplier,
          noTelp
        },
        {
          headers: {
            Authorization:
            `Bearer ${userData.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container con">
      <h1 className="heading">Tambah Supplier</h1>
      <form className="form fom" onSubmit={handleSubmit}>
        <div className="form-group fomg">
          <label className="label lab" htmlFor="namaBarang">Nama Supplier</label>
          <input
            type="text"
            id="namaSupplier"
            className="inp"
            value={namaSupplier}
            onChange={(e) => setNamaSupplier(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="alamat">Alamat Supplier:</label>
          <input
            type="text"
            id="alamatSupplier"
            className="inp"
            value={alamat}
            onChange={(e) => setAlamat(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="noTelp">No. Telp Supplier:</label>
          <input
            type="text"
            id="noTelpSupplier"
            className="inp"
            value={noTelp}
            onChange={(e) => setNoTelp(e.target.value)}
          />
        </div>
        <button className="button" type="submit">Tambah Supplier</button>
      </form>
    </div>
  );
};

export default TambahSupplier;
