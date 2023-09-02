import React, {useState} from 'react';
import {Button as MuiButton} from '@mui/material';

import "./Button.scss"

export default function Button({children, color, className}) {

    return (
        <MuiButton variant={"contained"} color={color} className={`v3-button rounded-0 ${className}`} disableElevation>
            {children}
        </MuiButton>
    )
}