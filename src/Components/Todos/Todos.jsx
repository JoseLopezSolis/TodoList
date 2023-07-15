import Button from '../UI/Button'
const Todos = function(props){
  return(
    <li>{props.todo} <Button class={'delete'}>Done</Button> <Button class={'edit'}>edit</Button></li>
  )
}
export default Todos;