import Container from '@material-ui/core/Container';
import React, {Component} from "react";
import SearchAppBar from "../SerachBar/MenuAppBar";
import TableCovidStatistic from "../TableCovidStatistic/TableCovidStatistic";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "@/components/MainView/styles";

class MainView extends Component {

    render() {
        const {classes} = this.props;

        return (
            <Container component="main" maxWidth="xl">
                <SearchAppBar/>
                <Container className={classes.content}>
                    <TableCovidStatistic/>
                </Container>

            </Container>
        )
    }
}

export default withStyles(styles)(MainView);
