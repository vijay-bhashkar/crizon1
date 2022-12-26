import React, { useEffect, useState } from 'react';
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { rolesObj } from '../../utils/roles';
import { DEMOGRAFICAdd,DEMOGRAFICGet, SETDEMOGRAFICObj, DEMOGRAFICUpdate, GETALLDoctor } from "../../redux/actions/Demografic/Demografic.actions";
import { DOCTORGet } from '../../redux/actions/Doctor/Doctor.actions';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
// import { CUSTOMERGet } from '../../redux/actions/Customer/Customer.actions';
export const Editdemographics = () => {

    const [searchParams, setSearchParams] = useSearchParams("edit");
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

  const handleAddDemografic = () => {

    if(patientName == "" || patientName == undefined){
        toast.error("Patient Name is required")
        return
    }if(parentName == "" || parentName == undefined){
        toast.error("Parent Name is required")
        return
    }if(email == "" || email == undefined){
        toast.error("Email is required")
        return
    }if (role == rolesObj.DOCTOR) {
        setDoctor(roleUser._id);   
    }else{
    let obj = {
        ccfId,
        enrollDate,
        patientName,
        parentName,
        age,
        sex,
        mrdNo,
        diagnosisYear,
        phoneNo,
        diagnosisMonth,
        addressLine,
        educationHead,
        monthlyIncome,
        occupationHead,
        socioEconomy,
        totalScore,
        email,
        doctor,
        disease,
        hod,
        indiDisease
    };
    if(password){
        obj.password = password;
        obj.conPassword = conPassword;
    }

    if (demograficObj?._id) {
      dispatch(DEMOGRAFICUpdate(demograficObj._id, obj));
      toast.success(" Demografic Updated Successfully ");
    } 
    navigate("/Patients/clinicalhistory");
}
};

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
        // setPassword(demograficObj?.password);
        // setConPassword(demograficObj?.conPassword);
        setIndiDisease(demograficObj?.indiDisease);
    }
}, [demograficObj]);

useEffect(()=> {
    console.log(searchParams.get("edit"), "edit")
    if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
    //   dispatch(SETDEMOGRAFICObj(null))
    }
  }, [searchParams.get("edit")])

const education = [
    { value: "0", label: "Select Education Score" },
    { value: "Profession or Honours", label: "Profession or Honours" },
    { value: "Graduate or Post Graduate", label: "Graduate or Post Graduate" },
    { value: "Intermediate or Post High School Diploma", label: "Intermediate or Post High School Diploma" },
    { value: "High School Certificate ", label: "High School Certificate " },
    { value: "Middle School Certificate ", label: "Middle School Certificate " },
    { value: "Primary School Certificate ", label: " Primary School Certificate" },
    { value: "Illiterate ", label: "Illiterate " },
  ];

  const income = [
    { value: "0", label: "Select Monthly Family Income" },
    { value: "≥199,862 1", label: "≥199,862 1" },
    { value: "99,931–199,861", label: "99,931–199,861" },
    { value: "74,756 –99,930", label: "74,756 –99,930" },
    { value: "49,962–74,755", label: "49,962–74,755" },
    { value: "29,973– 49,961", label: "29,973– 49,961" },
    { value: "10,002–29,972", label: "10,002–29,972" },
    { value: "≤ 10,001", label: "≤ 10,001" },
  ];

  const occupation = [
    { value: "0", label: "Select Occupation Score.. " },
    { value: "Legislators, Senior Officials & Managers", label: "Legislators, Senior Officials & Managers" },
    { value: "Professionals", label: "Professionals" },
    { value: "Technicians and Associate Professionals", label: "Technicians and Associate Professionals " },
    { value: "Clerks", label: "Clerks" },
    { value: "Skilled Workers and Shop & Market Sales Workers", label: "Skilled Workers and Shop & Market Sales Workers" },
    { value: "Skilled Agricultural & Fishery Workers", label: "Skilled Agricultural & Fishery Workers " },
    { value: "Craft & Related Trade Workers", label: "Craft & Related Trade Workers" },
    { value: "Plant & Machine Operators and Assemblers", label: "Plant & Machine Operators and Assemblers" },
    { value: "Elementary Occupation ", label: "ElemElementary Occupationen " },
    { value: "Unemployed", label: "Unemployed " },
  ];

