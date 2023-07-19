import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faCheck } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment } from 'react';
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
          <form onSubmit={handleFormSubmit} className={Classes['form']}>
            <input
              type="text"
              value={editTask.value}
              onChange={handleInputChange}
              className={Classes['input-update']}
            />
          </form>
        ) : (
          <div className={Classes.task}>{task}</div>
        )}
         <FontAwesomeIcon
          className={Classes.green}
          icon={faCheck}
          onClick={handleDoneClick}
        />
        <FontAwesomeIcon
          className={Classes.blue}
          icon={faPencilAlt}
          onClick={handleEditClick}
        />
      </div>
    </Fragment>
  );
};

export default TaskItem;