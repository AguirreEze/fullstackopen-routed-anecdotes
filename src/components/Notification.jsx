import React, { useEffect } from 'react'

const Notification = ({ message, setNotification }) => {
  useEffect(() => {
    if (message !== '') { setTimeout(() => setNotification(''), 10000) }
  }, [message])

  return (
    message !== ''
      ? <p>{message}</p>
      : null
  )
}

export default Notification
