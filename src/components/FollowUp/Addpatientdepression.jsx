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
import { DEMOGRAFICGet } from '../../redux/actions/Demografic/Demografic.actions';
import { SETFOLLOWUPObj } from "../../redux/actions/FollowUp/FollowUp.actions";


export const Addpatientdepression = () => {

  const [patientName, setPatientName] = useState("");
  const [rectalFreq, setRectalFreq] = useState("");
  const [date, setDate] = useState("");

const navigate = useNavigate();

const [displayProduct, setdisplayProduct] = useState([])
const patientArr = useSelector((states) => states.demografic.demografics);
const followupArr = useSelector((states)=> states.followup.followups);

const dispatch = useDispatch();

  const stoolFreqDrop = [
    { value: "select", label: "Select" },
    { value: "Normal no. of stools", label: "Normal no. of stools" },
    { value: "1 to 2 stools more than normal", label: "1 to 2 stools more than normal" },
    { value: "3 to 4 stools more than normal", label: "3 to 4 stools more than normal" },
    { value: "5 or more stools more than normal", label: "5 or more stools more than normal" },
];

  const handleFollowupView = (row)=>{
      dispatch(SETFOLLOWUPObj(row));
      navigate("/FollowUp/viewfollowup");
    };

    const onHandleFollowup = ()=>{

    let searchPatientList = [];
      if(`${patientName}`!= ''){
        searchPatientList  = followupArr.filter(el => `${el.patientName}`.toLowerCase().includes(`${patientName}`.toLowerCase()));
      }
      if(`${date}`!= ''){
        searchPatientList = followupArr.filter(el => `${el.followupDate}`.toLowerCase().includes(`${date}`.toLowerCase()));
      }
      if(`${rectalFreq}`!= ''){
        searchPatientList = followupArr.filter(el => `${el.stoolFreq}`.toLowerCase().includes(`${rectalFreq}`.toLowerCase()));
      }

    console.log(searchPatientList , "searchPatientList");
      setdisplayProduct(searchPatientList);
    
  }


  const handleGet = () => {
    let query = "";
    dispatch(DEMOGRAFICGet());
  };

  useEffect(() => {
    handleGet()
    }, []);

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
                  <label>Rectal Frequency: {rectalFreq}</label>
                  <select className='form-control' value={rectalFreq} onChange={(el)=>{setRectalFreq(el.target.value)}}> 
                    { stoolFreqDrop && stoolFreqDrop.map((el)=><option value={el.value}>{el.label}</option> )}
                  </select>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Follow Date {date}</label>
                    <input type="date" className='form-control' value={date} onChange={(el)=>{setDate(el.target.value)}}/>
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                <div className='subbtn text-center'>
                <button to="" className='btn btn-link' onClick={onHandleFollowup}>Search</button>
                </div>
                </div>
             </div>



    <div>
      <div className=" col-lg-12table_view_list py-4">
        <table class="table">
          <thead style={{backgroundColor:"white"}}>
            <tr>
              <th scope="col" className="text-center">S.NO</th>
              <th scope="col">Patient Id</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Followup date</th>
              <th scope="col">Stool Frequency</th>
              <th scope="col">View</th> 
            </tr>
          </thead>
          <tbody>
            {
              displayProduct && displayProduct.map((item,index)=>
              <tr style={{backgroundColor:"white"}}>
              <th scope="row" className="text-center">{index+1}</th>
              <td scope="row">{item.ccfIdName}</td>
              <td>{item.patientName}</td>
              <td>{item.followupDate}</td>
              <td>{item.stoolFreq}</td>
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
      </div>
     </div>
    </div>
   </div>
  </div>
  )
}
