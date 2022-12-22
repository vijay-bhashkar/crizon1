import React, { useEffect, useState } from 'react';
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { rolesObj } from '../../../utils/roles';
import { DEMOGRAFICAdd,DEMOGRAFICGet, SETDEMOGRAFICObj, DEMOGRAFICUpdate, GETALLDoctor } from "../../../redux/actions/Demografic/Demografic.actions";
import { DOCTORGet } from '../../../redux/actions/Doctor/Doctor.actions';
import { toast } from 'react-hot-toast';
// import { CUSTOMERGet } from '../../redux/actions/Customer/Customer.actions';
export const Viewdemografics = () => {

const [ccfId, setCcfId] = useState("");
const [enrollDate, setEnrollDate] = useState("");
const [patientName, setPatientName] = useState("");
const [parentName, setParentName] = useState("");
const [age, setAge] = useState("");
const [sex, setSex] = useState("");
const [mrdNo, setMrdNo] = useState("");
const [diagnosisYear, setDiagnosisYear] = useState("");
const [phoneNo, setPhone] = useState("");
const [diagnosisMonth, setDiagnosisMonth] = useState("");
const [addressLine, setAddressLine] = useState("");
const [educationHead, setEducationHead] = useState("");
const [monthlyIncome, setMonthlyIncome] = useState("");
const [occupationHead, setOccupationHead] = useState("");
const [socioEconomy, setSocioEconomy] = useState("");
const [totalScore, setTotalScore] = useState("");
const [email, setEmail] = useState("");
const [doctor, setDoctor] = useState("");
const [disease, setDisease] = useState("");
const [hod, setHod] = useState("");
const [password, setPassword] = useState("");
const [conPassword, setConPassword] = useState("");
const [indiDisease, setIndiDisease] = useState("");

const [diseaseArr, setDiseaseArr] = useState("");
const [hodArr, setHodArr] = useState("");
const [doctorArr, setDoctorArr] = useState("");

const roleUser = useSelector((states)=> states.auth.user.roleUser);
// console.log(roleUser,"fffffffff");
useEffect(() => {
  let query = "";
  if(role == rolesObj.HOD){
    query += `hod=${user?.roleUser?._id}`;
  }if(role == rolesObj.DOCTOR){
    query += `doctor=${user?.roleUser?._id}`;
    setDoctor(roleUser._id);
    setHod(roleUser.hod);
    setDisease(roleUser.disease);
  }
  if(role == rolesObj.PATIENT){
    query += `patient=${user?.roleUser?._id}`;
  }
    dispatch(DEMOGRAFICGet());
    dispatch(DOCTORGet(query));
    dispatch(GETALLDoctor(query));
}, []);

const role = useSelector((states)=> states.auth.role);
const user = useSelector((states)=> states.auth.user);

const demograficObj = useSelector((states) => states.demografic.demograficObj);
const diseaseRedux = useSelector((states) => states.hod.diseases);
const hodRedux = useSelector((states) => states.hod.hods);
const doctorRedux = useSelector((states) => states.demografic.doctors);

useEffect(() => {
    if(diseaseRedux){
        setDiseaseArr(diseaseRedux);
    }
  }, [diseaseRedux]);

useEffect(() => {
    if(hodRedux){
        setHodArr(hodRedux);
    }
  }, [hodRedux]);

  useEffect(() => {
    if(doctorRedux){
        setDoctorArr(doctorRedux);
    }
  }, [doctorRedux]);

  const hadleDisease = (diseaase)=> {
    setDisease(diseaase)
    if(diseaase){
    let diseaseDoctor = doctorRedux.filter(el=>el.disease === diseaase);
    console.log(diseaseDoctor,"ddddd");
    setDoctorArr(diseaseDoctor)
    }
}

const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
    if (demograficObj) {
        setCcfId(demograficObj?.ccfId);
        setEnrollDate(demograficObj?.enrollDate);
        setPatientName(demograficObj?.patientName);
        setParentName(demograficObj?.parentName);
        setAge(demograficObj?.age);
        setSex(demograficObj?.sex);
        setMrdNo(demograficObj?.mrdNo);
        setDiagnosisYear(demograficObj?.diagnosisYear);
        setPhone(demograficObj?.phoneNo);
        setDiagnosisMonth(demograficObj?.diagnosisMonth);
        setAddressLine(demograficObj?.addressLine);
        setEducationHead(demograficObj?.educationHead);
        setMonthlyIncome(demograficObj?.monthlyIncome);
        setOccupationHead(demograficObj?.occupationHead);
        setSocioEconomy(demograficObj?.socioEconomy);
        setTotalScore(demograficObj?.totalScore);
        setEmail(demograficObj?.email);
        setDoctor(demograficObj?.doctor);
        setDisease(demograficObj?.disease);
        setHod(demograficObj?.hod);
        setPassword(demograficObj?.password);
        setConPassword(demograficObj?.conPassword);
        setIndiDisease(demograficObj?.indiDisease);
    }
}, [demograficObj]);

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">
          <h5 className="mb-0 text-center text-white">
          Patient (ULCERATIVE Colitis DISEASE)
              </h5>
          </div>
          <div className="col-lg-4 text-end">
            <div className='btnlist'>
                <Link to="/Patients/PatientListView" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><Link >Demographics</Link></li>
            <li class="list-group-item"><Link >Clinical History</Link></li>
            <li class="list-group-item"><Link >Previous Treatment</Link></li>
            <li class="list-group-item"><Link >Nutritional History</Link> </li>
            <li class="list-group-item"><Link >Investigations</Link></li>
            <li class="list-group-item"><Link >Treatment</Link> </li>
            <li class="list-group-item"><Link >Infections</Link></li>
            <li class="list-group-item"><Link >Depression</Link></li>
        </ul>
    </div>
      <div className="wrapper_contentbody">
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row mb-3'>
                        <div className='heaind text-center'>
                            <h3>Patient Personal Details</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>CCF ID  : </b><span>{ccfId}</span></label>
                        
                                </div>
                                <div className='from-group'>
                                    <label><b>Name of Patient  : </b><span>{patientName}</span></label>
                                
                                </div>
                                <div className='from-group'>
                                    <label><b>Age  : </b><span>{age}</span></label>
                            
                                </div>
                                {/* <div className='from-group'>
                                    <label><b>Password.  : </b><span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div> */}
                                <div className='from-group'>
                                    <label><b>Mrd No.  : </b><span> {mrdNo}</span></label>
                            
                                </div>
                                <div className='from-group'>
                                    <label><b>Phone No.  : </b><span> {phoneNo}</span></label>
                                
                                </div>
                                <div className='from-group'>
                                    <label><b>Email.  : </b><span> {email}</span></label>
                                 
                                </div>
                                
                            
                                <div className='from-group'>
                                <label><b>Doctor  : </b><span> {doctor}</span></label>
                                
                                </div>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>Date of Enrollment : </b><span> {enrollDate}</span></label>
                                   
                                </div>
                                <div className='from-group'>
                                    <label><b>Father/Husband’s Name : </b><span> {parentName}</span></label>
                                    
                                </div>
                                <div className='from-group'>
                                    <label><b>Sex : </b><span> {sex}</span></label>
                                    
                                </div>
                                {/* <div className='from-group'>
                                    <label><b>Confirm Password.  : </b><span>*</span></label>
                                    <input type="text" className='form-control' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
                                </div> */}
                                <div className='from-group'>
                                    <label><b>Diagnosis Year : </b><span> {diagnosisYear}</span></label>
                                   
                                </div>
                                <div className='from-group'>
                                    <label><b>Diagnosis Month : </b><span> {diagnosisMonth}</span></label>
                                </div>
                        
                                <div className='from-group'>
                                <label><b>Disease  : </b><span> {disease}</span></label>                                  
                                </div>
                               
                            </div>
                        </div>
                        <div className='col-lg-12'>
                        <div className='from-group addlist-frm'>
                            <label><b>Address Line 1 : </b><span> {addressLine}</span></label>                         
                        </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-12 mb-4'>
                            <div className='statusheading text-center'>
                                <h4><b>Kuppuswamy’s Socioeconomic status Scale : </b></h4>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label><b>Eduation of the Head : </b>  {educationHead}</label>                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label><b>Monthly Family Income : </b> {monthlyIncome}</label>                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label><b>Occupation of the Head : </b> {occupationHead}</label>                              
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                            <div className='from-group'>
                                <label><b>Socio Economic Status : </b><span> {socioEconomy}</span></label>                         
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                        <div className='from-group'>
                                <label><b>Total Score : </b><span> {totalScore}</span></label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <Link to="..//Patients/Viewclinicalhistory" className='btn btn-link mx-4'>Next</Link>
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
// export default Viewdemografics;