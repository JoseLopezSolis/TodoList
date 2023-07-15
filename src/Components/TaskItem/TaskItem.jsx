import React, { useState } from 'react';

const TaskItem = ({ task, index, onEditTask, onDoneTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState({ index: null, value: '' });

  const onConfirmEdit = () => {
    if (isEditing) {
      const updatedTasks = [...listTask];
      updatedTasks[index].task = editTask.value;
      setListTask(updatedTasks);
      setEditTask({ index: null, value: '' });
      setIsEditing(false);
      localStorage.setItem('listTask', JSON.stringify(updatedTasks));
    }
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={onConfirmEdit}>
          <input
            type="text"
            value={editTask.value}
            onChange={(e) => setEditTask({ index, value: e.target.value })}
          />
          <button type="submit">Confirm</button>
        </form>
      ) : (
        <div>{task}</div>
      )}
      <button onClick={() => onEditTask(index)}>Edit</button>
      <button onClick={() => onDoneTask(index)}>Done</button>
    </div>
  );
};

export default TaskItem;