const gender = [
    { value: "select", label: "Select" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
]

  let AgeArray = Array.from({length:100},(v,k)=>k+1)
  
  const months = [
    { value: "select", label:"Select month" },
    { value: "January", label:"January" },
    { value: "February", label:"February" },
    { value: "March", label:"March" },
    { value: "April", label:"April" },
    { value: "May", label:"May" },
    { value: "June", label:"June" },
    { value: "July", label:"July" },
    { value: "August", label:"August" },
    { value: "September", label:"September" },
    { value: "October", label:"October" },
    { value: "November", label:"November" },
    { value: "December", label:"December" },
  ]

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
                <Link class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><Link to="/Patients/editdemographics">Demographics</Link></li>
            <li class="list-group-item"><Link to="/Patients/Clinicalhistory">Clinical History</Link></li>
            <li class="list-group-item"><Link to="/Patients/previoustreatment">Previous Treatment</Link></li>
            <li class="list-group-item"><Link to="/Patients/nutritionalhistory">Nutritional History</Link> </li>
            <li class="list-group-item"><Link to="/Patients/investigations">Investigations</Link></li>
            <li class="list-group-item"><Link to="/Patients/treatment">Treatment</Link> </li>
            <li class="list-group-item"><Link to="/Patients/infections">Infections</Link></li>
            <li class="list-group-item"><Link to="/Patients/depression">Depression</Link></li>
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
                                    <label>CCF ID {ccfId}<span>*</span></label>
                                    <input type="text" className='form-control' value={ccfId} onChange={(e)=>{setCcfId(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Name of Patient <span>*</span></label>
                                    <input type="text" className='form-control ' value={patientName} onChange={(e)=>{setPatientName(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Age <span>*</span></label>
                                    <select className='form-control' value={age} onChange={(e)=>{setAge(e.target.value)}}>
                                       { AgeArray.map(item =>  <option value={item}>{item}</option>) }
                                    </select>
                                </div>
                                <div className='from-group'>
                                    <label>Password. <span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Mrd No. <span>*</span></label>
                                    <input type="text" className='form-control ' value={mrdNo} onChange={(e)=>{setMrdNo(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Phone No. <span>*</span></label>
                                    <input type="text" className='form-control' maxLength={10} value={phoneNo} onChange={(e)=>{setPhone(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Email. <span>*</span></label>
                                    <input type="email" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                                
                                {(role == rolesObj.ADMIN || role == rolesObj.HOD)?
                                <div className='from-group'>
                                <label>Doctor <span>*</span></label>
                                <select className='form-control' value={doctor} onChange={(e)=>{
                                    let selectedDoxtor = doctorArr.find(el => el._id == e.target.value )
                                    setDoctor(e.target.value);
                                    setHod(selectedDoxtor?.hod);
                                    setIndiDisease(selectedDoxtor?.disease);
                                }}>
                                    <option value="">Please Select</option>
                                    { doctorArr && doctorArr.map((el)=><option value={el._id}>{el.firstName}</option> ) }
                                </select>
                                </div>
                                : "" }
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>Date of Enrollment<span>*</span></label>
                                    <input type="date" className='form-control ' value={enrollDate} onChange={(e)=>{setEnrollDate(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Father/Husband’s Name<span>*</span></label>
                                    <input type="text" className='form-control ' value={parentName} onChange={(e)=>{setParentName(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Sex<span>*</span></label>
                                    <select class="form-control" value={sex} onChange={(e)=>{setSex(e.target.value)}}>
                                        { gender && gender.map((el)=><option value={el.value}>{el.label}</option>) }
                                    </select>
                                </div>
                                <div className='from-group'>
                                    <label>Confirm Password. <span>*</span></label>
                                    <input type="text" className='form-control' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Diagnosis Year<span>*</span></label>
                                    <input type="text" className='form-control ' value={diagnosisYear} onChange={(e)=>{setDiagnosisYear(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Diagnosis Month<span>*</span></label>
                                    <select className='form-control'  value={diagnosisMonth} onChange={(e)=>{setDiagnosisMonth(e.target.value)}}>
                                        { months && months.map((el)=><option value={el.value}>{el.label}</option>) }
                                    </select>
                                </div>
                                {(role == rolesObj.ADMIN)?
                                <div className='from-group'>
                                <label>Disease <span>*</span></label>
                                    <select className='form-control' value={disease} onChange={(e)=>hadleDisease(e.target.value)}>
                                    <option value=""> Please Select Disease</option>
                                        { diseaseArr && diseaseArr.map((el)=><option value={el.disease}>{el.name}</option>) }
                                    </select>
                                </div>
                                :""}
                            </div>
                        </div>
                        <div className='col-lg-12'>
                        <div className='from-group addlist-frm'>
                            <label>Address Line 1<span>*</span></label>
                            <input type="text" className='form-control ' value={addressLine} onChange={(e)=>{setAddressLine(e.target.value)}}/>
                        </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-12 mb-4'>
                            <div className='statusheading text-center'>
                                <h4>Kuppuswamy’s Socioeconomic status Scale</h4>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label>Eduation of the Head</label>
                                <select class="form-control" value={educationHead} onChange={(e)=>{setEducationHead(e.target.value)}}>
                                    { education && education.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label>Monthly Family Income</label>
                                <select class="form-control" value={monthlyIncome} onChange={(e)=>{setMonthlyIncome(e.target.value)}}>
                                    { income && income.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label>Occupation of the Head</label>
                                <select class="form-control" value={occupationHead} onChange={(e)=>{setOccupationHead(e.target.value)}}>
                                    { occupation && occupation.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                            <div className='from-group'>
                                <label>Socio Economic Status<span>*</span></label>
                                <input type="text" className='form-control ' value={socioEconomy} onChange={(e)=>{setSocioEconomy(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                        <div className='from-group'>
                                <label>Total Score<span>*</span></label>
                                <input type="text" className='form-control ' value={totalScore} onChange={(e)=>{setTotalScore(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                        <div className='col-lg-12'>
                            {(role == rolesObj.PATIENT)?
                            <div className='subbtn text-center'>
                                <Link to='/Patients/Clinicalhistory/' className='btn btn-link'>Next </Link>
                            </div>
                            :
                            <div className='subbtn text-center'>
                                <button className='btn btn-link' onClick={handleAddDemografic}>Next</button>
                            </div>
                            }
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
export default Editdemographics;