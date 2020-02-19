import React, { Component } from 'react';
import './Header.css'
import logo from '../logo_text.png';

class Header extends Component {
    render(){
        return(
            <div className="header">
                <div className="headerLayout">
                <div className="headerLogo">
                    <h1 className="headerLogo_link">
                    <a href="https://www.instagram.com/">
                        <span><img src={logo} alt="인스타그램 로고"/></span>
                    </a>
                    </h1>
                </div>
                <div className="headerSerch">
                    <input type="text" placeholder="검색" name="" />
                </div>
                <div className="headerMenu">
                    <ul className="headerMenu_list">
                    <li><a href="">탐색페이지</a></li>
                    <li><a href="">좋아요</a></li>
                    <li><a href="">마이 페이지</a></li>
                    </ul>
                </div>
                </div>
            </div>            
        )
    }
}

export default Header;