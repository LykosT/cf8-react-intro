import {useState} from "react";


const FunctionalComponentWithState = () => {
    const [count, setCount] = useState(0); // or React.useState() without import.

    const IncreaseCount = () => {
        setCount(count + 1);
    }

    const ResetCount = () => {
        setCount(0);
    }

    return (
        <>
            <h1 className="text-center my-12">Count is <strong>{count}</strong></h1>
            <div className="text-center">
                <button className="bg-cf-dark-gray text-white py-2 px-4 rounded-md "
                onClick={IncreaseCount}>
                    Increase
                </button>
                <button className="bg-cf-dark-red text-white py-2 px-4 rounded-md "
                        onClick={ResetCount}>
                    Reset
                </button>
            </div>

        </>
    )
}
export default FunctionalComponentWithState;