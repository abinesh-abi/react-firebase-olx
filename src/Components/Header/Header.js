import React, { useContext } from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { AutheContext, FirebaseContext } from "../../store/Context";
import { Link, useHistory } from "react-router-dom";
function Header() {
  const { user } = useContext(AutheContext);
  const { firebase } = useContext(FirebaseContext)
     const history =  useHistory()

    function logout() {
      firebase.auth().signOut()
      history.push('/login')
    }

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          {user ? `Welcom ${user.displayName}` : <span><Link style={{color:"black"}} to='/login'>Login</Link> </span>} 
          <hr />
        </div>
          {user && <span onClick={logout}> Logout </span>}

        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span><Link to='/create' >SELL</Link> </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
