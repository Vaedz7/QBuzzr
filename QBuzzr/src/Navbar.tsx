"use client";
import "./App.css";
import * as React from "react";
import { cn } from "@/lib/utils";

import logo from "./assets/logo.svg";

import { useContext } from "react";

import { Bot } from "lucide-react";

import {
   NavigationMenu,
   NavigationMenuContent,
   NavigationMenuItem,
   NavigationMenuLink,
   NavigationMenuList,
   NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Separator } from "@/components/ui/separator";

import { ThemeProvider } from "@/components/theme-provider";

import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/components/theme-provider";

export default function Home() {
   const { setTheme } = useTheme();

   return (
      <>
         <NavigationMenu>
            <a href="/">
               <svg
                  className="w-32 mr-4"
                  viewBox="0 0 5292 1242"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  style={{
                     fillRule: "evenodd",
                     clipRule: "evenodd",
                     strokeLinecap: "round",
                     strokeLinejoin: "round",
                     strokeMiterlimit: 1.5,
                  }}
               >
                  <path
                     d="M1614.55 816.5h58.322q100.367 0 143.769-25.77t43.402-82.735-43.402-82.735-143.769-25.77h-58.322zm0-415.032h48.828q124.78 0 124.78-99.01t-124.78-99.011h-48.828zM1348.713 0h396.043q141.057 0 214.298 67.816 73.24 67.815 73.241 195.309 0 77.309-27.805 128.171-27.804 50.861-84.769 86.126 56.964 10.85 96.976 33.23t65.103 54.93q25.092 32.552 35.942 73.241t10.851 86.804q0 71.885-25.092 127.493-25.092 55.61-70.528 93.586t-110.54 56.965q-65.103 18.988-146.481 18.988h-427.239zM2509.72 326.871v391.974q0 128.85 124.781 128.85 124.78 0 124.781-128.85V326.871h245.492v439.445q0 141.057-92.907 211.585-92.908 70.528-277.366 70.528t-277.366-70.528-92.907-211.585V326.871zm1019.95 490.985h292.964v204.803h-705.283l328.228-490.985H3162.11V326.871h693.075zm798.86 0h292.964v204.803h-705.283l328.228-490.985H3960.97V326.871h693.075zm440.81-490.985h245.492v113.93q39.334-62.39 96.298-95.62 56.965-33.23 132.919-33.229h21.023q11.529 0 26.448 2.712v234.642q-48.828-24.413-105.793-24.413-85.447 0-128.171 50.862-42.724 50.861-42.724 148.516v298.388H4769.34z"
                     style={{
                        fill: "currentColor",
                        fillRule: "nonzero",
                     }}
                  />
                  <path
                     d="M788.299 1033.88c-68.2 27.702-143.251 43.036-222.039 43.036C253.732 1076.916 0 835.642 0 538.46S253.732.004 566.26.004c312.527 0 566.259 241.274 566.259 538.456 0 132.959-50.789 254.727-134.899 348.693L800.342 689.875c30.949-43.157 49.047-95.292 49.047-151.415 0-148.591-126.866-269.228-283.129-269.228S283.13 389.869 283.13 538.46c0 147.268 124.618 267.078 278.947 269.198z"
                     style={{
                        fill: "currentColor",
                     }}
                  />
                  <path
                     d="M699.863 633.586a62.5 62.5 0 0 0-44.194-18.306h-90.883c-25.279 0-48.068 15.228-57.742 38.583s-4.327 50.237 13.548 68.112l469.097 469.097a62.5 62.5 0 0 0 43.607 18.303l91.744.862c25.385.238 48.392-14.901 58.217-38.309s4.515-50.432-13.435-68.382z"
                     style={{
                        fill: "none",
                        stroke: "#044590",
                        strokeOpacity: 0,
                        strokeWidth: "62.5px",
                     }}
                  />
                  <path
                     d="M699.863 633.586a62.5 62.5 0 0 0-44.194-18.306h-90.883c-25.279 0-48.068 15.228-57.742 38.583s-4.327 50.237 13.548 68.112l469.097 469.097a62.5 62.5 0 0 0 43.607 18.303l91.744.862c25.385.238 48.392-14.901 58.217-38.309s4.515-50.432-13.435-68.382z"
                     style={{
                        fill: "currentColor",
                     }}
                  />
               </svg>
            </a>
            <NavigationMenuList>
               {/* Play Menu */}
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Play</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                        <ListItem href="/tossups" title="Tossups">
                           Grind tossups.
                        </ListItem>
                        <ListItem href="/#" title="Bonuses">
                           Drill bonuses.
                        </ListItem>
                        <ListItem href="/#" title="Multiplayer">
                           Play with friends.
                        </ListItem>
                     </ul>
                  </NavigationMenuContent>
               </NavigationMenuItem>

               {/* Tools Menu - Fixed Nesting */}
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
                        {/* QBot Link */}
                        <NavigationMenuLink
                           className="flex items-center"
                           asChild
                        >
                           <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                           >
                              <Bot size={48} />
                              <div className="mb-2 mt-4 text-lg font-medium">
                                 QBot
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                 Highlights clues. Finds similar questions.
                                 Reads aloud using TTS. And more.
                              </p>
                           </a>
                        </NavigationMenuLink>

                        {/* Nested List for Other Tools */}
                        <ul>
                           {" "}
                           {/* Wrap these items in a separate ul */}
                           <NavigationMenuItem>
                              <ListItem href="/#" title="Database">
                                 Search anything.
                              </ListItem>
                              <ListItem href="/#" title="Packet Tools">
                                 Train with exclusive and custom packets.
                              </ListItem>
                              <ListItem href="/#" title="Guides">
                                 Master any subject step-by-step.
                              </ListItem>
                           </NavigationMenuItem>
                        </ul>
                     </div>
                  </NavigationMenuContent>
               </NavigationMenuItem>

               {/* Hugh Jass Menu */}
               <NavigationMenuItem>
                  <NavigationMenuTrigger>Hugh Jass</NavigationMenuTrigger>
                  <NavigationMenuContent>
                     <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                        <ListItem href="/#" title="View Account">
                           Edit your profile and check you game stats.
                        </ListItem>
                        <Separator />
                        <ListItem href="/#" title="Sign Out"></ListItem>
                     </ul>
                  </NavigationMenuContent>
               </NavigationMenuItem>

               <NavigationMenuItem>
                  <DropdownMenu className="ml-2">
                     <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                           <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                           <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                           <span className="sr-only">Toggle theme</span>
                        </Button>
                     </DropdownMenuTrigger>
                     <DropdownMenuContent align="end">
                        <DropdownMenuItem onClick={() => setTheme("light")}>
                           Light
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("dark")}>
                           Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setTheme("system")}>
                           System
                        </DropdownMenuItem>
                     </DropdownMenuContent>
                  </DropdownMenu>
               </NavigationMenuItem>

               <NavigationMenuItem>
                  <h1 className="ml-2">🚨 Public release coming May 2024. 🚨</h1>
               </NavigationMenuItem>
            </NavigationMenuList>
         </NavigationMenu>
      </>
   );
}

const ListItem = React.forwardRef<
   React.ElementRef<"a">,
   React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
   return (
      <li>
         <NavigationMenuLink asChild>
            <a
               ref={ref}
               className={cn(
                  "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                  className
               )}
               {...props}
            >
               <div className="text-sm font-medium leading-none">{title}</div>
               <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
               </p>
            </a>
         </NavigationMenuLink>
      </li>
   );
});
ListItem.displayName = "ListItem";
