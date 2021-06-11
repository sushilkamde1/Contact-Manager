import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
// id coming in params
function EditUser() {
  // for redirecting the page
  let History = useHistory();
  const { id } = useParams();
  //   alert(id);

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

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3002/users/${id}`, user);
    // for redirecting the page on home page add history.
    History.push("/");
  };
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3002/users/${id}`);
    // to add data to the input field
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A User</h2>
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
            <button className="btn btn-warning">Update User</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditUser;
