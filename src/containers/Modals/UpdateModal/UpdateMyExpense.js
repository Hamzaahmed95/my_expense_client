import Modal from 'react-bootstrap/Modal'
import React, { useState } from 'react'
import { updateMyExpense } from '../../../actions/my_expense'
import { Button, TextField, Select, MenuItem } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import {months_constants} from '../../../utils/constants'
import edit_icon from '../../../public/assets/edit_icon.png'

export function UpdateMyExpense(props) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const [state, setState] = React.useState({
        month: props.body.month,
        amount_send:props.body.amount_send,
        amount_received: props.body.amount_received,
        sent_date: props.body.sent_date,
        channel: props.body.channel,
        rates: props.body.rates
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleChange = (event) => {
        setState({...state,[event.target.name]: event.target.value});
    }

    const handleSubmit = (event) => {


        const body2 = {
            month:state.month,
            amount_send:state.amount_send,
            amount_received:state.amount_received,
            sent_date:state.sent_date,
            channel:state.channel,
            rates:state.rates,
        }
        console.log(props.body.id + " " + body2.month + " " + body2.amount_send + " " + body2.amount_received + " " + body2.sent_date + " " + body2.channel + " " + body2.rates)

        dispatch(updateMyExpense(body2, props.body.id))
        setShow(false)
        event.preventDefault();
    }
   
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

                            <Select value={state.month} fullWidth={true} id="standard-basic" label="Month" name="month" onChange={handleChange.bind(this)} >
                                {months_constants.map(month => (<MenuItem value={month}>{month}</MenuItem>))}
                            </Select>
                        </div>
                       
                        <div className="form-group">
                            <TextField color='primary' value={state.amount_send} required={true} fullWidth={true} id="standard-basic" label="Amount Sent" type="number" name="amount_send" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={state.amount_received} required={true} fullWidth={true} id="standard-basic" label="Amount Received" type="number" name="amount_received" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={state.sent_date} required={true} fullWidth={true} id="standard-basic" type="date" name="sent_date" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={state.channel} required={true} fullWidth={true} id="standard-basic" label="Channel" type="text" name="channel" onChange={handleChange.bind(this)} />
                        </div>
                        <div className="form-group">
                            <TextField color='primary' value={state.rates} required={true} fullWidth={true} id="standard-basic" label="Rates" type="text" name="rates" onChange={handleChange.bind(this)} />
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