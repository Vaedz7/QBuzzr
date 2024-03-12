"use client";
import "./App.css";
// import * as React from "react"
import { Button } from "@/components/ui/button";

import {
   Clipboard,
   Star,
   PencilRuler,
   Flag,
   Search,
   TextSearch,
   Highlighter,
   CopyPlus,
} from "lucide-react";

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

import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

export default function TossupCard(props: {
   text: string;
   answer: string;
   category: string;
}) {
   const text = props.text;
   const answer = props.answer;
   const category = props.category;

   function format(string: string) {
      string = string.replace(/\[.*?\]/g, "");
      string = string.replace(/\(.*?\)/g, "");
      string = string.replace(/<.*?>/g, "");
      return string;
   }

   function copyToClipboard(){
    navigator.clipboard.writeText(format(answer))
    toast("Copied to clipboard")
   }

   return (
      <>
         <div className="text-left p-4 rounded-md border-2">
            <h1 className="border-b-2 pb-2 mb-4 font-bold">{category}</h1>
            <p className="mb-4">{text}</p>
            <div className="flex flex-row items-center justify-between">
               <p>{answer}</p>
               <div className="flex gap-2">
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={() =>
                        copyToClipboard()
                     }
                  >
                     <Clipboard className="h-4 w-4"/>
                     <Toaster/>
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
      </>
   );
}
