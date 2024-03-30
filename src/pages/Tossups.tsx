"use client";
import "../App.css";
// import * as React from "react"
import Navbar from "../Navbar";
import TossupCard from "../TossupCard";

import {
   Drawer,
   DrawerClose,
   DrawerContent,
   DrawerDescription,
   DrawerFooter,
   DrawerHeader,
   DrawerTitle,
   DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";

import EnterActions from "../EnterActions";

import {getCookie, setCookie} from "../other/cookie-tools"

import {useState, useEffect} from "react"

import SettingsPanel from "../SettingsPanel";
import StatsPanel from "../StatsPanel";

export default function Tossups() {

  const [speed, setSpeed] = useState(getCookie("speed"))
  const [score, setScore] = useState(getCookie("score"))

  useEffect(() => {
    setCookie("score", score)
  }, [score])

  useEffect(() => {
    setCookie("speed", speed)
  }, [speed])

   return (
      <>
         <Navbar />
         <div className="mt-4 flex flex-row">
            <div className="flex flex-col p-2r gap-2">
               <StatsPanel score={score} setScore={setScore}/>
               <SettingsPanel speed={speed} setSpeed={setSpeed}/>
            </div>
            <div className="px-2 w-full">
               <div className="flex flex-col items-center">
                  <TossupCard
                     text="It's not Brazil, but this region's Luquillo Mountains are home to a namesake Amazon parrot. A mix of islands and cays including Culebra and Vieques are located off the eastern coast of this island. An endemic species of frog known as coqui are located in this island's El Yunque National Forest. This island's central region is home to (*) Arecibo Observatory, one of the world's largest radio telescopes. (#) The successive 2017 natural disasters of Hurricane Irma and Maria damaged much of the infrastructure on this island. For ten points name this island territory of the United States, with capital San Juan."
                     answer="ANSWER: Commonwealth of Puerto Rico [accept Boriken]"
                     category="Geography"
                     speed={speed}
                     score={score}
                     setScore={setScore}
                  />
               </div>
            </div>
         </div>
      </>
   );
}
