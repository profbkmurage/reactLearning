import Header from "./header";
import Footer from "./footer";
function App() {
  return (
    // since the retun statement here can only return one component, we tie all components in a fragment
    <>
 
      <Header></Header> {/* //can also be written as <Header/> */} 
      <Footer/>
    </>
  )
}

export default App
