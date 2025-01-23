import { createContext, useState } from 'react';

// Crear el contexto de usuario
export const UserContext = createContext();

// Proveedor del contexto de usuario
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "Usuario Predeterminado",
    email: "usuario@example.com",
  });

  // Función para actualizar los datos del usuario
  const updateUser = (newData) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...newData,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
