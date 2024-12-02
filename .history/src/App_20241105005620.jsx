import Header from "./header";
import Footer from "./footer";
import Food from "./Food";
import Card from "./Card";
import Person from "./reactProps";
import profilePic from './assets/bk.jpg'
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
      <Person name='Ben' imgsrc={profilePic} isStudent={false} description='lorem ihhdfcuyhyghfvvayhgjkjeijijeij' age={45} />
      <Person>
      <hr />
      <Footer/>
    </>
  )
}
// card
export default App
