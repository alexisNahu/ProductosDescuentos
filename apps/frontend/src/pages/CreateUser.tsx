import React, { useEffect, useState } from "react";
import axios from "axios";

interface Role {
  id: number;
  name: string;
}

const CreateUser = () => {
  const [roles, setRoles] = useState<Role[]>([]);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    name: "",
    role_id: "",
  });

  useEffect(() => {
    axios
      .get("/api/roles") // Asegúrate de tener este endpoint
      .then((res) => setRoles(res.data))
      .catch((err) => console.error("Error al cargar roles:", err));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("/api/users", {
        ...formData,
        role_id: parseInt(formData.role_id),
      })
      .then(() => alert("Usuario creado exitosamente"))
      .catch((err) => console.error("Error al crear usuario:", err));
  };

  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div
        className="card shadow-sm"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <div className="card-body">
          <div className="text-center mb-4">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="img-fluid"
              style={{ height: "40px" }}
            />
            <h2 className="mt-3 h4">Crear Usuario</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Nombre de usuario
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                required
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Nombre completo
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="role_id" className="form-label">
                Rol
              </label>
              <select
                className="form-select"
                id="role_id"
                name="role_id"
                required
                onChange={handleChange}
              >
                <option value="">Seleccione un rol</option>
                {roles.map((role) => (
                  <option key={role.id} value={role.id}>
                    {role.name}
                  </option>
                ))}
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Crear usuario
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
