import React from 'react'
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate} from "react-router-dom";
import { DEMOGRAFICGet, SETDEMOGRAFICObj } from "../../redux/actions/Demografic/Demografic.actions";

export const Searchpatient = () => {

  const [patientName, setPatientName] = useState("");
  const [patientId, setPatientId] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [diagnosisYear, setDiagnosisYear] = useState("");
  const [diagnosisMonth, setDiagnosisMonth] = useState("");
  const [manifestation, setManifestation] = useState("");
  const [bmi, setBmi] = useState("");
  const [pallor, setPallor] = useState("");
  const [fistula, setFistula] = useState("");

const navigate = useNavigate();


const [displayProduct, setdisplayProduct] = useState([])
  const patientArr = useSelector((states) => states.demografic.demografics);
  const followupArr = useSelector((states)=> states.followup.followups);
console.log(displayProduct , "displayProduct");
  const dispatch = useDispatch();

  const handleFollowupView = (row)=>{
      dispatch(SETDEMOGRAFICObj(row));
      navigate("/Patients/Viewdemografics");
    };

    const onHandleFollowup = ()=>{

    let searchPatientList = [];
      if(`${patientName}`!= ''){
        searchPatientList  = patientArr.filter(el => `${el.patientName}`.toLowerCase().includes(`${patientName}`.toLowerCase()));
      }
      if(`${patientId}`!= ''){
        searchPatientList  =  patientArr.filter(el => `${el.ccfId}`.toLowerCase().includes(`${patientId}`.toLowerCase()));
      }
      if(`${fatherName}`!= ''){
        searchPatientList = patientArr.filter(el => `${el.parentName}`.toLowerCase().includes(`${fatherName}`.toLowerCase()));
      }
      if(`${sex}`!= ''){
        searchPatientList  =  patientArr.filter(el => `${el.sex}`.toLowerCase().includes(`${sex}`.toLowerCase()));
      }
      if(`${diagnosisMonth}`!= ''){
        searchPatientList = patientArr.filter(el => `${el.diagnosisMonth}`.toLowerCase().includes(`${diagnosisMonth}`.toLowerCase()));
      }
      if(`${diagnosisYear}`!= ''){
        searchPatientList = patientArr.filter(el => `${el.diagnosisYear}`.toLowerCase().includes(`${diagnosisYear}`.toLowerCase()));
      }
      if(`${age}`!= ''){
        searchPatientList = patientArr.filter(el => `${el.age}`.toLowerCase().includes(`${age}`.toLowerCase()));
      }



      setdisplayProduct(searchPatientList);

   
    // const 
    // const allGender  =  patientArr.find(el => `${el.sex}`.toLowerCase().includes(`${sex}`.toLowerCase()));
    // const allAge  =  patientArr.filter(el => `${el.age}`.toLowerCase().includes(`${age}`.toLowerCase()));
    // const allDiagnosisYear = patientArr.filter(el => `${el.diagnosisYear}`.toLowerCase().includes(`${diagnosisYear}`.toLowerCase()));
    // const allDiagnosisMonth = patientArr.filter(el => `${el.diagnosisYear}`.toLowerCase().includes(`${diagnosisYear}`.toLowerCase()));
    // console.log(allDiagnosisYear,allAge,allGender,parentAllName,patientAllId,patientAllName );
  }


  const handleGet = () => {
    let query = "";
    dispatch(DEMOGRAFICGet());
  };

  useEffect(() => {
    handleGet()
    }, []);
 
  const options = [
        { value: "select", label: "Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ];
  const sexDrop = [
        { value: "select", label:"Select" },
        { value: "male", label:"Male" },
        { value: "female", label:"Female" },
    ];
  const bmiDrop = [
      { value: "select", label:"Select" },
      { value: "<=27", label:"Less than equal to 27" },
      { value: ">27", label:"Greater than 27" },
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
            <div className="btnlist">
              <Link className="btn btn-defalut btn-md">
                <AiOutlineUnorderedList className="icon" />{" "}
                <span>View List</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Search Patient by Personal Details</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Name of Patient </label>
                    <input type="text" className='form-control' value={patientName} onChange={(el)=>{setPatientName(el.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Patient ID : </label>
                  <input type="text" className='form-control' value={patientId} onChange={(el)=>{setPatientId(el.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Father/Husband's Name {fatherName}</label>
                  <input type="text" className='form-control' value={fatherName} onChange={(el)=>{setFatherName(el.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Sex</label>
                  <select className="form-control" value={sex} onChange={(el)=>{setSex(el.target.value)}}>
                    { sexDrop && sexDrop.map((el)=><option value={el.value}>{el.label}</option> )}
                  </select>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Age</label>
                  <select className='form-control' value={age} onChange={(el)=>{setAge(el.target.value)}}>
                    { AgeArray.map(item =><option value={item}>{item}</option>) }
                  </select>
                </div>
              </div>
              {/* <div className='col-lg-6'>
                <div className='from-group'>
                  <label>City</label>
                  <input type="text" className='form-control' />
                </div>
              </div> */}
              {/* <div className='col-lg-6'>
                <div className='from-group'>
                  <label>State</label>
                  <input type="text" className='form-control' />
                </div>
              </div> */}
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Diagnosis Year</label>
                  <input type="number" className='form-control' value={diagnosisYear} onChange={(el)=>{setDiagnosisYear(el.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Diagnosis Month</label>
                  <select className='form-control' value={diagnosisMonth} onChange={(el)=>{setDiagnosisMonth(el.target.value)}}>
                    { months && months.map((el)=><option value={el.value}>{el.label}</option> )}
                  </select>
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                <div className='subbtn text-center'>
                <button to="" className='btn btn-link ' onClick={onHandleFollowup}>Search</button>
                </div>
                </div>
            </div>
        <div>
      <div className=" col-lg-12 table_view_list py-4">
        <table class="table">
          <thead style={{backgroundColor:"white"}}>
            <tr>
              <th scope="col" className="text-center">S.NO</th>
              <th scope="col">CCFId</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Parent Name</th>
              <th scope="col">Age</th>
              <th scope="col">View</th> 
            </tr>
          </thead>
          <tbody>
            {
              displayProduct && displayProduct.map((item,index)=>
            <tr style={{backgroundColor:"white"}}>
              <td scope="row" className="text-center">{index+1}</td>
              <td scope="row">{item.ccfId}</td>
              <td>{item.patientName}</td>
              <td>{item.parentName}</td>
              <td>{item.age}</td>
              <td>
                <span className="delete_list" style={{marginLeft:20}}>
                <GrView onClick={(e)=>{handleFollowupView(item)}}/>
                </span>
              </td>
            </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>


             <div className='row mt-5'>
                <div className='col-lg-12 heaind  text-center'>
                    <h3>Search by Clinical Manifestations</h3>
                </div>
                <div className='col-lg-12'>
                    <div className='from-group'>
                        <label>Extraintestinal Manifestations</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                     <div className='subbtn text-center mt-4 mb-5'>
                        <Link to="" className='btn btn-link'>Search</Link>
                    </div>
                    <div className='col-lg-12 heaind  text-center mt-4'>
                        <h3>Search by Examination</h3>
                    </div>
                </div>
             </div>
             <div className='row'>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>BMI</label>
                        <Select options={bmiDrop} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Pallor</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Perianal Fissure/Fistula/Abscess</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
             </div>
             <div className='row'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center mt-4 mb-5'>
                        <Link to="" className='btn btn-link'>Search</Link>
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
