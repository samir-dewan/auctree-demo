import React from 'react';
// import GoalItem from '../GoalItem/GoalItem';
import '../../App.css';

const GoalList = props => {
    console.log(props.goals);
    return (
        <div>
            <h2>Course Goals:</h2>
                <ul className="App-bullets">
                    {props.goals.map((goali) => {
                    return <li key={goali.id}>{goali.goal}</li>;
                    }
                    )
                    }
                </ul>
        </div>   
    );
};

export default GoalList;