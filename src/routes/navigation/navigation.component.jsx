import "./navigation.style.scss"

import { Link, Outlet } from "react-router-dom";

import { Fragment } from "react";
import { ReactComponent as SiteLogo } from "../../assets/image/crown.svg";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <SiteLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">
            Shop
          </Link>
          <Link to="/sign-in" className="nav-link">
            Sign In 
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
