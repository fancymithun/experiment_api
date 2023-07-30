import React from "react"
import { cn } from "../utils"


const Card = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({className,...props},ref) => (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm")} ref={ref}>

    </div>
))

Card.displayName = "Card"

const CardHeader = () => (
    <div className={cn("flex flex-col space-y-1.5 p-6")}>

    </div>
)

Card.displayName = "CardHeader"

const CardTitle = () => (
    <div className={cn("text-2xl font-semibold leading-none tracking-tight")}>

    </div>
)

Card.displayName = "CardTitle"

const CardDescription = () => (
    <div className={cn("text-sm text-muted-foreground")}>

    </div>
)

Card.displayName = "CardDescription"

const CardContent = () => (
    <div className={cn("p-6 pt-0")}>

    </div>
)

Card.displayName = "CardContent"

const CardFooter = () => (
    <div className={cn("flex items-center p-6 pt-0")}>

    </div>
)

Card.displayName = "CardFooter"

export default {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
    CardFooter
}