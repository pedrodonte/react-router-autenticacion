import { useEffect, useState } from "react";

export const SettingsPage = () => {
  const [usuarios, setUsuarios] = useState([]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    setLoading(true);
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setUsuarios(users);
    setLoading(false);
  };

  return (
    <div className="container">
      {loading && (
        <button class="btn btn-primary" type="button" disabled>
          <span
            class="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Loading...
        </button>
      )}
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Username</th>
            <th scope="col">email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
