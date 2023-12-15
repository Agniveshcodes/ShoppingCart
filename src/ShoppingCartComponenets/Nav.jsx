import React from 'react';
import { FaCartPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
// navbar of app 
function Nav({ cartCount }) {
    return (
        <>

            <div
                className=' w-200 flex justify-between px-5 py-2 items-center mb-10  bg-indigo-200 mx-auto  '
            >
                <div>
                    <Link
                        to={"/"}
                    >
                        <img src="https://media.istockphoto.com/id/1361979526/vector/map-pin-place-marker-location-vector-icon-pin-point-icon-vector-logo-destination-logo-online.jpg?s=612x612&w=0&k=20&c=yzhK0497GmC9efCCGb02go0uj_HiUMQEtmDduY9Qmzs=" alt=""
                            className='w-10'
                        />
                    </Link>
                </div>

                <Link
                    to={"/cart"}
                >
                    <div
                        className=' flex cursor-pointer '
                    >
                        <FaCartPlus
                            className=' text-4xl text-orange-400 '
                        />
                        <span
                            className=' text-3xl text-orange-500 font-bold '
                        >{cartCount}</span>
                    </div>
                </Link>

            </div>
        </>
    );
}

export default Nav;