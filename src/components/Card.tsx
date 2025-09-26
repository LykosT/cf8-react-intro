import type {ReactNode} from "react";

type CardProps = {
    title: string
    children: ReactNode  // or children: React.ReactNode (without import).
}

const Card = ({title, children} :CardProps) => {
    return (
        <>
            <div className="card text-center text-cf-dark-red">
                <h2>{title}</h2>
                {children}
                <p>lorem ipsum.</p>
            </div>
        </>
    )
}
export default Card