import React from 'react';
import './App.css';
import { Hello } from './components/Hello';
import { Form } from './components/Form'

function App() {
  const[serverData, setServerData] = React.useState([])

  React.useEffect(()=> {
    fetch('http://18.212.62.122:4000/')
    .then(res => res.json())
    .then(data => setServerData(data))
    .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Hello  firstName="Jose" lastName="Torres"/>
        <Form />
        {/* @ts-ignore */}
        {serverData && serverData.map(eachDog =><p>{eachDog.name} - {eachDog.age}</p>)}
      </header>
    </div>
  );
}

export default App;
