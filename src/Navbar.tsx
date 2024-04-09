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

import {
   SignedIn,
   SignedOut,
   SignInButton,
   UserButton,
} from "@clerk/clerk-react";

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
                  className="h-8 mr-4 block sm:hidden"
                  strokeMiterlimit={10}
                  style={{
                     fillRule: "nonzero",
                     clipRule: "evenodd",
                     strokeLinecap: "round",
                     strokeLinejoin: "round",
                  }}
                  viewBox="0 0 1024 1024"
                  width="100%"
                  xmlSpace="preserve"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
               >
                  <defs />
                  <clipPath id="ArtboardFrame">
                     <rect height={1024} width={1024} x={0} y={0} />
                  </clipPath>
                  <g clipPath="url(#ArtboardFrame)" id="Layer-1">
                     <path
                        d="M679.403 874.779C620.624 898.218 555.94 911.193 488.036 911.193C218.681 911.193 0 707.047 0 455.596C0 204.146 218.681 0 488.036 0C757.39 0 976.072 204.146 976.072 455.596C976.072 568.095 932.299 671.125 859.808 750.631L689.782 583.711C716.456 547.195 732.054 503.083 732.054 455.596C732.054 329.871 622.713 227.798 488.036 227.798C353.36 227.798 244.018 329.871 244.018 455.596C244.018 580.202 351.421 681.575 484.431 683.369L679.403 874.779Z"
                        fill="#ffffff"
                        fillRule="evenodd"
                        opacity={1}
                        stroke="none"
                     />
                     <path
                        d="M603.183 536.084C593.081 526.167 579.38 520.595 565.094 520.595L486.766 520.595C464.979 520.595 445.338 533.48 437 553.241C428.663 573.002 433.271 595.747 448.677 610.871L852.972 1007.78C862.95 1017.58 876.445 1023.14 890.555 1023.27L969.626 1024C991.504 1024.2 1011.33 1011.39 1019.8 991.584C1028.27 971.778 1023.69 948.912 1008.22 933.725L603.183 536.084Z"
                        fill="#ffffff"
                        fillRule="evenodd"
                        opacity={1}
                        stroke="none"
                     />
                  </g>
               </svg>
               <svg
                  className="h-8 mr-4 hidden sm:block"
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
                        <ListItem href="/bonuses" title="Bonuses">
                           Drill bonuses.
                        </ListItem>
                        <ListItem href="/multiplayer" title="Multiplayer">
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
                              <ListItem href="/database" title="Database">
                                 Search anything.
                              </ListItem>
                              <ListItem
                                 href="/packet-tools"
                                 title="Packet Tools"
                              >
                                 Train with exclusive or custom packets.
                              </ListItem>
                              <ListItem href="/guides" title="Guides">
                                 Master any subject step-by-step.
                              </ListItem>
                           </NavigationMenuItem>
                        </ul>
                     </div>
                  </NavigationMenuContent>
               </NavigationMenuItem>

               {/* Hugh Jass Menu */}
               <NavigationMenuItem>
                  <SignedOut>
                     <SignInButton />
                  </SignedOut>
                  <SignedIn>
                     <UserButton />
                  </SignedIn>
               </NavigationMenuItem>

               <NavigationMenuItem>
                  <DropdownMenu>
                     <DropdownMenuTrigger className="ml-2" asChild>
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
                  <h1 className="ml-2">
                     🚨 Public release coming May 2024. 🚨
                  </h1>
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
