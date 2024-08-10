import React from "react";
import Navbar from "../components/navbar";
import Image from "../components/slider";
import Cards from "../components/card"
import AboutUs from "../components/aboutus";
import Footer from "../components/footer";
import CopyRight from "../components/copyright";

class Home extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
            <Image/>
            <Cards/>
            <AboutUs/>
            <Footer/>
            <CopyRight/>
            </>
        );
    }
}
 
export default Home;