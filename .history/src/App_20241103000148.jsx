import Header from "./header";
import Footer from "./footer";
import Food from "./Food";
function App() {
  return (
    // since the retun statement here can only return one component, we tie all components in a fragment
    <>
 
      <Header></Header> {/* //can also be written as <Header/> */} 
      <Food/>
      <Footer/>
    </>
  )
}
// card
export default App
