import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState('')
  return (
    <div>
      <h1>Desafio - Eventos y Componentes</h1>
      <form>
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
            onChange={e=>setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
