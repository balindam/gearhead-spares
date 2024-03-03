import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { IconButton, Typography } from '@mui/material';
import './QuantityButton.scss';

const QuantityButton = ({quantity, handleOnChange}) => {

    const [quantityValue, setQuantityValue] = React.useState(quantity)

    const handleOnChangeAction = () => {

    }
 
  return (
    <div className="_quantity-btn-container">
        <IconButton>
            <RemoveCircleOutlineIcon />
        </IconButton>
        <Typography>{quantity}</Typography>
        <IconButton>
          <AddCircleOutlineIcon />
        </IconButton>
    </div>
  )
}

export default QuantityButton