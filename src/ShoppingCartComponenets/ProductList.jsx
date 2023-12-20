import React, { useState, useEffect } from 'react';
import { ProductInfo } from './Api';
import Products from './Products';
import Loading from './Loading';
import Nomatch from './Nomatch';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { range } from "lodash"

// Prdouct list page of the app 
function ProductList() {
    const [productData, setProductData ] = useState()
    const[loading, setLoading] = useState(true)




    const [ searchParams , setSearchParams ] = useSearchParams()

    const params = Object.fromEntries([...searchParams])

    let { search , page , sort } = params

     page = +page || 1 ; 
     sort = sort || "default" ;
     search = search || "" ;

    


    useEffect(() => {

        let sortType
        let sortBy

        if( sort == "price"){
            sortBy = "price"
            sortType = "desc"
        }else if(sort == "title"){
            sortBy = "title"
        }


        ProductInfo( sortBy , search, page , sortType ).then(function (response) {
            setProductData(response)
            setLoading(false)
        })
    }, [ sort , search , page ])

   

    if(loading){
        return <Loading />
    }

    console.log(page)

    

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
                    value={search}
                    onChange={(e)=>{
                        setSearchParams({ ...params , search : e.target.value , page: 1 } , {replace :  false})
                    }}
                    />

                    <select name="" id=""
                    value={sort}
                    onChange={(e)=>{
                        setSearchParams({...params , sort:e.target.value } , {replace : false})
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
                    
                   { productData.data.length > 0 &&  <Products products={productData.data} />}

                  <div
                  className=' w-200 items-center flex justify-center'
                  >
                     { productData.data.length == 0 && <Nomatch /> } 
                  </div>
                    
                </div>

                <div className=' flex bg-white gap-4  p-2 m-2 w-200 mx-auto '>
                    {
                        ( range ( 1 , productData.meta.last_page + 1).map(
                            function( items){
                                return <Link
                                to={ '?' + new URLSearchParams({ ...params , page:items }) }
                                className={' p-2 font-bold text-black rounded-md  ' + ( page === items ? "bg-orange-100" : "bg-orange-500")}
                                > {items} </Link>
                            }
                        ))
                    }
                </div>


                </div>
              
              


              </div>
        
        </>
    );
}

export default ProductList