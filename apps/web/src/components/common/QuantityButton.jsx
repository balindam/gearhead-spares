import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { IconButton, Typography } from '@mui/material';

const QuantityButton = ({quantity}) => {

    const [quantityValue, setQuantityValue] = React.useState(quantity)

    const handleOnChangeAction = () => {

    }
 
  return (
    <div className="_quantity-btn-container">
        <IconButton>
            <RemoveCircleOutlineIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
    </div>
  )
}

export default QuantityButton