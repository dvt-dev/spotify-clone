import React from "react";

import styles from "./Spotify.module.scss";
import classname from "classnames/bind";

const cx = classname.bind(styles);

const Spotify = () => {
    return (
        <div>
            <section className={cx("spotify__wrapper")}>
                <div className={cx("spotify__container")}>Spotify</div>
            </section>
        </div>
    );
};

export default Spotify;
