import React from "react";

export default function Coins({name, image, symbol, price, volume, priceChange, marketcap }) {
    return(
        <div className="flex justify-center font-sans space-x-6 lg:overflow-x-hidden">
            <div className="flex flex-row justify-start items-center border-b h-30">
                <div className="flex items-center pr-1.5 ">
                    <img src={image} className="lg:h-20 w-20 mr-10 p-4" alt="hand" />
                    <h1 className="text-xl w-24 text-green-500">{name}</h1>
                    <p className="uppercase w-40 m-5 text-white">{symbol}</p>
                </div>
                <div className="flex justify-between text-center w-full text-white">
                   
                    <p className="w-40"><label className="text-indigo-700 text-center m-10">Price<br></br></label>${price}</p>
                    <p><label className="text-indigo-700 text-center m-10">Total Volume<br></br></label>${volume.toLocaleString()}</p>
                    {priceChange < 0 ? (
                        <p className=" text-red-500">
                            <label className="text-indigo-700 text-center m-10">Down<br></br></label>
                            {priceChange.toFixed(2)}%</p>
                        ) : (
                            
                        <p className=" text-green-500">
                          <label className="text-indigo-700 text-center m-10">Top<br></br></label>    
                        {priceChange.toFixed(2)}%</p>)
                }
                <p className="space-x-6">
                   <label className="text-indigo-700 text-center m-10">Mkt Cap:<br></br></label> ${marketcap.toLocaleString()}
                </p>
                </div>
            </div>
        </div>
    )
}