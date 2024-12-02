import Header from "./header";
import Footer from "./footer";
import Food from "./Food";
import Card from "./Card";
import Person from "./reactProps";
import profilePic from './assets/bk.jpg';
import UserGreeting from "./usergreeting";
import List from "./List";
import ReusableList from "./ReusableList";
function App() {
    const fruits2 = [{ id:1 ,name: 'Banana', carlories: 50 },
                    { id: 2,name: 'orange', carlories: 95 },
                    { id: 3,name: 'Tomato', carlories: 125 },
                    { id: 4,name: 'Kiwi', carlories: 150 }
                    // the id willl help to give the key value which is necessary for react to keep track of the data in the list
    ];

  return (
    // since the retun statement here can only return one component, we tie all components in a fragment
    <>
 
      <Header></Header> {/* //can also be written as <Header/> */} 
      <Food />
      <hr />

      <List/> {/*this pulls from one componet that is not reusable*/}
      <hr />

      <UserGreeting isLoggedIn= {true} userName= 'Prof'/>
      <hr/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <hr />
      <Person name='Ben' imgsrc={profilePic} isStudent={false} description='lorem ihhdfcuyhyghfvvayhgjkjeijijeij' age={45} />
      <Person/>
      <hr />
      
      <hr />
      <reusableList items={fruits2} cartegory ='Fruits'/> {/*this pulls from one componet that is reusable*/}
      <hr />
      <Footer/>
    </>
  )
}
// card
export default App
