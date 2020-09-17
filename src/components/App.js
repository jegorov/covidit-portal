import React from "react";
import MainView from "./MainView/MainView";
import {Auth} from "./Auth/Auth";
import {Route, Router} from "react-router";
import {history} from '@/helpers/history';
import {authenticationService} from "@/services/authentication.service";
import SignIn from "@/components/Login/SignIn";

class App extends React.Component {

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
            <div>
                <Router history={history}>
                    <Auth component={MainView}/>
                    <Route path="/login" component={SignIn} />
                </Router>
            </div>
        );
    }
}

export {App};