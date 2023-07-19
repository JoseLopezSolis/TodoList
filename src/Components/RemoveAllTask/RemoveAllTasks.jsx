import Classes from './RemoveAllTasks.module.css'
import React,{Fragment} from 'react';
const RemoveAllTask = function({onDeleteAll}){
  return(
    <Fragment>
      <span className={Classes['remove-task-container']} onClick={onDeleteAll}>
            Delete all
      </span>
    </Fragment>
  )
}

export default RemoveAllTask;