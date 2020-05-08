import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { updateMyExpense } from '../../../actions/my_expense'
import { Button, TextField, Select } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import edit_icon from '../../../public/assets/edit_icon.png'

export function UpdateMyExpense(props) {
    const [show, setShow] = useState(false);
    console.log("props?"+JSON.stringify(props))

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [month, setMonth] = useState(props.body.month);
    const [amount_send, setAmountSent] = useState(props.body.amount_send);
    const [amount_received, setAmountReceived] = useState(props.body.amount_received);
    const [sent_date, setSentDate] = useState(props.body.sent_date);
    const [channel, setChannel] = useState(props.body.channel);
    const [rates, setRates] = useState(props.body.rates);
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


        const body2= {
            month,
            amount_send,
            amount_received,
            sent_date,
            channel,
            rates,
        }
        console.log(props.body.id+" "+body2.month + " " + body2.amount_send + " " + body2.amount_received + " " + body2.sent_date + " " + body2.channel + " " + body2.rates)

        dispatch(updateMyExpense(body2,props.body.id))
        setShow(false)
        event.preventDefault();
    }
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    return (
        <>
            <img src={edit_icon} onClick={handleShow} width={15} height={17} /> 
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit.bind(this)}>
                        <div className="form-group">
                            
                            <Select fullWidth={true} id="standard-basic" label="Month"  name="month" onChange={handleChange.bind(this)} >
                                {months.map(month => (<option value={month}>{month}</option>))}
                            </Select>  
                        </div>
                        <div className="form-group">
                            <TextField color='primary'  value={amount_send}required={true} fullWidth={true} id="standard-basic" label="Amount Sent" type="number" name="amount_send" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={amount_received} required={true} fullWidth={true} id="standard-basic" label="Amount Received" type="number" name="amount_received" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={sent_date} required={true} fullWidth={true} id="standard-basic" type="date" name="sent_date" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={channel} required={true} fullWidth={true} id="standard-basic" label="Channel" type="text" name="channel" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={rates} required={true} fullWidth={true} id="standard-basic" label="Rates" type="text" name="rates" onChange={handleChange.bind(this)} />
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