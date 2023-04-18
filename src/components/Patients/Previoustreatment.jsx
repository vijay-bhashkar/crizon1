import React, { useEffect, useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { PREVIOUSTREATMENTAdd, PREVIOUSTREATMENTGet, SETPREVIOUSTREATMENTObj, PREVIOUSTREATMENTUpdate, PREVIOUSTREATMENTDelete, PREVIOUSTREATMENTGet_BY_PATIENT_ID } from "../../redux/actions/PreviousTreatment/PreviousTreatment.actions";
import { toast } from 'react-hot-toast';
export const Previoustreatment = () => {

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

    const [surgSpecify, setSurgSpecify] = useState("");
    const [reasonSurgery, setReasonSurgery] = useState("");
    const [treathold, setTreathold] = useState("");
    const [diseaseComp, setDiseaseComp] = useState("");

    const [other, setOther] = useState("");
    // const [asa, setAsa] = useState("");
    const [preSurgery, setPreSurgery] = useState("");
    const [sergeryDate, setSergeryDate] = useState("");
    const [typeSurgery, setTypeSurgery] = useState("");

    const handleAddPreTreat = ()=> {

        if(preSurgery == "" || preSurgery == undefined){
         toast.error("Previous Surgery is required");
         return
        }else{
        let obj = {
        patientId,
        oralAsa:{
            name:oralAsaName,
            dose:oralAsaDose,
            start:oralAsaStart,
            end: oralAsaEnd,
        },
        rectalSuppository:{
            name:rectalSuppositoryName,
            dose:rectalSuppositoryDose,
            start:rectalSuppositoryStart,
            end: rectalSuppositoryEnd,
        },
        reacalFoam:{
            name:reacalFoamName,
            dose:reacalFoamDose,
            start:reacalFoamStart,
            end: reacalFoamEnd,
        },
        oralSteroids:{
            name:oralSteroidsName,
            dose:oralSteroidsDose,
            start:oralSteroidsStart,
            end: oralSteroidsEnd,
        },
        ivSteroids:{
            name:ivSteroidsName,
            dose:ivSteroidsDose,
            start:ivSteroidsStart,
            end: ivSteroidsEnd,
        },
        entofoam:{
            name:entofoamName,
            dose:entofoamDose,
            start:entofoamStart,
            end: entofoamEnd,
        },
        aza:{
            name:azaName,
            dose:azaDose,
            start:azaStart,
            end: azaEnd,
        },
        mp:{
            name:mpName,
            dose:mpDose,
            start:mpStart,
            end: mpEnd,
        },
        tg:{
            name:tgName,
            dose:tgDose,
            start:tgStart,
            end: tgEnd,
        },
        infliximab:{
            name:infliximabName,
            dose:infliximabDose,
            start:infliximabStart,
            end: infliximabEnd,
        },
        adalimumab:{
            name:adalimumabName,
            dose:adalimumabDose,
            start:adalimumabStart,
            end: adalimumabEnd,
        },
        vedolizumab:{
            name:vedolizumabName,
            dose:vedolizumabDose,
            start:vedolizumabStart,
            end: vedolizumabEnd,
        },
        ustekinumab:{
            name:ustekinumabName,
            dose:ustekinumabPose,
            start:ustekinumabStart,
            end: ustekinumabEnd,
        },
        tofacitinib:{
            name:tofacitinibName,
            dose:tofacitinibPose,
            start:tofacitinibStart,
            end: tofacitinibEnd,
        },
        fmt:{
            name:fmtName,
            dose:fmtPose,
            start:fmtStart,
            end: fmtEnd,
        },
        other,
        surgSpecify,
        reasonSurgery,
        typeSurgery,
        diseaseComp,
        preSurgery,
        sergeryDate,
        typeSurgery
    }
    if (preTreatObj?._id) {
        dispatch(PREVIOUSTREATMENTUpdate(preTreatObj._id, obj));
        dispatch(SETPREVIOUSTREATMENTObj(null))
    } else {
    dispatch(PREVIOUSTREATMENTAdd(obj));
    localStorage.setItem('previousTreatItems', JSON.stringify(obj));
    }
    navigate("/Patients/nutritionalhistory");
}
};

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
        // setAsa(preTreatObj?.asa);
        setPreSurgery(preTreatObj?.preSurgery);
        setSergeryDate(preTreatObj?.sergeryDate);
        setTypeSurgery(preTreatObj?.typeSurgery);

        setSurgSpecify(preTreatObj?.surgSpecify);
        setReasonSurgery(preTreatObj?.reasonSurgery);
        setTreathold(preTreatObj?.treathold);
        setDiseaseComp(preTreatObj?.diseaseComp);
    }
   },[preTreatObj]);

    const options = [
        { value:"", label:"Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ];
    const asaDrop = [
        { value:"", label:"Select" },
        { value: "2g", label: "2g" },
        { value: "3g", label: "3g" },
        { value: "4g", label: "4g" },
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
        <div className='pading40'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 heaind text-center'>
                        <h3>Previous Treatment</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='tratement_body-heading'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <h6>Name</h6>
                    </div>
                    <div className='col'>
                    <h6>Dose</h6>
                    </div>
                    <div className='col'>
                    <h6>Start Date</h6>
                    </div>
                    <div className='col'>
                    <h6>End Date</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='tratement_body mt-2 pb-5'>
            <div className='container-fluid'>
               
                <div className='row addlist-frm align-items-center'>
                    <div className='col'>
                        <div>
                            <h3>Oral 5-ASA</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' value={oralAsaName} onChange={(e)=>{setOralAsaName(e.target.value)}} />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={oralAsaDose} onChange={(e)=>{setOralAsaDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={oralAsaStart} onChange={(e)=>{setOralAsaStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={oralAsaEnd} onChange={(e)=>{setOralAsaEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal 5-ASA Suppository</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' value={rectalSuppositoryName} onChange={(e)=>{setRectalSuppositoryName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={rectalSuppositoryDose} onChange={(e)=>{setRectalSuppositoryDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={rectalSuppositoryStart} onChange={(e)=>{setRectalSuppositoryStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={rectalSuppositoryEnd} onChange={(e)=>{setRectalSuppositoryEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal 5-ASA Foam</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' value={reacalFoamName} onChange={(e)=>{setReacalFoamName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={reacalFoamDose} onChange={(e)=>{setReacalFoamDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={reacalFoamStart} onChange={(e)=>{setReacalFoamStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={reacalFoamEnd} onChange={(e)=>{setReacalFoamEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Oral steroids </h3> 
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' value={oralSteroidsName} onChange={(e)=>{setOralSteroidsName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={oralSteroidsDose} onChange={(e)=>{setOralSteroidsDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={oralSteroidsStart} onChange={(e)=>{setOralSteroidsStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={oralSteroidsEnd} onChange={(e)=>{setOralSteroidsEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>I/V steroids</h3>     
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' value={ivSteroidsName} onChange={(e)=>{setIvSteroidsName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={ivSteroidsDose} onChange={(e)=>{setIvSteroidsDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={ivSteroidsStart} onChange={(e)=>{setIvSteroidsStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={ivSteroidsEnd} onChange={(e)=>{setIvSteroidsEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal steroids (Entofoam)</h3>
                        </div>
                    </div>  
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' value={entofoamName} onChange={(e)=>{setEntofoamName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={entofoamDose} onChange={(e)=>{setEntofoamDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={entofoamStart} onChange={(e)=>{setEntofoamStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={entofoamEnd} onChange={(e)=>{setEntofoamEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>AZA</h3>
                        </div>
                    </div>
                    <div className='col'> 
                        <div className='form-group'>
                            <input type="text" className='form-control' value={azaName} onChange={(e)=>{setAzaName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={azaDose} onChange={(e)=>{setAzaDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={azaStart} onChange={(e)=>{setAzaStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={azaEnd} onChange={(e)=>{setAzaEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>6-MP</h3>
                        </div>
                    </div>
                    <div className='col'> 
                        <div className='form-group'>
                            <input type="text" className='form-control' value={mpName} onChange={(e)=>{setMpName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={mpDose} onChange={(e)=>{setMpDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={mpStart} onChange={(e)=>{setMpStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={mpEnd} onChange={(e)=>{setMpEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>6-TG</h3>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>   
                        <input type="text" className='form-control' value={tgName} onChange={(e)=>{setTgName(e.target.value)}}/>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <input type="text" className='form-control' value={tgDose} onChange={(e)=>{setTgDose(e.target.value)}}/>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <input type="date" className='form-control' value={tgStart} onChange={(e)=>{setTgStart(e.target.value)}}/>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <input type="date" className='form-control' value={tgEnd} onChange={(e)=>{setTgEnd(e.target.value)}}/>
                    </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Infliximab</h3>
                        </div>
                    </div>
                    <div className='col'>  
                    <div className='form-group'>
                        <input type="text" className='form-control' value={infliximabName} onChange={(e)=>{setInfliximabName(e.target.value)}}/>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <input type="text" className='form-control' value={infliximabDose} onChange={(e)=>{setInfliximabDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <input type="date" className='form-control' value={infliximabStart} onChange={(e)=>{setInfliximabStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                        <input type="date" className='form-control' value={infliximabEnd} onChange={(e)=>{setInfliximabEnd(e.target.value)}}/>
                    </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Adalimumab</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                            <input type="text" className='form-control' value={adalimumabName} onChange={(e)=>{setAdalimumabName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={adalimumabDose} onChange={(e)=>{setAdalimumabDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={adalimumabStart} onChange={(e)=>{setAdalimumabStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={adalimumabEnd} onChange={(e)=>{setAdalimumabEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Vedolizumab</h3>
                        </div>
                    </div>
                    <div className='col'>  
                        <div className='form-group'>
                            <input type="text" className='form-control' value={vedolizumabName} onChange={(e)=>{setVedolizumabName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={vedolizumabDose} onChange={(e)=>{setVedolizumabDose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={vedolizumabStart} onChange={(e)=>{setVedolizumabStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={vedolizumabEnd} onChange={(e)=>{setVedolizumabEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Ustekinumab </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>    
                            <input type="text" className='form-control' value={ustekinumabName} onChange={(e)=>{setUstekinumabName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={ustekinumabPose} onChange={(e)=>{setUstekinumabPose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={ustekinumabStart} onChange={(e)=>{setUstekinumabStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={ustekinumabEnd} onChange={(e)=>{setUstekinumabEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Tofacitinib </h3>
                        </div>
                    </div>
                    <div className='col'>       
                        <div className='form-group'>
                            <input type="text" className='form-control' value={tofacitinibName} onChange={(e)=>{setTofacitinibName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={tofacitinibPose} onChange={(e)=>{setTofacitinibPose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={tofacitinibStart} onChange={(e)=>{setTofacitinibStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={tofacitinibEnd} onChange={(e)=>{setTofacitinibEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>FMT </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                            <input type="text" className='form-control' value={fmtName} onChange={(e)=>{setFmtName(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' value={fmtPose} onChange={(e)=>{setFmtPose(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={fmtStart} onChange={(e)=>{setFmtStart(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' value={fmtEnd} onChange={(e)=>{setFmtEnd(e.target.value)}}/>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm mt-1'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-5 ps-5'>
                        <div className='from-group'>
                            <label className='mt-3'>Reason Of Treatment Withhold</label>
                            < input type="text" className='form-control' value={treathold} onChange={(e)=>{setTreathold(e.target.value)}} />
                        </div>
                    </div>
                     <div className='col-lg-5 ps-5'>
                        <div className='form-group'>
                            <label className='mt-3'>Reason of Surgery</label>
                            <select className='form-control' value={reasonSurgery} onChange={(e)=>{setReasonSurgery(e.target.value)}}>
                                { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm mt-1'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-5 ps-5'>
                        <div className='form-group'>
                            <label>If Yes ( Please Specify ) </label>
                            <input type="text" className='form-control' value={surgSpecify} onChange={(e)=>{setSurgSpecify(e.target.value)}} />
                        </div>
                    </div>
                    <div className='col-lg-5 ps-5'>
                        <div className='from-group'>
                            <label>Other</label>
                            <select className='form-control' value={other} onChange={(e)=>{setOther(e.target.value)}}>
                                { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                            </select>
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm mt-1'>
                    <div className='col-lg-2'></div>
                     <div className='col-lg-5 ps-5'>
                        <div className='form-group'>
                            <label>Previous surgery</label>
                            <select className='form-control' value={preSurgery} onChange={(e)=>{setPreSurgery(e.target.value)}}>
                                { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                            </select>
                        </div>
                    </div>
                    <div className='col-lg-5 ps-5'>
                        <div className='form-group'>
                            <label>Type of surgery</label>
                            <input type="text" className='form-control' value={typeSurgery} onChange={(e)=>{setTypeSurgery(e.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm mt-1justify-content-end'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-5 ps-5'>
                        <div className='form-group'> 
                            <label className='pt-2'>If Yes ( Date )</label>
                            <input type="date" className='form-control' value={sergeryDate} onChange={(e)=>{setSergeryDate(e.target.value)}}/>
                        </div>
                    </div>
                    <div className='col-lg-5 ps-5'>
                        <div className='form-group'> 
                            <label className='pt-2'>Disease Complications</label>
                            <input type="text" className='form-control' value={diseaseComp} onChange={(e)=>{setDiseaseComp(e.target.value)}}/>
                        </div>
                    </div>
                    
                </div>
                <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <Link to="../Patients/clinicalhistory" className='btn btn-link mx-4'>Previous</Link>
                                <button className='btn btn-link' onClick={handleAddPreTreat}>Next</button>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
  </div>
  )
}
