import Container from '@material-ui/core/Container';
import React, {Component} from "react";
import SearchAppBar from "../SerachBar/MenuAppBar";
import TableCovidStatistic from "../TableCovidStatistic/TableCovidStatistic";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from "@/components/MainView/styles";
import MapChartView from "@/components/MapChartView/MapChartView";
import SwitchComponents from "@/components/SwitchComponent/SwitchComponent";

class MainView extends Component {

    constructor() {
        super();

        this.state = {
            activeComponent: "table"
        }
    }

    onActiveComponentChange = (page) => {
        console.log(page)
        this.setState({activeComponent: page})
    }

    render() {
        const {classes} = this.props;

        return (
            <Container comssponent="main" maxWidth="lg">
                <SearchAppBar onActiveComponentChange={this.onActiveComponentChange} />
                <SwitchComponents active={this.state.activeComponent}>
                    <TableCovidStatistic name="table"/>
                    <MapChartView name="map"/>
                </SwitchComponents>
            </Container>
        )
    }
}

export default withStyles(styles)(MainView);
