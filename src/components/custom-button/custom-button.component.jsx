import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({ children, func, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={func}>
        {children}
    </button>
)

export default CustomButton;