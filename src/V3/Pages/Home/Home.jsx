import React, {useState, useRef} from "react"
import Button from "../../Components/Button/Button";

import './Home.scss'

export default function Home() {
    return <div className={'home'}>
        HOME
        <br/>
        <Button color={"rallyBlue"}>
            Test
        </Button>
    </div>
}