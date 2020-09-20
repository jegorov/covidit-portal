import React, {Component} from "react";
import SignIn from "@/components/Login/SignIn";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SignUp from "@/components/SignUp/SignUp";
import MainView from "@/components/MainView/MainView";
import {authenticationService} from "@/services/authentication.service";
import {history} from '@/helpers/history';
import {Auth} from "@/components/Auth/Auth";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    componentDidMount() {
        authenticationService.currentUser.subscribe(x => this.setState({currentUser: x}));
    }


    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Switch>
                        <Auth exact path="/" component={MainView}/>
                        <Route path="/home" component={MainView}/>
                        <Route path="/login" component={SignIn}/>
                        <Route path="/register" component={SignUp}/>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export {App};