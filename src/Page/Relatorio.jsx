import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeaderRelatorio, } from "../style-components/Relatorio";

const Relatorio = ()=>{
    return(
        <BrowserRouter> 
        
        <HeaderRelatorio className="HeaderRelatorio" style={{backgroundColor:'#152473'}}/>
        <Routes> 
        <Route path="/" element={<Home/>}/>
         <Route  path="/FaleConosco" element={<FaleConosco/>} />
         <Route  path="/Contato" element={<ControleLimpeza/>} /> 
         </Routes> 
         </BrowserRouter> 
    )
}
export default Relatorio;
