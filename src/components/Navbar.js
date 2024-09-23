import React from 'react'

function Navbar({ changeTheme, darkMode }) {
    return (
        <div className='navbar'>
            <button className='theme-btn' onClick={changeTheme} > {darkMode ? 'Light Mode' : 'Dark Mode'} </button>
        </div>
    )
}

export default Navbar;