import Button from "./Button.tsx";
import {useState} from "react";

const CounterWithMoreStates = () => {

    const [count, setCount] = useState(0);
    const [lastAction, setLastAction] = useState("");
    const [time, setTime] = useState("");

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increaseCount = () => {
        setCount(count + 1);
        setLastAction("Increase");
        setTime(getCurrentTime());
    }

    const decreaseCount = () => {
        setCount(count - 1);
        setLastAction("Decrease");
        setTime(getCurrentTime());

    }

    const resetCount = () => {
        setCount(0);
        setLastAction("Reset");
        setTime(getCurrentTime());

    }


    return (
        <>
            <h1 className="text-center my-12 text-2xl">Count:
                <strong className={count < 0 ?
                        "text-red-500" : count > 0 ?
                        "text-green-500" :
                        "text-gray-800"}>
                    {count}
                </strong>
            </h1>
            <div className="text-center space-x-4">
                <Button
                    title="Increase"
                    color="bg-green-600"
                    onClick={increaseCount}
                />

                <Button
                    title="Decrease"
                    color="bg-gray-500"
                    onClick={decreaseCount}
                />

                <Button
                    title="Reset"
                    color="bg-red-500"
                    onClick={resetCount}
                />
            </div>
            <p className="text-center text-gray-700 pt-4">
                Last Change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong>
            </p>
        </>
    )
}
export default CounterWithMoreStates;