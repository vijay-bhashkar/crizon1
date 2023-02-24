import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { TREATMENTAdd, TREATMENTGet, SETTREATMENTObj, TREATMENTUpdate, TREATMENTDelete, TREATGet_BY_PATIENT_ID } from "../../../redux/actions/Treatment/Treatment.actions";
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
  const [rectalSteroids, setRectalSteroids] = useState("No");
  const [adalimunab, setAdalimunab] = useState("");
  const [vedolizumab, setVedolizumab] = useState("");
  const [cyclosporine, setCyclosporine] = useState("");
  const [ustekinumab, setUstekinumab] = useState("");
  const [tofacitinib, setTofacitinib] = useState("");
  const [tacrolimus, setTacrolimus] = useState("");
  const [probiotics, setProbiotics] = useState("");
  const [filgotinib, setFilgotinib] = useState("");
  const [fmtCapsule, setFmtCapsule] = useState("");
  const [fmt, setFmt] = useState("");
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
      setFmtCapsule(treatmentObj?.fmtCapsule);
      setFilgotinib(treatmentObj?.filgotinib);
      setFmt(treatmentObj?.fmt);
      setSession_1(treatmentObj?.session_1);
      setSession_2(treatmentObj?.session_2);
      setSession_3(treatmentObj?.session_3);
      setSession_4(treatmentObj?.session_4);
      setSession_5(treatmentObj?.session_5);
      setSession_6(treatmentObj?.session_6);
      setSession_7(treatmentObj?.session_7);
      setSession_8(treatmentObj?.session_8);
      setSession_9(treatmentObj?.session_9);
      setSession_10(treatmentObj?.session_10);
      setSession_11(treatmentObj?.session_11);
      setSession_12(treatmentObj?.session_12);
      setSurgery(treatmentObj?.surgery);
      setSpecify(treatmentObj?.specify);
    }
}, [treatmentObj]);

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
        <li class="list-group-item"><Link to="/Patients/Viewdemografics">Demographics</Link></li>
        <li class="list-group-item"><Link to="/Patients/Viewclinicalhistory">Clinical History</Link></li>
        <li class="list-group-item"><Link to="/Patients/Viewprevioustreatment">Previous Treatment</Link></li>
        <li class="list-group-item"><Link to="/Patients/Viewnutrition">Nutritional History</Link> </li>
        <li class="list-group-item"><Link to="/Patients/Viewinvestigation">Investigations</Link></li>
        <li class="list-group-item"><Link to="/Patients/Viewtreatment">Treatment</Link> </li>
        <li class="list-group-item"><Link to="/Patients/Viewinfection">Infections</Link></li>
      </ul>
    </div>
  
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Treatment</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Oral 5-ASA : </b> {oralAsa} </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Rectal 5ASA : </b> {rectalAsa} </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>AZA : </b>{aza} </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>6-MP : </b> {mp}  </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Prednisolone : </b> {prednisolone}  </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Infliximab : </b> {infliximab} </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Budesonide : </b> {budesonide}  </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Rectal Steroids : </b> {rectalSteroids}  </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Adalimunab : </b> {adalimunab} </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Vedolizumab : </b> {vedolizumab} </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Cyclosporine : </b> {cyclosporine} </label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Ustekinumab : </b> {ustekinumab} </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Tofacitinib : </b>{tofacitinib}  </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Tacrolimus : </b> {tacrolimus}  </label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Probiotics : </b> {probiotics}  </label>
                 
                </div>
              </div>   
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Filgotinib : </b> {filgotinib}  </label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>FMT Capsule : </b> {fmtCapsule}  </label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>FMT : </b> {fmt}  </label>
                  
                </div>
              </div>
              
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12 mb-1'>
                    <div className='clinical'>
                        <h5>FMT Session</h5>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 1 : </b> {session_1} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 2 : </b>{session_2} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                      <label><b>Session 3 : </b> {session_3} </label>
                     
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 4 : </b>{session_4} </label>
                       
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 5 : </b> {session_5} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 6 : </b> {session_6} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 7 : </b>{session_7} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 8 : </b> {session_8} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 9 : </b> {session_9} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 10 : </b> {session_10} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 11 : </b> {session_11} </label>
                        
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 12 : </b> {session_12} </label>
                        
                    </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label><b>Surgery : </b> {surgery}  </label>
                   
                </div>
              </div>
                <div className='col-lg-6'>
                <div className='from-group'>
                  <label><b>If Yes : </b> {specify}  </label>
                  
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                  <div className='subbtn text-center'>
                    <Link to="/Patients/Viewinvestigation" className='btn btn-link mx-4'>Previous</Link>
                    <Link to="/Patients/Viewinfection" className='btn btn-link mx-4'>Next</Link>
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
