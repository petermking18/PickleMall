import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Button} from '@mui/material'

import './CouponPage.scss'

import {collection, doc, getDoc} from "firebase/firestore"
import {db} from '../../Firebase'

import Grid from '@mui/material/Unstable_Grid2'

import ContactForm from '../../Components/ContactForm/ContactForm'

import logo from './logo.svg'

const CouponStates = {
    Checking: 0,
    Invalid: 1,
    Valid: 2,
    Error: 3
};

const ContactStates = {
    Invalid: 0,
    Valid: 1
};

export default function CouponPage() {
    let {couponId} = useParams()

    const [couponState, setCouponState] = useState(CouponStates.Checking)
    const [couponCode, setCouponCode] = useState(null)
    const [couponLink, setCouponLink] = useState(null)
    const [codeHintText, setCodeHintText] = useState(null)

    const checkCouponExists = async () => {
        try {
            const docRef = await doc(db, "coupons", couponId)
            const docData = await getDoc(docRef)
            let state = await docData.exists() ? await docData.get('active') ? CouponStates.Valid : CouponStates.Invalid : CouponStates.Invalid
            setCouponState(state)
            if (state === CouponStates.Valid) {
                setCouponCode(docData.get('code'))
                setCouponLink(docData.get('link'))
                setCodeHintText(docData.get('codeHintText'))
            }
        } catch (error) {
            console.error('Error checking for coupon:', error)
            setCouponState(CouponStates.Error)
        }
    }

    const onContactAdded = documentId => {
        setContactState(ContactStates.Valid)
    }

    useEffect(() => {
        checkCouponExists()
    }, [couponId])

    const [contactState, setContactState] = useState(ContactStates.Invalid)

    const renderPage = () => {
        switch (couponState) {
            case CouponStates.Checking:
            case CouponStates.Valid:
                switch (contactState) {
                    case ContactStates.Invalid:
                        return <div className={"get-contact"}>
                            <ContactForm hideCity
                                         hideState
                                         title={"Sign Up"}
                                         subtitle={"Sign up now to see your exclusive student discount. We promise not to spam you."}
                                         onAdded={onContactAdded}
                                         hideAfterSubmit
                                         className={"shadow-lg w-100"}
                                         cardClassName={"w-100"}/>
                        </div>
                    case ContactStates.Valid:
                        return <div className={"coupon bg-bright-white shadow-lg rounded-3 py-2"}>
                            <div className={"inner m-2 bg-light-gray"}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} md={4} className={"left-pane py-0"}>
                                        <div
                                            className={"inner h-100 p-4 d-flex justify-content-center align-items-center"}>
                                            <img className={"logo m-1"} src={logo} alt={"Picklemall"}/>
                                        </div>
                                    </Grid>
                                    <Grid xs={12} md={8} className={"right-pane py-3 px-5"}>
                                        <div className={"container"}>
                                            <h1 className={"font-barlow-condensed text-deep-blue fs-35px fw-600 mt-3 mb-1"}>
                                                Welcome to Picklemall!
                                            </h1>
                                            <h5 className={"fs-16px text-deep-blue fw-500 mt-0 mb-3"}>
                                                The Future of Pickleball
                                            </h5>
                                            <p className={"text-deep-blue fs-14px fw-400 lh-23px"}>
                                                Discover the future of pickleball at Picklemall. Where innovation,
                                                community, and premium facilities come together. At Picklemall, we are
                                                revolutionizing the way you book, play, and interact with others who
                                                share your passion for the game.
                                            </p>
                                            <h5 className={"text-deep-blue fs-16px fw-500 mb-3"}>
                                                {codeHintText ? codeHintText :
                                                    "Use the code below to claim your exclusive discount:"
                                                }
                                            </h5>
                                            <div
                                                className={"code-box bg-bright-white rounded-2 p-2 d-flex justify-content-center align-items-center"}>
                                                <h1 className={"text-kitchen-green font-barlow-condensed text-center fs-36px fw-500 m-0"}
                                                    title={"Click to copy"}>
                                                    {couponCode}
                                                </h1>
                                            </div>
                                            <div className={"d-flex justify-content-center mt-3"}>
                                                <Link to={couponLink} className={"no-decoration"}>
                                                    <Button variant={"contained"}
                                                            color={"deepBlue"}
                                                            className={"text-nowrap"}
                                                            size={"large"}
                                                            disableElevation>
                                                        Book a Court
                                                    </Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>
                            </div>
                        </div>
                    default:
                        return <div></div>
                }
            case CouponStates.Invalid:
                return <div className={"invalid"}>invalid</div>
            case CouponStates.Error:
                return <div className={"error"}>error</div>
            default:
                return <div></div>
        }
    }

    return (
        <div className={"coupon-page bg-light-gray d-flex justify-content-center align-items-center"}>
            <div className={"container"}>
                <div className={"w-100"}>
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}