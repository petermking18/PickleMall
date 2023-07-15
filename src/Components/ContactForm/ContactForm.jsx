import React, {useState} from "react";
import {ErrorOutline, CheckCircleOutline} from "@mui/icons-material";
import Card from "../Card/Card";
import {
    Button,
    CircularProgress,
    TextField,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import {MuiTelInput, matchIsValidTel} from 'mui-tel-input'

import validator from "validator";

import States from "../../Helpers/US-States";

import "./ContactForm.scss";

import {collection, addDoc, Timestamp} from "firebase/firestore";
import {db} from "../../Firebase";

const ViewStates = {
    Landing: 0,
    Form: 1,
    Submitting: 2,
    Submitted: 3,
    SubmitError: 4,
};

export default function ContactForm(props) {
    const [vs, setViewState] = useState(ViewStates.Form);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(null);

    const [phone, setPhone] = useState("")
    const [phoneValid, setPhoneValid] = useState(null)
    const validateEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
        setEmailValid(validator.isEmail(email));
    };

    const validatePhone = phone => {
        setPhone(phone)
        setPhoneValid(matchIsValidTel(phone))
    }

    const [city, setCity] = useState("");
    const [state, setState] = useState("");

    const submitForm = async (e) => {
        setViewState(ViewStates.Submitting);

        try {
            let docRef
            if (firstName === "do_not_add") {
                docRef = {
                    id: "abc"
                }
            } else {
                docRef = await addDoc(collection(db, "contacts"), {
                    firstName,
                    lastName,
                    email,
                    city,
                    state,
                    phone,
                    page: window.location.pathname,
                    created: Timestamp.fromDate(new Date()),
                })
            }
            console.log("Added contact: ", docRef.id)
            setViewState(ViewStates.Submitted)
            if (props.onAdded) {
                props.onAdded(docRef.id)
            }
            localStorage.setItem("_pmca", "e179544a-0430-4d0b-8227-8ee06381b55a")
        } catch (ex) {
            console.error("Error submitting: ", ex);
            setViewState(ViewStates.SubmitError);
        }
    };

    return (

        <div className={"main-card-wrapper my-auto" + (props.className ? (" " + props.className) : "")}>
            <Card className={"card bg-light-blue bg-md-volley-blue" + (props.cardClassName ? (" " + props.cardClassName) : "")}>
                {(vs === ViewStates.Form || vs === ViewStates.Submitting) && (
                    <div className="p-3 p-md-5">
                        <h1
                            className="font-barlow-condensed text-center text-deep-blue text-md-bright-white fs-22px fs-md-26px mt-0 mb-2"
                            style={{fontSize: "36px"}}
                        >
                            {props.title ? props.title : 'Contact Information'}
                        </h1>
                        <p className="text-center text-deep-blue text-md-bright-white fs-14px mt-0">
                            {props.subtitle ? props.subtitle : 'Enter your email for more info on booking a court, plus get other Picklemall news and offers.'}
                        </p>
                        <form name="contactForm" className="mt-4">
                            <Grid container spacing={2}>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        id="inputFirstName"
                                        label="First Name"
                                        variant="filled"
                                        color="deepBlue"
                                        className="w-100 bg-bright-white rounded-1"
                                        onChange={(e) => setFirstName(e.target.value)}
                                        disabled={vs === ViewStates.Submitting}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        id="inputLastname"
                                        label="Last Name"
                                        variant="filled"
                                        color="deepBlue"
                                        className="w-100 bg-bright-white rounded-1"
                                        onChange={(e) => setLastName(e.target.value)}
                                        disabled={vs === ViewStates.Submitting}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <TextField
                                        id="inputEmail"
                                        label="Email"
                                        variant="filled"
                                        color="deepBlue"
                                        className="w-100 bg-bright-white rounded-1"
                                        error={emailValid === false}
                                        onChange={(e) => validateEmail(e)}
                                        disabled={vs === ViewStates.Submitting}
                                    />
                                </Grid>
                                <Grid xs={12} md={6}>
                                    <MuiTelInput
                                        label={"Phone"}
                                        variant={"filled"}
                                        color={"deepBlue"}
                                        defaultCountry={"US"}
                                        focusOnSelectCountry={true}
                                        className={"w-100 bg-bright-white rounded-1"}
                                        error={phoneValid === false}
                                        value={phone}
                                        onChange={validatePhone}/>
                                </Grid>
                                {!props.hideCity &&
                                    <Grid xs={6} md={6}>
                                        <TextField
                                            id="inputCity"
                                            label="City"
                                            variant="filled"
                                            color="deepBlue"
                                            className="w-100 bg-bright-white rounded-1"
                                            onChange={(e) => setCity(e.target.value)}
                                            disabled={vs === ViewStates.Submitting}
                                        />
                                    </Grid>
                                }
                                {!props.hideState &&
                                    <Grid xs={6} md={6}>
                                        <FormControl fullWidth variant={"filled"}>
                                            <InputLabel id="labelState" color="deepBlue">
                                                State
                                            </InputLabel>
                                            <Select
                                                labelId="labelState"
                                                id="inputState"
                                                label="State"
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                                variant="filled"
                                                color="deepBlue"
                                                className={"bg-bright-white rounded-1"}
                                                disabled={vs === ViewStates.Submitting}
                                            >
                                                {States.map((s) => (
                                                    <MenuItem color="deepBlue" value={s} key={s}>
                                                        {s}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                }
                            </Grid>
                        </form>
                        <div className="d-flex justify-content-center mt-4 pt-2">
                            <Button
                                color="deepBlue"
                                variant="contained"
                                disableElevation
                                onClick={submitForm}
                                disabled={
                                    !(
                                        firstName &&
                                        lastName &&
                                        email &&
                                        emailValid &&
                                        (props.hideCity || city) &&
                                        (props.hideState || state) &&
                                        phone &&
                                        phoneValid
                                    ) || vs === ViewStates.Submitting
                                }
                            >
                                Submit
                                {vs === ViewStates.Submitting && (
                                    <CircularProgress
                                        color="pickleGreen"
                                        style={{
                                            width: "18px",
                                            height: "18px",
                                            marginLeft: "0.75rem",
                                        }}
                                        thickness={3}
                                    />
                                )}
                            </Button>
                        </div>
                        <p className={"text-center text-deep-blue text-md-bright-white fs-14px mt-4 mb-md-0"}>
                            By providing your email address, you agree to receive marketing communications from
                            Picklemall.
                        </p>
                    </div>
                )}
                {vs === ViewStates.Submitted && !props.hideAfterSubmit && (
                    <div className="p-3 p-md-5">
                        <div className="d-flex justify-content-center">
                            <div className="exclamation-circle">
                                <CheckCircleOutline/>
                            </div>
                        </div>
                        <h1
                            className="text-center text-deep-blue text-md-bright-white font-barlow-condensed fs-22px fs-md-26px"
                        >
                            Nice!
                        </h1>
                        <p className="text-center text-deep-blue text-md-bright-white fs-14px">
                            We've got your info, and will keep you updated with the latest
                            information.
                        </p>
                    </div>
                )}
                {vs === ViewStates.SubmitError && (
                    <div className="p-3 p-md-5">
                        <div className="d-flex justify-content-center">
                            <div className="exclamation-circle">
                                <ErrorOutline/>
                            </div>
                        </div>
                        <h1
                            className="text-center text-deep-blue text-md-bright-white font-barlow-condensed fs-22px fs-md-26px"
                        >
                            Oops!
                        </h1>
                        <p className="text-center text-deep-blue text-md-bright-white fs-14px">
                            There was a problem submitting your contact info. Please try
                            again later.
                        </p>
                    </div>
                )}
            </Card>
        </div>
    );
}
