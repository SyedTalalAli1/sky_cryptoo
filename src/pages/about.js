import React from "react";
import Navbar from "../components/navbar";
import Aboutt from "../components/aboutt";
import Footer from "../components/footer";

class About extends React.Component {
    state = {  } 
    render() { 
        return (<>
        <Navbar/>
        <Aboutt/>
        <Footer/>
        </>);
    }
}
 
export default About;