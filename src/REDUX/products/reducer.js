import { ADDPRODUCT, ADDTOCART, DELETECARTITEM, DECREASECARTITEM, INCREASECARTITEM } from "./actionTypes";

const initialState = {
    products: [],
    carts: []
}

const generatePId = (productsArr) => {
    const maxId = productsArr.reduce((acc, product) => Math.max(acc, product.productId), -1);
    return maxId + 1;
}
const generateCId = (products) => {
    const maxId = products.reduce((acc, product) => Math.max(acc, product.id), -1);
    return maxId + 1;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPRODUCT:
            const { pName, category, img, price, quantity } = action.payload;
            return {
                ...state,
                products: [
                    ...state.products,
                    {
                        productId: generatePId(state.products),
                        productName: pName,
                        category: category,
                        imageUrl: img,
                        productPrice: price,
                        productQuantity: quantity
                    }
                ]
            }

        case ADDTOCART:
            //to maintain cart
            const { pId, ciName, ciCategory, ciImg, ciPrice } = action.payload;
            const exists = state.carts?.find((cartItem) => cartItem.productId === pId);

            //to maintain stock quantity
            const triggeredProduct = state.products.find((product) => product.productId === pId);
            const updatedProduct = {
                ...triggeredProduct,
                productQuantity: triggeredProduct.productQuantity > 0 ? triggeredProduct.productQuantity - 1 : triggeredProduct.productQuantity
            }
            const otherProducts = state.products.filter((product) => product.productId !== pId);
            if (!exists) {
                return {
                    ...state,
                    products: [
                        ...otherProducts,
                        updatedProduct
                    ],
                    carts: [
                        ...state.carts,
                        {
                            id: generateCId(state.carts),
                            productId: pId,
                            productName: ciName,
                            category: ciCategory,
                            imageUrl: ciImg,
                            productPrice: ciPrice,
                            addedProducts: 1
                        }
                    ]
                }
            } else {
                const existsItem = {
                    ...exists,
                    addedProducts: exists.addedProducts + 1
                }
                const others = state.carts?.filter((cartItem) => cartItem.productId !== pId)
                return {
                    ...state,
                    products: [
                        ...otherProducts,
                        updatedProduct
                    ],
                    carts: [
                        ...others,
                        existsItem
                    ]
                }
            }

        case INCREASECARTITEM:
            // to maintain stock quantity
            const triggeredProductInc = state.products.find((product) => product.productId === action.payload);
            const updatedProductInc = {
                ...triggeredProductInc,
                productQuantity: triggeredProductInc.productQuantity > 0 ? triggeredProductInc.productQuantity - 1 : triggeredProductInc.productQuantity
            }
            const otherProductsInc = state.products.filter((product) => product.productId !== action.payload);

            //to maintain cart
            const triggeredItemInc = state.carts.find((item) => item.productId === action.payload);
            const modifiedItemInc = {
                ...triggeredItemInc,
                addedProducts: triggeredProductInc.productQuantity > 0 ? triggeredItemInc.addedProducts + 1 : triggeredItemInc.addedProducts
            }
            const othersInc = state.carts?.filter((cartItem) => cartItem.productId !== action.payload);
            return {
                ...state,
                products: [
                    ...otherProductsInc,
                    updatedProductInc
                ],
                carts: [
                    ...othersInc,
                    modifiedItemInc
                ]
            }

        case DECREASECARTITEM:
            //to maintain cart
            const triggeredItem = state.carts.find((item) => item.productId === action.payload);
            const modifiedItem = {
                ...triggeredItem,
                addedProducts: triggeredItem.addedProducts > 1 ? triggeredItem.addedProducts - 1 : triggeredItem.addedProducts
            }
            const others = state.carts?.filter((cartItem) => cartItem.productId !== action.payload);

            //to maintain stock product quantity
            const triggeredProductDec = state.products.find((product) => product.productId === action.payload);
            const updatedProductDec = {
                ...triggeredProductDec,
                productQuantity: triggeredItem.addedProducts > 1 ? triggeredProductDec.productQuantity + 1 : triggeredProductDec.productQuantity
            }
            const otherProductsDec = state.products.filter((product) => product.productId !== action.payload);
            return {
                ...state,
                products: [
                    ...otherProductsDec,
                    updatedProductDec
                ],
                carts: [
                    ...others,
                    modifiedItem
                ]
            }

        case DELETECARTITEM:
            //to maintain cart
            const restCartItems = state.carts?.filter((cartItem) => cartItem.productId !== action.payload);

            //to maintain stock product quantity
            const cartItemTodel = state.carts.find((cartItem) => cartItem.productId === action.payload)
            const deletedCartProduct = state.products.find((product) => product.productId === action.payload);
            const updatedProductDelFromCart = {
                ...deletedCartProduct,
                productQuantity: deletedCartProduct.productQuantity + cartItemTodel.addedProducts
            }
            const otherProductsDelAct = state.products.filter((product) => product.productId !== action.payload);
            return {
                ...state,
                products: [
                    ...otherProductsDelAct,
                    updatedProductDelFromCart
                ],
                carts: restCartItems
            }

        default:
            return state;
    }
}

export default reducer;