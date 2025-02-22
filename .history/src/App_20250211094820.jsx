import Header from "./header";
import Footer from "./footer";
import Food from "./Food";
import Card from "./Card";
import Person from "./reactProps";
import profilePic from './assets/bk.jpg';
import UserGreeting from "./usergreeting";
import List from "./List";
import ReusableList from "./ReusableList";
import Button from "./Button";
import PicHide from "./PicHide";
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx";
import ChangeHandler from "./OnchangeFile.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdaterFunction from "./UpdaterFunctions.jsx";
import FoodUpdater from "./FoodUpdater.jsx";
import CarUpdater from "./CarUpdater.jsx";
import ToDooList from "./ToDoo.jsx";
function App() {

    const fruits = [{ id:1 ,name: 'Banana', carlories: 50 },
                    { id: 2,name: 'orange', carlories: 95 },
                    { id: 3,name: 'Tomato', carlories: 125 },
                    { id: 4,name: 'Kiwi', carlories: 150 }
                    // the id willl help to give the key value which is necessary for react to keep track of the data in the list
    ];
  
    const vegetables = [{ id:5 ,name: 'Cabbage', carlories: 50 },
                    { id: 6,name: 'Kales', carlories: 95 },
                    { id: 7,name: 'Apple', carlories: 125 },
                    { id: 8,name: 'Brocolli', carlories: 150 }
                    // the id willl help to give the key value which is necessary for react to keep track of the data in the list
    ];
  
    const cars = [
    ];

  return (
    // since the retun statement here can only return one component, we tie all components in a fragment
    <> 
      <Header></Header> {/* //can also be written as <Header/> */} 

      <hr />
      <Food />
      <hr />
      <ToDooList />
      <hr />
      <CarUpdater/> 
      <hr />
      <UpdaterFunction/>
      <hr />
      <FoodUpdater/>
      <hr />
      <List/> {/*this pulls from one componet that is not reusable*/}
      <hr />
      <ColorPicker/>
      <hr />
      <Counter/>
      <hr />
      <ChangeHandler/>
      <hr />
      <PicHide/>
      <hr />
     <MyComponent/>
      <hr />
      <Button/>
      <hr />
      <hr />
      <ReusableList items={fruits} cartegory ='Fruits'/> {/*this pulls from one componet that is reusable*/}
      <ReusableList items={vegetables} cartegory ='Vegetables '/> {/*this pulls from one componet that is reusable*/}
      {cars.length > 0 && <ReusableList items={cars} cartegory='Cars ' />} {/*this will render the car list conditionally such that when the list is empty then it will not appear on the frontend*/}
      <hr />

      <UserGreeting isLoggedIn= {true} userName= 'Prof'/>
      <hr />
      
      <Card/>
      <Card/>
      <hr />

      <Person name='Ben' imgsrc={profilePic} isStudent={false} description='lorem ihhdfcuyhyghfvvayhgjkjeijijeij' age={45} />
      <Person/>
      <hr />      
      
      <Footer/>
    </>
  )
}
// card
export default App
