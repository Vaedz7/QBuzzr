import "./App.css";
import Navbar from "./Navbar";

import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

import {
   Accordion,
   AccordionContent,
   AccordionItem,
   AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import { setCookie, getCookie, deleteCookie } from "./other/cookie-tools";

import { Typewriter } from "react-simple-typewriter";
import React, { useState, useEffect } from "react";

export default function Home() {
   return (
      <>
         <Navbar />
         <div>
            <div className="flex flex-col items-center my-10 gap-4">
               <div className="flex flex-row">
                  <h1 className="text-5xl italic font-medium p-2 text-left w-full">
                     All-in-one tool for&nbsp;
                     <span className="text-5xl italic font-medium p-2 text-left w-full text-primary">
                        <Typewriter
                           words={[
                              "grinding",
                              "learning",
                              "studying",
                              "drilling",
                              "mastering",
                              "training",
                              "understanding",
                              "discovering",
                              "practicing",
                           ]}
                           loop={false}
                        />
                     </span>
                     &nbsp;QuizBowl.
                  </h1>
               </div>
               <div className="text-left w-full flex flex-col items-start">
                  <h1 className="w-100 font-bold text-3xl mt-4 mb-2">
                     What are we?
                  </h1>
                  <h1 className="text-left text-2xl">
                     QBuzzr is built for people of all skill level. Whether you are a beginner or an experienced player, you can always elevate your QuizBowl practice with our innovative hi-tech tools that make your games both fun and productive.
                  </h1>

                  <Button variant="default" className="bg-primary mt-4">
                     <a href="/tossups">Play Now</a>
                  </Button>
               </div>
            </div>
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 my-16 relative">
               <Card>
                  <CardHeader>
                     <CardTitle>Truly Powerful</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                     <p>
                        Quizbowl practice just got awesome! This app uploads
                        packets, reads questions aloud, and has an AI bot for
                        competitive practice. No more heavy binders - it's all
                        here and it's amazingly great. I think it deffinitelly
                        deserves giving it 5 stars!
                     </p>
                  </CardContent>
                  <CardFooter>
                     <p>Manish Elluru</p>
                  </CardFooter>
               </Card>

               <Card>
                  <CardHeader>
                     <CardTitle>Amazing</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                     <p>
                        New to quizbowl and drowning in facts? This app saves
                        the day! It highlights key points in questions and
                        offers a giant question bank. Plus, the bonus round is a
                        fun way to test my knowledge on the go. Thanks for
                        making me quizbowl ready!
                     </p>
                  </CardContent>
                  <CardFooter>
                     <p>Ghandi Nathan</p>
                  </CardFooter>
               </Card>

               <Card>
                  <CardHeader>
                     <CardTitle>Love It</CardTitle>
                  </CardHeader>
                  <CardContent className="text-left">
                     <p>
                        Coaching quizbowl just got easier. Upload packets, use
                        text-to-speech for study sessions, and the AI bot is a
                        dream! We can customize difficulty for each player,
                        making practice sessions super efficient. This app is a
                        game-changer for our team!
                     </p>
                  </CardContent>
                  <CardFooter>
                     <p>Shriyan Johny</p>
                  </CardFooter>
               </Card>
               <div
                  className="rounded-md size-full"
                  style={{
                     height: "300px",
                     background:
                        "linear-gradient(197.37deg, #7450DB -0.38%, rgba(138, 234, 240, 0) 101.89%), linear-gradient(115.93deg, #3E88F6 4.86%, rgba(62, 180, 246, 0.33) 38.05%, rgba(62, 235, 246, 0) 74.14%), radial-gradient(56.47% 76.87% at 6.92% 7.55%, rgba(62, 136, 246, 0.7) 0%, rgba(62, 158, 246, 0.182) 52.16%, rgba(62, 246, 246, 0) 100%), linear-gradient(306.53deg, #2EE4E3 19.83%, rgba(46, 228, 227, 0) 97.33%)",
                     backgroundBlendMode:
                        "multiply, overlay, saturation, color-dodge, lighten, luminosity",
                     filter: "blur(40px)",
                     position: "absolute",
                     zIndex: "-1",
                  }}
               ></div>
            </div>
         </div>
         <h1 className="text-2xl">Upcoming Features</h1>
         <Accordion type="single" collapsible>
            {/* Content Management */}
            <AccordionItem value="item-1">
               <AccordionTrigger>Content Management</AccordionTrigger>
               <AccordionContent className="text-left">
                  <ul className="list-disc list-inside">
                     <li>
                        Custom Packet Upload: Import your own question packets
                        for personalized practice.
                     </li>
                     <li>
                        Preset Creation: Save and load custom game setups with
                        settings and categories.
                     </li>
                  </ul>
               </AccordionContent>
            </AccordionItem>

            {/* Automated Features */}
            <AccordionItem value="item-2">
               <AccordionTrigger>Automated Features</AccordionTrigger>
               <AccordionContent className="text-left">
                  <ul className="list-disc list-inside">
                     <li>
                        Smart Formatting: Automatic question formatting
                        including power bolding.
                     </li>
                     <li>
                        Text-to-Speech (TTS): Listen to questions read aloud for
                        increased accessibility and study options.
                     </li>
                  </ul>
               </AccordionContent>
            </AccordionItem>

            {/* Enhanced Question Analysis */}
            <AccordionItem value="item-3">
               <AccordionTrigger>Enhanced Question Analysis</AccordionTrigger>
               <AccordionContent className="text-left">
                  <ul className="list-disc list-inside">
                     <li>
                        Clue Highlighting: Identify key clues within questions
                        for focused review.
                     </li>
                     <li>
                        Similar Question Search: Discover questions with similar
                        themes or concepts.
                     </li>
                  </ul>
               </AccordionContent>
            </AccordionItem>

            {/* Advanced Customization */}
            <AccordionItem value="item-4">
               <AccordionTrigger>Advanced Customization</AccordionTrigger>
               <AccordionContent className="text-left">
                  <ul className="list-disc list-inside">
                     <li>
                        AI-Powered Categories: Create custom categories with AI
                        suggestions, like "American Geography" or "European
                        History".
                     </li>
                     <li>
                        Category & Difficulty Breakdown: Analyze question
                        distribution by category and difficulty for targeted
                        practice.
                     </li>
                  </ul>
               </AccordionContent>
            </AccordionItem>

            {/* Personalization */}
            <AccordionItem value="item-5">
               <AccordionTrigger>Personalization</AccordionTrigger>
               <AccordionContent className="text-left">
                  <ul className="list-disc list-inside">
                     <li>
                        Custom Themes: Personalize your study experience with a
                        variety of user interface themes.
                     </li>
                     <li>
                        Custom Account Perks: Set up custom profile images and
                        nicks.
                     </li>
                  </ul>
               </AccordionContent>
            </AccordionItem>
         </Accordion>
      </>
   );
}

// Save & Manage Content:
// Preset Creation: Save and load custom game setups with settings and categories.
// Custom Packet Upload: Import your own question packets for personalized practice.

// Automated Features:
// Smart Formatting: Automatic question formatting including power bolding.
// Text-to-Speech (TTS): Listen to questions read aloud for increased accessibility and study options.

// Enhanced Question Analysis:
// Clue Highlighting: Identify key clues within questions for focused review.
// Similar Question Search: Discover questions with similar themes or concepts.

// Advanced Customization:
// AI-Powered Categories: Create custom categories with AI suggestions, like "American Geography" or "European History".
// Category & Difficulty Breakdown: Adjust question distribution by category and difficulty for targeted practice.

// Personalization:
// Custom Themes: Personalize your study experience with a variety of user interface themes.
// Custom Account Perks: Set up custom profile images and nicks.
