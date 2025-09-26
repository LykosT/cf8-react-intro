import {useState} from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        setCount(count - 1);
    }

    const resetCount = () => {
        setCount(0);
    }
    
    return (
        <>
            <h1 className="text-center my-12 text-2xl">Count is <strong
                className={count < 0 ? "text-red-500"
                    : count > 0
                    ? "text-green-500"
                    : "text-gray-800"}
            >{count}</strong></h1>
            <div className="text-center space-x-4">
                <button className="bg-green-600 text-white py-2 px-4 rounded-md"
                        onClick={increaseCount}>
                    Increase
                </button>
                <button className="bg-gray-500 text-white py-2 px-4 rounded-md "
                        onClick={decreaseCount}>
                    Decrease
                </button>
                <button className="bg-red-500 disabled:bg-cf-dark-gray text-white py-2 px-4 rounded-md "
                        onClick={resetCount}
                        disabled={count === 0}
                >
                    Reset
                </button>
            </div>

        </>
    )
}
export default Counter;