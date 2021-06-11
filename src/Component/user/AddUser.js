import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function AddUser() {
  // for redirecting the page
  let History = useHistory();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3002/users", user);
    // for redirecting the page on home page add history.
    History.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your UserName"
              name="username"
              value={username}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Email"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Website-Name"
              name="website"
              value={website}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-primary">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;
