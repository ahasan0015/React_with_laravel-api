import { Link, useParams } from "react-router-dom";
import api from "../../../Config"; // axios instance
import React, { useEffect, useState } from "react";
import type { User } from "../../../interfaces/user.interface";
import userDefault from "../../../interfaces/user.interface";
import roleDefault from "../../../interfaces/role.interface";
// import type { Role } from "../../../interfaces/role.interface";

function DetailsUser() {
  const { id } = useParams(); // Get user ID from URL
  const [user, setUser] = useState<User>(userDefault);
  // const [role, setRole] = useState<Role>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    document.title = "User Details";
    if (id) {
      getUserDetails(id);
    }
  }, [id]);

  // ✅ Fetch single user details from API
  const getUserDetails = async (userId: string) => {
    try {
      const response = await api.get(`index.php?endpoint=read-user&id=${userId}`);
      if (response.data.success) {
        setUser(response.data.data); // API returns { success, data }
      } else {
        setError(response.data.message || "Failed to fetch user details.");
      }
    } catch (err) {
      console.error("Error fetching user:", err);
      setError("Failed to load user details.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status"></div>
          <p className="mt-3">Loading user details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="alert alert-danger text-center">{error}</div>
        <div className="text-center">
          <Link to="/users" className="btn btn-secondary">
            Back to Users
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold mb-0">
          <span className="text-muted fw-light">Users / </span> Details
        </h4>
        <Link to="/users" className="btn btn-secondary">
          Back
        </Link>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-4">User Information</h5>

          <div className="row mb-3">
            <div className="col-md-6">
              <p><strong>ID:</strong> {user.id}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Name:</strong> {user.name}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Email:</strong> {user.email}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Phone:</strong> {user.phone || "N/A"}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Role:</strong> {roleDefault.role_name || "N/A"}</p>
            </div>
          </div>

          <div className="mt-4 d-flex gap-2">
            <Link to={`/users/edit/${user.id}`} className="btn btn-primary">
              Edit User
            </Link>
            <Link to="/users" className="btn btn-outline-secondary">
              Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsUser;
