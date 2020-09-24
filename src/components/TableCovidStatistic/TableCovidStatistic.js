import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const useStyles = makeStyles({
    table: {
        //todo стили
    },
});

export default function TableCovidStatistic() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Country</StyledTableCell>
                        <StyledTableCell align="right">New Cases</StyledTableCell>
                        <StyledTableCell align="right">New Death&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">New Recovered&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Total Cases&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Total Death&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Total Recovered&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Active Cases&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Serious Critical&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Population&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Total Case (per 1mln)&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Death (per 1mln)&nbsp;(g)</StyledTableCell>
                        <StyledTableCell align="right">Tests (per 1mln)&nbsp;(g)</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>

                </TableBody>
            </Table>
        </TableContainer>
    );
}