import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import toast from "react-hot-toast";
import { toastError, toastSuccess } from "../../utils/toastUtils";
import { useDispatch, useSelector } from "react-redux";
import { HODAdd,HODGet, HODDelete, SETHODObj, HODUpdate, DISEASEGet } from "../../redux/actions/Hod/Hod.actions";
import { Link, useSearchParams } from 'react-router-dom';
export const AddHod = () => {
  const [searchParams, setSearchParams] = useSearchParams("edit");
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
  const [obj, serObj] = useState([]);

useEffect(() => {
    dispatch(DISEASEGet());
}, []);

const hodObj = useSelector((states) => states.hod.hodObj);
const diseasesArrRedux = useSelector((states) => states.hod.diseases);
// console.log(hodObj);
useEffect(() => {
    if(diseasesArrRedux){
        setDiseaseArr(diseasesArrRedux);
    }
  }, [diseasesArrRedux]);

const dispatch = useDispatch();
  const handleAddCustomer = () => {
    
    if (firstName == "" || firstName == undefined) {
        toast.error(" First name is mandatory ");
      return;
    }
    if (company == "" || company == undefined) {
        toast.error(" Hospital/Clinic name is mandatory ");
      return;
    }
    if (position == "" || position == undefined) {
        toast.error(" Position is mandatory ");
      return;
    }
    if (email == "" || email == undefined) {
        toast.error("  Email Can Not Be Empty ");
      return;
    }
    if (phone == "" || phone == undefined) {
        toast.error(" Phone can not be Empty ");
      return;
    }
    if (`${phone}`.length != 10 || firstName == undefined) {
        toast.error(" Phone Should be 10 digit ");
      return;
    }
    if(!hodObj?._id){
      if (password.trim().length == 0 ) {
        toast.error(" Password can not be Empty ");
      return;
    }
    if (password.trim().length < 5 ) {
        toast.error(" Password can not be less 5 digit");
      return;
    }
    if (password != conPassword ) {
        toast.error(" Password and Confirm Password Should Be Same");
      return;
    }
    }
  
    if (zipCode =="" || zipCode == undefined ) {
        toast.error(" Zipcode is mandatory");
      return;
    }
    if (disease =="" || disease == undefined ) {
        toast.error(" Disease is mandatory");
      return;
    }
    else{
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
        securityQuest,
        zipCode,
        securityAns,
        disease,
        verificationWord,
        conVerification
    };
    if(password){
      obj.password = password;
      obj.conPassword = conPassword;
    }
    if(hodObj?._id) {
        dispatch(HODUpdate(hodObj._id, obj));
        toast.success(" HOD Updated Successfully");
        // dispatch(SETHODObj(null))
    } else {
        dispatch(HODAdd(obj));
        toast.success(" HOD Added Successfully ");
    }
  }
    
};

useEffect(() => {
    if (hodObj) {
        setFirstName(hodObj?.firstName);
        setLastName(hodObj?.lastName);
        setCompany(hodObj?.company);
        setPosition(hodObj?.position);
        setEmail(hodObj?.email);
        setPhone(hodObj?.phone);
        setState(hodObj?.state);
        setCountry(hodObj?.country);
        setCity(hodObj?.city);
        // setPassword(hodObj?.password);
        // setConPassword(hodObj?.conPassword);
        setSecurityQuest(hodObj?.securityQuest);
        setZipCode(hodObj?.zipCode);
        setSecurityAns(hodObj?.securityAns);
        setVerificationWord(hodObj?.verificationWord);
        setConVerification(hodObj?.specialization);
        setDisease(hodObj?.disease);
    }
}, [hodObj]);

useEffect(()=> {
  console.log(searchParams.get("edit"), "edit")
  if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
    dispatch(SETHODObj(null))
  }
}, [searchParams.get("edit")])



const question = [
    { value:"", label: "Please Select option" },
    { value:"What's your pet name?", label:"What's your pet name?" },
    { value:"What's your favourite food?", label:"What's your favourite food?" },
    { value:"What's your mother maiden name?", label:"What's your mother maiden name?" },
    { value:"What's your birth city?", label:"What's your birth city?" },
    { value:"What's your nick name?", label:"What's your nick name?" },
]

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           <div className="btnlist">
            </div>
          </div>
          {(hodObj?._id)?
          <div className="col-lg-4"><h5 className="mb-0 text-center text-white"> UPDATE HOD </h5></div>
          :<div className="col-lg-4"><h5 className="mb-0 text-center text-white">ADD HOD</h5></div>}
          <div className="col-lg-4 text-end">
            <div className='btnlist'>
              <Link to="/Hod/Hod" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
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
                                    <label>First Name <span>*</span></label>
                                    <input type="text" className='form-control' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  />
                                </div>
                                <div className='from-group'>
                                    <label>Hospital/Clinic <span>*</span></label>
                                    <input type="text" className='form-control' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
                                </div>
                                
                                <div className='from-group'>
                                    <label>Email <span>*</span></label>
                                    <input type="email" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Password <span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
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
                                    <label>Last Name<span></span></label>
                                    <input type="text" className='form-control' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Position/Title<span>*</span></label>
                                    <input type="text" className='form-control' value={position} onChange={(e)=>{setPosition(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Phone<span>*</span></label>
                                    <input type="text" className='form-control' value={phone} maxLength={10} onChange={(e)=>{setPhone(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="text" className='form-control ' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
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
                                {(hodObj?._id)?
                                <button  className='btn btn-link' onClick={handleAddCustomer}>Update Hod</button>
                                :<button className='btn btn-link' onClick={handleAddCustomer}>Add Hod</button>}
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
