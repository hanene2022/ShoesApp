import { TbShoppingBag } from "react-icons/tb"; 

import NikeLogo  from "../assets/nike-logo.svg?react";
import {RxHamburgerMenu} from "react-icons/rx";
import { useState } from "react";
const ROUTES =["Home","About","Services","Princing", "Contact"]
export  function Nav() {
  const [isMobileMenuShow,setIsMobileMenuShow]= useState(false)
  return (
    <nav className="flex  flex-wrap item-center justify-between">
      {/* logo */}
      <a href="#">  <NikeLogo className="h-20 w-20"/></a>
      {/* button */}
  <button onClick= {()=>setIsMobileMenuShow(!isMobileMenuShow)} 
  
  className="  lg:hidden p-2 rounded-lg focus:ring-2 focus:ring-gray-200"><RxHamburgerMenu size={25}/></button>
   {/* menu list */}
   <div className={`${
    isMobileMenuShow === false &&"hidden"
   }
    w-full lg:w-auto lb:block`}>
    
    <ul className="lg:space-x-8 flex 
    flex-col 
    lg:flex-row
     rounded-lg 
      p-4 border
       border-gray-100
     bg-gray-50 
     text-lg
     lg:bg-transparent
     lg boerder-none">
      {ROUTES.map((route,i)=>{
    
      return (
      <li key ={route}  className={` cursor-pointer px-3 py-2 rounded 
      ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"}`}>
        {route}</li>);
    })}</ul>
   </div>
{/* cart button */}


<div className="fixed bottom-4
left-4 lg:static">
<div className="rounded-full
 bg-white shadow-md
 flex-center
 h-12 w-12">
<TbShoppingBag />
</div>
</div>

    </nav>
  )
}