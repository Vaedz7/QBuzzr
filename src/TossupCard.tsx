"use client";
import "./App.css";
// import * as React from "react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

//import QuestionReader from "./TossupReader";

import {
   Clipboard,
   Star,
   PencilRuler,
   Flag,
   Search,
   TextSearch,
   Highlighter,
   CopyPlus,
   PlayIcon,
   PauseIcon,
   Info,
} from "lucide-react";

import {
   HoverCard,
   HoverCardContent,
   HoverCardTrigger,
} from "@/components/ui/hover-card";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";

import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import React, { useState, useEffect, useRef } from "react";

export default function TossupCard(props: {
   text: string;
   answer: string;
   category: string;
}) {
   const text = props.text;
   const answer = props.answer;
   const category = props.category;
   const delay = 200;

   // Question Reader
   const [currentText, setCurrentText] = useState("");
   const [isReading, setIsReading] = useState(false);
   const words = text.split(" ");
   const index = useRef(0);
   const timeoutId = useRef<NodeJS.Timeout | null>(null);
   const [inputShowing, setInputShowing] = useState(false);
   const [actionsShowing, setActionsShowing] = useState(false);

   const readWord = () => {
      setCurrentText(words.slice(0, index.current + 1).join(" "));
      index.current++;
   };

   useEffect(() => {
      if (isReading && index.current < words.length) {
         timeoutId.current = setTimeout(readWord, delay);
      }
      return () => {
         if (timeoutId.current) clearTimeout(timeoutId.current);
      };
   }, [isReading, index.current]);

   const toggleReading = () => {
      if (isReading) {
         if (timeoutId.current) clearTimeout(timeoutId.current);
      } else {
         if (index.current < words.length) readWord();
      }
      setIsReading(!isReading);
   };
   /*
  return (
    <div>
      <button onClick={toggleReading}>
        {isReading ? "Stop Reading" : "Start Reading"}
      </button>
      <div className="prose">{currentText}</div>
    </div>
  );
*/
   function format(string: string) {
      string = string.replace(/\[.*?\]/g, "");
      string = string.replace(/\(.*?\)/g, "");
      string = string.replace(/<.*?>/g, "");
      string = string.replace("ANSWER: ", "");
      return string;
   }

   function copyToClipboard() {
      navigator.clipboard.writeText(format(answer));
      toast("Copied to clipboard");
   }

   //const [shouldRead, setShouldRead] = React.useState(false);

   return (
      <>
         <div className="text-left p-4 rounded-md border-2 w-full">
            <div className="flex justify-between border-b-2 pb-2 mb-4">
               <h1 className="font-bold">{category}</h1>
               <HoverCard>
                  <HoverCardTrigger>
                     <Info className="w-4 h-4" />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    {/* Set Info Goes Here/Need to add an appropriate variable later */}
                    <h1 className="font-bold">2020 RAFT</h1>
                    <h1>Packet 8 | Question 4</h1>
                  </HoverCardContent>
               </HoverCard>
            </div>
            <p className="mb-4">
               <div className="prose">{currentText}</div>
            </p>
            <div className="flex flex-row items-center justify-between">
               <p>{answer}</p>
               <div className="flex gap-2">
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={() => {
                        copyToClipboard();
                     }}
                  >
                     <Clipboard className="h-4 w-4" />
                     <Toaster />
                  </Button>
                  <Button variant="outline" size="icon">
                     <Star className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                     <DropdownMenuTrigger>
                        <Button variant="outline" size="icon">
                           <PencilRuler className="h-4 w-4" />
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent>
                        <DropdownMenuLabel>Tools</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                           <Highlighter className="h-4 w-4 mr-2" />
                           Highlight clues
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           <TextSearch className="h-4 w-4 mr-2" /> Find similar
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                           <CopyPlus className="h-4 w-4 mr-2" /> Save to Anki
                        </DropdownMenuItem>
                        <DropdownMenuSub>
                           <DropdownMenuSubTrigger>
                              <Search className="h-4 w-4 mr-2" />{" "}
                              <span>Search</span>
                           </DropdownMenuSubTrigger>
                           <DropdownMenuPortal>
                              <DropdownMenuSubContent>
                                 <DropdownMenuItem
                                    onClick={() =>
                                       window.open(
                                          `https://www.google.com/search?q=${format(
                                             answer
                                          )}`
                                       )
                                    }
                                 >
                                    Google
                                 </DropdownMenuItem>
                                 <DropdownMenuItem
                                    onClick={() =>
                                       window.open(
                                          `https://wikipedia.org/w/index.php?search=${format(
                                             answer
                                          )}`
                                       )
                                    }
                                 >
                                    Wikipedia
                                 </DropdownMenuItem>
                              </DropdownMenuSubContent>
                           </DropdownMenuPortal>
                        </DropdownMenuSub>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                           <Flag className="h-4 w-4 mr-2" /> Report
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </div>
            </div>
         </div>
         <div
            className={
               "flex flex-row w-full mt-2 gap-2 sticky bottom-0 " +
               (inputShowing ? "justify-evenly" : "justify-end")
            }
         >
            <Input
               placeholder="Enter answer"
               className={"w-full " + (inputShowing ? "block" : "hidden")}
            />
            <div className="flex flex-row gap-2">
               <Button
                  className={
                     "justify-items-end " +
                     (actionsShowing ? "block" : "hidden")
                  }
                  onClick={() => {
                     if (isReading && !inputShowing) {
                        toggleReading();
                        setInputShowing(!inputShowing);
                     } else if (inputShowing) {
                        setInputShowing(!inputShowing);
                        toggleReading();
                     }
                  }}
               >
                  {inputShowing ? "Submit" : "Buzz"}
               </Button>
               <Button
                  variant="secondary"
                  className={
                     "justify-items-end " +
                     (actionsShowing ? "block" : "hidden")
                  }
               >
                  Next
               </Button>
               <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => {
                     toggleReading();
                     setActionsShowing(!actionsShowing);
                     if (inputShowing) {
                        setInputShowing(!inputShowing);
                     }
                  }}
               >
                  {isReading ? (
                     <PauseIcon className="h-4 w-4" />
                  ) : (
                     <PlayIcon className="h-4 w-4" />
                  )}
               </Button>
            </div>
         </div>
      </>
   );
}
