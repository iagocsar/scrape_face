import React, { useEffect, useState } from "react"
import { useNavigate  } from "react-router-dom"


export function Login() {



    const [loading, setLoading] = useState(false);
    const navigate  = useNavigate()

    useEffect(()=> {
        if(loading && localStorage.getItem("token") !== null ) {
            navigate("/home")
        }
    }, [loading, navigate]);

    const login = ()=> {
        setLoading(true);
        setTimeout(() => {
            localStorage.setItem("token", "token");
            setLoading(false)
        }, 2000)
        
    };

    return (
        <div className="flex justify-center text-white bg-neutral-800 p-20 w-screen h-screen font-bold">
            <form method="get" action="/home" name="form">
            <div className="items-center text-center p-4 bg-neutral-600 rounded-2xl ">
            <h1 className="text-2xl border-b border-r-inherit mb-6 p-6">Login</h1>
            
            <div className="flex-inline mb mt-12" >
                    <label className="mr-4">Usuário</label>
                    <input className=" text-gray-400 font-normal p-1" type="text" name="email" id="email" placeholder="E-mail"/>
                </div>   

                <div className="mt-12 mb-4">
                    <label className="mr-4">Senha</label>
                    <input className="text text-gray-400 font-normal p-1" type="password" name="email" id="password" placeholder="Senha"/>
                </div>
            
            <div>
            </div>
                {loading && <div className="loader duration-300"> Conectando...</div>}
                <button type="submit" className="px-8 py-2 mt-6 rounded-lg bg-neutral-800 shadow shadow-black hover:bg-neutral-600 duration-500" onClick={login}>Entrar</button>
                
            
            </div>
            </form>
        </div>
    )
}