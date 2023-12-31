
import Classes from './InputField.module.css'
import { Fragment } from 'react';

const inputField = function(props) {
  return (
    <Fragment>
      <div className={Classes['form-container']}>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            value={props.task}
            onChange={(e) => props.setTask(e.target.value)}
            placeholder="Enter a new task"
          />
          <span class="material-symbols-outlined" onClick={props.onSubmit}>send</span>
          <input type="submit" onClick={props.onSubmit} />
        </form>
      </div>
    </Fragment>
  );
};

export default inputField;