import React, { Component, Fragment } from 'react';
import { getMyExpense } from '../../actions/my_expense'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import '../../public/my_expense.css'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const styles = theme => ({
    table: {
        minWidth: 0,
    },
});


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
                    <h3>My Expense </h3>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>ID</TableCell>
                                    <TableCell align="right">Month</TableCell>
                                    <TableCell align="right">Amount Sent</TableCell>
                                    <TableCell align="right">Amount Received</TableCell>
                                    <TableCell align="right">Sent Date</TableCell>
                                    <TableCell align="right">Channel</TableCell>
                                    <TableCell align="right">Ringgit Rates</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.myexpense.map(myexpense => (
                                    <TableRow key={myexpense.id}>
                                        <TableCell component="th" scope="row">
                                            {myexpense.id}
                                        </TableCell>
                                        <TableCell align="right">{myexpense.month}</TableCell>
                                        <TableCell align="right">{myexpense.amount_send}</TableCell>
                                        <TableCell align="right">{myexpense.amount_received}</TableCell>
                                        <TableCell align="right">{myexpense.sent_date}</TableCell>
                                        <TableCell align="right">{myexpense.channel}</TableCell>
                                        <TableCell align="right">{myexpense.rates}</TableCell>
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

export default connect(mapStateToProps, { getMyExpense })(withStyles(styles)(MyExpense));

