import React from 'react';

const TaskItem = ({
  task,
  index,
  onEditTask,
  onDoneTask,
  editTask,
  setEditTask,
  onConfirmEdit,
}) => {
  const handleEditClick = () => {
    onEditTask(index);
  };

  const handleDoneClick = () => {
    onDoneTask(index);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onConfirmEdit();
  };

  const handleInputChange = (e) => {
    setEditTask({ index, value: e.target.value });
  };

  return (
    <div>
      {editTask.index === index ? (
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={editTask.value}
            onChange={handleInputChange}
          />
          <button type="submit">Confirm</button>
        </form>
      ) : (
        <div>{task}</div>
      )}
      <button onClick={handleEditClick}>Edit</button>
      <button onClick={handleDoneClick}>Done</button>
    </div>
  );
};

export default TaskItem;