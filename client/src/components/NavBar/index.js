import React from "react";
import "../css/navTabs.css"


const navTabs = () => {
    return (
        <div className= "navTabs">
            <div class="navbar">
                <a href="#logout"> <h3> Logout </h3></a>
                <a href="#home"> <h3> Home </h3></a>
                    <div class="dropdown">
                        <button class="dropbtn"> <h3> Dropdown </h3>
                        </button>
            <div class="dropdown-content" id="myDropdown">
                {/* <a href=""> Your Villagers </a>
                <a href=""> Your Reviews </a>
                <a href="">Link 3</a> */}
            </div>
            </div> 
</div>
 </div>

 )
}






export default navTabs;
