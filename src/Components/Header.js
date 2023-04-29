import React from 'react';
import { useSelector } from 'react-redux';

const Header = ({ setPage }) => {
    const carts = useSelector((state) => state.carts);
    const totalProducts = carts.reduce((acc, cart) => acc + cart.addedProducts, 0);

    return (
        <>
            {/* <!-- Navbar --> */}
            <nav className="bg-[#171C2A] py-4">
                <div className="navBar">
                    <a href="index.html">
                        <img src="./images/logo.png" alt="LWS" className="max-w-[140px]" />
                    </a>
                    <div className="flex gap-4">
                        <a href='#' className="navHome" id="lws-home" onClick={() => setPage('home')}> Home </a>
                        <a href='#' className="navCart" id="lws-cart" onClick={() => setPage('cart')}>
                            <i className="text-xl fa-sharp fa-solid fa-bag-shopping"></i>
                            <span id="lws-totalCart">{totalProducts}</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header