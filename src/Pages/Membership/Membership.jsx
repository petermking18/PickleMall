import React, {useRef} from 'react'
import {Link} from 'react-router-dom'
import {Button, Card, CardMedia} from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'

import './Membership.scss'

import card_top_1 from './card_top_1.svg'
import card_top_2 from './card_top_2.svg'
import masonry from './masonry.png'

import Common from '../../Common'
import app_button_icon from "./app_button_icon.png";

export default function Membership() {

    const cancellationPolicyRef = useRef(null)
    const scrollToCancellationPolicy = () => {
        cancellationPolicyRef.current.scrollIntoView({block: 'end', behavior: 'smooth'})
    }

    return (
        <div className={'membership-page'}>


            {/* header */}
            <div className={"container mb-md-5"}>
                <div className={"text-center mt-md-4 mb-md-3 pt-3 pb-2 pt-md-5 pb-md-3"}>
                    <h1 className={"font-barlow-condensed text-deep-blue fs-32px fs-md-40px my-0"}>
                        Membership
                    </h1>
                    <svg className={"d-none d-md-inline-block"} xmlns="http://www.w3.org/2000/svg" width="272"
                         height="4" viewBox="0 0 272 4" fill="none">
                        <path d="M0 2H272" stroke="#49C13D" strokeWidth="4"/>
                    </svg>
                    <svg className={"d-inline-block d-md-none"} xmlns="http://www.w3.org/2000/svg" width="189"
                         height="4" viewBox="0 0 189 4" fill="none">
                        <path d="M0 2H189" stroke="#49C13D" strokeWidth="3"/>
                    </svg>
                </div>
            </div>

            <div className={"section-1 container "}>
                <Grid container spacing={7} className={"pb-4 pb-md-5"}>
                    {/*<Grid item xs={12} md={6}>*/}
                    {/*    <div className={"card h-100"}>*/}
                    {/*        <img className={"w-100 h-auto"} src={card_top_1} alt={"header"}/>*/}
                    {/*        <div className={"p-5"}>*/}
                    {/*                <span className={"text-volley-blue font-barlow-condensed fs-20px fw-600"}>*/}
                    {/*                    $99.99 / MONTH*/}
                    {/*                </span>*/}
                    {/*            <h1 className={"text-deep-blue font-barlow-condensed fs-40px fw-600 my-2"}>*/}
                    {/*                The Mall Rat*/}
                    {/*            </h1>*/}
                    {/*            <ul className={"fs-16px fw-400 lh-28px mb-4"}>*/}
                    {/*                <li>Waived court fees</li>*/}
                    {/*                <li>Waived initiation fee</li>*/}
                    {/*                <li>50 free replay credits</li>*/}
                    {/*                <li>14 day advance sign-up window</li>*/}
                    {/*                /!*<li>Discounts on Joola apparel</li>*!/*/}
                    {/*                <li>Discounts on Picklemall apparel</li>*/}
                    {/*            </ul>*/}
                    {/*            <Link to={"mailto:memberships@thepicklemall.com"}*/}
                    {/*                  className={"no-decoration"}>*/}
                    {/*                <Button variant={"contained"}*/}
                    {/*                        color={"deepBlue"}*/}
                    {/*                        className={"rounded-5 text-nowrap"}*/}
                    {/*                        disableElevation>*/}
                    {/*                    Sign Up*/}
                    {/*                </Button>*/}
                    {/*            </Link>*/}
                    {/*            <div className={"mt-3"}>*/}
                    {/*                <i className={"text-kitchen-green fs-14px fw-400 lh-28px"}>*/}
                    {/*                    *Membership covers member court fees only. Members may invite friends to*/}
                    {/*                    contribute towards final court fees. Contributions are optional and not*/}
                    {/*                    mandatory for membership.*/}
                    {/*                    <br/>*/}
                    {/*                    *When booking a court with non-members, the member will receive a hold until*/}
                    {/*                    guests accept the invite.*/}
                    {/*                </i>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Grid>*/}
                    <Grid item xs={12} md={6}>
                        <div className={"discounted card h-100"}>
                            <div className={"header w-100 h-auto"}>
                                <img className={"w-100 h-auto"} src={card_top_1} alt={"header"}/>
                                <div
                                    className={"text-wrapper w-100 h-100 d-flex justify-content-center align-items-center"}>
                                    <div>
                                        <h1 className={"text-bright-white font-barlow-condensed fs-38px fs-md-50px lh-54px lh-md-70px text-center my-0"}>
                                            LIMITED TIME OFFER
                                        </h1>
                                        <h4 className={"font-barlow-condensed fs-20px lh-20px fs-md-24px lh-md-24px fw-400 text-bright-white text-center my-0 mb-2"}>
                                            OFFER ONLY VALID FOR FIRST 80 SIGN-UPS
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <div className={"p-5"}>
                                <div className={"mb-1"}>
                                    <span
                                        className={"text-bright-white bg-deep-blue rounded-3 px-2 py-1 start-n2 font-barlow-condensed fs-24px fw-600"}>
                                        $80 / MONTH
                                    </span>
                                </div>
                                <span
                                    className={"text-volley-blue font-barlow-condensed fs-20px fw-600 strikethrough ps-1"}>
                                    <s>$99.99 / MONTH</s>
                                </span>
                                <h1 className={"text-deep-blue font-barlow-condensed fs-40px fw-600 my-2"}>
                                    The Mall Rat
                                </h1>
                                <h3 className={"font-barlow-condensed mb-0"}>Membership Benefits</h3>
                                <ol className={"fs-16px fw-400 lh-28px mb-4"}>
                                    <li>
                                        Waived Court Fees: Play without worrying about the cost! Your membership covers all member court reservation fees, this includes open play.
                                    </li>
                                    <li>
                                        Waived Initiation Fee: No upfront initiation cost to start enjoying Picklemall.
                                    </li>
                                    <li>
                                        50 Free Replay Credits: Get 50 replays per month at no extra cost. Additional replays are charged at 50 cents each.
                                    </li>
                                    <li>
                                        14-Day Advance Sign-Up Window: Exclusive access to book courts two weeks in advance.
                                    </li>
                                    <li>
                                        Discounts on Picklemall Apparel: Look great while playing with exclusive discounts on our stylish Picklemall clothing line.
                                    </li>
                                </ol>
                                <h3 className={"font-barlow-condensed mb-0"}>Booking with Friends</h3>
                                <ul className={"fs-16px fw-400 lh-28px mb-4"}>
                                    <li>
                                        Members: Invite fellow members to join your reservation without any additional charges.
                                    </li>
                                    <li>
                                        Non-Members: Invite non-members at a typical charge of $8-$10 per person per hour. You may choose to cover these costs or invite non-members to pay their share.
                                    </li>
                                </ul>
                                {/*<ul className={"fs-16px fw-400 lh-28px mb-4"}>*/}
                                {/*    <li>Waived court fees</li>*/}
                                {/*    <li>Waived initiation fee</li>*/}
                                {/*    <li>50 free replay credits</li>*/}
                                {/*    <li>14 day advance sign-up window</li>*/}
                                {/*    /!*<li>Discounts on Joola apparel</li>*!/*/}
                                {/*    <li>Discounts on Picklemall apparel</li>*/}
                                {/*</ul>*/}
                                <Link to={Common.MallRatSignupLink}
                                      target={"_blank"}
                                      className={"no-decoration"}>
                                    <Button variant={"contained"}
                                            color={"deepBlue"}
                                            className={"rounded-5 text-nowrap"}
                                            disableElevation>
                                        Sign Up
                                    </Button>
                                </Link>
                                <div className={"mt-3"}>
                                    <i className={"text-kitchen-green fs-14px fw-400 lh-28px"}>
                                        Note: When booking a court with non-members, the member will receive a hold until guests accept the invite. Contributions towards final court fees are optional but not mandatory for membership.
                                    </i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div className={"card"}>
                            <img className={"w-100 h-auto"} src={card_top_2} alt={"header"}/>
                            <div className={"p-5"}>
                                <span className={"text-volley-blue font-barlow-condensed fs-20px fw-600"}>
                                    $8-$10 / PERSON / HOUR
                                </span>
                                <h1 className={"text-deep-blue font-barlow-condensed fs-40px fw-600 my-2"}>
                                    Drop-In
                                </h1>
                                <ul className={"fs-16px fw-400 lh-28px mb-4"}>
                                    <li>$8 off peak</li>
                                    <li>First 5 replays are free, $0.50 replays after</li>
                                    <li>$15 full game footage</li>
                                    <li>3-day advance sign-up</li>
                                </ul>
                                <Link to={Common.BookingLink}
                                      className={"no-decoration"}>
                                    <Button variant={"contained"}
                                            color={"deepBlue"}
                                            className={"rounded-5 text-nowrap"}
                                            disableElevation>
                                        Book a Court
                                    </Button>
                                </Link>
                                <div className={"mt-3"}>
                                    <i className={"text-kitchen-green fs-14px fw-400 lh-28px"}>
                                        *Price reflects reservations of 4 players per court
                                    </i>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>

                <div className={"section-app-button container mb-5 pb-md-3"}>
                    <Link to={"#"}
                          onClick={scrollToCancellationPolicy}
                          className={"outer-link no-decoration w-md-75 mx-auto d-flex justify-content-center align-items-center"}>
                        <div
                            className={"app-button w-100 bg-light-gray d-flex justify-content-between align-items-center px-4 py-0"}>
                            <div className={"d-flex justify-content-start align-items-center me-md-5"}>
                                <img src={app_button_icon} alt={"Download"} style={{height: '34px', width: '34px'}}
                                     className={"me-3"}/>
                                <p className={""}>
                                    Please refer to our cancellation policy at the bottom of the page
                                </p>
                            </div>
                            <svg className={"d-none d-md-block ms-5 r-90"} xmlns="http://www.w3.org/2000/svg" width="19"
                                 height="9"
                                 viewBox="0 0 19 9" fill="none">
                                <path
                                    d="M16.125 5.24375H0.75C0.533333 5.24375 0.354167 5.17292 0.2125 5.03125C0.0708334 4.88958 0 4.71042 0 4.49375C0 4.27708 0.0708334 4.09792 0.2125 3.95625C0.354167 3.81458 0.533333 3.74375 0.75 3.74375H16.15L14 1.59375C13.8667 1.46042 13.8 1.29375 13.8 1.09375C13.8 0.89375 13.875 0.71875 14.025 0.56875C14.175 0.41875 14.35 0.34375 14.55 0.34375C14.75 0.34375 14.925 0.41875 15.075 0.56875L18.475 3.96875C18.5583 4.05208 18.6167 4.13542 18.65 4.21875C18.6833 4.30208 18.7 4.39375 18.7 4.49375C18.7 4.59375 18.6833 4.68542 18.65 4.76875C18.6167 4.85208 18.5583 4.93542 18.475 5.01875L15.075 8.41875C14.9083 8.58542 14.7292 8.66458 14.5375 8.65625C14.3458 8.64792 14.175 8.56875 14.025 8.41875C13.875 8.26875 13.8 8.08958 13.8 7.88125C13.8 7.67292 13.8667 7.50208 14 7.36875L16.125 5.24375Z"
                                    fill="#367236"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={"section-2 bg-light-blue"}>
                <div className={"container py-5"}>
                    <h5 className={"text-deep-blue font-barlow-condensed fs-32px fw-700 my-0 my-md-4"}>
                        Join The Crew
                    </h5>
                    <p className={"col-md-9 mb-3"}>
                        Looking to elevate your pickleball experience? Join the Picklemall Crew today and enjoy
                        exclusive perks and benefits with our two membership options! Don't miss out on the opportunity
                        to be a part of our vibrant community and take your pickleball game to new heights.
                    </p>
                    <img className={"py-5 d-none d-md-block w-100 h-auto"} src={masonry} alt={"Picklemall courts"}/>
                </div>
            </div>

            <div className={"section-3 bg-bright-white"} ref={cancellationPolicyRef}>
                <div className={"container py-5"}>
                    <h5 className={"text-deep-blue font-barlow-condensed fs-32px fw-700 my-0 my-md-4"}>
                        Cancellation Policy
                    </h5>
                    <div className={""}>
                        <p>
                            More than 48 hours before the scheduled reservation: Cancellation is free.
                        </p>
                        <p>
                            Within 48 hours of the scheduled reservation: A 25% cancellation fee applies.
                        </p>
                        <p>
                            Within 24 hours of the scheduled reservation: A 50% cancellation fee applies.
                        </p>
                        <p>
                            Within 2 hours of the scheduled reservation: A 75% cancellation fee applies.
                        </p>
                    </div>
                </div>
            </div>


        </div>
    )
}