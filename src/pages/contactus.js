import React from "react";
import Contact from "../components/contact";
import Navbar from "../components/navbar";
import HeadC from "../components/contacthead";

class ContactUs extends React.Component {
    state = {  } 
    render() { 
        return (
            <>
            <Navbar/>
            
        <HeadC/>
            <Contact/></>
        );
    }
}
 
export default ContactUs;