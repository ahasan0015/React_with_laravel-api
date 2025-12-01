import { Link } from "react-router-dom";
import api from "../../../Config"; // axios instance
import React, { useEffect, useState } from "react";
import type { Role } from "../../../interfaces/role.interface";
import type { User } from "../../../interfaces/user.interface";
import userDefault from "../../../interfaces/user.interface";

function CreateUser() {
  const [roles, setRoles] = useState<Role[]>([]);
  const [user, setUser] = useState<User>(userDefault);

  useEffect(() => {
    document.title = "Create User";
    getRoles();
  }, []);

  const getRoles = () => {
    api
      .get("roles")
      .then((response) => {
        setRoles(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // FormData তৈরি করা
    const formData = new FormData();
    formData.append("name", user.name || "");
    formData.append("email", user.email || "");
    formData.append("password", user.password || "");
    formData.append("phone", user.phone || "");
    formData.append("role_id", user.role_id ? user.role_id.toString() : "0");

    // API POST request
    api
      .post("create-users", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("User Created:", res.data);
        alert("User created successfully!");
        setUser(userDefault); // Form reset
      })
      .catch((err) => {
        console.error("Error creating user:", err);
      });
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Users / </span> Create
      </h4>

      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter full name"
                value={user.name || ""}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                required
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={user.email || ""}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                required
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                value={user.password || ""}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </div>

            {/* Phone */}
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter your phone number"
                value={user.phone || ""}
                onChange={(e) => setUser({ ...user, phone: e.target.value })}
              />
            </div>

            {/* Role */}
            <div className="row mb-3">
              <div className="col-12 col-md-6">
                <label htmlFor="role" className="form-label fw-semibold">
                  Role
                </label>
                <select
                  id="role"
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
                      {role.role_name || role.role_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Submit */}
            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Create User
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

export default CreateUser;
