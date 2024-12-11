import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";

const routes = (
  <Router>
    <Routes>
      <Route path="/login" exact element={<Login />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/dashboard" exact element={<Home />} />
    </Routes>
  </Router>
);

export default function App() {
  return <div>{routes}</div>;
}