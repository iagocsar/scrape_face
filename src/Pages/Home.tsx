import React from "react"
import { useNavigate } from "react-router-dom"
import { ConfigBot } from "../components/ConfigBot";
import { Container } from "../components/Container";
import { Menu } from "../components/Menu";


export function Home() {

    
    return (
        <div>
            <Menu/>
            <ConfigBot/>
        </div>
        
    )


}
