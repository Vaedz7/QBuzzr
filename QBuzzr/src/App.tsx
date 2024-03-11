import './App.css'
import Home from './Home'
import Tossups from "./Tossups"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tossups" element={<Tossups />} />
        </Routes>
      </Router>
    </>
  )
}
