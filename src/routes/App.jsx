import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
    </>
  );
}

export default App;
