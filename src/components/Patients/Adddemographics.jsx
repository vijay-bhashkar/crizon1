import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { DEMOGRAFICAdd, DEMOGRAFICGet, SETDEMOGRAFICObj, DEMOGRAFICUpdate, GETALLDoctor, GETALLDisease } from "../../redux/actions/Demografic/Demografic.actions";
import { DOCTORGet } from '../../redux/actions/Doctor/Doctor.actions';
import { rolesObj } from '../../utils/roles';
export const Adddemographics = () => {

    const role = useSelector((states) => states.auth.role);
    const user = useSelector((states) => states.auth.user);
    const roleUser = useSelector((states) => states.auth.user.roleUser);

    const [ccfId, setCcfId] = useState("");
    const [enrollDate, setEnrollDate] = useState("");
    const [dischargeDate, setDischargeDate] = useState("");
    const [totalDay, setTotalDay] = useState("");
    const [patientFrom, setPatientFrom] = useState("");
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
    const [hodId, setHodId] = useState("");
    const [doctorId, setDoctorId] = useState("");
    const [service, setService] = useState("");

    const [diseaseArr, setDiseaseArr] = useState("");
    const [hodArr, setHodArr] = useState("");
    const [doctorArr, setDoctorArr] = useState("");

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

    useEffect(()=> {
        if(dischargeDate && enrollDate){
            let startDate = new Date( dischargeDate );
            let endDate = new Date( enrollDate );
            let timeDiff = (startDate - endDate);
            const dayDiff = timeDiff/(1000*3600*24);
            setTotalDay(dayDiff);
        }
    })

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

    useEffect(()=>{
    if(role == "HOD"){
        if(roleUser){
            setHodId(roleUser?._id); 
            setService(roleUser?.service);
        }
    }else if(role == "DOCTOR"){
        if(roleUser){
            setDoctorId(roleUser?._id); 
            setHodId(roleUser?.hod); 
            setService(roleUser?.service);
        }
    }
    }, [roleUser]);

    useEffect(() => {
        if (hodRedux) {
            setHodArr(hodRedux);
        }
    }, [hodRedux]);

    useEffect(()=>{
        let kuppuScore = parseInt(educationHead) + parseInt(monthlyIncome) + parseInt(occupationHead) ;
        if( kuppuScore > 26 && kuppuScore < 29){
            setTotalScore(kuppuScore);
            setSocioEconomy("Upper (I)");
        }else if( kuppuScore>16 && kuppuScore < 25){
            setTotalScore(kuppuScore);
            setSocioEconomy("Upper Middle (II)");
        }else if( kuppuScore > 11 && kuppuScore < 15){
            setTotalScore(kuppuScore);
            setSocioEconomy("Lower Middle (III)");
        }else if( kuppuScore > 5 && kuppuScore < 10){
            setTotalScore(kuppuScore);
            setSocioEconomy("Upper Lower (IV)");
        }else if(kuppuScore < 5){
            setTotalScore(kuppuScore);
            setSocioEconomy("Lower (V)");
        }
    });

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
        }
    }

    const onServiceFun = (disease) => {
        setService(disease);
        if (disease) {
            let diseaseFilter = diseaseRedux.filter(el => el.service === disease);
            let doctorReduxArr = doctorRedux.filter(el => el.service === disease);
            setDiseaseArr(diseaseFilter);
            setDoctorArr(doctorReduxArr);
        }
    }

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddDemografic = () => {
    if(phoneNo != ''){
        if (`${phoneNo}`.length != 10) {
            toast.error("Phone number should be 10 digit")
            return
        }
    }
          if (password == "" || password == undefined) {
            toast.error("password is mandatory")
            return
        } if (password == 0 || password < 5) {
            toast.error("password should not less than 5 digit")
            return
        } if (password != conPassword) {
            toast.error("Password and Confirm Password should be same")
        }
        //     if( role !=rolesObj.HOD && role != rolesObj.DOCTOR ){
        //     if(disease =="" || disease == undefined){
        //         toast.error("Please select Disease")
        //         return
        //     }
        //     if(doctor == "" || doctor == undefined){
        //         toast.error("Please select Doctor")
        //         return
        //     }
        // }
        // if (role == rolesObj.DOCTOR) {
        // setDoctor(roleUser._id);   
        // }
        else {
            if (role == rolesObj.DOCTOR) {
                setDoctor(roleUser._id);
            }
            let obj = {
                ccfId,
                enrollDate,
                dischargeDate,
                totalDay,
                patientName,
                parentName,
                age,
                sex,
                mrdNo,
                diagnosisYear,
                phoneNo,
                dob,
                bloodGroup,
                district,
                state,
                areaOfResidence,
                yearOfOnset,
                diagnosisMonth,
                addressLine,
                educationHead,
                monthlyIncome,
                occupationHead,
                socioEconomy,
                totalScore,
                email,
                password,
                conPassword,
                indiDisease,
                hodId,
                doctorId,
                service
            };
          console.log(obj , "object object");

            if (demograficObj?._id) {
                dispatch(DEMOGRAFICUpdate(demograficObj._id, obj));
                dispatch(SETDEMOGRAFICObj(null))
                toast.success(" Demografic Updated Successfully ");
            } else {
                dispatch(DEMOGRAFICAdd(obj));
                // toast.success(" Demografic Added Successfully ");
            }
            navigate("/Patients/clinicalhistory");
            // <Link to="/Patients/clinicalhistory"></Link>;
        }
    };

    useEffect(() => {
        if (demograficObj) {
            setCcfId(demograficObj?.ccfId);
            setEnrollDate(demograficObj?.enrollDate);
            setDischargeDate(demograficObj?.dischargeDate);
            setTotalDay(demograficObj?.totalDay);
            setPatientFrom(demograficObj?.patientFrom);
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

    const education = [
        { value: 0, label: "Select Education Score" },
        { value: 7, label: "Profession or Honours" },
        { value: 6, label: "Graduate" },
        { value: 5, label: "Intermediate/Diploma" },
        { value: 4, label: "High School Certificate " },
        { value: 3, label: "Middle School Certificate " },
        { value: 2, label: " Primary School Certificate" },
        { value: 1, label: "Illiterate " },
    ];

    const income = [
        { value: "0", label: "Select Monthly Family Income" },
        { value: 12, label: "≥184,376" },
        { value: 10, label: "92,191-184,370" },
        { value: 6, label: "68,967-92,185" },
        { value: 4, label: "46,095-68,961" },
        { value: 3, label: "27,654-46,089" },
        { value: 2, label: "9,232-27,648" },
        { value: 1, label: "≤9,226" },
    ];

    const occupation = [
        { value: "0", label: "Select Occupation Score.. " },
        { value: 10, label: "Legislators, Senior Officials & Managers" },
        { value: 9, label: "Professionals" },
        { value: 8, label: "Technicians and Associate Professionals " },
        { value: 7, label: "Clerks" },
        { value: 6, label: "Skilled Workers and Shop & Market Sales Workers" },
        { value: 5, label: "Skilled Agricultural & Fishery Workers " },
        { value: 4, label: "Craft & Related Trade Workers" },
        { value: 3, label: "Plant & Machine Operators and Assemblers" },
        { value: 2, label: "ElemElementary Occupationen " },
        { value: 1, label: "Unemployed " },
    ];

    const gender = [
        { value: "select", label: "Select" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
        { value: "Other", label: "Other" },
    ]

    let AgeArray = Array.from({ length: 100 }, (v, k) => k + 1)

    const months = [
        { value: "select", label: "Select month" },
        { value: "January", label: "January" },
        { value: "February", label: "February" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May" },
        { value: "June", label: "June" },
        { value: "July", label: "July" },
        { value: "August", label: "August" },
        { value: "September", label: "September" },
        { value: "October", label: "October" },
        { value: "November", label: "November" },
        { value: "December", label: "December" },
    ]

    const residenceDrop = [
        { value: "Urban", label: "Urban" },
        { value: "Rural", label: "Rural" },
    ]

    const patientDrop = [
        { value: "Indor", label: "Indor" },
        { value: "Outdor", label: "Outdor" }
    ]



    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                            {/* <div className='viewadduser'>
            <ul >
                <li><BiUserPlus className='icon' /> <span>Add User</span></li>
                <li><AiOutlineUnorderedList className='icon' /> <span>Add User</span></li>
            </ul>
           </div> */}
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
                    <li class="list-group-item"><Link to="/Patients/editdemographics">Demographics</Link></li>
                    <li class="list-group-item"><Link to="/Patients/Clinicalhistory">Clinical History</Link></li>
                    <li class="list-group-item"><Link to="/Patients/previoustreatment">Previous Treatment</Link></li>
                    <li class="list-group-item"><Link to="/Patients/nutritionalhistory">Nutritional History</Link> </li>
                    <li class="list-group-item"><Link to="/Patients/investigations">Investigations</Link></li>
                    <li class="list-group-item"><Link to="/Patients/treatment">Treatment</Link> </li>
                    {/* <li class="list-group-item"><Link to="/Patients/depression">Adverse Events to Drugs</Link></li> */}
                    <li class="list-group-item"><Link to="/Patients/infections">Infections</Link></li>
                    
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
                                            <label>CCF ID <span></span></label>
                                            <input type="text" className='form-control' readOnly value={ccfId} onChange={(e) => { setCcfId(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Name <span></span></label>
                                            <input type="text" className='form-control ' value={patientName} onChange={(e) => { setPatientName(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Age <span></span></label>
                                            <select className='form-control' value={age} onChange={(e) => { setAge(e.target.value) }}>
                                                {AgeArray.map(item => <option value={item}>{item}</option>)}
                                            </select>
                                        </div>
                                        <div className='from-group'>
                                            <label>Password. <span></span></label>
                                            <input type="text" className='form-control' value={password} onChange={(e) => { setPassword(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>MRD No. <span></span></label>
                                            <input type="text" className='form-control ' value={mrdNo} onChange={(e) => { setMrdNo(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Phone No. <span></span></label>
                                            <input type="text" className='form-control' maxLength={10} value={phoneNo} onChange={(e) => { setPhone(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Diagnosis Year<span></span></label>
                                            <input maxLength={4} type="text" onkeypress="return [0-9.]+.test(event.key)" className='form-control ' value={diagnosisYear} onChange={(e) => { setDiagnosisYear(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Blood Group<span></span></label>
                                            <input type="text" className='form-control ' value={bloodGroup} onChange={(e) => { setBloodGroup(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>State <span></span></label>
                                            <input type="text" className='form-control ' value={state} onChange={(e) => { setState(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Year of onset of symptoms <span></span></label>
                                            <input type="text" className='form-control ' value={yearOfOnset} onChange={(e) => { setYearOfOnset(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Area of residence </label>
                                            <select className='form-control' value={areaOfResidence} onChange={(e) => { setAreaOfResidence(e.target.value) }}>
                                                <option>Select Area</option>
                                                {residenceDrop && residenceDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                        {/* {(role == rolesObj.ADMIN || role == rolesObj.HOD) ?
                                            <div className='from-group'>
                                                <label>Doctor <span>*</span></label>
                                                <select className='form-control' value={doctor} onChange={(e) => {
                                                    let selectedDoxtor = doctorArr.find(el => el._id == e.target.value);
                                                    console.log(selectedDoxtor , "selectedDoxtor selectedDoxtor");
                                                    setDoctor(e.target.value);
                                                    setHod(selectedDoxtor?.hod);
                                                    setDisease(selectedDoxtor?._id);
                                                }}>
                                                    <option value="">Please Select</option>
                                                    {doctorArr && doctorArr.map((el) => <option value={el._id}>{el.firstName}</option>)}
                                                </select>
                                            </div>
                                            : ""} */}
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Date of Admission<span></span></label>
                                            <input type="date" className='form-control ' value={enrollDate} onChange={(e) => { setEnrollDate(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Date of Discharge<span></span></label>
                                            <input type="date" className='form-control ' value={dischargeDate} onChange={(e) => { setDischargeDate(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Total No of Days<span></span></label>
                                            <input type="string" className='form-control ' value={totalDay} onChange={(e) => { setTotalDay(e.target.value) }} />
                                        </div>
                                        
                                        <div className='from-group'>
                                            <label>Confirm Password <span></span></label>
                                            <input type="text" className='form-control' value={conPassword} onChange={(e) => { setConPassword(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Father/Husband’s Name<span></span></label>
                                            <input type="text" className='form-control ' value={parentName} onChange={(e) => { setParentName(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Sex<span></span></label>
                                            <select class="form-control" value={sex} onChange={(e) => { setSex(e.target.value) }}>
                                                {gender && gender.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                        
                                        <div className='from-group'>
                                            <label>Patient From<span></span></label>
                                            <select class="form-control" value={patientFrom} onChange={(e) => { setPatientFrom(e.target.value) }}>
                                                {patientDrop && patientDrop.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>

                                        <div className='from-group'>
                                            <label>Email. <span></span></label>
                                            <input type="email" className='form-control' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Diagnosis Month<span></span></label>
                                            <select className='form-control' value={diagnosisMonth} onChange={(e) => { setDiagnosisMonth(e.target.value) }}>
                                                {months && months.map((el) => <option value={el.value}>{el.label}</option>)}
                                            </select>
                                        </div>
                                        <div className='from-group'>
                                            <label>Date Of Birth<span></span></label>
                                            <input type="date" className='form-control' value={dob} onChange={(e) => { setDob(e.target.value) }} />
                                        </div>
                                        <div className='from-group'>
                                            <label>District<span></span></label>
                                            <input type="text" className='form-control' value={district} onChange={(e) => { setDistrict(e.target.value) }} />
                                        </div>
                                        
                                        {/* <div className='from-group'>
                                            <label>Service<span>*</span></label>
                                            <select className="form-control" value={service} onChange={(e)=>{onServiceFun(e.target.value)}}>
                                                <option>Please Select</option>
                                                { serviceDrop && serviceDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                                            </select>
                                        </div> */}
                                        {/* {(role == rolesObj.ADMIN) ?
                                            <div className='from-group'>
                                                <label>Disease <span>*</span></label>
                                                <select className='form-control' value={disease} onChange={(e) => setDisease(e.target.value)}>
                                                    <option value=""> Please Select Disease</option>
                                                    {diseaseArr && diseaseArr.map((el) => <option value={el._id}>{el.disease}</option>)}
                                                </select>
                                            </div>
                                        : ""} */}
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group addlist-frm'>
                                        <label>Address Line 1<span></span></label>
                                        <input type="text" className='form-control ' value={addressLine} onChange={(e) => { setAddressLine(e.target.value) }} />
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
                                        <label>Education</label>
                                        <select class="form-control" value={educationHead} onChange={(e) => { setEducationHead(e.target.value) }}>
                                            {education && education.map((el) => <option value={el.value}>{el.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='from-group addlist-frm'>
                                        <label>Updated Monthly Family Income in Rupees</label>
                                        <select class="form-control" value={monthlyIncome} onChange={(e) => { setMonthlyIncome(e.target.value) }}>
                                            {income && income.map((el) => <option value={el.value}>{el.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-4'>
                                    <div className='from-group addlist-frm'>
                                        <label>Occupation</label>
                                        <select class="form-control" value={occupationHead} onChange={(e) => { setOccupationHead(e.target.value) }}>
                                            {occupation && occupation.map((el) => <option value={el.value}>{el.label}</option>)}
                                        </select>
                                    </div>
                                </div>
                                <div className='col-lg-6 addlist-frm mt-4'>
                                    <div className='from-group'>
                                        <label>Socioeconomic Class<span></span></label>
                                        <input type="text" className='form-control' readOnly value={socioEconomy} onChange={(e) => { setSocioEconomy(e.target.value) }} />
                                    </div>
                                </div>
                                <div className='col-lg-6 addlist-frm mt-4'>
                                    <div className='from-group'>
                                        <label>Total Score<span></span></label>
                                        <input type="text" className='form-control' readOnly value={totalScore} onChange={(e) => { setTotalScore(e.target.value) }} />
                                    </div>
                                </div>
                            </div>
                            <div className='row mt-4'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center'>
                                        <button className='btn btn-link' onClick={handleAddDemografic}>Next</button>
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
export default Adddemographics;