import React from 'react';
import ProductCard from './ProductCard';

//ComponentDescription
function Products({products}) {
    return ( 
        <>
        {
            products.map(function(items , index){
                return <ProductCard product={items} key={index} />
            })
        }
         
        </>
     );
}

export default Products ;