import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { BarraNavegacion } from "./BarraNavegacion";

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/dashboard/profile" replace />;
  }

  return (
    <main>
      <BarraNavegacion
        pages={[
          { label: "Home", path: "/" },
          { label: "Login", path: "/login" },
        ]}
      />
      {outlet}
    </main>
  );
};
