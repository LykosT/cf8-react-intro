const ArrowFunctionalComponent =()=>  {
    const title = "Is an Arrow Functional Component!";
    //return <h1 className="text-center text-xl font-bold mt-12">{title}</h1>

    return(
        //react fragments <> </>.
        <>
            <h1 className="text-center text-xl font-bold mt-12">{title}</h1>
            {/*"." and "TAB" create a div element with className.*/}
            <div className=""></div>
        {/* h2 and "#{title}" create id with the name. */}
            <h2 id="title"></h2>
        {/* h1 or h2...  and "." and TAB create the element with className*/}
            <h4 className=""></h4>
        </>
    )
}
export default ArrowFunctionalComponent;