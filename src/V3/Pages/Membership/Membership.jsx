import React, {useState, useRef, useEffect} from "react"
import {Link} from 'react-router-dom'

import PageHeader from "../../Components/PageHeader/PageHeader"
import MembershipOptions from "../../Sections/Membership/MembershipOptions"

import "./Membership.scss"

import Common from '../../../Common'

const vh = percent => {
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    return (percent * h) / 100;
}

const vw = percent => {
    let w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    return (percent * w) / 100;
}

export default function Membership() {

    const containerRef = useRef()
    const [containerWidth, setContainerWidth] = useState(vw(100));

    const updateContainerWidth = () => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.offsetWidth - parseFloat(getComputedStyle(containerRef.current).paddingLeft) - parseFloat(getComputedStyle(containerRef.current).paddingRight))
        }
    }

    useEffect(() => {
        updateContainerWidth()

        window.addEventListener('resize', updateContainerWidth)

        return () => {
            window.removeEventListener('resize', updateContainerWidth)
        }
    }, [])

    return (
        <div className={"membership"}>
            <PageHeader title={"Membership"}/>
            <div ref={containerRef} className={"container py-5 mb-md-5"}>
                <h1 className={"text-center font-barlow-condensed fs-24px fs-md-50px mb-4 mb-md-5"}>
                    JOIN OUR COMMUNITY
                </h1>
                <iframe className={"video"} width={containerWidth} height={containerWidth * (315 / 560)}
                        src="https://www.youtube-nocookie.com/embed/uJOewUSg860"
                        title="Membership video" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen>
                </iframe>
            </div>
            <MembershipOptions/>
        </div>
    )
}