import Classes from './TaskContainer.module.css'
const TaskContainer = function({children}){
  return(
    <div className={Classes['task-container']}>
      <div className={Classes.container}>
        {children}
      </div>
    </div>
  )
}

export default TaskContainer;