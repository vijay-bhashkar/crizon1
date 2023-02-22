import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { DEMOGRAFICAdd, DEMOGRAFICGet, SETDEMOGRAFICObj, DEMOGRAFICUpdate, GETALLDoctor, GETALLDisease } from "../../../redux/actions/Demografic/Demografic.actions";
import { DOCTORGet } from '../../../redux/actions/Doctor/Doctor.actions';
import { rolesObj } from '../../../utils/roles';
export const Viewdemografics = () => {

    const role = useSelector((states) => states.auth.role);
    const user = useSelector((states) => states.auth.user);
    const roleUser = useSelector((states) => states.auth.user.roleUser);

    const [ccfId, setCcfId] = useState("");
    const [enrollDate, setEnrollDate] = useState("");
    const [patientName, setPatientName] = useState("");
    const [parentName, setParentName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("");
    const [mrdNo, setMrdNo] = useState("");
    const [diagnosisYear, setDiagnosisYear] = useState("");
    const [phoneNo, setPhone] = useState("");
    const [dob, setDob] = useState("");
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
    const [bloodGroup, setBloodGroup] = useState("");
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [areaOfResidence, setAreaOfResidence] = useState("");
    const [yearOfOnset, setYearOfOnset] = useState("");

    const [diseaseArr, setDiseaseArr] = useState("");
    const [hodArr, setHodArr] = useState("");
    const [doctorArr, setDoctorArr] = useState("");
    const [service, setService] = useState("");

    useEffect(() => {
        let query = "";
        if (role == rolesObj.HOD) {
            query += `hod=${user?.roleUser?._id}`;
        }
        if (role == rolesObj.DOCTOR) {
            query += `doctor=${user?.roleUser?._id}`;
            setDoctor(roleUser._id);
            setHod(roleUser.hod);
            setDisease(roleUser.disease);
        }

        dispatch(DOCTORGet(query));
        dispatch(GETALLDoctor(query));
        dispatch(GETALLDisease());
    }, []);

    useEffect(() => {
        dispatch(SETDEMOGRAFICObj());
    }, []);

    const demograficObj = useSelector((states) => states.demografic.demograficObj);
    const diseaseRedux = useSelector((states) => states.demografic.diseases);
    const hodRedux = useSelector((states) => states.hod.hods);
    const doctorRedux = useSelector((states) => states.demografic.doctors);

    useEffect(() => {
        if (diseaseRedux) {
            setDiseaseArr(diseaseRedux);
        }
    }, [diseaseRedux]);

    useEffect(() => {
        if (hodRedux) {
            setHodArr(hodRedux);
        }
    }, [hodRedux]);

    useEffect(() => {
        if (doctorRedux) {
            setDoctorArr(doctorRedux);
        }
    }, [doctorRedux]);

    const hadleDisease = (diseaase) => {
        setDisease(diseaase);
        if (diseaase) {
            let diseaseDoctor = doctorRedux.filter(el => el.disease === diseaase);
            setDoctorArr(diseaseDoctor);
            console.log(diseaseDoctor, "diseaseDoctor , diseaseDoctor");
        }
    }

    const onServiceFun = (disease) => {
        setService(disease);
        // setDoctor(disease);
        if (disease) {
            let diseaseFilter = diseaseRedux.filter(el => el.service === disease);
            let doctorReduxArr = doctorRedux.filter(el => el.service === disease);
            setDiseaseArr(diseaseFilter);
            setDoctorArr(doctorReduxArr);
            console.log(diseaseFilter, "diseaseFilter");
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
            setDob(demograficObj?.dob);
            setBloodGroup(demograficObj?.bloodGroup);
            setDistrict(demograficObj?.district);
            setState(demograficObj?.state);
            setAreaOfResidence(demograficObj?.areaOfResidence);
            setYearOfOnset(demograficObj?.yearOfOnset);
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
                                Patient (I.B.D DISEASE)
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
                    <li class="list-group-item"><Link to="">Demographics</Link></li>
                    <li class="list-group-item"><Link to="">Clinical History</Link></li>
                    <li class="list-group-item"><Link to="">Previous Treatment</Link></li>
                    <li class="list-group-item"><Link to="">Nutritional History</Link> </li>
                    <li class="list-group-item"><Link to="">Investigations</Link></li>
                    <li class="list-group-item"><Link to="">Treatment</Link> </li>
                    <li class="list-group-item"><Link to="">Infections</Link></li>
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
                                            <label><b>Name  : </b><span> {patientName} </span></label>
                                           
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Age  : </b><span> {age}</span></label>
                                         
                                        </div>
                                       
                                        <div className='from-group'>
                                            <label><b>MRD No.  : </b><span> {mrdNo}</span></label>
                                           
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Phone No.  : </b><span> {phoneNo}</span></label>
                                           
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Diagnosis Year : </b><span> {diagnosisYear} </span></label>
                                           
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Blood Group : </b><span> {bloodGroup}</span></label>
                                            
                                        </div>
                                        <div className='from-group'>
                                            <label><b>State  : </b><span> {state} </span></label>
                                            
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Year of onset of symptoms : </b> <span> {yearOfOnset}  </span></label>
                                           
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label><b>Date of Enrollment : </b><span> {enrollDate}  </span></label>
                                           
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Father/Husband’s Name : </b><span> {parentName}</span></label>
                                           
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Sex : </b><span> {sex} </span></label>
                                        </div>
                                        
                                        <div className='from-group'>
                                            <label><b>Email.  : </b><span> {email} </span></label>
                                          
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Diagnosis Month : </b><span> {diagnosisMonth} </span></label>
                                          
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Date Of Birth : </b><span>  {dob} </span></label>
                                       
                                        </div>
                                        <div className='from-group'>
                                            <label><b>District : </b><span> {district} </span></label>
                                       
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Area of residence : </b>  {areaOfResidence} </label>
                                           
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group addlist-frm'>
                                        <label><b>Address Line 1 : </b><span> {addressLine} </span></label>
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-5'>
                                <div className='col-lg-12 mb-4'>
                                    <div className='statusheading text-center'>
                                        <h4>Kuppuswamy socioeconomic scale</h4>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='from-group addlist-frm'>
                                        <label><b>Education  : </b> {educationHead} </label>
                                        
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='from-group addlist-frm'>
                                        <label><b>Updated Monthly Family Income in Rupees  : </b>:   {monthlyIncome}</label>
                                       
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='from-group addlist-frm'>
                                        <label><b>Occupation  : </b>   {occupationHead} </label>
                                      
                                    </div>
                                </div>
                                <div className='col-lg-6 addlist-frm mt-4'>
                                    <div className='from-group'>
                                        <label><b>Socioeconomic Class : </b><span> {socioEconomy} </span></label>
                                       
                                    </div>
                                </div>
                                <div className='col-lg-6 addlist-frm mt-4'>
                                    <div className='from-group'>
                                        <label><b>Total Score : </b><span> {totalScore} </span></label>
                                        
                                    </div>
                                </div>
                            </div>
                            {/* <div className='row mt-4'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center'>
                                        <button className='btn btn-link' onClick={handleAddDemografic}>Next</button>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Viewdemografics;