import { Button } from '@mui/material'
import React from 'react'

const ActionButton = ({buttonText, buttonAction, buttonTheme}) => {
  return (
    <div className="_action-btn-container">
        <Button onClick={buttonAction}>{buttonText}</Button>
    </div>
  )
}

export default ActionButton