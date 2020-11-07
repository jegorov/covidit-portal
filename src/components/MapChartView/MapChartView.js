import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "@/components/MainView/styles";
import Chart from "react-google-charts";

class MapChartView extends Component {

    constructor() {
        super();
    }

    async componentDidMount() {
        // let data = await restService.getAllCovidData();
        // this.setState({data: data})
    }

    render() {
        // const {classes} = this.props;

        return (
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="GeoChart"
                data={[
                    ['Country', 'Popularity'],
                    ['Germany', 200],
                    ['United States', 300],
                    ['Brazil', 400],
                    ['Canada', 500],
                    ['France', 600],
                    ['RU', 700],
                ]}
                // Note: you will need to get a mapsApiKey for your project.
                // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                mapsApiKey="YOUR_KEY_HERE"
                rootProps={{'data-testid': '1'}}
            />
        );
    }
}

export default withStyles(styles)(MapChartView);
