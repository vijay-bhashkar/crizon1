import React, { useEffect, useState } from 'react';
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import moment from 'moment/moment';
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { TREATMENTAdd, TREATMENTGet, SETTREATMENTObj, TREATMENTUpdate, TREATMENTDelete, TREATGet_BY_PATIENT_ID } from "../../../redux/actions/Treatment/Treatment.actions";
import { toast } from 'react-hot-toast';
export const ViewTreatment = () => {

const [patientId, setPatientId] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
  if(patientId){
dispatch(TREATGet_BY_PATIENT_ID(patientId));
  }
}, [patientId]);

 const treatmentObj = useSelector((states) => states.treatment.treatmentsObj);
 const demograficObj = useSelector((states) => states.demografic.demograficObj);  

 useEffect(() => {
  dispatch(SETTREATMENTObj({}))
  if(demograficObj){
    setPatientId(demograficObj?._id)
  }
}, [demograficObj]);

  const [oralAsa, setOralAsa] = useState("");
  const [rectalAsa, setRectalAsa] = useState("");
  const [aza, setAza] = useState("");
  const [mp, setMp] = useState("");
  const [prednisolone, setPrednisolone] = useState("");
  const [infliximab, setInfliximab] = useState("");
  const [budesonide, setBudesonide] = useState("");
  const [rectalSteroids, setRectalSteroids] = useState("");
  const [adalimunab, setAdalimunab] = useState("");
  const [vedolizumab, setVedolizumab] = useState("");
  const [cyclosporine, setCyclosporine] = useState("");
  const [ustekinumab, setUstekinumab] = useState("");
  const [tofacitinib, setTofacitinib] = useState("");
  const [tacrolimus, setTacrolimus] = useState("");
  const [probiotics, setProbiotics] = useState("");
  const [filgotinib, setFilgotinib] = useState("");
  const [session_1, setSession_1] = useState("");
  const [session_2, setSession_2] = useState("");
  const [session_3, setSession_3] = useState("");
  const [session_4, setSession_4] = useState("");
  const [session_5, setSession_5] = useState("");
  const [session_6, setSession_6] = useState("");
  const [session_7, setSession_7] = useState("");
  const [session_8, setSession_8] = useState("");
  const [session_9, setSession_9] = useState("");
  const [session_10, setSession_10] = useState("");
  const [session_11, setSession_11] = useState("");
  const [session_12, setSession_12] = useState("");
  const [surgery, setSurgery] = useState("");
  const [specify, setSpecify] = useState("");

  const handleAddTreatment = ()=>{

    if(oralAsa == "" || oralAsa == undefined){
      toast.error("Oral ASA is mandatory");
      return
    }if(rectalAsa == "" || rectalAsa == undefined){
      toast.error("Rectal ASA is mandatory");
      return
    }else{
    let obj = {
      patientId,
      oralAsa,
      rectalAsa,
      aza,
      mp,
      prednisolone,
      infliximab,
      budesonide,
      rectalSteroids,
      adalimunab,
      vedolizumab,
      cyclosporine,
      ustekinumab,
      tofacitinib,
      tacrolimus,
      probiotics,
      filgotinib,
      session_1,
      session_2,
      session_3,
      session_4,
      session_5,
      session_6,
      session_7,
      session_8,
      session_9,
      session_10,
      session_11,
      session_12,
      surgery,
      specify,
    }
    console.log(obj);
    if (treatmentObj?._id) {
      dispatch(TREATMENTUpdate(treatmentObj._id, obj));
      dispatch(SETTREATMENTObj(null))
    }else{
      dispatch(TREATMENTAdd(obj));
    }
      navigate("/Patients/infections");
  }
  };

  useEffect(() => {
    if (treatmentObj) {
      setOralAsa(treatmentObj?.oralAsa);
      setRectalAsa(treatmentObj?.rectalAsa);
      setAza(treatmentObj?.aza);
      setMp(treatmentObj?.mp);
      setPrednisolone(treatmentObj?.prednisolone);
      setInfliximab(treatmentObj?.infliximab);
      setBudesonide(treatmentObj?.budesonide);
      setRectalSteroids(treatmentObj?.rectalSteroids);
      setAdalimunab(treatmentObj?.adalimunab);
      setVedolizumab(treatmentObj?.vedolizumab);
      setCyclosporine(treatmentObj?.cyclosporine);
      setUstekinumab(treatmentObj?.ustekinumab);
      setTofacitinib(treatmentObj?.tofacitinib);
      setTacrolimus(treatmentObj?.tacrolimus);
      setProbiotics(treatmentObj?.probiotics);
      setFilgotinib(treatmentObj?.filgotinib);
      setSession_1(moment(treatmentObj?.session_1).format("YYYY-MM-DD"));
      setSession_2(moment(treatmentObj?.session_2).format("YYYY-MM-DD"));
      setSession_3(moment(treatmentObj?.session_3).format("YYYY-MM-DD"));
      setSession_4(moment(treatmentObj?.session_4).format("YYYY-MM-DD"));
      setSession_5(moment(treatmentObj?.session_5).format("YYYY-MM-DD"));
      setSession_6(moment(treatmentObj?.session_6).format("YYYY-MM-DD"));
      setSession_7(moment(treatmentObj?.session_7).format("YYYY-MM-DD"));
      setSession_8(moment(treatmentObj?.session_8).format("YYYY-MM-DD"));
      setSession_9(moment(treatmentObj?.session_9).format("YYYY-MM-DD"));
      setSession_10(moment(treatmentObj?.session_10).format("YYYY-MM-DD"));
      setSession_11(moment(treatmentObj?.session_11).format("YYYY-MM-DD"));
      setSession_12(moment(treatmentObj?.session_12).format("YYYY-MM-DD"));
      setSurgery(treatmentObj?.surgery);
      setSpecify(treatmentObj?.specify);
    }
}, [treatmentObj]);

  const options = [
    { value: "Select", label: "Select" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const oralAsaDrop = [
    { value: "Select", label:"Select" },
    { value: "1.2", label:"1.2" },
    { value: "2.4", label:"2.4" },
    { value: "3.6", label:"3.6" },
    { value: "4.8", label:"4.8" },
  ]
  const rectalAsaDrop = [
    {value:"Select", label:"Select"},
    {value:"500gm", label:"500gm"},
    {value:"1gm", label:"1gm"},
  ]
  const azaDrop = [
    {value:"Select", label:"Select"},
    {value:"25", label:"25"},
    {value:"50", label:"50"},
    {value:"75", label:"75"},
    {value:"100", label:"100"},
    {value:"125", label:"125"},
    {value:"150", label:"150"},
    {value:"175", label:"175"},
  ]
  const mpDrop = [
    {value:"Select", label:"Select"},
    {value:"50", label:"50"},
    {value:"100", label:"100"},
    {value:"150", label:"150"},
  ]
  const predenisoloniDrop = [
    { value:"Select", label:"Select" },
    { value:"5", label:"5" },
    { value:"10", label:"10" },
    { value:"15", label:"15" },
    { value:"20", label:"20" },
    { value:"25", label:"25" },
    { value:"30", label:"30" },
    { value:"40", label:"40" },
    { value:"60", label:"60" },
  ]
  const infliximabDrop = [
    { value:"Select", label:"Select"},
    { value:"5 mg/kg", label:"5 mg/kg"},
    { value:"10 mg/kg", label:"10 mg/kg"},
  ]
  const budesonideDrop = [
    { value:"Select", label:"Select" },
    { value:"3", label:"3" },
    { value:"6", label:"6" },
    { value:"9", label:"9" },
  ]
  const adlimunabDrop = [
    { value:"Select", label:"Select" },
    { value:"160 mg", label:"160 mg" },
    { value:"80 mg", label:"80 mg" },
    { value:"40 mg", label:"40 mg" },
  ]
  const vedolizumanDrop = [
    { value:"select", label:"Select" },
    { value:"300 mg", label:"300 mg" },
  ]
  const tofacitiDrop = [
    { value:"Select", label:"Select" },
    { value:"5", label:"5" },
    { value:"10", label:"10" },
    { value:"20", label:"20" },
  ];
  const rectalSteroid = [
    { value:"select", label:"Select" },
    { value:"select", label:"Select" },
    { value:"select", label:"Select" },
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
    <div className="listheader">
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <Link>Demographics</Link>
        </li>
        <li className="list-group-item">
          <Link >Clinical History</Link>
        </li>
        <li className="list-group-item">
          <Link >Previous Treatment</Link>
        </li>
        <li className="list-group-item">
          <Link >
            Nutritional History
          </Link>{" "}
        </li>
        <li className="list-group-item">
          <Link >Investigations</Link>
        </li>
        <li className="list-group-item">
          <Link>Treatment</Link>{" "}
        </li>
        <li className="list-group-item">
          <Link>Infections</Link>
        </li>
        <li className="list-group-item">
          <Link>Depression</Link>
        </li>
      </ul>
    </div>
  
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3><b>Treatment </b></h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Oral 5-ASA  : </b>{oralAsa}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Rectal 5ASA : </b> {rectalAsa}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>AZA : </b> {aza}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>6-MP : </b> {mp}</label>
               
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Prednisolone : </b> {prednisolone}</label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Infliximab : </b> {infliximab}</label>
            
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Budesonide : </b> {budesonide}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Rectal Steroids : </b> {rectalSteroids}</label>
               
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Adalimunab : </b> {adalimunab}</label>
               
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Vedolizumab : </b> {vedolizumab}</label>
              
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Cyclosporine : </b> {cyclosporine}</label>
            
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Ustekinumab : </b> {ustekinumab}</label>
        
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Tofacitinib : </b> {tofacitinib}</label>
               
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Tacrolimus : </b> {tacrolimus} </label>
             
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Probiotics : </b> {probiotics}</label>
             
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Filgotinib : </b> {filgotinib}</label>
                
                </div>
              </div>
              
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12 mb-1'>
                    <div className='clinical'>
                        <h5><b>FMT Session </b></h5>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 1 : </b> {session_1} </label>                   
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 2 : </b> {session_2}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                      <label><b>Session 3 : </b> {session_3}</label>
                
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 4 : </b> {session_4}</label>
                 
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 5 : </b> {session_5}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 6 : </b> {session_6}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 7 : </b> {session_7}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 8 : </b> {session_8}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 9 : </b> {session_9}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 10 : </b> {session_10}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 11 : </b> {session_11}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 12 : </b>{session_12}</label>
                    </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label><b>Surgery : </b> {surgery}</label>
                </div>
              </div>
                <div className='col-lg-6'>
                <div className='from-group'>
                  <label><b>If Yes : </b> {specify}</label>
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                  <div className='subbtn text-center'>
                      <Link to="../Patients/Viewinvestigation" className='btn btn-link mx-4'>Previous</Link>
                      <Link to="../Patients/Viewinfection" className='btn btn-link mx-4'>Next</Link>
                    
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
