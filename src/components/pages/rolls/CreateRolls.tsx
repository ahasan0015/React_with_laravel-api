import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../../../Config";
import type { Role } from "../../../interfaces/role.interface";

function CreateRole() {
  const navigate = useNavigate();

  // 🔹 Role স্টেট
  const [role, setRole] = useState<Role>({
    id: 0,
    role_name: "",
  });

  useEffect(() => {
    document.title = "Create Role";
  }, []);

  // 🔹 ফর্ম সাবমিট ফাংশন
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("role_name", role.role_name);

    api
      .post("create-roles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log(res.data);
        alert("Rolls created Successfully!");
        navigate("/roles");
      })
      .catch((err) => {
        console.error(err);
        alert("Rolls create faild");
      });
  };

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <h4 className="fw-bold py-3 mb-4">
        <Link to="/roles" className="text-muted fw-light">
          Roles /
        </Link>{" "}
        Create
      </h4>

      <div className="card mt-3">
        <h5 className="card-header">Create New Role </h5>
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
                placeholder="Enter Roll name"
                value={role.role_name}
                onChange={(e) =>
                  setRole({ ...role, role_name: e.target.value })
                }
                required
              />
            </div>

            <div className="d-flex gap-2">
              <button type="submit" className="btn btn-primary">
                Save
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

export default CreateRole;
