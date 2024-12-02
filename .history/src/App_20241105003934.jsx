import Header from "./header";
import Footer from "./footer";
import Food from "./Food";
import Card from "./Card";
import Person from "./reactProps";
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
      <Person name='Ben' imgsrc='./assets/bk.jpg' isStudent ={true} description = 'lorem ihhdfcuyhyghfvvayhgjkjeijijeij'/>
      <Footer/>
    </>
  )
}
// card
export default App
