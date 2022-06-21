import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { BarraNavegacion } from "./BarraNavegacion";

export const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <main>
      <BarraNavegacion
        pages={[
          { label: "Usuarios", path: "settings" },
          { label: "Perfil", path: "profile" },
        ]}
      />
      {outlet}
    </main>
  );
};
