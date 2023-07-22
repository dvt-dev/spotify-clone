/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useStateProvider } from "./untils/StateProvider";

import Login from "./components/Login/Login";
import { reducerCases } from "./untils/Constant";
import Spotify from "./components/Spotify/Spotify";

const App = () => {
    const [{ token }, dispatch] = useStateProvider();

    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const token = hash.substring(1).split("&")[0].split("=")[1];
            dispatch({ type: reducerCases.SET_TOKEN, token });
        }
    }, [token, dispatch]);
    return <>{token ? <Spotify /> : <Login />}</>;
};

export default App;
