
import Classes from './NoTaskMessage.module.css';
const NoTaskMessage = function(){
  return(
    <div className={Classes.message}>
      <span >
        No task available
      </span>
    </div>
  )
}

export default NoTaskMessage;