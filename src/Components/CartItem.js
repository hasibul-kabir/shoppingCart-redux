import React from 'react'
import { useDispatch } from 'react-redux';
import { decreaseCartItem, deleteCartItem, increaseCartItem } from '../REDUX/products/actions';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const { productId, productName, category, imageUrl, productPrice, addedProducts } = product;
    console.log(addedProducts);

    const handleIncreaseCartItem = () => {
        dispatch(increaseCartItem(productId))
    }
    const handleDecreaseCartItem = () => {
        dispatch(decreaseCartItem(productId))
    }
    const handleDeleteCartItem = () => {
        dispatch(deleteCartItem(productId))
    }
    return (
        <>
            <div className="cartCard">
                <div className="flex items-center col-span-6 space-x-6">
                    {/* <!-- cart image --> */}
                    <img className="lws-cartImage" src={imageUrl} alt="product" />
                    {/* <!-- cart item info --> */}
                    <div className="space-y-2">
                        <h4 className="lws-cartName">{productName}</h4>
                        <p className="lws-cartCategory">{category}</p>
                        <p>BDT <span className="lws-cartPrice">{productPrice}</span></p>
                    </div>
                </div>
                <div className="flex items-center justify-center col-span-4 mt-4 space-x-8 md:mt-0">
                    {/* <!-- amount buttons --> */}
                    <div className="flex items-center space-x-4">
                        <button className="lws-incrementQuantity" onClick={handleIncreaseCartItem}>
                            <i className="text-lg fa-solid fa-plus"></i>
                        </button>
                        <span className="lws-cartQuantity">{addedProducts}</span>
                        <button className="lws-decrementQuantity" onClick={handleDecreaseCartItem}>
                            <i className="text-lg fa-solid fa-minus"></i>
                        </button>
                    </div>
                    {/* <!-- price --> */}
                    <p className="text-lg font-bold">BDT <span className="lws-calculatedPrice">{productPrice * addedProducts}</span></p>
                </div>
                {/* <!-- delete button --> */}
                <div className="flex items-center justify-center col-span-2 mt-4 md:justify-end md:mt-0">
                    <button className="lws-removeFromCart" onClick={handleDeleteCartItem}>
                        <i className="text-lg text-red-400 fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
            {/* <!-- Cart Items Ends --> */}
        </>
    )
}

export default CartItem