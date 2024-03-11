"use client"
import './App.css'
// import * as React from "react"
import Navbar from './Navbar'
import TossupCard from './TossupCard';
import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button';
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
} from "@/components/ui/dropdown-menu"

import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"

import { Label } from '@/components/ui/label';

import { Switch } from "@/components/ui/switch"

import { Separator } from "@/components/ui/separator"



export default function Home() {
  return (
    <>
        <Navbar/>
        <ResizablePanelGroup direction="horizontal" className='mt-4'>
            <ResizablePanel className='flex flex-col gap-2 p-2 items-center'>
                <h1 className='font-bold'>Settings</h1>
                <Separator/>
                <span className='flex flex-row justify-start gap-2'>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary">
                                Difficulties
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Difficulties</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuCheckboxItem checked={true}>MS</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Easy HS</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Regular HS</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Hard HS</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>National MS</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Easy COLL</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Regular COLL</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Hard COLL</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>National COLL</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Open</DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuCheckboxItem checked={true}>Select All</DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <DropdownMenu>
                        <DropdownMenuTrigger>
                            <Button variant="secondary">
                                Categories
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Categories</DropdownMenuLabel>
                            <DropdownMenuSeparator/>
                            <DropdownMenuCheckboxItem checked={true}>Literature</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>History</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Science</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Fine Arts</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Religion</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Mythology</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Philosophy</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Social Studies</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Geography</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Current Events</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Trash</DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem checked={true}>Other Academic</DropdownMenuCheckboxItem>
                            <DropdownMenuSeparator/>
                            <DropdownMenuCheckboxItem checked={true}>Select All</DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </span>
                <span className='flex flex-col gap-2'>
                    <span className='flex items-center gap-2'>
                        <Switch id="powermarked_only"></Switch>
                        <Label htmlFor="powermarked_only">Powermarked only</Label>
                    </span>
                    <span className='flex items-center gap-2'>
                        <Switch id="rebuzzers"></Switch>
                        <Label htmlFor="rebuzzers">Rebuzzers</Label>
                    </span>
                </span>
            </ResizablePanel>
            <ResizableHandle/>
            <ResizablePanel className='p-2'>
                <div className='flex flex-col items-center'>
                    <TossupCard text="It's not Brazil, but this region's Luquillo Mountains are home to a namesake Amazon parrot. A mix of islands and cays including Culebra and Vieques are located off the eastern coast of this island. An endemic species of frog known as coqui are located in this island's El Yunque National Forest. This island's central region is home to (*) Arecibo Observatory, one of the world's largest radio telescopes. (#) The successive 2017 natural disasters of Hurricane Irma and Maria damaged much of the infrastructure on this island. For ten points name this island territory of the United States, with capital San Juan." answer="ANSWER: Commonwealth of Puerto Rico [accept Boriken]" category='Geography'/>
                    <div className='flex flex-row justify-evenly w-full mt-2 gap-2 sticky bottom-0'>
                        <Input placeholder='Enter answer' className='w-full'/>
                        <div className='flex flex-row gap-2'>
                            <Button>Buzz</Button>
                            <Button variant="secondary">Next</Button>
                            <Button variant="secondary">Stop</Button>
                        </div>
                    </div>
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    </>
  );
}