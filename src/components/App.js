import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainView from "@/components/MainView/MainView";
import {history} from '@/helpers/history';
import MapChartView from "@/components/MapChartView/MapChartView";

class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route exact path="/" component={MainView}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export {App};
