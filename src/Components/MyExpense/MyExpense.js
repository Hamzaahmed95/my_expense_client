import React, { Component, Fragment } from 'react';
import { getMyExpense, editMyExpense } from '../../actions/my_expense'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../../public/my_expense.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import edit_icon from '../../public/edit_icon.png'
import delete_icon from '../../public/delete_icon.png'


class MyExpense extends Component {

    static propTypes = {
        myexpense: PropTypes.array.isRequired
    }
    componentDidMount() {
        this.props.getMyExpense()
    }

    render() {
        const { classes } = this.props;
        return (
            <Fragment>
                <div className="MyExpense">
                    <div className="row myRow">
                        <div className="col-md-10 "> <h3 className="MyExpenseHeading">My Expense </h3></div>
                        <div className="col-md-2"> <button className="MyExpenseAddButton btn btn-outline-primary my-2 my-sm-0" type="submit">Add</button></div>
                    </div>


                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className="cell">ID</TableCell>
                                    <TableCell className="cell" align="left">Month</TableCell>
                                    <TableCell className="cell" align="left">Amount Sent</TableCell>
                                    <TableCell className="cell" align="left">Amount Received</TableCell>
                                    <TableCell className="cell" align="left">Sent Date</TableCell>
                                    <TableCell className="cell" align="left">Channel</TableCell>
                                    <TableCell className="cell" align="left">Rates</TableCell>
                                    <TableCell className="cell" align="left">Edit</TableCell>
                                    <TableCell className="cell" align="left">Delete</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.myexpense.map(myexpense => (
                                    <TableRow key={myexpense.id}>
                                        <TableCell className="cell" component="th" scope="row">
                                            {myexpense.id}
                                        </TableCell>
                                        <TableCell className="cell" align="left">{myexpense.month}</TableCell>
                                        <TableCell className="cell" align="left">{myexpense.amount_send}</TableCell>
                                        <TableCell className="cell" align="left">{myexpense.amount_received}</TableCell>
                                        <TableCell className="cell" align="left">{myexpense.sent_date}</TableCell>
                                        <TableCell className="cell" align="left">{myexpense.channel}</TableCell>
                                        <TableCell className="cell" align="left">{myexpense.rates}</TableCell>
                                        <TableCell className="cell" align="center">
                                            <img  src={edit_icon} width={15} height={17}/>
                                        </TableCell>
                                        <TableCell className="cell" align="center">
                                            <img src={delete_icon} width={15} height={17}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Fragment>

        );
    }
}

const mapStateToProps = state => ({
    myexpense: state.my_expense.myExpense
})

export default connect(mapStateToProps, { getMyExpense, editMyExpense })(MyExpense);

