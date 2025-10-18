// Third file that react will read/run.
//import Layout from "./components/Layout.tsx";
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
//import Timer from "./components/Timer.tsx";
//import WindowSize from "./components/WindowSize.tsx";
//import FocusInput from "./components/FocusInput.tsx";
//import PreviousValue from "./components/PreviousValue.tsx";
//import CounterWithRef from "./components/CounterWithRef.tsx";
//import TimerWithRef from "./components/TimerWithRef.tsx";
import {BrowserRouter, Route, Routes} from "react-router";
import HomePage from "./components/pages/HomePage.tsx";
import NameChanger from "./components/NameChanger.tsx";
import Timer from "./components/Timer.tsx";
import ControlledInput from "./components/ControlledInput.tsx";
import UncontrolledInput from "./components/UncontrolledInput.tsx";
import UserPage from "./components/pages/UserPage.tsx";
import MultifieldFormWithValidation from "./components/MultifieldFormWithValidation.tsx";
import MultifieldForm from "./components/MultifieldForm.tsx";
import MultifieldFormWithZod from "./components/MultifieldFormWithZod.tsx";
import MultifieldFormWithHookForm from "./components/MultifieldFormWithHookForm.tsx";


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
          {/*<Layout>*/}

          {/*    /!*<ArrowFunctionalComponentWithProps title={"Hello Coding!"} />*!/*/}
          {/*    /!*     <ArrowFunctionalComponentWithPropsType*!/*/}
          {/*    /!*         title="Is an Arrow Functional Component With Props!"*!/*/}
          {/*    /!*         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque ducimus eos."*!/*/}
          {/*    /!*     />*!/*/}
          {/*    /!*<FunctionalComponentWithState/>*!/*/}
          {/*    /!*<ClassComponentWithState/>*!/*/}
          {/*    /!*<Counter/>*!/*/}
          {/*    /!*<NameChanger/>*!/*/}
          {/*    /!*<CounterWithMoreStates/>*!/*/}
          {/*    /!*<CounterAdvanced/>*!/*/}
          {/*    /!*<CounterWithCustomHook/>*!/*/}
          {/*    /!*<NameChangerWithEffect/>*!/*/}
          {/*    /!*<Timer/>*!/*/}
          {/*    /!*<WindowSize/>*!/*/}
          {/*    /!*<FocusInput/>*!/*/}
          {/*    /!*<PreviousValue/>*!/*/}
          {/*    /!*<CounterWithRef/>*!/*/}
          {/*    <TimerWithRef/>*/}
          {/*</Layout>*/}

          <BrowserRouter>
              <Routes>
                  <Route index element={<HomePage />} />

                  {/*<Route path="name-changer" element={<NameChanger />} />*/}
                  {/*<Route path="timer" element={<Timer />} />*/}

                  <Route path="examples?">
                      <Route path="name-changer" element={<NameChanger/>}/>
                      <Route path="timer" element={<Timer/>}/>
                      <Route path="controlled-input" element={<ControlledInput/>}/>
                      <Route path="uncontrolled-input" element={<UncontrolledInput/>}/>
                      <Route path="multifield-form" element={<MultifieldForm/>}/>
                      <Route path="multifield-form-with-validation" element={<MultifieldFormWithValidation/>}/>
                      <Route path="multifield-form-with-zod" element={<MultifieldFormWithZod/>}/>
                      <Route path="multifield-form-with-hook-form" element={<MultifieldFormWithHookForm/>}/>
                  </Route>

                  <Route path="users">
                      <Route path=":userId">
                          <Route index element={<UserPage/>}/>
                          {/*<Route path="accounts" element={<UserAccountPage/>}/>*/}
                      </Route>
                  </Route>
                  {/* with ":" declare that userId is a variable */}
                  {/*<Route path="users/:userID" element={<UserPage/>}/>*/}

                  {/* If user type in url https://domain/files/mypdf.pdg this search for the pdf and if exist download it */}
                  {/*<Route path="files/*" element={<FilePage/>}/> */}


              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
