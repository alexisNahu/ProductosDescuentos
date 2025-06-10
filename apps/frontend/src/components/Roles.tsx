import React, { useState } from "react";
import "./Roles.css";

interface Rol {
  id_rol: number;
  nombre: string;
  permiso: string;
}

const initialRoles: Rol[] = [
  { id_rol: 1, nombre: "Administrador", permiso: "Total" },
  { id_rol: 2, nombre: "Usuario", permiso: "Lectura" },
];

const Roles: React.FC = () => {
  const [roles, setRoles] = useState<Rol[]>(initialRoles);
  const [nombre, setNombre] = useState<string>("");
  const [permiso, setPermiso] = useState<string>("");
  const [editId, setEditId] = useState<number | null>(null);

  // Editar un rol
  const handleEdit = (rol: Rol) => {
    setEditId(rol.id_rol);
    setNombre(rol.nombre);
    setPermiso(rol.permiso);
  };

  // Cancelar edición
  const handleCancelEdit = () => {
    setEditId(null);
    setNombre("");
    setPermiso("");
  };

  // Agregar o modificar rol
  const handleAddOrEditRole = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editId !== null) {
      // Modificar rol existente
      setRoles((prevRoles) =>
        prevRoles.map((rol) =>
          rol.id_rol === editId ? { ...rol, nombre, permiso } : rol
        )
      );
      setEditId(null);
    } else {
      // Agregar nuevo rol
      const nuevoRol: Rol = {
        id_rol: roles.length ? roles[roles.length - 1].id_rol + 1 : 1,
        nombre,
        permiso,
      };
      setRoles([...roles, nuevoRol]);
    }
    setNombre("");
    setPermiso("");
  };

  // Eliminar rol
  const handleDelete = (id: number) => {
    setRoles((prevRoles) => prevRoles.filter((rol) => rol.id_rol !== id));
    // Si estamos editando ese mismo rol, cancelar edición
    if (editId === id) handleCancelEdit();
  };

  return (
    <div className="roles-bg">
      <div className="roles-container">
        <h2 className="roles-title">Gestión de Roles</h2>
        <form onSubmit={handleAddOrEditRole} className="roles-form">
          <div>
            <label className="roles-label">Nombre del rol</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="roles-input"
              placeholder="Ejemplo: Administrador"
            />
          </div>
          <div>
            <label className="roles-label">Permiso</label>
            <input
              type="text"
              value={permiso}
              onChange={(e) => setPermiso(e.target.value)}
              required
              className="roles-input"
              placeholder="Ejemplo: Total, Lectura..."
            />
          </div>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button type="submit" className="roles-btn">
              {editId !== null ? "Guardar cambios" : "Agregar rol"}
            </button>
            {editId !== null && (
              <button
                type="button"
                className="roles-delete-btn"
                onClick={handleCancelEdit}
              >
                Cancelar
              </button>
            )}
          </div>
        </form>
        <table className="roles-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Permiso</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {roles.map((rol) => (
              <tr key={rol.id_rol}>
                <td>{rol.id_rol}</td>
                <td>{rol.nombre}</td>
                <td>{rol.permiso}</td>
                <td>
                  <button
                    className="roles-edit-btn"
                    onClick={() => handleEdit(rol)}
                    style={{ marginRight: 6 }}
                  >
                    Editar
                  </button>
                  <button
                    className="roles-delete-btn"
                    onClick={() => handleDelete(rol.id_rol)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
            {roles.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center", color: "#ccc" }}>
                  No hay roles registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Roles;
