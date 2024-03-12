"use client";
import "./App.css";
// import * as React from "react"
import Navbar from "./Navbar";
import TossupCard from "./TossupCard";

import {
   ResizableHandle,
   ResizablePanel,
   ResizablePanelGroup,
} from "@/components/ui/resizable";

import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";

import EnterActions from "./EnterActions";

import SettingsPanel from "./SettingsPanel";

export default function Home() {
   return (
      <>
         <Navbar />
         <ResizablePanelGroup direction="horizontal" className="mt-4">
            <ResizablePanel className="flex flex-col gap-2 p-2 items-center">
               <SettingsPanel/>
               <span className="flex flex-col gap-2">
                  <span className="flex items-center gap-2">
                     <Switch id="powermarked_only"></Switch>
                     <Label htmlFor="powermarked_only">Powermarked only</Label>
                  </span>
                  <span className="flex items-center gap-2">
                     <Switch id="rebuzzers"></Switch>
                     <Label htmlFor="rebuzzers">Rebuzzers</Label>
                  </span>
               </span>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel className="p-2">
               <div className="flex flex-col items-center">
                  <TossupCard
                     text="It's not Brazil, but this region's Luquillo Mountains are home to a namesake Amazon parrot. A mix of islands and cays including Culebra and Vieques are located off the eastern coast of this island. An endemic species of frog known as coqui are located in this island's El Yunque National Forest. This island's central region is home to (*) Arecibo Observatory, one of the world's largest radio telescopes. (#) The successive 2017 natural disasters of Hurricane Irma and Maria damaged much of the infrastructure on this island. For ten points name this island territory of the United States, with capital San Juan."
                     answer="ANSWER: Commonwealth of Puerto Rico [accept Boriken]"
                     category="Geography"
                  />
                  <EnterActions />
               </div>
            </ResizablePanel>
         </ResizablePanelGroup>
      </>
   );
}
