import * as React from "react";
import { Button } from "./components/ui/button";

import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuCheckboxItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
   DropdownMenuSub,
   DropdownMenuSubContent,
   DropdownMenuSubTrigger,
} from "@/components/ui/dropdown-menu";

import {DateRangePicker} from "./components/DateRangePicker"

import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

import { Switch } from "@/components/ui/switch";


import { Dumbbell, Blocks } from "lucide-react";

interface Category {
   name: string;
   subcategories?: string[]; // Optional subcategories property
}

const categories: Category[] = [
   {
      name: "History",
      subcategories: [
         "American History",
         "Ancient History",
         "European History",
         "World History",
         "Misc History",
      ],
   },
   {
      name: "Literature",
      subcategories: [
         "American Literature",
         "British Literature",
         "Classical Literature",
         "European Literature",
         "World Literature",
         "Drama",
         "Long Fiction",
         "Poetry",
         "Short Fiction",
         "Misc Literature",
      ],
   },
   {
      name: "Science",
      subcategories: [
         "Biology",
         "Chemistry",
         "Physics",
         "Math",
         "Astronomy",
         "Computer Science",
         "Earth Science",
         "Engineering",
         "Misc Science",
      ],
   },
   {
      name: "Fine Arts",
      subcategories: [
         "Architecture",
         "Auditory Fine Arts",
         "Dance",
         "Film",
         "Jazz",
         "Opera",
         "Photography",
         "Visual Fine Arts",
         "Misc Arts",
      ],
   },
   { name: "Religion" },
   { name: "Mythology" },
   { name: "Philosophy" },
   {
      name: "Social Studies",
      subcategories: [
         "Anthropology",
         "Economics",
         "Linguistics",
         "Psychology",
         "Sociology",
         "Misc Social Science",
      ],
   },
   { name: "Geography" },
   { name: "Current Events" },
   { name: "Trash" },
   { name: "Other Academic" },
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
   "Open",
];

const sortedcategories = categories.sort(); // Sorts the array alphabetically

export default function SettingsPanel() {
   const [startDate, setStartDate] = React.useState<Date>();
   const [endDate, setEndDate] = React.useState<Date>();

   return (
      <>
         <h1 className="font-bold">Settings</h1>
         <Separator />
         <span className="flex flex-row justify-start gap-2">
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <Button
                     variant="secondary"
                     className="justify-start text-left font-normal"
                  >
                     <Blocks className="2-4 h-4 mr-2" />
                     Categories
                  </Button>
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                  <DropdownMenuLabel>Categories</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {sortedcategories.map((category) =>
                     category.subcategories ? (
                        <DropdownMenuSub>
                           <DropdownMenuSubTrigger>
                              <DropdownMenuCheckboxItem checked={true}>
                                 {category.name}
                              </DropdownMenuCheckboxItem>
                           </DropdownMenuSubTrigger>
                           <DropdownMenuSubContent>
                              {category.subcategories.map((subcategory) => (
                                 <DropdownMenuCheckboxItem checked={true}>
                                    {subcategory}
                                 </DropdownMenuCheckboxItem>
                              ))}
                           </DropdownMenuSubContent>
                        </DropdownMenuSub>
                     ) : (
                        <DropdownMenuCheckboxItem checked={true}>
                           {category.name}
                        </DropdownMenuCheckboxItem>
                     )
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuCheckboxItem checked={true}>
                     Select All
                  </DropdownMenuCheckboxItem>
               </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
               <DropdownMenuTrigger>
                  <Button
                     variant="secondary"
                     className="justify-start text-left font-normal"
                  >
                     <Dumbbell className="mr-2 h-4 w-4" />
                     Difficulties
                  </Button>
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
         <span className="flex flex-row gap-2 items-center justify-center">
            <Label htmlFor="date_range_picker">Date range: </Label>
            <DateRangePicker id="date_range_picker"/>
         </span>
         <span className="flex flex-col gap-2">
            <span className="flex items-center gap-2">
               <Switch id="powermarked_only"></Switch>
               <Label htmlFor="powermarked_only">Powermarked only</Label>
            </span>
            <span className="flex items-center gap-2">
               <Switch id="rebuzzers"></Switch>
               <Label htmlFor="rebuzzers">Rebuzzers</Label>
            </span>
            <span className="flex items-center gap-2">
               <Label htmlFor="speed">Speed:</Label>
               <Slider defaultValue={[0]} max={100} step={1} id="speed" />
            </span>
         </span>
      </>
   );
}
