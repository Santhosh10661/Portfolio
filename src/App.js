import { useEffect } from "react";
import "./App.css";
import Home from "./Home";
import { useNavigate } from "react-router-dom";

function App() {
  let navigate = useNavigate();
  useEffect(() => {
    navigate("/", { replace: true });
  }, []);

  return (
    <div className="container-fluid App p-0">
      <Home />
    </div>
  );
}

export default App;
