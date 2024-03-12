import React from "react";
import { Button } from "./components/ui/button";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuCheckboxItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
   DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";

import { Separator } from "@/components/ui/separator";

type Category = {
    name: string,
    subcategories: string[]
}

const categories = [
   "Literature",
   "History",
   "Science",
   "Fine Arts",
   "Religion",
   "Mythology",
   "Philosophy",
   "Social Studies",
   "Geography",
   "Current Events",
   "Trash",
   "Other Academic",
];

const difficulties = [
    "MS",
    "Easy HS",
    "Regular HS",
    "Hard HS",
    "National HS",
    "Easy COLL",
    "Reg COLL",
    "Hard COLL",
    "National COLL",
    "Open"
  ];

const sortedcategories = categories.sort(); // Sorts the array alphabetically

export default function SettingsPanel() {
   return (
      <>
         <h1 className="font-bold">Settings</h1>
         <Separator />
         <span className="flex flex-row justify-start gap-2">
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <Button variant="secondary">Categories</Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {sortedcategories.map((subject) => (
                     <DropdownMenuCheckboxItem key={subject} checked={true}>
                        {subject}
                     </DropdownMenuCheckboxItem>
                  ))}
                  <DropdownMenuSeparator/>
                  <DropdownMenuCheckboxItem checked={true}>
                    Select All
                  </DropdownMenuCheckboxItem>
               </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <Button variant="secondary">Difficulties</Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                {difficulties.map((difficulty) => (
                    <DropdownMenuCheckboxItem key={difficulty} checked={true}>
                        {difficulty}
                    </DropdownMenuCheckboxItem>
                ))}
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked={true}>
                     Select All
                  </DropdownMenuCheckboxItem>
               </DropdownMenuContent>
            </DropdownMenu>
         </span>
      </>
   );
}
