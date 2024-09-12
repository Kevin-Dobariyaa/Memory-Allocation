import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './nav.css'



function Nav() {
    
    
    return (
        <>
        <nav>
            <div className="out1">
                <div className="nav">
                    <ul>
                        <li className="algoName first" id="no0"> <Link to='/'>Dynamic</Link></li>
                        <li className="algoName" id="no1"> <Link to='/algo1'>First Fit</Link></li>
                        <li className="algoName" id="no2"> <Link to='/algo2'>Next Fit</Link></li>
                        <li className="algoName" id="no3"> <Link to='/algo3'>Best Fit</Link></li>
                        <li className="algoName" id="no4"> <Link to='/algo4'>Worst Fit</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Nav;

