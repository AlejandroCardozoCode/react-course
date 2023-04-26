import React, { useState } from "react";
import "./NewGoal.css"

const NewGoal = (props) => {
    const [goalText, setGoalText] = useState("");

    const addGoalHandler = (event) => {
        event.preventDefault();
        const newGoal = {
            id: Math.random.toString,
            text: goalText
        };

        props.onAddGoal(newGoal);
        setGoalText("");
    }

    const textChangeHandler = event => {
        setGoalText(event.target.value);
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler} >
            <input type="text" value={goalText} onChange={textChangeHandler} />
            <button type="submit">Add goal</button>
        </form>
    );
}

export default NewGoal