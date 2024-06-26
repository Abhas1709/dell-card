import React from "react";
import './Appe.css'
import Navbar from './Navbar';
import Main from './Main';


function Dell() {
    return (
        <div>
            <div class='App'>
                <div class='insideapp'>
                    <div class='card'>
                        <Navbar />
                        <Main />
                    </div>
                </div>
            </div>
            <div className='square'> 
            <div className='circulate' >
              <div className='circle'> </div>
              <div className='circle'></div>
              </div>
              <div className='circulate'> 
              <div className='circle'></div>
              <div className='circle'></div>
                </div>
            </div>

        </div>
    );
}
export default Dell

