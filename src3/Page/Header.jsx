import { Nav } from "../style-components/Header";
import {Link }from "react-router-dom"
import React from "react";

const Header = ()=>{
    return
        (
        <Nav style={{backgroundColor: '#152473'}}>
            <Link className='home' to='/'>Home</Link>
            <Link className='controle' to='/ControleLimpeza'>Controle/Limpeza</Link>
            <Link className='Planilha' to='/Relatorio'>Planilha</Link>
            <Link className='Contato' to='/FaleCononsco'>Contato</Link>
        </Nav>
        )
    }
    export default Header; 