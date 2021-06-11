import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3002/users");
    setUser(result.data.reverse());
    // get user data display first add reverse
  };

  // delete user
  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:3002/users/${id}`);
    loadUsers();
  };
  return (
    <div className="container py-4">
      <h3 className="text-center">Contact Manager</h3>
      <div className="py-4">
        {users.length > 0 ? (
          <table class="table border shadow table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr>
                  <th className="">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      className="btn btn-outline-warning m-1"
                      to={`/users/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      className="btn btn-outline-primary m-1"
                      to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      className="btn btn-outline-danger m-1"
                      onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </div>
    </div>
  );
};
export default Home;
