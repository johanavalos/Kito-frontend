import React from 'react'

import '../styles/layouts/AuthLayout.css'

function AuthLayout({ children }) {
    return (
        <div className='main'>
            <div className='logo'>KITO</div>
            <div className='modal'>
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
