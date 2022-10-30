import React, {useState} from "react";

const GoalItem = props => {
    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            goal: enteredText
        };

        props.addGoal(newGoal);
    };

    const addTextHandler = event => {
        setEnteredText(event.target.value);
    };

    return <form onSubmit={addGoalHandler}>
        <input type="text" onChange={addTextHandler}/>
        <button type="submit">Add goal</button>
    </form>
};

export default GoalItem;