import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button';
import { useState } from 'react';

export default function Home() {

    const [showing, setShowing] = useState(false);

   return (
      <>
         <div className="flex flex-row justify-evenly w-full mt-2 gap-2 sticky bottom-0">
            <Input placeholder="Enter answer" className={"w-full "+ (showing ? "block" : "hidden")} />
            <div className="flex flex-row gap-2">
               <Button className={showing ? "block" : "hidden"}>Buzz</Button>
               <Button variant="secondary" onClick={() => {
                    setShowing(!showing)
               }}>Start</Button>
               <Button variant="secondary" className={showing ? "block" : "hidden"}>Stop</Button>
            </div>
         </div>
      </>
   );
}
