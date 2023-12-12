import React, { useState, useEffect } from 'react';
import { ProductInfo } from './Api';
import Products from './Products';
import Loading from './Loading';

// Prdouct list page of the app 
function ProductList() {
    const [product, setProduct] = useState([])
    const[sort, setSort ] = useState("deafult")
    const[query, setQuery] = useState("")
    const[loading, setLoading] = useState(true)
    let data = []

    useEffect(() => {
        ProductInfo().then(function (response) {
            console.log(response)
            setProduct(response)
            setLoading(false)
        })
    }, [])

    data = product.filter(function(items){
        return items.title.toLowerCase().indexOf(query.toLowerCase()) != -1 
    })

    if( sort === "price"){
        data.sort(function( x, y ){
            return  x.price - y.price 
            
        })
    }else if( sort === "title"){
        data.sort(function(x,y){
            return x.title < y.title ? -1 : 1 
        })
    }

    if(loading){
        return <Loading />
    }

    return (
        <>
            <div
                className=' min-h-screen w-full '
            >

                <div
                >
                <div
                className=' w-200 flex justify-between mx-auto mb-2 '
                >
                    <input 
                    type="text" 
                    className=' px-2 py-1 '
                    placeholder='search'
                    value={query}
                    onChange={(e)=>{
                        setQuery(e.target.value)
                    }}
                    />

                    <select name="" id=""
                    value={sort}
                    onChange={(e)=>{
                        setSort(e.target.value)
                    }}
                    className=' px-2 py-1 '
                    >
                        <option value="default"> default sort </option>
                        <option value="price"> price sort </option>
                        <option value="title"> name sort </option>

                    </select>
                </div>

                <div
                id='product'
                    className=' grid grid-cols-3 w-200 bg-indigo-200
                      border-2  px-4 py-4 mx-auto '
                >
                    
                    <Products products={data} />
                    
                </div>


                </div>
              
              


              </div>
        
        </>
    );
}

export default ProductList;