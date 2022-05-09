import "./navigation.style.scss";

import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { ReactComponent as SiteLogo } from "../../assets/image/crown.svg";
import { UserContext } from "../../contexts/user.context";
import {signOutUser} from './../../utils/firebase/firebase.utils'

const Navigation = () => {
  const { currentUser , setCurrentUser } = useContext(UserContext);
  const signOutHandler = async()=>{
    await signOutUser()
    setCurrentUser(null)
  }
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
          {currentUser ? (
            <Link to="/auth" className="nav-link" onClick={signOutHandler}>
              Sign Out
            </Link>
          ) : (
            <Link to="/auth" className="nav-link">
              Sign In
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
