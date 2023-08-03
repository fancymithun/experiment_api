import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';


function App() {

  const PersonName = {
    first: "Mithun",
    last: "Prabhu"
  }

  const PersonListArray = [
    {
      first: "Mithun",
      last: "Prabhu"
    },
    {
      first: "Manoj",
      last: "Prabhu"
    },
    {
      first: "Medha",
      last: "Prabhu"
    }
  ]

  return (
    <div className="App">
      <Greet name="Mithun" count={10}/>
      <Person name={PersonName}/>
      <PersonList names={PersonListArray}/>
    </div>
  );
}

export default App;
