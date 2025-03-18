import React, { useState } from 'react'

import { profilePictureBaseUrl } from '../config/urls'

import { useAuth } from '../contexts/AuthContext';

function ProfilePicture() {
    const authContext = useAuth()

    const [imagenSrc, setImagenSrc] = useState(profilePictureBaseUrl + authContext.username);

    return (
        <img
            src={imagenSrc}
            alt="Profile"
            onError={() => setImagenSrc(profilePictureBaseUrl)}
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
        />
    );
}

export default ProfilePicture
