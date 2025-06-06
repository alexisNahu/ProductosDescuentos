import React from 'react';

const Login = () => {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light px-3">
      <div className="card shadow-sm" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <div className="text-center mb-4">
            <img
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
              alt="Logo"
              className="img-fluid"
              style={{ height: '40px' }}
            />
            <h2 className="mt-3 h4">Iniciar sesión</h2>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Correo electrónico
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label">
                Contraseña
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
