import { Fragment, useEffect, useState } from "react";
import Classes from "./CurrentDate.module.css";

const CurrentDate = function () {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = { 
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'America/Mexico_City' // Set the desired time zone
  };

  const formattedDate = date.toLocaleDateString('US', options);

  return (
    <Fragment>
      <div className={Classes.date}>
        <span className={Classes.date}>{formattedDate}</span>
      </div>
    </Fragment>
  );
};

export default CurrentDate;