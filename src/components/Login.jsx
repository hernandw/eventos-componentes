import { useState } from "react";

const Login = ({ setAlerta }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim() === "adl@desafiolatam.com" &&
      password.trim() === "252525"
    ) {
      setAlerta({ msg: "Sesión Iniciada correctamente", color: "success" });
    } else {
      setAlerta({ msg: "Datos Incorrectos", color: "danger" });
    }
  };

  return (
    <div>
      <h1>Desafio - Eventos y Componentes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="******"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-dark"
          disabled={!email.trim() || !password.trim()}
        >
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;
