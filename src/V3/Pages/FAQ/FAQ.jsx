import React, {useState} from 'react'

import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PageHeader from "../../Components/PageHeader/PageHeader"

import './FAQ.scss'

const questions = [
    {
        "question": "What is the \"Mall Rat\" membership, and what does it include?",
        "answerParagraphs": [
            "The \"Mall Rat\" membership is our main membership option at Picklemall. With this membership, you can enjoy several benefits, including:",
            "- Waived court fees for up to 6 hours at a time over a 2-week period.",
            "- The ability to invite other members to play without their court fees counting towards their hours.",
            "- Up to 14 days advance court booking.",
            "- 50 free replay credits to review and share your gameplay.",
            "- Exclusive discounts on Picklemall apparel."
        ]
    },
    {
        "question": "Can I book courts as a non-member?",
        "answerParagraphs": [
            "Yes, if you are not ready for a membership, we offer a drop-in option for court reservations. You can reserve court time up to 3 days in advance using our mobile app or website. We have both on-peak and off-peak rates for non-members."
        ]
    },
    {
        "question": "What are the rates for drop-in court reservations?",
        "answerParagraphs": [
            "The drop-in rate for non-members is $10 per person for an hour of play during peak times, and $8 per person during off-peak hours (10am-2pm on Monday to Thursday)."
        ]
    },
    {
        "question": "If I am a \"Mall Rat\" member, can I invite non-member friends to play with me?",
        "answerParagraphs": [
            "Absolutely! As a \"Mall Rat\" member, you can invite non-member friends to play with you. They will need to pay the drop-in fee, but your court fees as a member will still be waived."
        ]
    },
    {
        "question": "What are the court surfaces and ball options available at Picklemall?",
        "answerParagraphs": [
            "At Picklemall, we are proud to offer top-notch Pickleroll indoor surfaces on our indoor courts. These specially designed surfaces provide excellent playing conditions and enhance your overall pickleball experience.",
            "As for pickleball balls, we do have them available for purchase at the front desk. However, we also understand that players may have their own preferences. If you have a particular preference for pickleball balls, you are more than welcome to bring your own and use them during your playtime.",
            "Our goal is to ensure you have the best possible playing experience at Picklemall, and having the option to use your preferred balls is part of that commitment. Whether you choose our provided balls or bring your own, we look forward to seeing you on the court! If you have any further questions or need more information, don't hesitate to reach out to us at memberships@thepicklemall.com."
        ]
    },
    {
        "question": "How do the court cameras work?",
        "answerParagraphs": [
            "All our courts are equipped with state-of-the-art court cameras. You can record and replay your best shots by clicking the replay button on your court tablet. The replay will be sent to your phone, allowing you to easily share your impressive plays with friends."
        ]
    },
    {
        "question": "What is the cancellation policy for court reservations?",
        "answerParagraphs": [
            "For cancellations made more than 48 hours before the scheduled event, there is no charge. Cancellations made within 48 hours of the event have a $10 cancellation fee, within 24 hours it's $20, and within 2 hours it's $30."
        ]
    },
    {
        "question": "Do you offer opportunities for certified instructors to teach at Picklemall?",
        "answerParagraphs": [
            "Yes! We welcome certified instructors who share our passion for pickleball. We offer special incentives and deals for instructors who wish to reserve courts for teaching purposes. For more information, instructors can contact our management team at memberships@thepicklemall.com."
        ]
    },
    {
        "question": "Can non-members participate in community events and programming?",
        "answerParagraphs": [
            "Absolutely! Community events and programming at Picklemall are open to both members and non-members. Check out the community tab on our web and mobile app to explore the latest events and activities."
        ]
    },
    {
        "question": "How can I sign up for a membership or make court reservations?",
        "answerParagraphs": [
            "You can sign up for the \"Mall Rat\" membership or make court reservations easily through our mobile app or thepicklemall.com. Navigate to the booking page, select your location, and choose your preferred court time. \"Mall Rat\" members enjoy waived court fees for their reservations.",
            "For any further questions or assistance, please feel free to reach out to us at memberships@thepicklemall.com. We're excited to welcome you to Picklemall and provide you with an unforgettable pickleball experience!"
        ]
    },
    {
        "question": "What are the replay credits, and how do they work?",
        "answerParagraphs": [
            "Replay credits are a fantastic feature of our \"Mall Rat\" membership. Each month, you receive 50 free replay credits that allow you to review and share your gameplay. These credits enable you to replay previous games and analyze your techniques and strategies. To use the replay credits, simply access the court tablet, click the replay button, and the play will be sent to your phone for easy sharing with friends."
        ]
    },
    {
        "question": "How far in advance can I book courts as a \"Mall Rat\" member?",
        "answerParagraphs": [
            "As a \"Mall Rat\" member, you can reserve courts up to 14 days in advance. This gives you plenty of time to plan your pickleball sessions and secure your preferred court times."
        ]
    },
    {
        "question": "Can I book back-to-back hours with the \"Mall Rat\" membership?",
        "answerParagraphs": [
            "Absolutely! You have the flexibility to book consecutive hours with your \"Mall Rat\" membership. Simply reserve multiple hours in a row if you wish to extend your playtime."
        ]
    },
    {
        "question": "Is there a limit to the number of hours I can reserve at one time as a \"Mall Rat\" member?",
        "answerParagraphs": [
            "Yes, you can reserve up to 6 hours of court time at any given time as a \"Mall Rat\" member. This allows you to plan and secure sufficient court hours while ensuring fair access to all members."
        ]
    },
    {
        "question": "Can non-members participate in Picklemall events and programming?",
        "answerParagraphs": [
            "Yes, non-members are more than welcome to participate in our Picklemall events and programming. Whether it's a tournament, clinic, or social event, we encourage everyone to join in the fun and camaraderie."
        ]
    },
    {
        "question": "How can I cancel my membership, and what is the cancellation process?",
        "answerParagraphs": [
            "If you wish to cancel your membership, you can easily do so by accessing your account on our web app. Navigate to the membership section and follow the cancellation steps provided. There is no cancellation fee, and the process is hassle-free. However, please note that if you cancel your membership, you will not be able to lock in your current membership rate if there are any rate changes in the future."
        ]
    },
    {
        "question": "Are there any age restrictions for membership or drop-in reservations?",
        "answerParagraphs": [
            "At Picklemall, we welcome players of all ages and skill levels to join our pickleball community. There are no age restrictions for membership or drop-in reservations. Whether you're a seasoned player or just starting, we look forward to having you on the court!"
        ]
    },
    {
        "question": "Can I bring my own pickleball equipment, such as paddles and balls?",
        "answerParagraphs": [
            "Absolutely! We encourage players to bring their own pickleball equipment if they have a preference. Whether it's your favorite paddle or preferred balls, you are more than welcome to use them during your playtime at Picklemall."
        ]
    },
    {
        "question": "Can I reserve multiple courts at the same time for a private event or group play?",
        "answerParagraphs": [
            "Yes, you can reserve multiple courts simultaneously for private events or group play. If you have a special occasion or want to organize a pickleball gathering, please contact our customer support team at memberships@thepicklemall.com to discuss arrangements and availability."
        ]
    },
    {
        "question": "How can I stay updated on upcoming events, promotions, and facility news?",
        "answerParagraphs": [
            "To stay informed about all the exciting happenings at Picklemall, make sure to subscribe to our newsletter and follow us on our social media channels. We regularly share updates, promotions, and important announcements to keep our members and players in the loop.",
            "If you have any other questions or need further assistance, don't hesitate to reach out to us at memberships@thepicklemall.com. We're here to provide you with the best pickleball experience possible!"
        ]
    }
]


export default function FAQ() {

    const [expandedPanel, setExpandedPanel] = useState(null)

    const handleChange = (panel) => (event, isExpanded) => {
        setExpandedPanel(isExpanded ? panel : null);
    }

    return (
        <div className={"faq"}>
            {/* header */}
            <PageHeader title={"FAQ"}/>

            {/*questions*/}
            <div className={"container py-5"}>
                <div className={"shadow-sm"}>
                    {questions.map((q, idx) =>
                        <Accordion key={idx} disableGutters={true}
                                   expanded={expandedPanel === `q${idx}`}
                                   onChange={handleChange(`q${idx}`)}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon/>}
                                              aria-controls={`q${idx}-content`}
                                              id={`q${idx}-header`}>
                                <p className={"fw-700 fs-18px my-1"}>{q.question}</p>
                            </AccordionSummary>
                            <AccordionDetails>
                                {q.answerParagraphs.map((par, idx2) =>
                                    <div key={idx2}>
                                        {idx2 > 0 &&
                                            <br/>}
                                        <p key={idx2}
                                           className={"fs-14px my-0"}>{par}</p>
                                    </div>
                                )}
                            </AccordionDetails>
                        </Accordion>
                    )}
                </div>
            </div>
        </div>
    )
}