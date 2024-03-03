import React from 'react'
import ActionButton from '../../components/common/ActionButton';
import QuantityButton from '../../components/common/QuantityButton/QuantityButton';
import { Typography } from '@mui/material';
import './style.scss';

const ShoppingCartItem = ({itemInfo}) => {
    const {itemImage, itemName, itemPrice, itemSKU, itemQuantity} = itemInfo;



    return (
        <div className="_shopping-cart-item-container">
            <div className="_sci-image">
                <img src={''} alt={itemName} />
            </div>
            <div className="_sci-details">
                <Typography>{itemName}</Typography>
                <Typography>{itemPrice}</Typography>
                <Typography>{`SKU: ${itemSKU}`}</Typography>
            </div>
            <div className="_sci-quantity">
                <QuantityButton quantity={itemQuantity}/>
            </div>
        </div>
    )
}

const ShoppingCart = () => {

    const [cartItems, setCartItems] = React.useState([
        {
            itemName: 'Motorcyles Gloves',
            itemSKU: 'SKU-1',
            itemPrice: '$45.5',
            itemImage: '',
            itemQuantity: 1
        }
    ]);
  return (
    <div className="_shopping-cart-container">
        {/* Header */}
        <div className="_sc-content">
            <div className="_scc-heading">
                <Typography>Shopping Cart</Typography>
            </div>
            <div className="_scc-body">
                {cartItems.map((item, index) => (
                    <ShoppingCartItem itemInfo={item} key={`${item.itemSKU}-${index}`}/>
                ))}
            </div>
            <div className="_scc-actions">
                <ActionButton buttonText={'Continue Shopping'}/>
                <ActionButton buttonText={'Proceed to Checkout'} />
            </div>
        </div>
        {/* Footer */}
    </div>
  )
}

export default ShoppingCart