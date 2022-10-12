import React from "react";
import { Link } from "react-router-dom";

// Routes
import { COLLECTIONS_URL, HOME_URL } from "../../routes";

// Styles
import styles from "./DesktopSideMenu.module.scss";

// Assets
import { ReactComponent as Home } from "../../assets/svgs/Home.svg";
import { ReactComponent as Music } from "../../assets/svgs/music-library-2.svg";
import { ReactComponent as Radio } from "../../assets/svgs/radio.svg";
import { ReactComponent as Video } from "../../assets/svgs/video-horizontal.svg";
import { ReactComponent as User } from "../../assets/svgs/frame.svg";
import { ReactComponent as Logout } from "../../assets/svgs/Logout.svg";

function DesktopSideMenu() {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link to={HOME_URL}>
          <Home />
        </Link>
        <Link to={HOME_URL}>
          <Music />
        </Link>
        <Link to={COLLECTIONS_URL}>
          <Radio />
        </Link>
        <Link to={HOME_URL}>
          <Video />
        </Link>
      </div>
      <div className={styles.innerContainer}>
        <Link to={HOME_URL}>
          <User />
        </Link>
        <Link to={HOME_URL}>
          <Logout />
        </Link>
      </div>
    </div>
  );
}

export default DesktopSideMenu;
