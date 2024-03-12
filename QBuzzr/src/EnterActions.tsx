import { Input } from "@/components/ui/input"
import { Button } from './components/ui/button';

export default function Home() {
   return (
      <>
         <div className="flex flex-row justify-evenly w-full mt-2 gap-2 sticky bottom-0">
            <Input placeholder="Enter answer" className="w-full" />
            <div className="flex flex-row gap-2">
               <Button>Buzz</Button>
               <Button variant="secondary">Next</Button>
               <Button variant="secondary">Stop</Button>
            </div>
         </div>
      </>
   );
}
