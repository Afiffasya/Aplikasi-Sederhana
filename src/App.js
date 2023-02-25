// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import UpdateBarang from "./components/UpdateProduct";
import TambahBarang from "./components/AddProduct";
import UpdateSupplier from "./components/UpdateSupplier";
import TambahSupplier from "./components/AddSupplier";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updatebarang" element={<UpdateBarang />} />
        <Route path="/tambahbarang" element={<TambahBarang />} />
        <Route path="/updatesupplier" element={<UpdateSupplier />} />
        <Route path="/tambahsupplier" element={<TambahSupplier />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
