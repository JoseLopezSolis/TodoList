import { Fragment } from "react";
import Classes from './Titleform.module.css'
import CurrentDate from "../CurrentDate/CurrentDate";
const TitleForm = function(){
  return(
    <Fragment>
      <div className={Classes['header-container']}>
        <CurrentDate/>
        <h1 className={Classes.h1}>Task to do</h1>
      </div>
    </Fragment>
  )
}

export default TitleForm;