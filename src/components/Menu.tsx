import React from "react"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'
import Global from '../global.css'
import { AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link, NavLink } from "react-router-dom"
import { ModalHref } from "./ModalHref"
import { Home } from "../Pages/Home"


 


export function Menu() {
    const [openModal, setOpenModal] = useState(false) 
    

        const [nav, setNav] = useState(true)

        const handleNav = () => {
            setNav(!nav)
        }


    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token")
        navigate("/");
    };
    
    return (
        <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto  px-4 text-white  ">
            <h1 className="w-full text-3xl font-bold  ">gui_BOT</h1>
            <ul className="hidden md:flex ">

            <li className="p-4 active:bg-neutral-600 hover:bg-neutral-600 rounded-2xl">
            <NavLink
            to="/home">
            Home
          </NavLink>
            </li>
               <li className="p-4 active:bg-neutral-600 hover:bg-neutral-600 rounded-2xl">
                <NavLink
                to="/logs">
            Logs
          </NavLink>
        </li>
            <li className="p-4 active:bg-neutral-600 hover:bg-neutral-600 rounded-2xl">
            <NavLink
            to="/products" >
            Produtos
          </NavLink>
        </li>
               <button onClick={()=> {setOpenModal(true)}}><li  className="p-4  active:bg-neutral-600 rounded-2xl bg-neutral-600 ml-20 hover:bg-neutral-500">Iniciar</li></button> 
               <button onClick={logout} ><li className="p-4 active:bg-neutral-600 hover:bg-neutral-600 rounded-2xl">Sair</li></button> 
            </ul>

            <div onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
            </div>
            
            <div className={!nav ? 'fixed left-0 top-0 w-{60%} h-full border-r border-r-gray-900 bg-[#3c3c3c] ease-in-out duration-500 ' : 'fixed left-[-100%]'}>
                <h1 className="w-ful text-3xl font-bold m-4">gui_BOT</h1>
                
            <ul className="p-4">
               <Link to="/home"><li className="p-4 active:bg-neutral-600 hover:bg-neutral-600">Home</li></Link> 
               <Link to="/logs"><li className="p-4 active:bg-neutral-600 hover:bg-neutral-600">Logs</li></Link> 
               <Link to="/products"><li className="p-4  active:bg-neutral-600 hover:bg-neutral-600">Produtos</li></Link> 
               <a href=""><li className="p-4  active:bg-neutral-600 hover:bg-neutral-600">Iniciar</li></a> 
               <a href=""><li className="p-4  active:bg-neutral-600 hover:bg-neutral-600 ">Sair</li></a> 
            </ul>
            </div>


            {openModal && <ModalHref closeModal={setOpenModal}/>}

            
        </div>

    )
}