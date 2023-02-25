import React from "react";
import { Link } from "react-router-dom";
import "../components/components.css";

const userData = JSON.parse(localStorage.getItem("userData"));
class ListSupplier extends React.Component {
  state = {
    list: [],
  };

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch("http://159.223.57.121:8090/supplier/find-all?limit=20&offset=1", {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          list: response.data,
        });
      });
  }

  handleDelete(id) {
    fetch(`http://159.223.57.121:8090/supplier/delete/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        this.callAPI();
      });
  }

  handleEdit(id) {
    fetch(`http://159.223.57.121:8090/supplier/find-by-id/${id}`, {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        window.location.assign("/updatesupplier");
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
          <td>{item.namaSupplier}</td>
          <td>{item.alamat}</td>
          <td>{item.noTelp}</td>
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
        <h1>Supplier</h1>
        <Link to="/tambahsupplier" className="btn btn-primary">
          Tambah Supplier
        </Link>
        <table className="table table-striped">
          <tbody>
            <tr>
              <th>No</th>
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
export default ListSupplier;
