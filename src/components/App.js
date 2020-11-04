import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainView from "@/components/MainView/MainView";
import {history} from '@/helpers/history';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" component={MainView}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export {App};
