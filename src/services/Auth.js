import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {authenticationService} from "@/services/authentication.service";


//todo пока не используется ибо не надо
export const Auth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue;
        console.log("user " + currentUser)
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)