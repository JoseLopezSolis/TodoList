import Button from '../UI/Button'
const Todos = function(props){
  return(
    <li>{props.todo} <Button class={'delete'} onClick={props.method.onDoneTask}>Done</Button> <Button class={'edit'} onClick={props.method.onEditTask}>edit</Button></li>
  )
}
export default Todos;