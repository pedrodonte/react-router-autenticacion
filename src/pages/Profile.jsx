import { UserCheck } from "react-feather";
import { useAuth } from "../hooks/useAuth";
export const ProfilePage = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <UserCheck /> Usuario Logeado
        </div>
        <div className="card-body">
          <h5 className="card-title">{user.email}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};
