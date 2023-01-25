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
  const navigate = useNavigate();
  const roleUser = useSelector((states)=> states.auth.user.roleUser);
  const role = useSelector((states)=> states.auth.role);
  
  useDispatch(loginUser());

  const handleLogout = ()=>{
  dispatch(logoutUser());
  navigate("/");
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
                {(role == "PATIENT")?
                    <div className="userarea">
                      <p className="light-blue">Hi {role}</p>
                      <h3 className="blue">Welcome Back!  {`${roleUser?.patientName }`} </h3>
                    </div>:
                    <div className="userarea">
                      <p className="light-blue">Hi {role}</p>
                      <h3 className="blue">Welcome Back!  {`${roleUser?.firstName +" "+ roleUser?.lastName}`} </h3>
                    </div>}
                <div className="settingarea">
                <div class="dropdown">
                 <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Logout
                 </button>
                  <ul class="dropdown-menu">          
                    <li><button class="dropdown-item"  onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>                
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
