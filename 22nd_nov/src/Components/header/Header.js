import React from 'react'
import './style/header.css'
import logo from './img/logo.png'
import searchIcon from './img/search.png'
import avatar from './img/avatar.png'


const Header = () => {
    return (
        <div className='header'>
            <div className='header-container'>
                <img className='imgStyle' src={logo} />
                <div>
                    <input className='inputStyle'></input>
                </div>
                <img className='imgStyle' src={avatar} />

            </div>
        </div>
    )
}

export default Header