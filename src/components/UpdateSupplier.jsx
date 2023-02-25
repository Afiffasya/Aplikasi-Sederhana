import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const userData = JSON.parse(localStorage.getItem("userData"));
function UpdateSupplier() {
  // eslint-disable-next-line
  const { id } = useParams();
  const [namaSupplier, setNamaSupplier] = useState("");
  const [alamatSupplier, setAlamatSupplier] = useState("");
  const [noSupplier, setNoSupplier] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      namaSupplier: namaSupplier,
      alamat: alamatSupplier,
      noTelp: noSupplier,
    };
    axios
      .put(`http://159.223.57.121:8090/supplier/update/${id}`, data, {
        headers: {
          Authorization: `Bearer ${userData.token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="update-supplier">
      <h2>Update Supplier</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="namaSupplier">Nama Supplier:</label>
          <input
            type="text"
            id="namaSupplier"
            value={namaSupplier}
            onChange={setNamaSupplier}
          />
        </div>
        <div>
          <label htmlFor="alamatSupplier">Alamat Supplier:</label>
          <input
            type="text"
            id="alamatSupplier"
            value={alamatSupplier}
            onChange={setAlamatSupplier}
          />
        </div>
        <div>
          <label htmlFor="noSupplier">Nomor Telepon Supplier:</label>
          <input
            type="text"
            id="noSupplier"
            value={noSupplier}
            onChange={setNoSupplier}
          />
        </div>
        <Link to="/dashboard">Kembali</Link>
        <button type="submit">Update Supplier</button>
      </form>
    </div>
  );
}

export default UpdateSupplier;
