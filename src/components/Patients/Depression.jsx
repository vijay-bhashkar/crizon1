import React , { useEffect, useState } from 'react';
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DEPRESSIONAdd,DEPRESSIONGet, DEPRESSIONDelete, SETDEPRESSIONObj, DEPRESSIONUpdate, DEPRESSIONGet_BY_PATIENT_ID } from "../../redux/actions/Depression/Depression.actions";
import { toast } from 'react-hot-toast';
export const Depression = () => {

const [sadness, setSadness] = useState("");
const [agitation, setAgitation] = useState("");
const [sleepingPattern, setSleepingPattern] = useState("");
const [pessimism, setPessimism] = useState("");
const [pastFelure, setPastFelure] = useState("");
const [irritability, setIrritability] = useState("");
const [lossPleasure, setLossPleasure] = useState("");
const [appetiteChange, setAppetiteChange] = useState("");
const [guiltyFeeling, setGuiltyFeeling] = useState("");
const [lossInterest, setLossInterest] = useState("");
const [punishFeeling, setPunishFeeling] = useState("");
const [indecisiveness, setIndecisiveness] = useState("");
const [worthlessness, setWorthlessness] = useState("");
const [selfCriticalness, setSelfCriticalness] = useState("");
const [lossEnergy, setLossEnergy] = useState("");
const [sucidiThoughts, setSucidiThoughts] = useState("");
const [concenDifficulty, setConcenDifficulty] = useState("");
const [crying, setCrying] = useState("");
const [tiredFatigue, setTiredFatigue] = useState("");
const [interestSex, setInterestSex] = useState("");
const [interestInSex, setInterestInSex] = useState("");
const [selfDislike, setSelfDislike] = useState("");
const [patientId, setPatientId] = useState("");

const dispatch = useDispatch();

useEffect(() => {
  if(patientId){
    dispatch(DEPRESSIONGet_BY_PATIENT_ID(patientId));
  }
}, [patientId]);

const depressionObj = useSelector((states) => states.depression.depressionObj);
const demograficObj = useSelector((states) => states.demografic.demograficObj); 
console.log(demograficObj,"demograficObj");
useEffect(() => {
  dispatch(SETDEPRESSIONObj({}))
  if(demograficObj){
    setPatientId(demograficObj?._id)
  }
}, [demograficObj]);

const handleAddDepression = () => {

  if(sadness == "" || sadness == undefined){
    toast.error("Sadness is mandatory");
    return
  }if(agitation == "" || agitation == undefined){
    toast.error("Agitation is mandatory");
    return
  }if(sleepingPattern == "" || sleepingPattern == undefined){
    toast.error("Sleeping pattern is mandatory");
    return
  }else{
  let obj = {
    patientId,
    sadness,
    agitation,
    sleepingPattern,
    pessimism,
    pastFelure,
    irritability,
    lossPleasure,
    appetiteChange,
    guiltyFeeling,
    lossInterest,
    punishFeeling,
    indecisiveness,
    worthlessness,
    selfCriticalness,
    lossEnergy,
    sucidiThoughts,
    concenDifficulty,
    crying,
    tiredFatigue,
    interestSex,
    interestInSex,
    selfDislike
  };

  if(depressionObj?._id) {
    dispatch(DEPRESSIONUpdate(depressionObj._id, obj));
    // dispatch(SETDEPRESSIONObj(null))
    toast.success(" Depression Updated Successfully ");
  } else {
    dispatch(DEPRESSIONAdd(obj));
    toast.success(" Depression created Successfully ");
  }
}
};

useEffect(() =>{
  if(depressionObj){
    setSadness(depressionObj?.sadness);
    setAgitation(depressionObj?.agitation);
    setSleepingPattern(depressionObj?.sleepingPattern);
    setPessimism(depressionObj?.pessimism);
    setPastFelure(depressionObj?.pastFelure);
    setIrritability(depressionObj?.irritability);
    setLossPleasure(depressionObj?.lossPleasure);
    setAppetiteChange(depressionObj?.appetiteChange);
    setGuiltyFeeling(depressionObj?.guiltyFeeling);
    setLossInterest(depressionObj?.lossInterest);
    setPunishFeeling(depressionObj?.punishFeeling);
    setIndecisiveness(depressionObj?.indecisiveness);
    setWorthlessness(depressionObj?.worthlessness);
    setSelfCriticalness(depressionObj?.selfCriticalness);
    setLossEnergy(depressionObj?.lossEnergy);
    setSucidiThoughts(depressionObj?.sucidiThoughts);
    setConcenDifficulty(depressionObj?.concenDifficulty);
    setCrying(depressionObj?.crying);
    setTiredFatigue(depressionObj?.tiredFatigue);
    setInterestSex(depressionObj?.interestSex);
    setInterestInSex(depressionObj?.interestInSex);
  }
} , [depressionObj]);

const optionDrop = [
  { value:"Yes", label:"Yes" },
  { value:"No", label:"No" },
]

const diseaseBehaviourDrop = [
  { value:"select", label:"select" },
  { value:"Steroid dependent", label:"Steroid dependent" },
  { value:"Steroid refractory", label:"Steroid refractory" },
]

const asaDrop = [
  { value:"Select", label:"Select" },
  { value:"Paradoxical Diarrhea", label:"Paradoxical Diarrhea" },
  { value:"AKI", label:"AKI" },
  { value:"Pneumonitis", label:"Pneumonitis" },
  { value:"Pancreatitis", label:"Pancreatitis" },
  { value:"Male Infertility", label:"Male Infertility" },
  { value:"Others", label:"Others" },
]

const azaMpDrop = [
  { value:"select", label:"select" },
  { value:"Leucopenia", label:"Leucopenia" },
  { value:"Hepatotoxicity", label:"Hepatotoxicity" },
  { value:"Pancreatitis", label:"Pancreatitis" },
  { value:"Alopecia", label:"Alopecia" },
  { value:"Headache", label:"Headache" },
  { value:"Lymphoma", label:"Lymphoma" },
  { value:"Skin Cancer", label:"Skin Cancer" },
  { value:"GI – Intolerance", label:"GI – Intolerance" },
  { value:"Others", label:"Others" },
]

const InfliximabDrop = [
  { value: "select", label:"select" },
  { value: "Infusion reaction", label:"Infusion reaction" },
  { value: "TB", label:"TB" },
  { value: "CCF", label:"CCF" },
  { value: "Neurological disease", label:"Neurological disease" },
  { value: "Infections", label:"Infections" },
  { value: "Malignancies ", label:"Malignancies " },
  { value: "Primary loss of response", label:"Primary loss of response" },
  { value: "Secondary loss of response", label:"Secondary loss of response" },
]

const steroidsDrop = [
  { value:"select", label:"select" },
  { value:"Weight gain", label:"Weight gain" },
  { value:"Osteoporosis", label:"Osteoporosis" },
  { value:"Hypokalemia", label:"Hypokalemia" },
  { value:"Oral Candidiasis", label:"Oral Candidiasis" },
  { value:"Other infection", label:"Other infection" },
  { value:"High blood sugar", label:"High blood sugar" },
  { value:"Hirsutism ", label:"Hirsutism " },
  { value:"Depression", label:"Depression" },
  { value:"Fatigue", label:"Fatigue" },
  { value:"Striae", label:"Striae" },
  { value:"Others", label:"Others" },
]

const tofacitinibDrop = [
  { value:"select", label:"select" },
  { value:"Zoster", label:"Zoster" },
  { value:"Cardiovascular Events", label:"Cardiovascular Events" },
  { value:"Dyslipidemia", label:"Dyslipidemia" },
  { value:"Others", label:"Others" },
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
        <li class="list-group-item"><Link to="/Patients/editdemographics">Demographics</Link></li>
          <li class="list-group-item"><Link to="/Patients/Clinicalhistory">Clinical History</Link></li>
          <li class="list-group-item"><Link to="/Patients/previoustreatment">Previous Treatment</Link></li>
          <li class="list-group-item"><Link to="/Patients/nutritionalhistory">Nutritional History</Link> </li>
          <li class="list-group-item"><Link to="/Patients/investigations">Investigations</Link></li>
          <li class="list-group-item"><Link to="/Patients/treatment">Treatment</Link> </li>
          <li class="list-group-item"><Link to="/Patients/depression">Adverse Events to Drugs</Link></li>
          <li class="list-group-item"><Link to="/Patients/infections">Infections</Link></li>
        </ul>
    </div>
  
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Adverse Events to Drugs</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>5-ASA </label>
                  <select className="form-control" value={sadness} onChange={(e)=>{setSadness(e.target.value)}}>
                    { asaDrop && asaDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>AZA/6-MP</label>
                  <select className="form-control" value={agitation} onChange={(e)=>{setAgitation(e.target.value)}}>
                    { azaMpDrop && azaMpDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Infliximab/ Adalimumab</label>
                  <select className="form-control" value={pessimism} onChange={(e)=>{setPessimism(e.target.value)}}>
                    { InfliximabDrop && InfliximabDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Steroids </label>
                  <select className="form-control" value={sleepingPattern} onChange={(e)=>{setSleepingPattern(e.target.value)}}>
                    { steroidsDrop && steroidsDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Tofacitinib</label>
                  <select className="form-control" value={pastFelure} onChange={(e)=>{setPastFelure(e.target.value)}}>
                    { tofacitinibDrop && tofacitinibDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                </div>
              </div>
              <div className="row">
          <div className="col-lg-12 heaind text-center pt-3">
            <h3>Complications and Outcome</h3>
          </div>
          <div className='row'>
          <div className="col-lg-12 heaind text-left">
            <h3>Hospitalization</h3>
          </div>
          <div className='col-lg-6'>
            <div className='from-group'>
              <label>Date of hospitalization </label>
                <input type="date" className='form-control'  />
              </div>
            </div>
            <div className='col-lg-6'>
            <div className='from-group'>
              <label>Reason of Hospitalization</label>
                <input type="text" placeholder='reason of hospitalization' className='form-control' />
              </div>
            </div>
          </div>
          <div className='row'>
          <div className="col-lg-12 heaind text-left">
            <h3>Complications</h3>
          </div>
          <div className='col-lg-4'>
            <div className='from-group'>
              <label>Megacolon</label>
                <select className='form-control'>
                  { optionDrop && optionDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                </select>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Massive haemorrhage</label>
              <select className='form-control'>
                  { optionDrop && optionDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                </select>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Colorectal Cancer</label>
              <select className='form-control'>
                  { optionDrop && optionDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                </select>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Perforation</label>
              <select className='form-control'>
                  { optionDrop && optionDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                </select>
              </div>
            </div>  
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Toxic Megacolon</label>
              <select className='form-control'>
                  { optionDrop && optionDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                </select>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Others</label>
              <input type="text" className='form-control' placeholder='Please Specify'/>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Disease behavior</label>
              <select className='form-control'>
                { diseaseBehaviourDrop && diseaseBehaviourDrop.map((el)=><option value={el.value}>{el.label}</option>)}
              </select>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Death</label>
              <select className='form-control'>
                  { optionDrop && optionDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                </select>
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Date Of Death</label>
                <input type="date" className='form-control' />
              </div>
            </div>
            <div className='col-lg-4'>
            <div className='from-group'>
              <label>Cause Of Death</label>
              <input type="text" className='form-control' placeholder='Cause of death' />
              </div>
            </div>

          </div>
        </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                <div className='subbtn text-center'>
                  <Link to="../Patients/infections" className='btn btn-link mx-4'>Previous</Link>
                  <Link to="" className='btn btn-link' onClick={handleAddDepression}>Submit</Link>
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
