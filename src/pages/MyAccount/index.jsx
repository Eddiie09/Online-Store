import React, { useState, useContext } from "react";
import Layout from "../../Components/Layout";
import { UserContext } from '../../Components/UserContext';

const MyAccount = () => {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert("Información actualizada correctamente.");
  };

  return (
    <Layout>
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6">Mi Cuenta</h1>
        <form
          className="bg-white p-6 rounded shadow-md max-w-md mx-auto"
          onSubmit={handleSubmit}
        >
          <label className="block mb-4">
            Nombre:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded"
            />
          </label>
          <label className="block mb-4">
            Correo Electrónico:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-2 border rounded"
            />
          </label>
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default MyAccount;
