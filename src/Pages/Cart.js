import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../Components/CartItem'

const Cart = () => {
    const cartProducts = useSelector((state) => state.carts);
    const totalPrice = cartProducts.reduce((acc, cartProduct) => acc + (cartProduct.productPrice * cartProduct.addedProducts), 0);
    return (
        <>
            <main className="py-16">
                <div className="container 2xl:px-8 px-2 mx-auto">
                    <h2 className="mb-8 text-xl font-bold">Shopping Cart</h2>
                    <div className="cartListContainer">
                        <div className="space-y-6">
                            {/* <!-- Cart Item --> */}
                            {
                                cartProducts.length > 0 ?
                                    cartProducts.map((product) => <CartItem key={product.id} product={product} />)
                                    :
                                    <h5>No product added to cart </h5>
                            }

                        </div>

                        {/* <!-- Bill Details --> */}
                        <div>
                            <div className="billDetailsCard">
                                <h4 className="mt-2 mb-8 text-xl font-bold text-center">Bill Details</h4>
                                <div className="space-y-4">
                                    {/* <!-- sub total --> */}
                                    <div className="flex items-center justify-between">
                                        <p>Sub Total</p>
                                        <p>BDT <span className="lws-subtotal">{totalPrice}</span></p>
                                    </div>
                                    {/* <!-- Discount --> */}
                                    <div className="flex items-center justify-between">
                                        <p>Discount</p>
                                        <p>BDT <span className="lws-discount">0</span></p>
                                    </div>
                                    {/* <!-- VAT --> */}
                                    <div className="flex items-center justify-between">
                                        <p>VAT</p>
                                        <p>BDT <span className="vat">0</span></p>
                                    </div>
                                    {/* <!-- Total --> */}
                                    <div className="flex items-center justify-between pb-4">
                                        <p className="font-bold">TOTAL</p>
                                        <p className="font-bold">BDT <span className="lws-total">{totalPrice}</span></p>
                                    </div>
                                    <button className="placeOrderbtn">place order</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Cart