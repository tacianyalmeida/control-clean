import {BrowserRouter, Routes, Route} from "react-router-dom"
import ControleLimpeza from "./ControleLimpeza"
import FaleConosco from "./FaleConosco"
import Header from "./Header"
import Home from "./Home"
import Relatorio from "./Relatorio"

const App = ()=>{
    return( 
    <BrowserRouter>
    <Header/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route  path="/Controle de Limpeza" element={<ControleLimpeza/>} />
        <Route  path="/Planilha" element={<Relatorio/>} />
        <Route  path="/Fale conosco" element={<FaleConosco/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    )
}