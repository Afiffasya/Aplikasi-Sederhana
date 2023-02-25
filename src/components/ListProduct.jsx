import React from "react";
import { Link } from "react-router-dom";
import "../components/components.css";

const userData = JSON.parse(localStorage.getItem("userData"));
class ListBarang extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("http://159.223.57.121:8090/barang/find-all?limit=20&offset=1", {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data.data,
        });
      });
  }

  handleDelete(id) {
    fetch(`http://159.223.57.121:8090/barang/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.callAPI();
      });
  }

  handleEdit(id) {
    fetch(`http://159.223.57.121:8090/barang/find-by-id/${id}`, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
    .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.assign("/updatebarang");
        console.log(`Editing item with ID ${id}`);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let tb_data = this.state.list.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td>{item.namaBarang}</td>
          <td>{item.stok}</td>
          <td>{item.harga}</td>
          <td>{item.supplier.namaSupplier}</td>
          <td>{item.supplier.alamat}</td>
          <td>{item.supplier.noTelp}</td>
          <td>
            <button
              className="btn btn-danger"
              onClick={() => this.handleDelete(item.id)}
            >
              Delete
            </button>
            <button
              className="btn btn-warning"
              onClick={() => this.handleEdit(item.id)}
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });
    return (
      <div className="container">
        <h1>Product</h1>
        <Link to="/tambahbarang" className="btn btn-primary">
          Tambah Barang
        </Link>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>No</th>
              <th>Nama Barang</th>
              <th>Stok</th>
              <th>Harga</th>
              <th>Nama Supplier</th>
              <th>Alamat Supplier</th>
              <th>No. Telp Supplier</th>
              <th>Action</th>
            </tr>
            {tb_data}
          </tbody>
        </table>
      </div>
    );
  }
}
export default ListBarang;
