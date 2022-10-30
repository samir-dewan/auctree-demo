import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList.js';
import GoalItem from './components/GoalItem/GoalItem';

function App() {
  const [myGoals, setMyGoals] = useState(
    [
      {id: 'tag1', goal: 'Make a React native application'},
      {id: 'tag2', goal: 'create a property app'},
      {id: 'tag3', goal: 'win at snooker'}
    ]
  )

  const addNewGoalHandler = Goal => {
    setMyGoals((myPrevGoals) => {
      return myPrevGoals.concat(Goal)
    })
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit banter <code>src/App.js</code> and save to reload.
        </p>
        <GoalItem addGoal={addNewGoalHandler}/>
        <GoalList goals={myGoals}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
