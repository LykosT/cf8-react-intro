import Button from "./Button.tsx";
import {useCounter} from "../hooks/useCounter.tsx";

const CounterWithCustomHook = () => {

    const {count, lastAction, time, increase, decrease, reset} = useCounter();
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
                    onClick={increase}
                />

                <Button
                    title="Decrease"
                    color="bg-gray-500"
                    onClick={decrease}
                />

                <Button
                    title="Reset"
                    color="bg-red-500"
                    onClick={reset}
                />
            </div>
            <p className="text-center text-gray-700 pt-4">
                Last Change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong>
            </p>
        </>
    )
}
export default CounterWithCustomHook;