/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Header = () =>{
    return (
         <header>
                <div className="logo-name">
                    <a href="#"><span>Air Book</span></a>                
                </div>
                <div className="admin">
                    <a href="#"><i class="far fa-bell"></i></a>
                    <a href="#">Login</a>
                </div>
                
                
            </header>
    )
}
export default Header