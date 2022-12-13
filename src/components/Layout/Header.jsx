import React, { useEffect, useState } from 'react';
import { images } from "../Utility/Images";
import { BsBell } from "react-icons/bs";
import { logoutUser } from "../../redux/actions/auth/auth.actions";
import { loginUser } from "../../redux/actions/auth/auth.actions";
import { rolesObj } from '../../utils/roles';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from 'react-router-dom';

function Header() {

  const dispatch = useDispatch();
  const roleUser = useSelector((states)=> states.auth.user.roleUser);
  const role = useSelector((states)=> states.auth.role);
  console.log(roleUser,"auth ,auth");
  console.log(role,"role role");
  useDispatch(loginUser());
 
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
                      <p className="light-blue">Hi {role}</p>
                      <h3 className="blue">Welcome Back!  {`${roleUser?.firstName +" "+ roleUser?.lastName}`} </h3>
                    </div>
                <div className="settingarea">
                  <ul className="header-right">
                      <li className="icons"> <BsBell /></li>
                      <li>
                        <Link to="/" className='btn btn-link mx-4'>
                        <img src={images.avatar} alt="" onClick={handleLogout} />
                        </Link>
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
