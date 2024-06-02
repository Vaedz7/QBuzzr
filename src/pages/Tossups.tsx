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
  const [text, setText] = useState("")
  const [answer, setAnswer] = useState("")
  const [category, setCategory] = useState("")
  const [set, setSet] = useState("")
  const [packet, setPacket] = useState("")
  const [questionNumber, setQuestionNumber] = useState("")

  useEffect(() => {
    setCookie("score", score)
  }, [score])

  useEffect(() => {
    setCookie("speed", speed)
  }, [speed])

  useEffect(() => {
    fetch('https://api.qbuzzr.buzz/random_tossup', {
       headers: new Headers({
        'x-api-key': process.env.REACT_APP_KEY, 
    })})
      .then(response => response.json())
      .then(data => {
        setText(data.tossups[0].question);
        setAnswer(data.tossups[0].formatted_answer);
        setCategory(data.tossups[0].category);
        setPacket(data.tossups[0].packet.name);
        setQuestionNumber(data.tossups[0].number);
        setSet(data.tossups[0].set.name)
      })
      .catch(error => console.error('Error:', error));
  }, []);
  

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
                     text={text}
                     answer={<span dangerouslySetInnerHTML={{ __html: "ANSWER: " + answer }}/>}
                     category={category}
                     set={set}
                     packet={packet}
                     questionNumber={questionNumber}
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
