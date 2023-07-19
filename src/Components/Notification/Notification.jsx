import React from 'react';
import { Fragment } from 'react';
import Classes from './Notification.module.css';

const Notification = function (props) {
  return (
    <Fragment>
      <div className={`${Classes['notification-container']} ${props.className}`}>
        <span className={Classes['notification-background']}>
          <span className={Classes['notification-text']}>{props.content}</span>
        </span>
      </div>
    </Fragment>
  );
};

export default Notification;