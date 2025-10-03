// Third file that react will read/run.
import Layout from "./components/Layout.tsx";
//import NameChangerWithEffect from "./components/NameChangerWithEffect.tsx";
// import ClassComponent from "./components/ClassComponent";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
//import Counter from "./components/Counter.tsx";
//import NameChanger from "./components/NameChanger.tsx";
//import CounterWithMoreStates from "./components/CounterWithMoreStates.tsx";
//import CounterAdvanced from "./components/CounterAdvanced.tsx";
//import CounterWithCustomHook from "./components/CounterWithCustomHook.tsx";
// import Button from "./components/Button.tsx";
//import {useEffect} from "react";
import Timer from "./components/Timer.tsx";


function App() {

    // useEffect(() => {
    //     let counter: number = 1;
    //     const id: number = setInterval(()=>{
    //         console.log(counter++);
    //     },1000)
    //     return () => clearInterval(id)
    // }, []);

    // useEffect(() => {
    //     const id = setInterval(()=> console.log("tick"), 1000)
    //     return() => clearInterval(id);
    // }, [])


    // useEffect(setup,[]);
    // // Fetch data from API,
    // useEffect(() => {
    //     //setup function
    //     return () => {
    //         //cleanup
    //     }
    //
    // },// Dependency array
    //   [])

  return (
      // <>
      //     <ClassComponent/>
      //     <FunctionalComponent/>
      //     <ArrowFunctionalComponent/>
      //     <ViteIntro/>
      //     <ArrowFunctionalComponentWithProps title={"Hello World!"} />
      //     <ArrowFunctionalComponentWithProps title={"Hello Coding!"} />
      //     <ArrowFunctionalComponentWithPropsType
      //         title="Is an Arrow Functional Component With Props!"
      //         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque ducimus eos."
      //     />
      //
      //     <Card title={"Card"}>
      //         <ArrowFunctionalComponentWithPropsType
      //             title="Is an Arrow Functional Component With Props!"
      //             description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque ducimus eos."
      //         />
      //     </Card>
      //
      //
      // </>

      <>
          <Layout>

              {/*<ArrowFunctionalComponentWithProps title={"Hello Coding!"} />*/}
              {/*     <ArrowFunctionalComponentWithPropsType*/}
              {/*         title="Is an Arrow Functional Component With Props!"*/}
              {/*         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque ducimus eos."*/}
              {/*     />*/}
              {/*<FunctionalComponentWithState/>*/}
              {/*<ClassComponentWithState/>*/}
              {/*<Counter/>*/}
              {/*<NameChanger/>*/}
              {/*<CounterWithMoreStates/>*/}
              {/*<CounterAdvanced/>*/}
              {/*<CounterWithCustomHook/>*/}
              {/*<NameChangerWithEffect/>*/}
              <Timer/>

          </Layout>
      </>
  )
}

export default App
