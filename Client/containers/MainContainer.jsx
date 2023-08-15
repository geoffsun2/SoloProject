import React from "react";
import '../styles.css'


const MainContainer = () => {





    return (
        <div className="header">
            <h1>Kaavoks</h1>
            <div className="inputs">
                <input type="text" placeholder="Username"></input>
                <input type="text" placeholder="Password"></input>
                <button className="login">Log In</button>
            </div>
        </div>
    
    )
}

export default MainContainer;