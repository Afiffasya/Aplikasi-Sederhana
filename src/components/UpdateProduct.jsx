import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const userData = JSON.parse(localStorage.getItem("userData"));
const UpdateBarang = () => {
  const [listSupplier, setListSupplier] = useState([]);
  const [supplier, setSupplier] = useState("");

  const [barang, setBarang] = useState({
    namaBarang: "",
    harga: "",
    stok: "",
    supplier: {
      id: "",
      namaSupplier: "",
      alamat: "",
      noTelp: "",
    },
  });
  const { id } = useParams();

  useEffect(() => {
    fetch("http://159.223.57.121:8090/users/find-all?limit=20&offset=1", {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((response) => {
        setListSupplier(response.data.data);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleUpdateBarang = () => {
    fetch(`http://159.223.57.121:8090/barang/update/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${userData.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(barang),
    })
      .then((response) => {
        if (response.ok) {
          window.location.assign("/dashboard");
        } else {
          throw new Error("Gagal mengupdate barang");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>Update Barang</h1>
      <Form>
        <Form.Group controlId="namaBarang">
          <Form.Label>Nama Barang</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan nama barang"
            value={barang.namaBarang}
            onChange={(e) =>
              setBarang({ ...barang, namaBarang: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="harga">
          <Form.Label>Harga Barang</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan harga barang"
            value={barang.harga}
            onChange={(e) => setBarang({ ...barang, harga: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="stok">
          <Form.Label>Stok Barang</Form.Label>
          <Form.Control
            type="text"
            placeholder="Masukkan stok barang"
            value={barang.stok}
            onChange={(e) => setBarang({ ...barang, stok: e.target.value })}
          />
        </Form.Group>
        <Form.Group controlId="supplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control as="select" value={supplier} onChange={setListSupplier}>
            <option value="">Pilih supplier</option>
            {listSupplier.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.nama}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" onClick={handleUpdateBarang}>
          Update
        </Button>
      </Form>
    </div>
  );
};

export default UpdateBarang;
