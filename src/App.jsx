import React, { useState, useEffect } from 'react';
import InputField from './Components/Form/InputField';
import TaskItem from './Components/TaskItem/TaskItem';
import TitleForm from './Components/Form/TitleForm';
import NoTaskMessage from './Components/NoTaskMessage/NoTaskMessage';
import TaskContainer from './Components/TaskContainer/TaskContainer';
import RemoveAllTask from './Components/RemoveAllTask/RemoveAllTasks';
import Notification from './Components/Notification/Notification';

const App = () => {
  // States
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState(() => {
    const savedTodos = localStorage.getItem('listTask');
    if (savedTodos) return JSON.parse(savedTodos);
    return [];
  });
  const [editTask, setEditTask] = useState({ index: null, value: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationContent, setNotificationContent] = useState('');
  const [classNotification, setClassNotification] = useState('fade-in');

  // Events handlers
  const onSubmit = () => {
    setNotificationMessage();
    if (!itsInputEmpty() && !taskAlreadyExist(task)) {
      addTask(task);
      setNotificationContent('Task added ✅');
    }
    setTask('');
  };

  // Use effects to set the task to local storage
  useEffect(() => {
    localStorage.setItem('listTask', JSON.stringify(listTask));
  }, [listTask]);

  // Use effect to see the notification
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowNotification(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, [showNotification]);

  // Functions

  // Get task from localStorage
  const getTaskFromLocalStorage = () => JSON.parse(localStorage.getItem('listTask'));

  // Check if task already exists in localStorage
  const taskAlreadyExist = (currentTask) => {
    const storedTasks = getTaskFromLocalStorage();
    if (storedTasks) {
      const valueArr = storedTasks.map((task) => task.task.toLowerCase());
      const isDuplicated = valueArr.includes(currentTask.toLowerCase());
      return isDuplicated;
    }
    return false;
  };

  // Add task to state
  const addTask = (currentTask) => {
    setListTask([
      ...listTask,
      {
        task: currentTask,
        isCompleted: false,
        date: getCompleteDate(),
      },
    ]);
  };

  // Check if the input is empty
  const itsInputEmpty = () => {
    setShowNotification(true);
    return task === '';
  };

  // Set done for a specific task
  const onDoneTask = (index) => {
    if (editTask.index === index) {
      const updatedTasks = [...listTask];
      updatedTasks[index].task = editTask.value;
      setListTask(updatedTasks);
      setEditTask({ index: null, value: '' });
      setIsEditing(false);
    } else {
      const updatedTasks = [...listTask];
      updatedTasks.splice(index, 1);
      setListTask(updatedTasks);
    }
  };

  // Open task to edit
  const onEditTask = (index) => {
    const taskToEdit = listTask[index];
    setEditTask({ index: index, value: taskToEdit.task });
    setIsEditing(true);
  };

  // Function to get the current date
  const getCompleteDate = () => {
    const date = new Date();
    let currentDay = String(date.getDate()).padStart(2, '0');
    let currentMonth = String(date.getMonth() + 1).padStart(2, '0');
    let currentYear = date.getFullYear();
    return `${currentDay}-${currentMonth}-${currentYear}`;
  };

  const onConfirmEdit = () => {
    if (isEditing) {
      const updatedTasks = [...listTask];
      updatedTasks[editTask.index].task = editTask.value;
      setListTask(updatedTasks);
      setEditTask({ index: null, value: '' });
      setIsEditing(false);
      localStorage.setItem('listTask', JSON.stringify(updatedTasks));
    }
  };

  // onDeleteAllTask
  const onDeleteAllTasks = function () {
    setListTask([]);
    localStorage.removeItem('listTask');
  };

  const setNotificationMessage = function () {
    if (taskAlreadyExist(task)) setNotificationContent('Task already exists 🔁');
    else if (!task) setNotificationContent('Enter a task please 📝');
    setShowNotification(true);
  };

  return (
    <React.Fragment>
      {showNotification && <Notification content={notificationContent} className={classNotification} />}
      <TitleForm />
      <InputField onSubmit={onSubmit} task={task} setTask={setTask} />
      <TaskContainer>
        {listTask.length === 0 && <NoTaskMessage />}
        {listTask.slice(0).reverse().map((task, index) => (
          <TaskItem
            key={index}
            task={task.task}
            index={listTask.length - index - 1}
            onEditTask={onEditTask}
            onDoneTask={onDoneTask}
            editTask={editTask}
            setEditTask={setEditTask}
            onConfirmEdit={onConfirmEdit}
            isEditing={isEditing}
          />
        ))}
      </TaskContainer>
      {listTask.length > 0 && <RemoveAllTask onDeleteAll={onDeleteAllTasks} />}
    </React.Fragment>
  );
};

export default App;