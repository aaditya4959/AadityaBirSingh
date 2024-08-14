import {Outlet} from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/footer"


export default function Layout(){
    return (
        <>
            <Header/>
            <Outlet/>    
            <Footer/>
        </>
    )
}