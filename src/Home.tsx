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

import { setCookie, getCookie, deleteCookie } from "./other/cookie-tools";

import { Typewriter } from "react-simple-typewriter";
import React, { useState, useEffect } from "react";

export default function Home() {
   return (
      <>
         <Navbar />
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
            <div className="text-left w-full">
               <h1 className="w-100 font-bold text-3xl my-4">What are we?</h1>
               <h1 className="text-left text-2xl">
                  QBuzzr is an all-in-one QuizBowl practice tool for people of
                  all skill level. We aim to deliver the best practice
                  experience by providing you the most hi tech and innovative
                  features. We hope that our efforts will make your study
                  process more productive and enjoyable.
               </h1>
            </div>
         </div>
         <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-4 mt-8">
            <Card>
               <CardHeader>
                  <CardTitle>Truly Powerful</CardTitle>
               </CardHeader>
               <CardContent className="text-left">
                  <p>
                     Quizbowl practice just got awesome! This app uploads
                     packets, reads questions aloud, and has an AI bot for
                     competitive practice. No more heavy binders - it's all here
                     and it's amazingly great. I think it deffinitelly deserves
                     giving it 5 stars!
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
                     New to quizbowl and drowning in facts? This app saves the
                     day! It highlights key points in questions and offers a
                     giant question bank. Plus, the bonus round is a fun way to
                     test my knowledge on the go. Thanks for making me quizbowl
                     ready!
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
                     dream! We can customize difficulty for each player, making
                     practice sessions super efficient. This app is a
                     game-changer for our team!
                  </p>
               </CardContent>
               <CardFooter>
                  <p>Shriyan Johny</p>
               </CardFooter>
            </Card>
         </div>
         <h1 className="text-2xl mt-8">Upcoming Features</h1>
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
