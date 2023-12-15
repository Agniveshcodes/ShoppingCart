import React from 'react';

// Cart Ui is here 
function CartPage({ product , quantity , handleValue , handleRemove }) {

    return ( 
        <>
            <div
            className=' flex border-2 border-gray-700   py-2 w-180 mx-auto my-3 justify-around items-center rounded-md mb-1 -space-x-4 hover:bg-yellow-100 cursor-pointer '
            >
                
                   <button
                   className=' text-xl text-orange-500 font-bold '
                   onClick={()=>{
                    handleRemove(product.id)
                   }}
                   >
                        X
                   </button>
                

                <div
                className=' w-10 h-10 overflow-hidden rounded-md '
                >
                    <img src={product.thumbnail} alt=""  className=' object-cover object-center w-full h-full' />
                </div>

                <h1
                className=' text-md text-orange-500 font-serif font-bold '
                >{product.title}</h1>

                <h1
                className='text-md text-orange-500 font-serif font-bold '
                >${product.price}</h1>

                <input type="number" 
                value={quantity}
                className='text-xl px-1 py-1 w-10 text-orange-500 font-serif font-bold '
                onChange={(e)=>{
                    handleValue(+e.target.value , product.id )
                }}
                />

                <h1
                className=' text-md font-bold text-orange-500 mr-20 '
                >
                    ${
                        product.price * quantity
                    }
                </h1>

            </div>
        </>
     );
}

export default CartPage ;