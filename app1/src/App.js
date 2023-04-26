import React, { useState } from 'react';
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  // decirle a react que algo cambia y se tiene que volver a dibujar en pantalla
  // useState es la función para indicar un elemento que cambia de estado, devuelve
  // dos valores, la variable para manejar el objeto y una función para poder cambiarlo
  const [courseGoals, setCourseGoals] = useState(
    [
      { id: "cg1", text: "Finish the course", },
      { id: "cg2", text: "Learn about React", },
      { id: "cg3", text: "Help other students", },
    ]);

  const addNewCourseGoal = (newGoal) => {
    //setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals(prevCourseGoalsArray => prevCourseGoalsArray.concat(newGoal));
  }

  return <div className='course-goals'>
    <h2> Course goals</h2>
    <NewGoal onAddGoal={addNewCourseGoal} />
    <GoalList goals={courseGoals} />
  </div >
};

export default App;
