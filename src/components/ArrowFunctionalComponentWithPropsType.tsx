

// type PropA = {
//     title: string;
// }
//
// type PropB = {
//     description: string;
// }
//
//
// types must connect manually.
//
// type Props = PropA & PropB;


// Interfaces with the same name auto connected.
interface Props {
    title: string
}

interface Props {
    description: string
}

const ArrowFunctionalComponentWithPropsType=({title, description}: Props) => {
    return (
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
            <p className="text-center text-gray-700 mt-12">{description}</p>
        </>
    )
}
export default ArrowFunctionalComponentWithPropsType