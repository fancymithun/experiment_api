type GreetProps = {
    name: string;
    count: number;
}

export const Greet = (props : GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}! You have {props.count} unread messages</h2>
        </div>
    )
}