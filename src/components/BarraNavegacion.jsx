import * as React from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export const BarraNavegacion = ({ pages }) => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Ejemplo Auth React Route 6
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {pages?.map((page) => (
              <li key={page.label} className="nav-item">
                <NavLink className="nav-link" to={page.path}>
                  {page.label}
                </NavLink>
              </li>
            ))}

            {!!user && (
              <li className="nav-item">
                <a
                  className="nav-link "
                  key={"logout"}
                  onClick={logout}
                  href="#"
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
        <div class="d-flex">
          {!!user && <span class="text-success">{user.email}</span>}
        </div>
      </div>
    </nav>
  );
};
