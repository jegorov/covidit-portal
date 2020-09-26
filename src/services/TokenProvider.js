import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {authenticationService} from "@/services/authentication.service";
import {string} from "prop-types";


export const createTokenProvider = () => {

    /* Implementation */

    let observers = [];

    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };

    let _token =
        JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH') || '') || null;

    const getExpirationDate = (jwtToken) => {
        if (!jwtToken) {
            return null;
        }

        const jwt = JSON.parse(atob(jwtToken.split('.')[1]));

        // multiply by 1000 to convert seconds into milliseconds
        return jwt && jwt.exp && jwt.exp * 1000 || null;
    };

    const isExpired = (exp) => {
        if (!exp) {
            return false;
        }

        return Date.now() > exp;
    };

    const getToken = async () => {
        if (!_token) {
            return null;
        }

        if (isExpired(getExpirationDate(_token.accessToken))) {
            const updatedToken = await fetch('/auth/token/get', {
                method: 'POST',
                body: _token.refreshToken
            })
                .then(r => r.json());

            setToken(updatedToken);
        }

        return _token && _token.accessToken;
    };

    const isLoggedIn = () => {
        return !!_token;
    };

    const subscribe = (observer) => {
        observers.push(observer);
    };

    const unsubscribe = (observer) => {
        observers = observers.filter(_observer => _observer !== observer);
    };

    const notify = () => {
        const isLogged = isLoggedIn();
        observers.forEach(observer => observer(isLogged));
    };

    const setToken = (token) => {
        if (token) {
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token));
        } else {
            localStorage.removeItem('REACT_TOKEN_AUTH');
        }
        _token = token;
        notify();
    };
};
