import React from 'react';
import { Link } from 'react-router-dom';

// how or product will look is designed here 
function ProductCard({ product  }) {


    return (
        <>
            <Link
            to={"/productdetail/" + product.id }
            >
            <div
            className=' p-2 gap-2 border-black w-60 h-96 flex flex-col flex-start mb-4 cursor-pointer bg-white ml-6 shadow-gray-500 shadow-lg'
            >
                <div
                className=' w-50 h-60 overflow-hidden '
                >
                    <img 
                    className=' w-full object-cover object-center '
                    src={product.thumbnail} alt="" />
                </div>

                <div
                className=' flex flex-col flex-start font-bold text-xl  font-serif'
                >
                    <h1> {product.title} </h1>
                    <h1> {product.brand} </h1>
                    <h1> {product.rating}* </h1>
                    <h1> ${product.price}  </h1>
                    <h1> Free Delivery </h1>
                </div>

                <div
                className=' w-fit  font-minibold font-serif px-2 py-1 bg-orange-500 rounded-md'
                >
                   
                view details
                   
                </div>

            </div>
            </Link>
              
        </>
    );
}

export default ProductCard;