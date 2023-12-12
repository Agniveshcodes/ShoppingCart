import React from 'react';
import { Link } from 'react-router-dom';

// how or product will look is designed here 
function ProductCard({ thumbnail , title , price , rating , brand , discountPercentage , id  }) {


    return (
        <>
            <Link
            to={"/productdetail/" + id }
            >
            <div
            className=' p-2 gap-2 border-black w-60 h-96 flex flex-col flex-start mb-4 cursor-pointer bg-white ml-6 '
            >
                <div
                className=' w-50 h-60 overflow-hidden '
                >
                    <img 
                    className=' w-full object-cover object-center '
                    src={thumbnail} alt="" />
                </div>

                <div
                className=' flex flex-col flex-start font-bold text-xl  font-serif'
                >
                    <h1> {title} </h1>
                    <h1> {brand} </h1>
                    <h1> {rating}* </h1>
                    <h1> ${price}  </h1>
                    <h1> {discountPercentage}%  </h1>
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