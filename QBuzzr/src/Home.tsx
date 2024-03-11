import "./App.css";
import Navbar from "./Navbar";

import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

export default function Home() {
   return (
      <>
         <Navbar />
         <div className="flex flex-col items-center my-10 gap-4">
            <div>
               <h1 className="text-8xl italic font-medium p-2 text-left w-full bg-gradient-to-r from-blue-600  to-purple-600 inline-block text-transparent bg-clip-text">
                  Play. Learn. Enjoy.
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
      </>
   );
}
