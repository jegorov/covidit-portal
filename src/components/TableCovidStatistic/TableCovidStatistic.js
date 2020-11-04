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

class TableCovidStatistic extends Component {

    static = {
        data: null
    }

    async componentDidMount() {
        let data = await restService.getAllCovidData();
        this.setState({data: data})
    }

    renderTableCells = () => {
        if (this.state && this.state.data) {
            this.state.data.map(row =>
                (<TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                </TableRow>)
            )
        }
    }

    render() {
        const {classes} = this.props;

        return (
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Country</TableCell>
                            <TableCell align="right">New Cases</TableCell>
                            <TableCell align="right">New Death&nbsp;(g)</TableCell>
                            <TableCell align="right">New Recovered&nbsp;(g)</TableCell>
                            <TableCell align="right">Total Cases&nbsp;(g)</TableCell>
                            <TableCell align="right">Total Death&nbsp;(g)</TableCell>
                            <TableCell align="right">Total Recovered&nbsp;(g)</TableCell>
                            <TableCell align="right">Active Cases&nbsp;(g)</TableCell>
                            <TableCell align="right">Serious Critical&nbsp;(g)</TableCell>
                            <TableCell align="right">Population&nbsp;(g)</TableCell>
                            <TableCell align="right">Total Case (per 1mln)&nbsp;(g)</TableCell>
                            <TableCell align="right">Death (per 1mln)&nbsp;(g)</TableCell>
                            <TableCell align="right">Tests (per 1mln)&nbsp;(g)</TableCell>
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
