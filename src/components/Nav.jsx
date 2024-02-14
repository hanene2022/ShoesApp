
import NikeLogo  from "../assets/nike-logo.svg?react";
import {RxHamburgerMenu} from "react-icons/rx";
const ROUTES =["Home","About","Services","Princing", "Contact"]
export  function Nav() {
  return (
    <nav className="flex  flex-wrap item-center justify-between">
      {/* logo */}
      <a href="#">  <NikeLogo className="h-20 w-20"/></a>
      {/* button */}
  <button className=" p-2 rounded-lg focus:ring-2 focus:ring-gray-100"><RxHamburgerMenu size={25}/></button>
   {/* menu list */}
   <div className="w-full">
    
    <ul className="  rounded-lg  p-4 border border-gray-100 bg-gray-50 text-lg">
      {ROUTES.map((route,i)=>{
    
      return (
      <li key ={route}  className={` cursor-pointer px-3 py-2 rounded 
      ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"}`}>
        {route}</li>);
    })}</ul>
   </div>


    </nav>
  )
}