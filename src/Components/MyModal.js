import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { createMyExpense } from '../actions/my_expense'
import { Button, TextField,Select } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'

export function MyModal() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [month, setMonth] = useState('');
    const [amount_send, setAmountSent] = useState(0.00);
    const [amount_received, setAmountReceived] = useState(0.00);
    const [sent_date, setSentDate] = useState(null);
    const [channel, setChannel] = useState('');
    const [rates, setRates] = useState(0.00);
    const dispatch = useDispatch()

    const handleChange = (event) => {
        if (event.target.name === 'month') {
            setMonth(event.target.value)
        }
        if (event.target.name === 'amount_send') {
            setAmountSent(event.target.value)
        }
        if (event.target.name === 'amount_received') {
            setAmountReceived(event.target.value)
        }
        if (event.target.name === 'sent_date') {
            setSentDate(event.target.value)
        }
        if (event.target.name === 'channel') {
            setChannel(event.target.value)
        }
        if (event.target.name === 'rates') {
            setRates(event.target.value)
        }

    }

    const handleSubmit = (event) => {


        const body = {
            month,
            amount_send,
            amount_received,
            sent_date,
            channel,
            rates,
        }
        console.log(body.month + " " + body.amount_send + " " + body.amount_received + " " + body.sent_date + " " + body.channel + " " + body.rates)

        dispatch(createMyExpense(body))
        setShow(false)
        event.preventDefault();
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (
        <>
            <button variant="primary" onClick={handleShow} className="MyExpenseAddButton btn btn-outline-primary my-2 my-sm-0" type="submit">Add</button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit.bind(this)}>
                        <div className="form-group">

                            <Select fullWidth={true} id="standard-basic" label="Month" type="text" name="month" onChange={handleChange.bind(this)} className="browser-default">
                                {months.map(month => (<option value={month}>{month}</option>))}
                            </Select>
                         </div>
                        <div className="form-group">
                            <TextField color='primary' required={true} fullWidth={true} id="standard-basic" label="Amount Sent" type="number" name="amount_send" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required={true} fullWidth={true} id="standard-basic" label="Amount Received" type="number" name="amount_received" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required={true} fullWidth={true} id="standard-basic" type="date" name="sent_date" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required={true} fullWidth={true} id="standard-basic" label="Channel" type="text" name="channel" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' required={true} fullWidth={true} id="standard-basic" label="Rates" type="text" name="rates" onChange={handleChange.bind(this)} />
                        </div>

                        <Button variant="contained" type="submit" color="primary">Submit</Button>

                    </form>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}