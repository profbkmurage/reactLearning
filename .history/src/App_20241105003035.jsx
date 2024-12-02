import Header from "./header";
import Footer from "./footer";
import Food from "./Food";
import Card from "./Card";
function App() {
  return (
    // since the retun statement here can only return one component, we tie all components in a fragment
    <>
 
      <Header></Header> {/* //can also be written as <Header/> */} 
      <Food />
      <hr />
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <hr />
      <person />
      <Footer/>
    </>
  )
}
// card
export default App
