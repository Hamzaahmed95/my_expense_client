import React, { Component, Fragment } from 'react';
import { readMyExpense, updateMyExpense, deleteMyExpense } from '../../actions/my_expense'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { filterData } from '../../utils/constants'
import './MyExpense.css'
import { connect } from 'react-redux';
import { CreateMyExpense } from '../../containers/Modals/CreateModal/CreateMyExpense.js'
import { UpdateMyExpense } from '../../containers/Modals/UpdateModal/UpdateMyExpense.js'
import delete_icon from '../../public/assets/delete_icon.png'
class MyExpense extends Component {


    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange(e) {
        //this.props.searchMyExpense(this.props.myexpense, e.target.value)
    }
    componentDidMount() {
        this.props.readMyExpense()  
    }
  

    render() {
        console.log("MyExpense: " + JSON.stringify(this.props.myexpense))

        return (
            <Fragment>

                <div className="MyExpense">

                    <div className="row myRow">
                        <div className="col-md-8 "> <h3 className="MyExpenseHeading">My Expense </h3></div>
                        <div className="col-md-2"> <input className="form-control mr-sm-2" onChange={(e) => this.handleChange(e)} type="search" placeholder="Search" aria-label="Search" /></div>
                        <div className="col-md-2"> <CreateMyExpense /></div>
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
                                            <UpdateMyExpense body={myexpense} />
                                        </TableCell>
                                        <TableCell className="cell" align="center">
                                            <img onClick={this.props.deleteMyExpense.bind(this, myexpense.id)} src={delete_icon} width={15} height={17} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>


                        </Table>
                    </TableContainer>
                </div >
            </Fragment >

        );
    }
}

const mapStateToProps = state => ({
    myexpense: state.my_expense.myExpense,
    status: state.my_expense.status
})

export default connect(mapStateToProps, {readMyExpense, updateMyExpense, deleteMyExpense })(MyExpense);

