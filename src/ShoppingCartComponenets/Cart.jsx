import React, { useEffect, useState } from 'react';
import { ProductId } from './Api';
import Loading from './Loading';
import CartRow from './CartRow';

//ComponentDescription
function Cart({cart , updateCart}) {
  const [product ,setProduct ] = useState([])
  const[loading, setLoading] = useState(true)
  
  const productIds = Object.keys(cart)

    console.log("rohit is great")

     

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

    

    

  
    

    if(loading){
      return <Loading />
    }

    

    return ( 
        <>
            
              <CartRow products={product} cart={cart} updateCart={updateCart}/>
        </>
     );
}

export default Cart ;