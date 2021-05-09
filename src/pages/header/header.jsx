import React from 'react';
import './header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className='header'>
            <div className="inner-header">
                <div className="title">
                    <Link to='/' style={{textDecoration:'none',color:'#28BF7B'}}>  
                        <h2 >
                            Linktree
                        </h2>    
                    </Link>     
                </div>        
            </div>
        </div>
    )
}

export default Header
