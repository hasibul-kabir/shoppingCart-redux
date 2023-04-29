import React from 'react'
import { useDispatch } from 'react-redux';
import { addToCart } from '../REDUX/products/actions';

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const { productId, productName, category, imageUrl, productPrice, productQuantity } = product;
    const handleAddToCart = () => {
        dispatch(addToCart({
            pId: productId,
            ciName: productName,
            ciCategory: category,
            ciImg: imageUrl,
            ciPrice: productPrice
        }))
    }

    return (
        <div className="lws-productCard">
            <img className="lws-productImage" src={imageUrl} alt="product" />
            <div className="p-4 space-y-2">
                <h4 className="lws-productName">{productName}</h4>
                <p className="lws-productCategory">{category}</p>
                <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">BDT <span className="lws-price">{productPrice}</span></p>
                    <p className="productQuantity">QTY <span className="lws-quantity">{productQuantity}</span></p>
                </div>
                {
                    productQuantity > 0 ?
                        <button className="lws-btnAddToCart" onClick={handleAddToCart}>Add To Cart</button>
                        :
                        <button className="lws-btnAddToCart" disabled>Add To Cart</button>
                }
            </div>
        </div>
    )
}

export default ProductItem