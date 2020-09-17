import Container from '@material-ui/core/Container';
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SearchAppBar from "../SerachBar/MenuAppBar";
import TableCovidStatistic from "../TableCovidStatistic/TableCovidStatistic";

const useStyles = makeStyles((theme) => ({
    searchBox: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(3),
        display: 'flex',
        // alignItems: 'left',
        margin: theme.spacing(1)
    },
    searchIcon: {
        margin: theme.spacing(1),
        backgroundColor: "lightskyblue",
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    content: {
        marginLeft: theme.spacing(5),
        marginTop: theme.spacing(2)
    }
}));

export default function MainView() {

    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xl">
            <SearchAppBar/>
            <Container className={classes.content}>
                <TableCovidStatistic/>
            </Container>

        </Container>
    )
}