import React from "react";
import { Link } from "react-router-dom";




export default function MyNav() {
return(
    <nav className="bg-opacity-0 m-0 px-0 lg:my-0 overflow-x-hidden">
     {/*main div*/}   
     <div className=" ">
        {/*logo and primary links div*/}
        <div className="flex justify-between">
            <div className="flex space-x-8">
               <div> {/*logo div*/}
               <Link to="/cryptotracker" className="flex items-center  text-red-300 text-small">
                  <span className="font-bold  text-lg ml-4 mt-6">CryptozzTracker</span>
                 </Link>
               </div>
               {/*primary nav*/}
               <div className="flex items-center  text-indigo-700 text-tiny mt-4 ">
                 <div className="bg-gradient-to-r from-indigo-500 via-red-300 to-purple-500 rounded p-1 ">
              <div className="flex flex-col items-center bg-slate-800 p-1">
              <button className="p-3 hover:bg-slate-500">  
              <a href="https://prachip1.github.io/cryptozz" target="_blank" className="text-white">Check Crypto News</a></button>
            
               
              </div>
          
            </div>
               
            
               {/* <Link to="" className="py-1  text-slate-200 text-tiny hover:text-red-400">Know Crypto</Link>
                <Link to="" className="py-1  text-slate-200 text-tiny hover:text-red-400">Blog</Link>
                 <Link to="" className="py-1  text-slate-200 text-tiny hover:text-red-400">Contact Us</Link> */}
               </div>  
            </div> 
        
         {/*sign up and login div*/}
       {/* <div className="flex items-center text-tiny space-x-5 bg-white py-2 px-4 rounded-lg -mr-64">
           <Link to="#" className=" text-indigo-600">Log In</Link>
               </div>*/}
        </div>
     
    </div>

    </nav>
)
}