import React from "react";
import Image from '../assets/side-img-2.jpg'
export default function HomeContent() {
    return(
        <>
            <div className="relative flex justify-end">
                <div className="absolute top-[10rem] left-[15rem] text-left">
                    <h1 className="text-black text-[7rem] font-bold" style={{WebkitTextStroke: '2px #717171'}}>Primordial</h1>
                    <h1 className="text-white text-[3.5rem] font-bold">Casting Magic with Cryptography.</h1>
                    <p className="text-lg text-gray-300 font-medium">Primeordial: Where timeless algorithms meet modern encryption.</p>
                    <p className="text-lg text-gray-300 font-medium">Explore our RSA-inspired solutions for a secure digital future.</p>
                    <button className="bg-[#717171] p-4 text-black font-medium my-2 rounded-lg">Encrypt Your Data</button>
                </div>
               <div className="w-[564px] h-[564px]">
                    <img className="w-[28rem] absolute right-[0rem] top-[-4rem]" src={Image} alt="" />
               </div>
            </div>
        </>
    )
}