import React , { useEffect, useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// import { INFECTIONAdd, INFECTIONGet, INFECTIONDelete, SETINFECTIONObj, INFECTIONUpdate, INFECTIONGet_BY_PATIENT_ID } from "../../../redux/actions/Infection/Infection.actions";
import { getInfectionByPatientId } from "../../../services/Infection.service";

export const ViewInfection = () => {
  const [respiratory, setRespiratory] = useState("");
  const [ent, setEnt] = useState("");
  const [skin, setSkin] = useState("");
  const [tb, setTb] = useState("");
  const [genitourinary, setGenitourinary] = useState("");
  const [gastrointestinal, setGastrointestinal] = useState("");
  const [specificToIbd, setSpecificToIbd] = useState("");
  const [neurological, setNeurological] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");

const [patientId, setPatientId] = useState("");
const [infectionObj, setInfectionObj] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

  var path = window.location.search;
  var parts = path.split('=');
  var url_id = parts[1];

let getInfe = async(url_id)=>{
  try{
    let res = await getInfectionByPatientId(url_id);
    let totalData = res.data.data ;
    setInfectionObj(totalData);
  }catch(error){
    console.log(error);
  }
}

useEffect(() => {
  if(url_id){
    getInfe(url_id);
  }
}, [url_id]);

// const infectionObj = useSelector((states) => states.infection.infectionsObj);
const demograficObj = useSelector((states) => states.demografic.demograficObj); 

useEffect(() => {
  // dispatch(SETINFECTIONObj({}))
  if(demograficObj){
    setPatientId(demograficObj?._id)
  }
}, [demograficObj]);

let onHandleNext = (patientId)=>{
  navigate(`/Patients/Viewtreatment?id=${patientId}`);
}

useEffect(() =>{
      if(infectionObj){
        setRespiratory(infectionObj?.respiratory);
        setEnt(infectionObj?.ent);
        setSkin(infectionObj?.skin);
        setTb(infectionObj?.tb);
        setGenitourinary(infectionObj?.genitourinary);
        setGastrointestinal(infectionObj?.gastrointestinal);
        setSpecificToIbd(infectionObj?.specificToIbd);
        setNeurological(infectionObj?.neurological);
        setMiscellaneous(infectionObj?.miscellaneous);
      }
},[infectionObj]);

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           
          </div>
          <div className="col-lg-4">
            <h5 className="mb-0 text-center text-white">
            Beck's Depression Inventory (BDI-II)
            </h5>
          </div>
          <div className="col-lg-4 text-end">
            <div className="btnlist">
            <Link to="/Patients/PatientListView" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="listheader">
    <ul class="list-group list-group-horizontal">
            <li className="list-group-item p-2">Demographics</li>
            <li className="list-group-item p-2">Clinical History</li>
            <li className="list-group-item p-2">Previous Treatment</li>
            <li className="list-group-item p-2">Nutritional History </li>
            <li className="list-group-item p-2">Investigations</li>
            <li className="list-group-item p-2">Treatment </li>
            <li className="list-group-item p-2">Infections</li>
        </ul>
    </div>
  
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Infections</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  {
                    (typeof respiratory == 'string') ? (
                      <> <label><b>Respiratory : </b> {respiratory} </label></>
                    ): (
                      <>
                    <label><b>Respiratory : </b> { respiratory && respiratory?.length > 0  && respiratory.map((el)=><p>{ el.value }</p>)} </label>
                      </>
                    )
                  }
                  {/* <label><b>Respiratory : </b> { respiratory && respiratory?.length > 0  && respiratory.map((el)=><p>{ el.value }</p>)}</label> */}
               
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>ENT : </b> {ent}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                <label><b>Skin : </b> {skin}</label>
               
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>TB : </b> {tb}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Genitourinary : </b> {genitourinary}</label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Gastrointestinal : </b> {gastrointestinal}</label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Specific to IBD : </b> {specificToIbd}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Neurological : </b> {neurological}</label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Miscellaneous : </b>{miscellaneous} </label>
                 
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                  <div className='subbtn text-center'>
                      <p to="../Patients/Viewtreatment" onClick={()=>onHandleNext(infectionObj?.patientId)} className='btn btn-link mx-4'>Previous</p>
                      {/* <Link to="../Patients/Viewdepression" className='btn btn-link mx-4'>Next</Link> */}
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
