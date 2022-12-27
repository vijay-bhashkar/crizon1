import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { SUBADMINAdd,SUBADMINGet, SETSUBADMINObj, SUBADMINUpdate, } from "../../redux/actions/SubAdmin/SubAdmin.actions";
import { Link } from 'react-router-dom';
export const ViewSubAdmin = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");

const subAdminObj = useSelector((states) => states.subAdmin.subAdminsObj);

const dispatch = useDispatch();
useEffect(() => {
    dispatch(SUBADMINGet());
  }, []);

useEffect(() => {
    handleGet()
}, []);

const handleGet = () => {
    dispatch(SUBADMINGet());
};

useEffect(() => {
    if (subAdminObj) {
        setName(subAdminObj?.name);
        setEmail(subAdminObj?.email);
        setRole(subAdminObj.role);
        setPassword(subAdminObj.password);
        setConPassword(subAdminObj.conPassword);
    }
}, [subAdminObj]);

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           <div className='viewadduser'>
              <div className='btnlist'>
              <Link to="/SubAdmin/ListView" class="btn btn-defalut btn-md"> <BiUserPlus className='icon' /> List Sub Admin</Link>
              </div>
           </div>
          </div>
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
      <div className="wrapper_contentbody">
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>Name : </b> <span>{name}</span></label>
                                   
                                </div>
                                {/* <div className='from-group'>
                                    <label>Password <span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div> */}
                                <div className='from-group'>
                                    <label><b>Role : </b> <span>{role}</span></label>
                                    
                                </div>      
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>Email: </b> <span>{email}</span></label>
                                 
                                </div>
                                {/* <div className='from-group'>
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="text" className='form-control' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  )
}
