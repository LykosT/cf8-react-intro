// Third file that react will read/run.

import Layout from "./components/Layout.tsx";
import ArrowFunctionalComponentWithPropsType from "./components/ArrowFunctionalComponentWithPropsType.tsx";

function App() {
  return (

      <>
          <Layout>

              <ArrowFunctionalComponentWithPropsType title={"Hello"} description={"lorem10"}/>

          </Layout>
      </>
  )
}

export default App
