import React from "react";
import MarketChart from "../components/markett";
import Navbar from "../components/navbar";

class Market extends React.Component {
    state = {  } 
    render() { 
        return (
                <>
                <Navbar/>
                <MarketChart/>
                </>
        );
    }
}
 
export default Market;