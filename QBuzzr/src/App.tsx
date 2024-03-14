import "./App.css";
import Home from "./Home";
import Tossups from "./Tossups";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

export default function App() {
   return (
      <>
         <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Router>
               <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/tossups" element={<Tossups />} />
               </Routes>
            </Router>
         </ThemeProvider>
      </>
   );
}
