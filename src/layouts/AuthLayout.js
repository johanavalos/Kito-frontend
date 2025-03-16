import React from 'react'

import '../styles/layouts/AuthLayout.css'

function AuthLayout({ children }) {
    return (
        <div className='main'>
            <div className='logo'>Kito</div>
            <div className='panel'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
