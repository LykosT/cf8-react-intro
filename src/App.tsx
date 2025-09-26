// Third file that react will read/run.
import './App.css'
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";

function App() {
  return (
      <>
          <ClassComponent/>
          <FunctionalComponent/>
          <ArrowFunctionalComponent/>
          <ViteIntro/>
          <ArrowFunctionalComponentWithProps title={"Is a Arrow Functional Component With Props!"} />
          <ArrowFunctionalComponentWithProps title={"Hello Coding!"} />
      </>
  )
}

export default App
