import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {


    return (
        <div className='Header'>
            <div className='HeaderWrapper'>
                <div className='HeaderLeft'>
                    <ul>
                        <li><div className='HeaderLogo'><img src={Logo} alt='logo'></img></div></li>
                        <li>Home</li>
                        <li>Movies</li>
                    </ul>
                </div>
                <div className='HeaderRight'>
                    <ul>
                        <li><input type='text' placeholder="Search.."></input></li>
                        <li>My List</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header