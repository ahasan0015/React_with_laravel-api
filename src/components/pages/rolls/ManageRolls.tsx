import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../Config";
import type { Role } from "../../../interfaces/role.interface";

function ManageRoles() {
  const [roles, setRoles] = useState<Role[]>([]);

  useEffect(() => {
    document.title = "Manage Roles";
    getRoles();
  }, []);

  const getRoles = () => {
    api
      .get("roles")
      .then((res) => {
        console.log(res.data);
        setRoles(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // 🔹 Delete Function
  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this role?")) return;

    api
      .delete(`delete-role?id=${id}`)
      .then((res) => {
        console.log(res.data);
        getRoles(); // Refresh list
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <span className="text-muted fw-light">Roles / </span> Manage
      </h4>

      <Link to="/create/roles" className="btn btn-primary mb-3">
        Add New Role
      </Link>

      <div className="card">
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Role Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role) => (
                <tr key={role.id}>
                  <td>{role.id}</td>
                  <td>{role.role_name}</td>
                  <td>
                    <div className="d-flex gap-1">
                      <Link
                        to={`/roles/${role.id}`}
                        className="btn btn-outline-info btn-sm"
                      >
                        View
                      </Link>
                      <Link
                        to={`/edit/roles/${role.id}`}
                        className="btn btn-outline-primary btn-sm"
                      >
                        Edit
                      </Link>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => handleDelete(role.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {roles.length === 0 && (
                <tr>
                  <td colSpan={3} className="text-center py-3">
                    No roles found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageRoles;
