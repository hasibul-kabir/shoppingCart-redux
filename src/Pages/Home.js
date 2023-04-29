import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../Components/ProductItem';
import { addproduct } from '../REDUX/products/actions';

const Home = () => {
    const products = useSelector((state) => state.products);
    const dispatch = useDispatch();
    const [pName, setpName] = useState('');
    const [category, setCategory] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addproduct({
            pName,
            category,
            img,
            price,
            quantity
        }))
        setpName('');
        setCategory('');
        setImg('');
        setPrice(0);
        setQuantity(0);
    }

    return (
        <>
            <main className="py-16">
                <div className="productWrapper">
                    {/* <!-- products container --> */}
                    <div className="productContainer" id="lws-productContainer">
                        {
                            products.length > 0 ?
                                products.map((product) => <ProductItem key={product.productId} product={product} />)
                                :
                                <h5>No Product Found</h5>
                        }
                    </div>
                    {/* <!-- products container ends --> */}
                    <div>
                        {/* <!-- Product Input Form --> */}
                        <div className="formContainer">
                            <h4 className="formTitle">Add New Product</h4>
                            <form className="space-y-4 text-[#534F4F]" id="lws-addProductForm" onSubmit={handleSubmit}>
                                {/* <!-- product name --> */}
                                <div className="space-y-2">
                                    <label htmlFor="lws-inputName">Product Name</label>
                                    <input className="addProductInput" id="lws-inputName" type="text" value={pName} onChange={(e) => setpName(e.target.value)} required />
                                </div>
                                {/* <!-- product category --> */}
                                <div className="space-y-2">
                                    <label htmlFor="lws-inputCategory">Category</label>
                                    <input className="addProductInput" id="lws-inputCategory" type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                                </div>
                                {/* <!-- product image url --> */}
                                <div className="space-y-2">
                                    <label htmlFor="lws-inputImage">Image Url</label>
                                    <input className="addProductInput" id="lws-inputImage" type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
                                </div>
                                {/* <!-- price & quantity container --> */}
                                <div className="grid grid-cols-2 gap-8 pb-4">
                                    {/* <!-- price --> */}
                                    <div className="space-y-2">
                                        <label htmlFor="ws-inputPrice">Price</label>
                                        <input className="addProductInput" type="number" id="lws-inputPrice" value={price} onChange={(e) => setPrice(e.target.value)} required />
                                    </div>
                                    {/* <!-- quantity --> */}
                                    <div className="space-y-2">
                                        <label htmlFor="lws-inputQuantity">Quantity</label>
                                        <input className="addProductInput" type="number" id="lws-inputQuantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
                                    </div>
                                </div>
                                {/* <!-- submit button --> */}
                                <button type="submit" id="lws-inputSubmit" className="submit">Add Product</button>
                            </form>
                        </div>
                        {/* <!-- Product Input Form Ends --> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home