import React, {useState} from 'react'
import {TextField, Button, CircularProgress} from '@mui/material'
import { ErrorOutline, CheckCircleOutline } from "@mui/icons-material"

import './EmailCollection.scss'
import validator from 'validator'

import {collection, addDoc, Timestamp} from "firebase/firestore"
import {db} from "../../Firebase"

export default function EmailCollection() {
    const ViewStates = {
        Form: 0,
        Submitting: 1,
        Submitted: 2
    }

    const [email, setEmail] = useState('')
    const [emailValid, setEmailValid] = useState(null)
    const [vs, setViewState] = useState(ViewStates.Form)

    const validateEmail = e => {
        const email = e.target.value
        setEmail(email)
        setEmailValid(validator.isEmail(email))
    }

    const keyDown = e => {
        if (e.key === 'Enter' && emailValid) {
            submit(e)
        }
    }
    const submit = async (e) => {
        setViewState(ViewStates.Submitting)
        const docRef = await addDoc(collection(db, 'contacts'), {
            email,
            created: Timestamp.fromDate(new Date())
        })
            .then(_ => {
                setViewState(ViewStates.Submitted)
            })
    }

    return <div className={'EmailCollection'}>
        <div className={'email-card bg-white p-md-2'}>
            {vs !== ViewStates.Submitted &&
                <div className={'d-md-flex p-2'}>
                    <div className={'pe-md-2'}>
                        <TextField id={'inputEmailCollection'}
                                   label={'Email'}
                                   variant={'outlined'}
                                   color={'volleyBlue'}
                                   size={'small'}
                                   className={'mr-2'}
                                   onKeyDown={(e) => keyDown(e)}
                                   onChange={validateEmail}
                                   disabled={vs === ViewStates.Submitting || vs === ViewStates.Submitted}
                        />
                    </div>
                    <div className={'d-flex justify-content-center pt-2 pt-md-0'}>
                        <Button color={'volleyBlue'}
                                size={'small'}
                                variant={'contained'}
                                disableElevation
                                onClick={submit}
                                disabled={!email || !emailValid || vs === ViewStates.Submitting || vs === ViewStates.Submitted}
                        >
                            Stay in the loop
                            {vs === ViewStates.Submitting && (
                                <CircularProgress
                                    color="volleyBlue"
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
                </div>
            }
            {vs === ViewStates.Submitted &&
            <div className={'p-2 d-flex align-items-center justify-content-between'}>
                <div className="exclamation-circle bg-volley-blue me-2">
                    <CheckCircleOutline />
                </div>
                <span className={'fs-14px fs-md-16px'}>We'll be in touch!</span>
            </div>
            }
        </div>
    </div>
}