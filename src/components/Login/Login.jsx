// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Login.module.scss";
import classname from "classnames/bind";

const cx = classname.bind(styles);

import spotify from "../../assets/images/imgs/spotify-bgc-white.png";

const Login = () => {
    const handleClick = () => {
        const clientId = "1ae24a73a036473ba9c89762f5a4c688";
        const redirectUrl = "http://localhost:5173/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            "user-read-email",
            "user-read-private",
            "user-read-playback-state",
            "user-modify-playback-state",
            "user-read-currently-playing",
            "user-read-playback-position",
            "user-top-read",
            "user-read-recently-played",
        ];
        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_daialog=true`;
    };

    return (
        <div className={cx("login-wrapper")}>
            <img src={spotify} alt="spotify" className={cx("spotify-img")} />
            <button className={cx("btn-connect")} onClick={handleClick}>
                Connect to Spotify
            </button>
        </div>
    );
};

export default Login;
