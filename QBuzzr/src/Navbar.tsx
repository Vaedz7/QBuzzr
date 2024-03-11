"use client"
import './App.css'
import * as React from "react"
import { cn } from "@/lib/utils"

import logo from "./assets/logo.svg";

import {
  Bot
} from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Separator } from "@/components/ui/separator"

import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <NavigationMenu>
          <a href="/">
            <img src={logo} className='w-32 mr-4'/>
          </a>
          <NavigationMenuList>
            {/* Play Menu */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Play</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px]">
                  <ListItem href="/tossups" title="Tossups">Grind tossups.</ListItem>
                  <ListItem href="/#" title="Bonuses">Drill bonuses.</ListItem>
                  <ListItem href="/#" title="Multiplayer">Play with friends.</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Tools Menu - Fixed Nesting */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2">
                  {/* QBot Link */}
                  <NavigationMenuLink className='flex items-center' asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <Bot size={48} />
                      <div className="mb-2 mt-4 text-lg font-medium">
                        QBot
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Highlights clues. Finds similar questions. Reads aloud using TTS. And more.
                      </p>
                    </a>
                  </NavigationMenuLink>

                  {/* Nested List for Other Tools */}
                  <ul> {/* Wrap these items in a separate ul */}
                    <NavigationMenuItem>
                      <ListItem href="/#" title="Database">Search anything.</ListItem>
                      <ListItem href="/#" title="Packet Tools">Train with exclusive and custom packets.</ListItem>
                      <ListItem href="/#" title="Guides">Master any subject step-by-step.</ListItem>
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
                  <ListItem href="/#" title="View Account">Edit your profile and check you game stats.</ListItem>
                  <Separator/>
                  <ListItem href="/#" title="Sign Out"></ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <h1>🚨 Public release coming May 2024. 🚨</h1>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ThemeProvider>
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
  )
})
ListItem.displayName = "ListItem"
