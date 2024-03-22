import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Form from './Form.jsx'
import Student from './Student.jsx'
import Nurses from './nurses.jsx'
import UserGreeting from './UserGreeting.jsx'
import MyList from './MyList.jsx'

function App() {
  const Fruits = [{id: 1, name: "Apple", calories: 95},
                  {id: 2, name: "Orange", calories: 45},
                  {id: 3, name: "Banana", calories: 105},
                  {id: 4, name: "Coconut", calories: 159},
                  {id: 5, name: "Avocado", calories: 67}];

  const Vegetables = [{id: 6, name: "spinach", calories: 35},
                    {id: 7, name: "broccoli", calories: 45},
                    {id: 8, name: "carrot", calories: 15},
                    {id: 9, name: "tomato", calories: 19},
                    {id: 10, name: "potato", calories: 60}];

  return(
    <>
      <Header />
      <Card />
      <Form />
      <MyList  items={Fruits} category="Fruits"/>
      <MyList items={Vegetables} category="Vegetables"/>
      <UserGreeting isLoggedIn={true} username="Ian Muriuki" />
      <Food/>
      <Student name="Sponge Bob" age={30} isStudent={true}/>
      <Student name="Patrick" age={40} isStudent={false} />
      <Student />
      <Nurses name="Ann" age={29} weight={68} />
      <Footer />
    </>
  );
}


export default App
