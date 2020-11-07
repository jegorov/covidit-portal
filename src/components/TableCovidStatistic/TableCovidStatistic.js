import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "@/components/MainView/styles";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {restService} from "@/services/restService";
import Paper from "@material-ui/core/Paper";
import TableCell from "@material-ui/core/TableCell";
import Typography from "@material-ui/core/Typography";

class TableCovidStatistic extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
        }
    }

    async componentDidMount() {
        let data = await restService.getAllCovidData();
        this.setState({data: data})
    }

    render() {
        const {classes} = this.props;

        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table" size={"small"}>
                    <TableHead>
                        <TableRow>
                            <TableCell size={"small"}> <Typography
                                style={{fontSize: 13}}>Country</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>New
                                Cases</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>New
                                Death&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>New
                                Recovered&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Total
                                Cases&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Total
                                Death&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Total
                                Recovered&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Active
                                Cases&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Serious
                                Critical&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography
                                style={{fontSize: 13}}>Population&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Total Case (per
                                1mln)&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Death (per
                                1mln)&nbsp;(g)</Typography></TableCell>
                            <TableCell align="right" size={"small"}><Typography style={{fontSize: 13}}>Tests (per
                                1mln)&nbsp;(g)</Typography></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(this.state && this.state.data) ?
                            this.state.data.map(row =>
                                (<TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.country}
                                    </TableCell>
                                    <TableCell align="right">{row.newCases}</TableCell>
                                    <TableCell align="right">{row.newDeath}</TableCell>
                                    <TableCell align="right">{row.newRecovered}</TableCell>
                                    <TableCell align="right">{row.totalCases}</TableCell>
                                    <TableCell align="right">{row.totalDeath}</TableCell>
                                    <TableCell align="right">{row.totalRecovered}</TableCell>
                                    <TableCell align="right">{row.activeCases}</TableCell>
                                    <TableCell align="right">{row.seriousCritical}</TableCell>
                                    <TableCell align="right">{row.population}</TableCell>
                                    <TableCell align="right">{row.totalCasesPerMln}</TableCell>
                                    <TableCell align="right">{row.deathsPerMln}</TableCell>
                                    <TableCell align="right">{row.testsPerMln}</TableCell>
                                </TableRow>)
                            )
                            : "loading..."}
                    </TableBody>
                </Table>
            </TableContainer>
        );
    }
}

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

export default withStyles(styles)(TableCovidStatistic);
