import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { toastError, toastSuccess } from "../../utils/toastUtils";
import { useDispatch, useSelector } from "react-redux";
import { DISEASEGet } from "../../redux/actions/Hod/Hod.actions";
import { Link } from 'react-router-dom';
export const ShowHod = () => {

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
  const [disease, setDisease] = useState("");
  const [diseaseArr, setDiseaseArr] = useState([]);
  const [obj, serObj] = useState([]);
  const [diseaseName, setDiseaseName] = useState("")

useEffect(() => {
    dispatch(DISEASEGet());
}, []);

const hodObj = useSelector((states) => states.hod.hodObj);
const diseasesArrRedux = useSelector((states) => states.hod.diseases);
 console.log(diseasesArrRedux , "diseasesArrRedux");
useEffect(() => {
    if(diseasesArrRedux){
        setDiseaseArr(diseasesArrRedux);
    }
    if(disease){
        let diseaseName = diseasesArrRedux.find(el => el._id === disease);
        setDiseaseName(diseaseName?.disease);
    }
  }, [diseasesArrRedux]);

const dispatch = useDispatch();

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
        setPassword(hodObj?.password);
        setConPassword(hodObj?.conPassword);
        setSecurityQuest(hodObj?.securityQuest);
        setZipCode(hodObj?.zipCode);
        setSecurityAns(hodObj?.securityAns);
        setDisease(hodObj?.disease);
    }
}, [hodObj]);

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           <div className="btnlist">
            </div>
          </div>
          
          <div className="col-lg-4"><h5 className="mb-0 text-center text-white"> DETAIL'S </h5></div>
          
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
                                    <label><b>First Name : </b><span> {firstName}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Hospital/Clinic : </b> <span></span> {company}</label>                                   
                                </div>                               
                                <div className='from-group'>
                                    <label><b>Email : </b> <span> {email} </span></label>                                   
                                </div>                               
                                <div className='from-group'>
                                    <label><b>State : </b> <span>{state}</span></label>                                 
                                </div>
                                <div className='from-group'>
                                    <label><b>City : </b> <span>{city}</span></label>                                    
                                </div>
                                <div className='from-group'>
                                    <label><b>Security Question : </b><span>{securityQuest}</span></label>                                  
                                </div>
                                <div className='from-group'>
                                    <label><b>Disease : </b><span>{diseaseName}</span></label>                                   
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>Last Name : </b><span>{lastName}</span></label>                                   
                                </div>
                                <div className='from-group'>
                                    <label><b>Position/Title : </b><span>{position}</span></label>                                   
                                </div>
                                <div className='from-group'>
                                    <label><b>Phone : </b><span>{phone}</span></label>                                    
                                </div>                               
                                <div className='from-group'>
                                    <label><b>Country : </b><span>{country}</span></label>                                    
                                </div>
                                <div className='from-group'>
                                    <label><b>ZipCode : </b><span>{zipCode}</span></label>                                    
                                </div>                                
                                <div className='from-group'>
                                    <label><b>Answer : </b><span>{securityAns}</span></label>
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
