import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import { AiOutlineClose ,AiOutlineMenu } from "react-icons/ai";
import { RiRobot3Line } from "react-icons/ri";

const Navbar = () => {
    // console.log("\iewjdij");
    const [clicked, setClicked] =useState(false)

    const[menu, setMenu] = useState(false);
    const handleChange=()=>{
        setMenu(!menu)
    }
    const closeMenu =()=>{
        setMenu(false)
    }


  return (
    <div>
    <div className="flex flex-row justify-between p-5 md:px-32 px-5 bg-teal-500">
        <div className='flex flex-row items-center cursor-pointer'>

            {/* <h1>rf3r43r</h1> */}
            <RiRobot3Line  color="white" size={40}/>
            <Link>
                <h1 className="text-white text-xl font-medium px-1">Name</h1>
            </Link>
        </div>
        <nav  className=" hidden lg:flex flex-row items-center text-lg font-medium gap-8">
            <Link to={"/"}  className="cursor-pointer text-white hover:text-gray-200"> Home </Link>
            <Link to={"/about"} className="cursor-pointer text-white hover:text-gray-200">About</Link>

            <Link to={"/contactus"} className="cursor-pointer text-white hover:text-gray-200" >Contact Us</Link>
        </nav>

        <div className="lg:hidden flex items-center">
            {/* {menu?(
                    <AiOutLineClose size ={28} onClick = 
                ): " "

            } */}

            {menu ? ( <AiOutlineClose  color="white" size={28} onClick={handleChange} />): ( <AiOutlineMenu color="white" size={28} onClick={handleChange} /> ) }
        </div>
    </div>
    {/* <div className={`${menu ? "translate-x-0" : "-translate-x-full"}  lg:hidden flex flex-col absolute text-black left-0 top-16 font-medium text-2xl text-center pt-8 pb-4 gap-10 w-full transition-transform duration-500 bg-gray-500 rounded-md bg-clip-padding  backdrop-blur-xl bg-opacity-10 h-full`}>
            
            
            <Link to={"/"}  className="cursor-pointer text-black"> Home </Link>
            <Link to={"/about"} className="cursor-pointer text-black ">About</Link>

            <Link to={"/contactus"} className="cursor-pointer text-wh text-black" >Contact Us</Link>
    
    
    </div> */}

<div className={`${menu ? "translate-x-0" : "-translate-x-full"}  lg:hidden flex flex-col items-center gap-2 bg-teal-500`}>
            
            
            <Link to={"/"}  className="cursor-pointer text-white font-semibold"> Home </Link>
            <Link to={"/about"} className="cursor-pointer text-white  font-semibold">About</Link>

            <Link to={"/contactus"} className="cursor-pointer text-wh text-white mb-3 font-semibold" >Contact Us</Link>
    
    
    </div>

</div>




  )
}

export default Navbar
