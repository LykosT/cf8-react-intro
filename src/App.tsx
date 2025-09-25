// Third file that react will read/run.
import './App.css'
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ViteIntro/ArrowFunctionalComponent.tsx";
import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";

function App() {
  return (
      <>
          <ClassComponent/>
          <FunctionalComponent/>
          <ArrowFunctionalComponent/>
          <ViteIntro/>
      </>
  )
}

export default App
