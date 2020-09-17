import React from "react";
import MainView from "./MainView/MainView";
import {Auth} from "./Auth/Auth";
import {Router} from "react-router";

export default function App() {
    return (
        <div>
            <Router>
                <Auth component={MainView}/>
            </Router>
        </div>
    );
}