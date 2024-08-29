import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from "./pages/Login"
import Register from "./pages/Register"
import Project from "./pages/Project"
import Panel from "./pages/Panel"
import Epic from "./pages/Epic"
import Layout from "./components/Layout"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Layout />}>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/project/:id/panel" element={<Panel />} />
          <Route path="/project/:id/epic" element={<Epic />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
