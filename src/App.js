import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/login";
import SignUp from "./pages/signUp/signUp";

import './stylesheets/index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/newuser" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
