import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {styles} from "@/components/MainView/styles";
import Chart from "react-google-charts";
import {restService} from "@/services/restService";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

class MapChartView extends Component {

    constructor() {
        super();
        this.state = {
            data: null,
            mapValue: 'Total Cases'
        }
    }

    async componentDidMount() {
        let data = await restService.getAllCovidData();
        this.setState({data: data})
    }

    switchByFilter = (row) => {
        switch (this.state.mapValue) {
            case "Total Cases": {
                return row.totalCases;
            }
            case "Total Death" : {
                return row.totalDeath
            }
            case "Total Recovered" : {
                return row.totalRecovered
            }
            case "Cases Per Mln" : {
                return row.totalCasesPerMln
            }
            case "Deaths Per Mln" : {
                return row.deathsPerMln
            }
            case "Tests Per Mln" : {
                return row.testsPerMln
            }
        }
    }
    retData = () => {
        let data = [['Country', this.state.mapValue]];
        this.state && this.state.data ?
            this.state.data.map(row => row.country.toLowerCase() !== 'world' ? data.push([
                row.countryCode, this.switchByFilter(row)
            ]) : null) : data.push(['RU', 700])
        return data;
    }

    handleChange = (event, newValue) => {
        this.setState({mapValue: newValue});
    };

    render() {
        // const {classes} = this.props;
        return (
            <div>
                <Tabs
                    value={this.state.mapValue}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab value={'Total Cases'} label="Total Cases"/>
                    <Tab value={'Total Death'} label="Total Death"/>
                    <Tab value={'Total Recovered'} label="Total Recovered"/>
                    <Tab value={'Cases Per Mln'} label="Cases Per Mln"/>
                    <Tab value={'Deaths Per Mln'} label="Deaths Per Mln"/>
                    <Tab value={'Tests Per Mln'} label="Tests Per Mln"/>

                </Tabs>
                <Chart
                    key={this.state.mapValue}
                    chartType="GeoChart"
                    data={this.retData()}
                    options={{
                        // region: '002', // Africa
                        colorAxis: {colors: ['#00853f', '#fdef52', '#ffb12c', '#ff7a27', '#b54747', '#700000']},
                        backgroundColor: '#81d4fa',
                        datalessRegionColor: '#b3b3b3',
                        defaultColor: '#f5f5f5',
                    }}
                    // Note: you will need to get a mapsApiKey for your project.
                    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
                    mapsApiKey="my-precious-key"
                    rootProps={{'data-testid': '1'}}
                />
            </div>
        );
    }
}

export default withStyles(styles)(MapChartView);
