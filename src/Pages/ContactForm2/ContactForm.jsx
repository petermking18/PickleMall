import React, { useState } from "react";
import Card from "../../Components/Card/Card";
import { ErrorOutline, CheckCircleOutline } from "@mui/icons-material";
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

import validator from "validator";

import States from "../../Helpers/US-States";

import "./ContactForm.scss";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../../Firebase";
import ContactForm from "../../Components/ContactForm/ContactForm";

const ViewStates = {
  Landing: 0,
  Form: 1,
  Submitting: 2,
  Submitted: 3,
  SubmitError: 4,
};

export default function ContactForm2() {


  return (
      <div className={"contact-section px-md-5 py-md-5"}>
        <div className={"container my-md-5 py-md-5 d-flex justify-content-center align-items-center"}>
          <ContactForm/>
        </div>
      </div>
  );
}
