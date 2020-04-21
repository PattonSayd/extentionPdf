/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const Navbar = () =>{
    return (
        <nav>
               <div className="logo">
                    <a href="#"><img src="book5.jpg" width="60" alt=""/></a>                
                </div>
                <ul>
                    <li>
                        <a href="#">Книги</a>
                    </li>
                    <li>
                        <a href="#">Авторы</a>
                    </li>
                    <li>
                        <a href="#">Жанры</a>
                    </li>
                    <li>
                        <a href="#">Форум</a>
                    </li>
                </ul>
            </nav>
    )
}
export default Navbar