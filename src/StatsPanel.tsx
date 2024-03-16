import { Separator } from "@/components/ui/separator";


export default function StatsPanel() {
    return (
        <div className="text-left rounded-md border-2 p-4">
            <div className="flex flex row items-center justify-between">
                <h1 className="font-bold">Stats</h1>
                <h1 className="text-muted-foreground font-bold">48 tossups</h1>
            </div>
            <Separator className="my-2"/>
            <div className="flex flex-row items-center justify-between">
                <div className="text-left">
                    <h1>Powers: 20</h1>
                    <h1>Tens: 15</h1>
                    <h1>Negs: 3</h1>
                </div>
                <h1 className="bold text-4xl">435</h1>
            </div>
            <Separator className="my-2"/>
            <h1>Celerity: 0.434</h1>
        </div>
    )
}