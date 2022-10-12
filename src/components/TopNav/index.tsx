import React from "react";
import { Link } from "react-router-dom";

// Routes
import { HOME_URL } from "../../routes";

// Styles
import styles from "./TopNav.module.scss";

// Assets
import { ReactComponent as Logo } from "../../assets/svgs/logo.svg";
import { ReactComponent as Menu } from "../../assets/svgs/menu 1.svg";

function TopNav() {
  return (
    <nav className={styles.container}>
      <Link to={HOME_URL}>
        <Logo />
      </Link>

      <button type="button">
        <Menu />
      </button>
    </nav>
  );
}

export default TopNav;
