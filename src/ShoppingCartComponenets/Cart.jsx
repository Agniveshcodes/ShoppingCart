import React, { useEffect, useState } from 'react';
import { ProductId } from './Api';
import Loading from './Loading';

//ComponentDescription
function Cart({cart , updateCart}) {
  const [product ,setProduct ] = useState([])
  const[loading, setLoading] = useState(true)
  const[localCart, setLocalCart] = useState(cart)
  const productIds = Object.keys(cart)

    console.log("rohit is great")

     useEffect(()=>{
        setLocalCart(cart)
      } ,[cart])

    useEffect(()=>{
      const myPromises = productIds.map(function(id){
        return ProductId(id)
      })
  
      Promise.all(myPromises).then(function(products){
        console.log("product are" , products)
         setProduct(products)
         setLoading(false)
      })
    },[cart])

    

    function handleRemove (e) {
      const myCart = {...cart}
      const productId = e.target.getAttribute('productId')
      delete myCart[productId]
      updateCart(myCart)
      setLoading(true)
    }

  
    function handleInput (e) {
      const newValue = +e.target.value
      const productId = e.target.getAttribute('productId')
      console.log("new value and productID " , newValue , productId )
      const newLocalCart = {...localCart , [productId]:newValue }
      setLocalCart(newLocalCart)
    }

    if(loading){
      return <Loading />
    }

    function updateCartValue () {
          updateCart(localCart)
    }

    return ( 
        <>
            <div
            className=' w-200 mx-auto bg-indigo-300 p-8 '
            >
              {
                product.map(function(p){
                  return <div key={p.id}
                  className=' text-4xl text-orange-600 flex gap-5 mb-4 '
                  >
                    {p.title}

                    <input type="number" 
                    className=' w-20 pl-2 text-xl font-bold '
                    value={localCart[p.id]}
                    onChange={handleInput}
                    productId = {p.id}
                    />

                    <button
                    className='text-4xl font-bold text-orange-500 '
                    onClick={handleRemove}
                    productId = {p.id}
                    >
                      X
                    </button>

                    

                  </div>
                })
                
              }
              <button
                    onClick={updateCartValue}
                    className=' bg-indigo-700 text-white px-2 py-1 '
                    >
                      updateCart
                    </button>
            </div>
          
        </>
     );
}

export default Cart ;