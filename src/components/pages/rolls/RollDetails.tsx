import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../../Config";
import type { Role } from "../../../interfaces/role.interface";

function RoleDetails() {
  const { id } = useParams<{ id: string }>();

  const [role, setRole] = useState<Role | null>(null);

  useEffect(() => {
    document.title = "Role Details";
    if (id) {
      fetchRoleDetails(id);
    }
  }, [id]);

  const fetchRoleDetails = (roleId: string) => {
    api
      .get(`roles?id=${roleId}`)
      .then((res) => {
        setRole(res.data); // res.data must be {id, role_name}
      })
      .catch((err) => console.error("Error fetching role:", err));
  };

  if (!role) {
    return (
      <div className="container-xxl flex-grow-1 container-p-y">
        <p>Loading role details...</p>
      </div>
    );
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/roles" className="text-muted fw-light">
          Roles /{" "}
        </Link>
        Details
      </h4>

      <div className="card mt-3">
        <h5 className="card-header">Role Information</h5>
        <div className="card-body">
          <table className="table table-bordered">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{role.id}</td>
              </tr>
              <tr>
                <th>Role Name</th>
                <td>{role.role_name}</td>
              </tr>
            </tbody>
          </table>

          <div className="mt-3">
            <Link to={`/roles/edit/${role.id}`} className="btn btn-primary me-2">
              Edit Role
            </Link>
            <Link to="/roles" className="btn btn-secondary">
              Back to Roles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoleDetails;
