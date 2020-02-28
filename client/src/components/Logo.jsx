import React from 'react'
import logo from '../static/Logo.png'
import name from '../static/Name.png'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo} alt='Josh Diamond Logo' className='logo-image' />
            <img src={name} alt='Josh Diamond Text' className='logo-name' />
        </div>
    )
}
