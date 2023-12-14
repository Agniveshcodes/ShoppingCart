import React , {useEffect,useState} from 'react';
import { IoArrowBackCircleOutline , IoArrowForwardCircleOutline} from "react-icons/io5"
import { ProductId } from './Api';
import { Link, useParams } from 'react-router-dom';
import { GoDash } from "react-icons/go";
import { CiSquarePlus } from "react-icons/ci";
import Loading from './Loading';


// product details will be here 
function ProductDetail({CartCount}) {
    const[products, setProducts] = useState()
    const[count, setCount] = useState(1)
    const[loading , setLoading] = useState(true)
    const id = +useParams().id

     useEffect(()=>{
        ProductId(id).then(function(response){
            setProducts(response)
            setLoading(false) 
        })
      } ,[id])

      if(loading){
        return <Loading />
      }

      if(!products){
            return <div>
                product not found 
            </div>
      }

      if(count < 1) {
        setCount(1)
      }

    return ( 
        <>
           <div
           className=' bg-white w-200 border-2 border-black mx-auto h-fit flex overflow-hidden p-2 '
           >
            <div
            className=' w-1/3  h-full flex my-auto'
            >
                <img src={products.thumbnail} alt="" 
                className=' object-cover object-center overflow-hidden h-60  '
                />
                
            </div>

            <div
            className=' w-2/3 flex flex-col  h-full'
            >
                <div
                className=' flex justify-end mr-2 '
                >
                    <Link
                    to={"/"}
                    >
                    <IoArrowBackCircleOutline 
                    className=' text-4xl font-bold'
                    />
                    </Link>
                </div>

                <div
                className=' text-2xl font-minibold font-serif  m-8'
                >
                    <h1
                    className='text-4xl mb-2 '
                    > {products.title} </h1>
                    <h1
                    className=' mb-2 font-bold '
                    > ${products.price} </h1>
                    <h1
                    className=' mb-2 text-lg text-orange-500   '
                    > {products.description} </h1>

                    <div
                    className=' mb-4 flex mx-2 '
                    >
                        <div
                        className=' mx-2 flex items-center gap-2 cursor-pointer '
                        >
                            <GoDash 
                            className=' text-3xl border-2 border-black px-1 py-1 rounded-md '
                            onClick={()=>{
                                setCount(count - 1)
                            }}
                            />
                            <input 
                            type="text" 
                            className=' w-10 text-center border-2 rounded-md '
                            value={count}
                            onChange={(e)=>{
                                setCount(+(e.target.value))
                            }}
                            />
                            <CiSquarePlus 
                            className='text-4xl '
                            onClick={()=>{
                                setCount(count + 1)
                            }}
                            />
                        </div>

                        <div>
                        <button
                        className='w-fit  font-minibold font-serif px-2 py-1 bg-orange-500 rounded-md'
                        onClick={()=>{
                            setCount(1)
                            CartCount(id , count)
                        }}
                        >
                            add to cart 
                        </button>
                        </div>
                    </div>

                    <hr />
                        
                    <h1>
                        category : <span className=' text-2xl text-orange-600'>{products.category}</span>
                    </h1>
                </div>

            </div>

           </div>

           <div
           className=' w-200 flex justify-between my-2 mx-auto cursor-pointer'
           >
           <Link
           to={'/productdetail/' + (id - 1)}
           >
           <IoArrowBackCircleOutline 
                    className=' text-4xl font-bold'
                    
                    />
           </Link>

            <Link
            to={'/productdetail/' + (id + 1)}
            >
            <IoArrowForwardCircleOutline 
                    className='text-4xl font-bold'
            />
            </Link>

           </div>
        </>
     );
}

export default ProductDetail ;