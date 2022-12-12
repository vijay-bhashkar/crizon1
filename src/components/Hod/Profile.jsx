import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { HODAdd,HODGet, HODDelete, SETHODObj, HODUpdate, DISEASEGet } from "../../redux/actions/Hod/Hod.actions";
import { Link } from 'react-router-dom';
export const Profile = () => {

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
  const [securityAns, setSecurityAns] = useState("");
  const [verificationWord, setVerificationWord] = useState("");
  const [conVerification, setConVerification] = useState("");
  const [disease, setDisease] = useState("");
  const [diseaseArr, setDiseaseArr] = useState([]);

useEffect(() => {
    dispatch(DISEASEGet());
}, []);

const hodObj = useSelector((states) => states.hod.hodObj);
const diseasesArrRedux = useSelector((states) => states.hod.diseases);
const roleUser = useSelector((states)=> states.auth.user.roleUser);
console.log(roleUser.firstName,"roleuser");
useEffect(() => {
    if(diseasesArrRedux){
        setDiseaseArr(diseasesArrRedux);
    }
  }, [diseasesArrRedux]);

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
        securityAns,
        disease,
        verificationWord,
        conVerification
    };

    if (roleUser?._id) {
        dispatch(HODUpdate(roleUser._id, obj));
        dispatch(SETHODObj(null))
    } else {
        dispatch(HODAdd(obj));
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
        setSecurityAns(roleUser.securityAns);
        setVerificationWord(roleUser.verificationWord);
        setConVerification(roleUser.specialization);
        setDisease(roleUser.disease);
    }
}, [hodObj]);

const question = [
    { value:"", label: "Please Select option" },
    { value:"What's your pet name?", label:"What's your pet name?" },
    { value:"What's your favourate food?", label:"What's your favourate food?" },
    { value:"What's your mother maiden name?", label:"What's your mother maiden name?" },
    { value:"What's your Favorate actor name?", label:"What's your Favorate actor name?" },
    { value:"What's your nick name?", label:"What's your nick name?" },
]

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           <div className='viewadduser'>
            <ul >
                <li><BiUserPlus className='icon' /> <span>Add User</span></li>
                <li><AiOutlineUnorderedList className='icon' /> <span>Add User</span></li>
            </ul>
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
                                    <label>First Name  {firstName}<span>*</span></label>
                                    <input type="text" className='form-control' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  />
                                </div>
                                <div className='from-group'>
                                    <label>Company <span>*</span></label>
                                    <input type="text" className='form-control' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
                                </div>
                                
                                <div className='from-group'>
                                    <label>Email <span>*</span></label>
                                    <input type="text" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>State <span>*</span></label>
                                    <input type="text" className='form-control' value={state} onChange={(e)=>{setState(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>City <span>*</span></label>
                                    <input type="text" className='form-control' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Password <span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Security Question <span>*</span></label>
                                    <select  className="form-control" value={securityQuest} onChange={(e)=>{setSecurityQuest(e.target.value)}}>
                                    { question && question.map((el)=><option value={el.value}>{el.label}</option>) }
                                    </select>
                                </div>
                                <div className='from-group'>
                                    <label>Disease<span>*</span></label>
                                    <select className="form-control" value={disease} onChange={(e)=>{setDisease(e.target.value)}}>
                                        <option>Please Select</option>
                                        { diseaseArr && diseaseArr.map((el)=><option value={el.disease}>{el.name}</option>) }
                                    </select>
                                </div>
                            
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>Last Name<span>*</span></label>
                                    <input type="text" className='form-control' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Position/Title<span>*</span></label>
                                    <input type="text" className='form-control' value={position} onChange={(e)=>{setPosition(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Phone<span>*</span></label>
                                    <input type="text" className='form-control' maxLength={10} value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Country<span>*</span></label>
                                    <input type="text" className='form-control' value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>ZipCode<span>*</span></label>
                                    <input type="text" className='form-control' maxLength={6} value={zipCode} onChange={(e)=>{setZipCode(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="text" className='form-control ' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Answer<span>*</span></label>
                                    <input type="text" className='form-control' value={securityAns} onChange={(e)=>{setSecurityAns(e.target.value)}}/>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                    <label>Verification Word*</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={verificationWord} onChange={(e)=>{setVerificationWord(e.target.value)}}/>
                                        <span class="input-group-text"><BiRefresh /></span>
                                    </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='from-group'>
                                            <label>&nbsp;</label>
                                            <input type="text" className='form-control' value={conVerification} onChange={(e)=>{setConVerification(e.target.value)}}/>
                                        </div>
                                    </div>
                                </div>
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
