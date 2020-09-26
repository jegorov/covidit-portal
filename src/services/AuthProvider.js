import {createTokenProvider} from "./TokenProvider";
import {useEffect, useState} from "react";


export const createAuthProvider = () => {

    /* Implementation */


    const tokenProvider = createTokenProvider();

    const login = (newTokens) => {
        tokenProvider.setToken(newTokens);
    };

    const logout = () => {
        tokenProvider.setToken(null);
    };


    const authFetch = async (input, init) => {
        const token = await tokenProvider.getToken();

        init = init || {};

        init.headers = {
            ...init.headers,
            Authorization: `Bearer ${token}`,
        };

        return fetch(input, init);
    };

    const useAuth = () => {
        const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

        useEffect(() => {
            const listener = (newIsLogged) => {
                setIsLogged(newIsLogged);
            };

            tokenProvider.subscribe(listener);
            return () => {
                tokenProvider.unsubscribe(listener);
            };
        }, []);

        return [isLogged];
    };
};