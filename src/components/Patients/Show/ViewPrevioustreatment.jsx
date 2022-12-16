import React, { useEffect, useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { SETPREVIOUSTREATMENTObj, PREVIOUSTREATMENTGet_BY_PATIENT_ID } from "../../../redux/actions/PreviousTreatment/PreviousTreatment.actions";
import { toast } from 'react-hot-toast';
export const ViewPrevioustreatment = () => {

const [patientId, setPateintId] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
    if(patientId){
  dispatch(PREVIOUSTREATMENTGet_BY_PATIENT_ID(patientId));
    }
}, [patientId]);

const preTreatObj = useSelector((states) => states.previoustreatment.previousTreatmentsObj); 
const demograficObj = useSelector((states) => states.demografic.demograficObj);  

useEffect(() => {
    dispatch(SETPREVIOUSTREATMENTObj({}))
    if(demograficObj){
        setPateintId(demograficObj?._id)
    }
  }, [demograficObj]);

    const [oralAsaName, setOralAsaName] = useState("");
    const [oralAsaDose, setOralAsaDose] = useState("");
    const [oralAsaStart, setOralAsaStart] = useState("");
    const [oralAsaEnd, setOralAsaEnd] = useState("");

    const [rectalSuppositoryName, setRectalSuppositoryName] = useState("");
    const [rectalSuppositoryDose, setRectalSuppositoryDose] = useState("");
    const [rectalSuppositoryStart, setRectalSuppositoryStart] = useState("");
    const [rectalSuppositoryEnd, setRectalSuppositoryEnd] = useState("");

    const [reacalFoamName, setReacalFoamName] = useState("");
    const [reacalFoamDose, setReacalFoamDose] = useState("");
    const [reacalFoamStart, setReacalFoamStart] = useState("");
    const [reacalFoamEnd, setReacalFoamEnd] = useState("");

    const [oralSteroidsName, setOralSteroidsName ] = useState("");
    const [oralSteroidsDose, setOralSteroidsDose ] = useState("");
    const [oralSteroidsStart, setOralSteroidsStart] = useState("");
    const [oralSteroidsEnd, setOralSteroidsEnd ] = useState("");

    const [ivSteroidsName, setIvSteroidsName] = useState("");
    const [ivSteroidsDose, setIvSteroidsDose] = useState("");
    const [ivSteroidsStart,  setIvSteroidsStart] = useState("");
    const [ivSteroidsEnd, setIvSteroidsEnd] = useState("");

    const [entofoamName, setEntofoamName] = useState("");
    const [entofoamDose, setEntofoamDose] = useState("");
    const [entofoamStart,  setEntofoamStart] = useState("");
    const [entofoamEnd,  setEntofoamEnd] = useState("");

    const [azaName, setAzaName] = useState("");
    const [azaDose, setAzaDose] = useState("");
    const [azaStart, setAzaStart] = useState("");
    const [azaEnd, setAzaEnd] = useState("");

    const [mpName, setMpName] = useState("");
    const [mpDose, setMpDose] = useState("");
    const [mpStart, setMpStart] = useState("");
    const [mpEnd, setMpEnd] = useState("");

    const [tgName,  setTgName] = useState("");
    const [tgDose,  setTgDose] = useState("");
    const [tgStart, setTgStart] = useState("");
    const [tgEnd,  setTgEnd] = useState("");
    
    const [infliximabName, setInfliximabName] = useState("");
    const [infliximabDose, setInfliximabDose] = useState("");
    const [infliximabStart, setInfliximabStart] = useState("");
    const [infliximabEnd, setInfliximabEnd] = useState("");

    const [adalimumabName, setAdalimumabName] = useState("");
    const [adalimumabDose, setAdalimumabDose] = useState("");
    const [adalimumabStart, setAdalimumabStart] = useState("");
    const [adalimumabEnd, setAdalimumabEnd] = useState("");

    const [vedolizumabName,   setVedolizumabName] = useState("");
    const [vedolizumabDose,   setVedolizumabDose] = useState("");
    const [vedolizumabStart,   setVedolizumabStart] = useState("");
    const [vedolizumabEnd,   setVedolizumabEnd] = useState("");

    const [ustekinumabName,    setUstekinumabName] = useState("");
    const [ustekinumabPose,   setUstekinumabPose] = useState("");
    const [ustekinumabStart,   setUstekinumabStart] = useState("");
    const [ustekinumabEnd,   setUstekinumabEnd] = useState("");

    const [tofacitinibName, setTofacitinibName] = useState("");
    const [tofacitinibPose, setTofacitinibPose] = useState("");
    const [tofacitinibStart,  setTofacitinibStart] = useState("");
    const [tofacitinibEnd,     setTofacitinibEnd] = useState("");



    const [fmtName,  setFmtName] = useState("");
    const [fmtPose,  setFmtPose] = useState("");
    const [fmtStart, setFmtStart] = useState("");
    const [fmtEnd,   setFmtEnd] = useState("");

    const [other, setOther] = useState("");
    const [asa, setAsa] = useState("");
    const [preSurgery, setPreSurgery] = useState("");
    const [sergeryDate, setSergeryDate] = useState("");
    const [typeSurgery, setTypeSurgery] = useState("");

   useEffect(()=>{
    if(preTreatObj){
        setOralAsaName(preTreatObj?.oralAsa?.name);
        setOralAsaDose(preTreatObj?.oralAsa?.dose);
        setOralAsaStart(preTreatObj?.oralAsa?.start);
        setOralAsaEnd(preTreatObj?.oralAsa?.end);
        
        setRectalSuppositoryName(preTreatObj?.rectalSuppository?.name);
        setRectalSuppositoryDose(preTreatObj?.rectalSuppository?.dose);
        setRectalSuppositoryStart(preTreatObj?.rectalSuppository?.start);
        setRectalSuppositoryEnd(preTreatObj?.rectalSuppository?.end);

        setReacalFoamName(preTreatObj?.reacalFoam?.name);
        setReacalFoamDose(preTreatObj?.reacalFoam?.dose);
        setReacalFoamStart(preTreatObj?.reacalFoam?.start);
        setReacalFoamEnd(preTreatObj?.reacalFoam?.end);

        setOralSteroidsName(preTreatObj?.oralSteroids?.name);
        setOralSteroidsDose(preTreatObj?.oralSteroids?.dose);
        setOralSteroidsStart(preTreatObj?.oralSteroids?.start);
        setOralSteroidsEnd(preTreatObj?.oralSteroids?.end);
        
        setIvSteroidsName(preTreatObj?.ivSteroids?.name);
        setIvSteroidsDose(preTreatObj?.ivSteroids?.dose);
        setIvSteroidsStart(preTreatObj?.ivSteroids?.start);
        setIvSteroidsEnd(preTreatObj?.ivSteroids?.end);

        setEntofoamName(preTreatObj?.entofoam?.name);
        setEntofoamDose(preTreatObj?.entofoam?.dose);
        setEntofoamStart(preTreatObj?.entofoam?.start);
        setEntofoamEnd(preTreatObj?.entofoam?.end);

        setAzaName(preTreatObj?.aza?.name);
        setAzaDose(preTreatObj?.aza?.dose);
        setAzaStart(preTreatObj?.aza?.start);
        setAzaEnd(preTreatObj?.aza?.end);

        setMpName(preTreatObj?.mp?.name);
        setMpDose(preTreatObj?.mp?.dose);
        setMpStart(preTreatObj?.mp?.start);
        setMpEnd(preTreatObj?.mp?.end);

        setTgName(preTreatObj?.tg?.name);
        setTgDose(preTreatObj?.tg?.dose);
        setTgStart(preTreatObj?.tg?.start);
        setTgEnd(preTreatObj?.tg?.end);

        setInfliximabName(preTreatObj?.infliximab?.name);
        setInfliximabDose(preTreatObj?.infliximab?.dose);
        setInfliximabStart(preTreatObj?.infliximab?.start);
        setInfliximabEnd(preTreatObj?.infliximab?.end);

        setAdalimumabName(preTreatObj?.adalimumab?.name);
        setAdalimumabDose(preTreatObj?.adalimumab?.dose);
        setAdalimumabStart(preTreatObj?.adalimumab?.start);
        setAdalimumabEnd(preTreatObj?.adalimumab?.end);

        setVedolizumabName(preTreatObj?.vedolizumab?.name);
        setVedolizumabDose(preTreatObj?.vedolizumab?.dose);
        setVedolizumabStart(preTreatObj?.vedolizumab?.start);
        setVedolizumabEnd(preTreatObj?.vedolizumab?.end);

        setUstekinumabName(preTreatObj?.ustekinumab?.name);
        setUstekinumabPose(preTreatObj?.ustekinumab?.dose);
        setUstekinumabStart(preTreatObj?.ustekinumab?.start);
        setUstekinumabEnd(preTreatObj?.ustekinumab?.end);

        setTofacitinibName(preTreatObj?.tofacitinib?.name);
        setTofacitinibPose(preTreatObj?.tofacitinib?.dose);
        setTofacitinibStart(preTreatObj?.tofacitinib?.start);
        setTofacitinibEnd(preTreatObj?.tofacitinib?.end);

        setFmtName(preTreatObj?.fmt?.name);
        setFmtPose(preTreatObj?.fmt?.dose);
        setFmtStart(preTreatObj?.fmt?.start);
        setFmtEnd(preTreatObj?.fmt?.end);

        setOther(preTreatObj?.other);
        setAsa(preTreatObj?.asa);
        setPreSurgery(preTreatObj?.preSurgery);
        setSergeryDate(preTreatObj?.sergeryDate);
        setTypeSurgery(preTreatObj?.typeSurgery);
    }
   },[preTreatObj]);

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
                    <Link className="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className='listheader'>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item"><Link >Demographics</Link></li>
                <li className="list-group-item"><Link >Clinical History</Link></li>
                <li className="list-group-item"><Link >Previous Treatment</Link></li>
                <li className="list-group-item"><Link >Nutritional History</Link> </li>
                <li className="list-group-item"><Link >Investigations</Link></li>
                <li className="list-group-item"><Link >Treatment</Link> </li>
                <li className="list-group-item"><Link >Infections</Link></li>
                <li className="list-group-item"><Link >Depression</Link></li>
                
            </ul>
        </div>
        <div className='pading40'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 heaind text-center'>
                        <h3><b>Previous Treatment : </b></h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='tratement_body-heading'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <h6><b>Name  </b></h6>
                    </div>
                    <div className='col'>
                    <h6><b>Dose  </b></h6>
                    </div>
                    <div className='col'>
                    <h6><b>Date Of Start  </b></h6>
                    </div>
                    <div className='col'>
                    <h6><b>Date Of End  </b></h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='tratement_body mt-2 pb-5'>
            <div className='container-fluid'>
               
                <div className='row addlist-frm align-items-center'>
                    <div className='col'>
                        <div>
                            <h3><b>Oral 5-ASA : </b></h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <span>{oralAsaName}</span>                          
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <span> {oralAsaDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <span>{oralAsaStart}</span>
                           
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{oralAsaEnd}</span>
                          
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Rectal 5-ASA Suppository : </b></h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span>{rectalSuppositoryName}</span>
                       
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{rectalSuppositoryDose}</span>
                       
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{rectalSuppositoryStart}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{rectalSuppositoryEnd}</span>
                           
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Rectal 5-ASA Foam : </b></h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span>{reacalFoamName}</span>
                        
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{reacalFoamDose}</span>
                          
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{reacalFoamStart}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{reacalFoamEnd}</span>
                        
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Oral steroids  : </b></h3> 
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span>{oralSteroidsName}</span>
                        
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{oralSteroidsDose}</span>
                           
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{oralSteroidsStart}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{oralSteroidsEnd}</span>
                         
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>I/V steroids : </b></h3>     
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span>{ivSteroidsName} </span>
                           
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{ivSteroidsDose}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{ivSteroidsStart}</span>
                       
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{ivSteroidsEnd}</span>
                       
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Rectal steroids (Entofoam) : </b></h3>
                        </div>
                    </div>  
                    <div className='col'>
                        <div className='form-group'>
                        <span>{entofoamName}</span>
                        
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{entofoamDose} </span>
                    
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{entofoamStart}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{entofoamEnd}</span>
                        
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>AZA : </b></h3>
                        </div>
                    </div>
                    <div className='col'> 
                        <div className='form-group'>
                        <span>{azaName}</span>
                      
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{azaDose}</span>
                          
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{azaStart}</span>
                           
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{azaEnd}</span>
                         
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>6-MP : </b></h3>
                        </div>
                    </div>
                    <div className='col'> 
                        <div className='form-group'>
                        <span>{mpName}</span>
                            
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{mpDose}</span>
                           
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{mpStart}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{mpEnd}</span>
                      
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>6-TG : </b></h3>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>  
                    <span>{tgName}</span> 
                     
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{tgDose}</span>
                       
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{tgStart}</span>
                    
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{tgEnd}</span>
                    
                    </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Infliximab : </b></h3>
                        </div>
                    </div>
                    <div className='col'>  
                    <div className='form-group'>
                    <span>{infliximabName}</span>
                    
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{infliximabDose}</span>
                      
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{infliximabStart}</span>
                   
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{infliximabEnd}</span>
                    
                    </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Adalimumab : </b></h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                        <span>{adalimumabName}</span>
                       
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{adalimumabDose}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{adalimumabStart}</span>
                           
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{adalimumabEnd}</span>
                        
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Vedolizumab : </b></h3>
                        </div>
                    </div>
                    <div className='col'>  
                        <div className='form-group'>
                        <span>{vedolizumabName}</span>
                          
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{vedolizumabDose}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{vedolizumabStart}</span>
                    
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{vedolizumabEnd}</span>
                        
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Ustekinumab  : </b></h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                        <span>{ustekinumabName}</span>   
                        
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{ustekinumabPose}</span>
                          
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{ustekinumabStart}</span>
                       
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{ustekinumabEnd}</span>
                  
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>Tofacitinib  : </b></h3>
                        </div>
                    </div>
                    <div className='col'>       
                        <div className='form-group'>
                        <span>{tofacitinibName}</span>
                         
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{tofacitinibPose}</span>
                      
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{tofacitinibStart}</span>
                    
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tofacitinibEnd} </span>
                        
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3><b>FMT  : </b></h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                        <span>{fmtName} </span>
                       
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{fmtPose}</span>
                         
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{fmtStart}</span>
                     
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span>{fmtEnd}</span>
                    </div>
                    </div>
                </div>

                <div className='row addlist-frm mt-3'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-5 ps-5'>
                        <div className='from-group'>
                            <label><b>Other : </b> {other}</label>
                          
                        </div>
                    </div>
                    <div className='col-lg-5'>
                    <div className='from-group'>
                            <label><b>5-ASA : </b> {asa}</label>
                         
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm mt-3 justify-content-end'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-4 ps-5'>
                        <div className='form-group'>
                            <label><b>Previous surgery : </b> {preSurgery}</label>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'> 
                            <label><b>If Yes : </b> {sergeryDate}</label>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label><b>Type of surgery : </b> {typeSurgery}</label>
        
                        </div>
                    </div>
                </div>
                <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <Link to="../Patients/Viewclinicalhistory" className='btn btn-link mx-4'>Previous</Link>
                                <Link to="../Patients/Viewnutrition" className='btn btn-link mx-4'>Next</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
  </div>
  )
}
