import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React, {Fragment} from 'react';
import Classes from './TaskItem.module.css';
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
    <Fragment>

    <div className={Classes['task-container']}>
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
        <div className={Classes.task}>
          {task}
        </div>
      )}
      <FontAwesomeIcon className={Classes.icon} icon={faEdit} onClick={handleEditClick}/>
      <FontAwesomeIcon className={Classes.icon} icon={faTrashAlt} onClick={handleDoneClick} />
    </div>
    </Fragment>
  );
};

export default TaskItem;