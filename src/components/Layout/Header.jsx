import React, { useEffect, useState } from 'react';
import { images } from "../Utility/Images";
import { BsBell } from "react-icons/bs";
import { logoutUser } from "../../redux/actions/auth/auth.actions";
import { useDispatch, useSelector } from "react-redux";

function Header() {

  const dispatch = useDispatch();

  const handleLogout = ()=>{
  dispatch(logoutUser());
  }

  return (
    <header>
      <div className="headertop">
        <div className="container-fluid">
          <div className="header-inner">
          <div className="row g-0">
            <div className="col-lg-2 col-2">
                <div className="header-left">
                  <div className="navbar-brand ">
                    <img src={images.logo} alt="" className="img-fluid" />
                  </div>
                </div>
              </div>
           
            <div className="col-lg-10 col-10">
              <div className="header-right">
                    <div className="userarea">
                      <p className="light-blue">Hi User Name</p>
                      <h3 className="blue">Welcome Back!</h3>
                    </div>
                <div className="settingarea">
                  <ul className="header-right">
                      <li className="icons"> <BsBell /></li>
                      <li>
                        <img src={images.avatar} alt="" onClick={handleLogout} />
                      </li>
                    </ul>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
      </div>
    </header>
  );
}

export default Header;
