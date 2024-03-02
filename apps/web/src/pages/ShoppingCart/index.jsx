import React from 'react'
import ActionButton from '../../components/common/ActionButton';
import QuantityButton from '../../components/common/QuantityButton';

const ShoppingCartItem = ({itemInfo}) => {
    const {itemImage, itemName, itemPrice, itemSKU, itemQuantity} = itemInfo;



    return (
        <div className="_shopping-cart-item-container">
            <div className="_sci-image">

            </div>
            <div className="_sci-details">

            </div>
            <div className="_sci-quantity">
                <QuantityButton />
            </div>
        </div>
    )
}

const index = () => {

    const [cartItems, setCartItems] = React.useState([]);
  return (
    <div className="_shopping-cart-container">
        {/* Header */}
        <div className="_sc-content">
            <div className="_scc-heading">
                Shopping Cart
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

export default index