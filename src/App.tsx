// Third file that react will read/run.
import './App.css'
import ClassComponent from "./components/ClassComponent";
import FunctionalComponent from "./components/FunctionalComponent.tsx";
import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
import Card from "./components/Card.tsx";

function App() {
  return (
      <>
          <ClassComponent/>
          <FunctionalComponent/>
          <ArrowFunctionalComponent/>
          <ViteIntro/>
          <ArrowFunctionalComponentWithProps title={"Hello World!"} />
          <ArrowFunctionalComponentWithProps title={"Hello Coding!"} />
          <ArrowFunctionalComponentWithPropsType
              title="Is a Arrow Functional Component With Props!"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque ducimus eos."
          />

          <Card title={"Card"}>
              <ArrowFunctionalComponentWithPropsType
                  title="Is a Arrow Functional Component With Props!"
                  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque ducimus eos."
              />
          </Card>


      </>
  )
}

export default App
