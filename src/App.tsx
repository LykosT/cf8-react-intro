// Third file that react will read/run.
import Layout from "./components/Layout.tsx";
// import ClassComponent from "./components/ClassComponent";
// import FunctionalComponent from "./components/FunctionalComponent.tsx";
// import ArrowFunctionalComponent from "./components/ArrowFunctionalComponent.tsx";
// import ViteIntro from "./components/ViteIntro/ViteIntro.tsx";
// import ArrowFunctionalComponentWithProps from "./components/ArrowFunctionalComponentWithProps.tsx";
// import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";
// import Card from "./components/Card.tsx";
// import FunctionalComponentWithState from "./components/FunctionalComponentWithState.tsx";
// import ClassComponentWithState from "./components/ClassComponentWithState.tsx";
import Counter from "./components/Counter.tsx";
// import Button from "./components/Button.tsx";

function App() {
  return (
      // <>
      //     <ClassComponent/>
      //     <FunctionalComponent/>
      //     <ArrowFunctionalComponent/>
      //     <ViteIntro/>
      //     <ArrowFunctionalComponentWithProps title={"Hello World!"} />
      //     <ArrowFunctionalComponentWithProps title={"Hello Coding!"} />
      //     <ArrowFunctionalComponentWithPropsType
      //         title="Is a Arrow Functional Component With Props!"
      //         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cumque ducimus eos."
      //     />
      //
      //     <Card title={"Card"}>
      //         <ArrowFunctionalComponentWithPropsType
      //             title="Is a Arrow Functional Component With Props!"
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
              <Counter/>

          </Layout>
      </>
  )
}

export default App
