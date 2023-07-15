import {Fragment} from  'react'
const inputFied = function(props){
  return (
    <Fragment>
    <form onSubmit={(e)=> e.preventDefault()}>
      <input type="text" value={props.task} onChange={(e) => props.setTask(e.target.value)} placeholder='Enter a new task'/>
      <input type="submit" onClick={props.onSubmit}/>
    </form>
  </Fragment>
  )
}

export default inputFied;