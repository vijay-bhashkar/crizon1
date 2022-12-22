import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { SUBADMINAdd,SUBADMINGet, SETSUBADMINObj, SUBADMINUpdate, } from "../../redux/actions/SubAdmin/SubAdmin.actions";
import { Link } from 'react-router-dom';
export const AddSubAdmin = () => {

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


  const handleAddCustomer = () => {

    if(!name){
        alert("Name is required")
        return
    }
    if(!email){
        alert("Email is required")
        return
    }

    let obj = {
        name,
        email,
        role,
        password,
        conPassword,
    };

    if (subAdminObj?._id) {
        dispatch(SUBADMINUpdate(subAdminObj._id, obj));
        dispatch(subAdminObj(null))
    } else {
        console.log(obj);
        dispatch(SUBADMINAdd(obj));
    }
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

const roleDrop = [
    { value:"", label:"Select" },
    { value:"admin" , label:"Admin" },
    { value:"sub-admin" , label:"Sub Admin" },
    { value:"user" , label:"User" },
]
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
                                    <label>Name  {name}<span>*</span></label>
                                    <input type="text" className='form-control' value={name} onChange={(e)=>{setName(e.target.value)}}  />
                                </div>
                                <div className='from-group'>
                                    <label>Password <span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Role <span>*</span></label>
                                    <select className="form-control" value={role} onChange={(e)=>{setRole(e.target.value)}}>
                                        { roleDrop && roleDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                                    </select>
                                </div>      
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>Email <span>*</span></label>
                                    <input type="text" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="text" className='form-control' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>  
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <button type="button" to="" className='btn btn-link' onClick={handleAddCustomer}>Submit</button>
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
