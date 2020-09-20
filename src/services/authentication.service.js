import {BehaviorSubject} from 'rxjs';

import config from 'config';
import {handleLoginResponse, handleSignUpResponse} from "@/helpers/handle-response";

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH')));

export const authenticationService = {
    login,
    logout,
    signUp,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue() {
        return currentUserSubject.value
    }
};

function login(username, password) {

    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    };

    return fetch(`${config.apiUrl}/login/token/get`, requestOptions)
        .then(handleLoginResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(user));
            currentUserSubject.next(user);

            return user;
        });
}

function signUp(user) {
    console.log(user)
    const requestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/signup`, requestOptions).then(handleSignUpResponse);
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('REACT_TOKEN_AUTH');
    currentUserSubject.next(null);
}