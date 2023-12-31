import classes from './Notification.module.css';
import React from 'react'

interface NotificationInterface {
  status: string
  title: string
  message: string
}
export const Notification = ({status, title, message}: NotificationInterface) => {
  let specialClasses = '';

  if (status === 'error') {
    specialClasses = classes.error;
  }
  if (status === 'success') {
    specialClasses = classes.success;
  }

  const cssClasses = `${classes.notification} ${specialClasses}`;

  return (
    <section className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </section>
  );
};
