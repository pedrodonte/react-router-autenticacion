import * as React from "react";

import { useAuth } from "../hooks/useAuth";
import { LogIn } from "react-feather";

export const LoginPage = () => {
  const { login } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    login({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <LogIn /> Login Form
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="form-floating">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="email"
                name="email"
                autoComplete="email"
                autoFocus
              />

              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
