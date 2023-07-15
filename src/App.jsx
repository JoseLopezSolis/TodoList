import InputField from './Components/Form/InputField';
import { useState, Fragment, useEffect } from 'react';
import Todos from './Components/Todos/Todos'

const App = function () {
  //States
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState(() => {
    const savedTodos = localStorage.getItem("listTask");
    if (savedTodos) return JSON.parse(savedTodos);
    return [];
  });

  //Events handlers
  const onSubmit = function () {
    if (!itsInputEmpty() && !taskAlreadyExist(task)){
      addTask(task)
    }
    setTask('')
  };

  //Use effects
  useEffect(() => {
    console.log(listTask);
    localStorage.setItem('listTask', JSON.stringify(listTask));
  }, [listTask]);

  //Functions

  //Get task from localStorage
  const getTaskFromLocalStorage = () => JSON.parse(localStorage.getItem("listTask"));

  //Is already task in localStorage?
  const taskAlreadyExist = function(currentTask){
    const storedTasks = getTaskFromLocalStorage();
    if (storedTasks) {
      const valueArr = storedTasks.map((task) => task.task.toLowerCase());
      const isDuplicated = valueArr.includes(currentTask.toLowerCase());
      if(isDuplicated) alert(`${currentTask} is already present in the list.`)
      return isDuplicated;
    }
    return false;
  }

  //Add task to state
  const addTask = function(currentTask){
    
    setListTask([...listTask, {
      task: currentTask,
      isCompleted: false,
      date: getCompleteDate()
    }]);
  }

  //Check if the input is empty
  const itsInputEmpty = function(){
    if (task.length > 0) return false;
    return true;
  }

  //Set done specific task
  const onDoneTask = function(){
    console.log('button done');
  }

  //Open task to edit
  const onEditTask = function(){
    console.log('button edit');
  }

  //Function to get the current date
  const getCompleteDate = function(){
    const date = new Date();
    let currentDay= String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth()+1).padStart(2,"0");
    let currentYear = date.getFullYear();
    return `${currentDay}-${currentMonth}-${currentYear}`;
  }

  return (
    <Fragment>
      <InputField onSubmit={onSubmit} task={task} setTask={setTask} />
      {listTask && listTask.map((task, index) => <Todos key={index} todo={task.task} method={{onDoneTask: onDoneTask, onEditTask: onEditTask}} />)}
    </Fragment>
  );
};

export default App;