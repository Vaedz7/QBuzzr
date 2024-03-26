import "./App.css";
import Home from "./Home";
import Tossups from "./pages/Tossups";
import Multiplayer from "./pages/Multiplayer";
import Guides from "./pages/Guides";
import Database from "./pages/Database";
import Bonuses from "./pages/Bonuses";
import Account from "./pages/Account";
import PacketTools from "./pages/PacketTools";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";

import React, { useEffect } from "react";

import { setCookie } from "./other/cookie-tools";

export default function App() {
   useEffect(() => {
      setCookie("score", "0");
   });

   return (
      <>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
               <Router>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/tossups" element={<Tossups />} />
                     <Route path="/multiplayer" element={<Multiplayer />} />
                     <Route path="/guides" element={<Guides />} />
                     <Route path="/database" element={<Database />} />
                     <Route path="/bonuses" element={<Bonuses />} />
                     <Route path="/account" element={<Account />} />
                     <Route path="/packet-tools" element={<PacketTools />} />
                  </Routes>
               </Router>
            </ThemeProvider>
      </>
   );
}
