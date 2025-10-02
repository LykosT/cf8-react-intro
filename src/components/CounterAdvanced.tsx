import Button from "./Button.tsx";
import {useState} from "react";

type CounterState = {
    count: number;
    lastAction: string;
    time: string;
}

const CounterAdvanced = () => {

    const [state, setState] = useState<CounterState>({
        count: 0,
        lastAction: "",
        time: ""
    });

    const getCurrentTime = () => new Date().toLocaleTimeString();

    const increaseCount = () => {
        setState({
            count: state.count + 1,
            lastAction: "Increase",
            time: getCurrentTime()
        })
    }

    const decreaseCount = () => {
        setState({
            count: state.count - 1,
            lastAction: "Decrease",
            time: getCurrentTime()
        })
    }

    const resetCount = () => {
        setState({
            count: 0,
            lastAction: "Reset",
            time: getCurrentTime()
        })
    }


    return (
        <>
            <h1 className="text-center my-12 text-2xl">Count:
                <strong className={state.count < 0 ?
                        "text-red-500" : state.count > 0 ?
                        "text-green-500" :
                        "text-gray-800"}>
                    {state.count}
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
                Last Change: <strong>{state.lastAction || "-"}</strong> at <strong>{state.time || "-"}</strong>
            </p>
        </>
    )
}
export default CounterAdvanced;