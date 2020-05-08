import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { createMyExpense } from '../../../actions/my_expense.js'
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'

export function CreateMyExpense() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [state, setState] = React.useState({
        month: "January",
        amount_send: 0.00,
        amount_received: 0.00,
        sent_date: null,
        channel: '',
        rates: 0.00
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event) => {
        setState({...state,[event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {


        const body = {
            month:state.month,
            amount_send:state.amount_send,
            amount_received:state.amount_received,
            sent_date:state.sent_date,
            channel:state.channel,
            rates:state.rates,
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

                            <Select fullWidth={true} value={state.month} id="standard-basic" label="Month" name="month" onChange={handleChange.bind(this)} >
                                {months.map(month => (<MenuItem value={month}>{month}</MenuItem>))}
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