import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";

import { useDispatch, useSelector } from "react-redux";
import { DOCTORGet, DOCTORDelete, SETDOCTORObj } from "../../redux/actions/Doctor/Doctor.actions";
import { DISEASEGet } from "../../redux/actions/Disease/Disease.actions";
import { Link } from 'react-router-dom';
export const ShowView = () => {

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
  const [specialization, setSpecialization] = useState("");
  const [disease, setDisease]= useState("");
  const [diseaseMainArr, setDiseaseMainArr] = useState([]);
  const [hodArr, setHodArr] = useState([]);
  const [diseaseArr, setDiseaseArr] = useState([]);
  const [hod, sethod] = useState("");
  const [diseaseName, setDiseaseName] = useState("")
  
  const customerArr = useSelector((states) => states.doctor.doctors);
  const hodArrRedux = useSelector((states) => states.customer.hods);
  const diseaseArrRedux = useSelector((states) => states.hod.diseases);

useEffect(() => {
    if(hodArrRedux){
        setHodArr(hodArrRedux);
    }
  }, [hodArrRedux]);

  useEffect(() => {
    dispatch(DISEASEGet());
}, []);

useEffect(() => {
    if(diseaseArrRedux){
        setDiseaseArr(diseaseArrRedux);
    }
    if(disease){
        let diseaseName = diseaseArrRedux.find(el => el._id === disease);
        setDiseaseName(diseaseName.disease);
        console.log(diseaseName, "diseaseNamediseaseName");
    }
  }, [diseaseArrRedux]);


useEffect(() => {
    if (customerArr?.length) {
        setDiseaseMainArr(customerArr);
      }
    }, [customerArr]);

const hadleDisease = (diseaase)=> {
    setDisease(diseaase)
    if(diseaase){
    let diseaseHod = hodArrRedux.filter(el=>el.disease === diseaase);
    setHodArr(diseaseHod)
    }
}

const customerObj = useSelector((states) => states.doctor.doctorObj);
// console.log(customerObj);
const dispatch = useDispatch();
  

useEffect(() => {
    if (customerObj) {
        setFirstName(customerObj?.firstName);
        setLastName(customerObj?.lastName);
        setCompany(customerObj.company);
        // setPosition(`${customerObj?.description ? stateObj?.description : ""}`);
        setPosition(customerObj?.position);
        setEmail(customerObj?.email);
        setPhone(customerObj?.phone);
        setState(customerObj?.state);
        setCountry(customerObj?.country);
        setCity(customerObj?.city);
        setPassword(customerObj?.password);
        setConPassword(customerObj?.conPassword);
        setSecurityQuest(customerObj?.securityQuest);
        setZipCode(customerObj?.zipCode);
        setSecurityAns(customerObj?.securityAns);
        sethod(customerObj?.hod);
        setDisease(customerObj?.disease);
    }
}, [customerObj]);



const question = [
    { value:"What's your pet name?", label:"What's your pet name?" },
    { value:"What's your favourate food?", label:"What's your favourate food?" },
    { value:"What's your mother maiden name?", label:"What's your mother maiden name?" },
    { value:"What's your Favorate actor name?", label:"What's your Favorate actor name?" },
    { value:"What's your nick name?", label:"What's your nick name?" },
]

const statues = [
    { value:"Select", label:"Select" },
    { value:"disabled" , label:"disabled" },
    { value:"enabled" , label:"enabled" },
]
  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           <div className='viewadduser'>
           </div>
          </div>
          <div className="col-lg-4">
            <span style={{color:"white"}}>DOCTOR DETAILS</span>
          </div>
          <div className="col-lg-4 text-end">
          <div className='btnlist'>
              <span><Link to="/Doctor/ListView" class="btn btn-defalut btn-md"> <AiOutlineUnorderedList className="icon" /> View List</Link></span>
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
                                    <label><b>First Name :</b> <span>{firstName}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Hospital/Clinic :</b> <span>{company}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Email :</b> <span>{email}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>State :</b> <span>{state}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>City :</b> <span>{city}</span></label>
                                </div>
                                
                                <div className='from-group'>
                                    <label><b>Security Question :</b> <span>{securityQuest}</span></label>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>Last Name :</b> <span>{lastName}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Position/Title :</b> <span>{position}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Phone :</b> <span>{phone}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Country :</b> <span>{country}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>ZipCode :</b> <span>{zipCode}</span></label>
                                </div>
                                {/* <div className='from-group'>
                                    <label>Confirm Password :<span> {conPassword}</span></label>
                                </div> */}
                                
                                <div className='from-group'>
                                    <label><b>Disease :</b> <span>{diseaseName}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Answer :</b> <span>{securityAns}</span></label>
                                </div>
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
