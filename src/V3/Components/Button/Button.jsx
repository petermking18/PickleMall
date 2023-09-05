import React, {useState} from 'react';
import {Button as MuiButton} from '@mui/material';

import "./Button.scss"

export default function Button({children, color, className, disabled, onClick}) {

    return (
        <MuiButton variant={"contained"} color={color}
                   className={`v3-button rounded-0 text-nowrap ${className}`}
                   onClick={onClick}
                   disabled={disabled} disableElevation>
            {children}
        </MuiButton>
    )
}