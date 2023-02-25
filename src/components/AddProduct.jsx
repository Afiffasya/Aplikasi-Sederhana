import React, { useState } from "react";
import axios from "axios";
import "../components/components.css";

const TambahBarang = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [namaSupplier, setNamaSupplier] = useState("");
  const [alamatSupplier, setAlamatSupplier] = useState("");
  const [noTelpSupplier, setNoTelpSupplier] = useState("");
  const userData = JSON.parse(localStorage.getItem("userData"));

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://159.223.57.121:8090/barang/create",
        {
          namaBarang,
          harga,
          stok,
          supplier: {
            namaSupplier,
            alamat: alamatSupplier,
            noTelp: noTelpSupplier,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${userData.token}`,
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
    <div class="container con">
      <h1 class="heading">Tambah Barang</h1>
      <form class="form fom" onSubmit={handleSubmit}>
        <div class="form-group fomg">
          <label class="label lab" htmlFor="namaBarang">
            Nama Barang:
          </label>
          <input
            class="input"
            type="text"
            id="namaBarang"
            className="inp"
            value={namaBarang}
            onChange={(e) => setNamaBarang(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label class="label" htmlFor="harga">
            Harga:
          </label>
          <input
            class="input"
            type="text"
            id="harga"
            className="inp"
            value={harga}
            onChange={(e) => setHarga(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label class="label" htmlFor="stok">
            Stok:
          </label>
          <input
            class="input"
            type="text"
            id="stok"
            className="inp"
            value={stok}
            onChange={(e) => setStok(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label class="label" htmlFor="namaSupplier">
            Nama Supplier:
          </label>
          <input
            class="input"
            id="namaSupplier"
            className="inp"
            value={namaSupplier}
            onChange={(e) => setNamaSupplier(e.target.value)}
            maxLength="255"
            required
          />
        </div>
        <div class="form-group">
          <label class="label" htmlFor="alamat">
            Alamat Supplier:
          </label>
          <input
            class="input"
            type="text"
            id="alamatSupplier"
            className="inp"
            value={alamatSupplier}
            onChange={(e) => setAlamatSupplier(e.target.value)}
          />
        </div>
        <div class="form-group">
          <label class="label" htmlFor="noTelp">
            No. Telp Supplier:
          </label>
          <input
            class="input"
            type="text"
            id="noTelpSupplier"
            className="inp"
            value={noTelpSupplier}
            onChange={(e) => setNoTelpSupplier(e.target.value)}
          />
        </div>
        <button class="button" type="submit">
          Tambah Barang
        </button>
      </form>
    </div>
  );
};

export default TambahBarang;
