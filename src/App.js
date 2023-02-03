import { useState } from "react";
import Alert from "./components/Alert";
import Login from "./components/Login";

const App = () => {
  const [alerta, setAlerta] = useState({msg: '', color: ''})
  return (
    <div className="container">
      <Login setAlerta={setAlerta} />
      <Alert alerta={alerta}/>
    </div>
  );
};

export default App;
