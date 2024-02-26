
import './App.css'

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"



import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem
} from "@/components/ui/dropdown-menu"

import { ThemeProvider } from "@/components/theme-provider"

export default function Home() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Play</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                <ListItem href="/#" title="Tossups">
                Play tossups.
                </ListItem>
                <ListItem href="/#" title="Bonuses">
                Play bonuses.
                </ListItem>
                <ListItem href="/#" title="Multiplayer">
                Play with friends.
                </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
              <NavigationMenuList>
                <NavigationMenuItem>
              <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      QBot
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      QBuzzr AI
                    </p>
                  </a>
                </NavigationMenuLink>
                </li>
                <ListItem href="/#" title="Database">
                Our questions database.
                </ListItem>
                <ListItem href="/#" title="Packet Tools">
                Generate random packets or upload your own.
                </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Difficulty</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>MS</DropdownMenuCheckboxItem>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ThemeProvider>
    </>
  )
}
