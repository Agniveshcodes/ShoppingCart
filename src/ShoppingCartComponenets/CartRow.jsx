import { useState , useEffect } from 'react';
import React  from 'react';
import CartPage from './CartPage';

// cart list 
function CartRow({ products, cart , updateCart }) {
    const[localCart, setLocalCart] = useState(cart)

    useEffect(()=>{
        setLocalCart(cart)
      } ,[cart])

      function handleInput ( newValue , productId) {
        console.log("new value and productID " , newValue , productId )
        const newLocalCart = {...localCart , [productId]:newValue }
        setLocalCart(newLocalCart)
      }

      function handleRemove (productId) {
        const myCart = {...cart}
        delete myCart[productId]
        updateCart(myCart)
        setLoading(true)
      }


      function updateCartValue () {
        updateCart(localCart)
  }



    return (
        <>
            <div
                className=' w-200 border-2 border-gray-400 pb-2   mx-auto overflow-hidden '
            >
                <div
                    className=' w-200 bg-gray-300 mx-auto p-2'
                >
                    <div
                        className=' w-180 justify-end flex  pr-4  '
                    >
                        <div
                            className=' flex justify-around font-serif font-bold w-fit space-x-20 text-orange-500 text-lg  '
                        >
                            <h1> Product </h1>
                            <h1> Price </h1>
                            <h1> Quantity </h1>
                            <h1> Subtotal </h1>
                        </div>

                    </div>
                </div>

                {products.map(function (p) {
                    return <CartPage product={p} quantity={+localCart[p.id]} 
                    handleValue = {handleInput}
                    handleRemove = {handleRemove}
                    />
                })}

            </div>

            <div
                className=' w-200 flex justify-end border-2 border-gray-300 py-1 px-1  mx-auto my-2 '
            >
                <button
                    onClick={updateCartValue}
                    className=' bg-orange-500 text-white text-xl  px-2 py-1 rounded-md '
                >
                    updateCart
                </button>
            </div>
        </>
    );
}

export default CartRow;