import { Button } from '@mui/material'
import React from 'react'

const ActionButton = ({buttonText, buttonAction, buttonTheme}) => {
  return (
    <div className="_action-btn-container">
        <Button variant="contained" onClick={buttonAction}>{buttonText}</Button>
    </div>
  )
}

export default ActionButton