import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import api from "../../../Config";
import type { Role } from "../../../interfaces/role.interface";

function EditRole() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [role, setRole] = useState<Role>({
    id: 0,
    role_name: "",
  });

  useEffect(() => {
    document.title = "Edit Role";
    if (id) {
      getRoleData(id);
    }
  }, [id]);

  const getRoleData = (roleId: string) => {
    api
      .get(`roles?id=${roleId}`)
      .then((res) => {
        setRole(res.data); // res.data must be single object {id, role_name}
      })
      .catch((err) => console.error(err));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const data = {
      id: role.id,
      role_name: role.role_name,
    };

    api
      .put("edit-role", data, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        alert(res.data.message || "Role updated successfully!");
        navigate("/roles");
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to update role");
      });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/roles" className="text-muted fw-light">
          Roles /
        </Link>{" "}
        Edit
      </h4>

      <div className="card mt-3">
        <h5 className="card-header">Edit Role </h5>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="roleName" className="form-label">
                Role Name
              </label>
              <input
                type="text"
                className="form-control"
                id="roleName"
                placeholder="Enter role name"
                value={role.role_name || ""}
                onChange={(e) =>
                  setRole({ ...role, role_name: e.target.value })
                }
                required
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <Link to="/roles" className="btn btn-secondary">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditRole;
