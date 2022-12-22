import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { navigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { CUSTOMERAdd, CUSTOMERGet, SETCUSTOMERObj, CUSTOMERUpdate } from "../redux/actions/Customer/Customer.actions";
import { DOCTORAdd, DOCTORGet, SETDOCTORObj, DOCTORUpdate, DISEASEGet, HODGet, ALLDISEASEGet } from "../redux/actions/Doctor/Doctor.actions";
import { Link } from 'react-router-dom';
export const AdminProfile = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [position, setPosition] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");
    const [securityQuest, setSecurityQuest] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [statue, setStatue] = useState("");
    const [securityAns, setSecurityAns] = useState("");
    const [disease, setDisease] = useState("");
    const [diseaseMainArr, setDiseaseMainArr] = useState([]);
    const [hodArr, setHodArr] = useState([]);
    const [diseaseArr, setDiseaseArr] = useState([]);
    const [hod, sethod] = useState("");

    const customerArr = useSelector((states) => states.doctor.doctors);
    const hodArrRedux = useSelector((states) => states.doctor.hods);
    const diseaseArrRedux = useSelector((states) => states.hod.diseases);
    const roleUser = useSelector((states) => states.auth.user.roleUser);
    console.log(roleUser , "role user bhaiya");
    useEffect(() => {
        dispatch(CUSTOMERGet());
    }, []);

    useEffect(() => {
        dispatch(ALLDISEASEGet());
    }, []);

    useEffect(() => {
        dispatch(HODGet());
    }, []);

    const handleGet = () => {
        dispatch(DISEASEGet());
    };

    useEffect(() => {
        if (hodArrRedux) {
            setHodArr(hodArrRedux);
        }
    }, [hodArrRedux]);

    useEffect(() => {
        if (diseaseArrRedux) {
            setDiseaseArr(diseaseArrRedux);
        }
    }, [diseaseArrRedux]);

    useEffect(() => {
        handleGet()
    }, []);

    useEffect(() => {
        if (customerArr?.length) {
            setDiseaseMainArr(customerArr);
        }
    }, [customerArr]);

    const doctorObj = useSelector((states) => states.doctor.doctorObj);
    const customerObj = useSelector((states) => states.customer.customerObj);

    const dispatch = useDispatch();
    const handleAddCustomer = () => {

        let obj = {
            firstName,
            lastName,
            company,
            position,
            email,
            phone,
            state,
            country,
            city,
            password,
            conPassword,
            securityQuest,
            zipCode,
            statue,
            securityAns,
            hod,
            disease
        };

        if (roleUser?._id) {
            dispatch(CUSTOMERUpdate(roleUser._id, obj));
            dispatch(SETCUSTOMERObj(null))
        } else {
            dispatch(CUSTOMERAdd(obj));
            dispatch(SETCUSTOMERObj(null))
        }
    };

    useEffect(() => {
        if (roleUser) {
            setFirstName(roleUser.firstName);
            setLastName(roleUser.lastName);
            setCompany(roleUser.company);
            setPosition(roleUser.position);
            setEmail(roleUser.email);
            setPhone(roleUser.phone);
            setState(roleUser.state);
            setCountry(roleUser.country);
            setCity(roleUser.city);
            setPassword(roleUser.password);
            setConPassword(roleUser.conPassword);
            setSecurityQuest(roleUser.securityQuest);
            setZipCode(roleUser.zipCode);
            setStatue(roleUser.statue);
            setSecurityAns(roleUser.securityAns);
            sethod(roleUser.hod);
            setDisease(roleUser.disease);
        }
    }, [roleUser]);



    const question = [
        { value: "What's your pet name?", label: "What's your pet name?" },
        { value: "What's your favourate food?", label: "What's your favourate food?" },
        { value: "What's your mother maiden name?", label: "What's your mother maiden name?" },
        { value: "What's your Favorate actor name?", label: "What's your Favorate actor name?" },
        { value: "What's your nick name?", label: "What's your nick name?" },
    ]

    const statues = [
        { value: "Select", label: "Select" },
        { value: "disabled", label: "disabled" },
        { value: "enabled", label: "enabled" },
    ]
    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            <div className='viewadduser'>
                                {/* <ul >
              <Link to="/SubAdmin/AddSubAdmin"><li><BiUserPlus className='icon' /> <span>Add User</span></li></Link>
            </ul> */}
                            </div>
                        </div>
                        <div className="col-lg-4"><h4 style={{ color: "white", marginLeft: 150 }}>Profile</h4></div>
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
                                            <label>First Name  {firstName}<span>*</span></label>
                                            <input type="text" className='form-control' value={firstName} onChange={(e) => { setFirstName(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Hospital/Clinic <span>*</span></label>
                                            <input type="text" className='form-control' value={company} onChange={(e) => { setCompany(e.target.value) }} />
                                        </div>

                                        <div className='from-group'>
                                            <label>Email <span>*</span></label>
                                            <input type="text" className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>State <span>*</span></label>
                                            <input type="text" className='form-control' value={state} onChange={(e) => { setState(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>City <span>*</span></label>
                                            <input type="text" className='form-control' value={city} onChange={(e) => { setCity(e.target.value) }} />
                                        </div>
                                        {/* <div className='from-group'>
                                    <label>Password <span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div> */}
                                        {/* <div className='from-group'>
                                    <label>Security Question <span>*</span></label>

                                    <select  className="form-control" value={securityQuest} onChange={(e)=>{setSecurityQuest(e.target.value)}}>
                                        {
                                          question && question.map((el)=><option value={el.value}>{el.label}</option>)
                                        }
                                    </select>
                                </div> */}
                                        <div className='from-group'>
                                            <label>Status<span></span></label>
                                            <select className="form-control" value={statue} onChange={(e) => { setStatue(e.target.value) }}>
                                                {statues && statues.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>


                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Last Name<span>*</span></label>
                                            <input type="text" className='form-control' value={lastName} onChange={(e) => { setLastName(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Position/Title<span>*</span></label>
                                            <input type="text" className='form-control' value={position} onChange={(e) => { setPosition(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Phone<span>*</span></label>
                                            <input type="text" className='form-control' value={phone} maxLength={10} onChange={(e) => { setPhone(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Country<span>*</span></label>
                                            <input type="text" className='form-control' value={country} onChange={(e) => { setCountry(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>ZipCode<span>*</span></label>
                                            <input type="text" className='form-control' value={zipCode} onChange={(e) => { setZipCode(e.target.value) }} />
                                        </div>
                                        {/* <div className='from-group'>
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="text" className='form-control ' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
                                </div> */}
                                        {/* <div className='from-group'>
                                    <label>Answer<span>*</span></label>
                                    <input type="text" className='form-control' value={securityAns} onChange={(e)=>{setSecurityAns(e.target.value)}}/>
                                </div> */}
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center'>
                                        <Link to="" className='btn btn-link' onClick={handleAddCustomer}>Update Profile</Link>
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
