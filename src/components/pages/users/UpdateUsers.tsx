import { Link, useParams, useNavigate } from "react-router-dom";
import api from "../../../Config"; // axios instance
import React, { useEffect, useState } from "react";
import type { Role } from "../../../interfaces/role.interface";
import type { User } from "../../../interfaces/user.interface";
import userDefault from "../../../interfaces/user.interface";

function UpdateUser() {
  const { id } = useParams(); // URL থেকে user id নেব
  const navigate = useNavigate();

  const [roles, setRoles] = useState<Role[]>([]);
  const [user, setUser] = useState<User>(userDefault);

  useEffect(() => {
    document.title = "Update User";
    getRoles();
    getUser(); // API call to get user data
  }, []);

  const getRoles = () => {
    api
      .get("roles")
      .then((response) => setRoles(response.data))
      .catch((error) => console.error(error));
  };

  const getUser = () => {
    api
      .get(`users/${id}`)
      .then((res) => {
        setUser(res.data); // user data set
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", user.name);
    formData.append("email", user.email);
    formData.append("password", user.password || ""); // optional, only if changed
    formData.append("phone", user.phone || "");
    formData.append("role_id", user.role_id ? user.role_id.toString() : "0");

    api
      .post(`update-user/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("User updated:", res.data);
        navigate("/users"); // redirect after update
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/users" className="text-muted fw-light">
          Users /
        </Link>{" "}
        Update
      </h4>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter new password if you want to change"
                onChange={(e) =>
                  setUser({ ...user, password: e.target.value })
                }
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                value={user.phone || ""}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                value={user.role_id || 0}
                onChange={(e) =>
                  setUser({ ...user, role_id: parseInt(e.target.value) })
                }
                required
              >
                <option value={0} disabled>
                  Select one...
                </option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.role_name}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Update User
              </button>
              <Link to="/users" className="btn btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UpdateUser;
