import { Link,  } from "react-router";

const HomePage = () => {

    const links = [
        {path: "/", label: "Home Page"},
        {path: "/name-changer", label: "Name changer example"},
        {path: "/examples/timer", label: "Timer example"},
        {path: "/examples/controlled-input", label: "Controlled Input example"},
        {path: "/examples/uncontrolled-input", label: "Uncontrolled Input example"},
        {path: "/examples/multifield-form", label: "Multifield Form Example"},
        {path: "/examples/multifield-form-with-validation", label: "Multifield Form with Validation Example"},

    ]

    return (
        <>
            <h1 className="text-2xl text-center my-12">Home Page</h1>
            <div className="flex flex-col items-start max-w-sm mx-auto gap-4">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="bg-gray-200 w-full px-4 py-2 rounded"
                    >
                        {link.label}
                    </Link>
                ))}

                {/*<Link*/}
                {/*    to="/examples/name-changer"*/}
                {/*    className="bg-gray-200 w-full px-4 py-2 rounded"*/}
                {/*>*/}
                {/*    Name changer Example*/}
                {/*</Link>*/}

                {/*<NavLink*/}
                {/*    to="/timer"*/}
                {/*    className="bg-gray-200 w-full px-4 py-2 rounded"*/}
                {/*>*/}
                {/*    Timer Example*/}
                {/*</NavLink>*/}
            </div>
        </>
    )
}
export default HomePage;