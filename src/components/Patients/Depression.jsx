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
console.log(depressionObj,"dwdwe");
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


const options = [
  { value: "Select", label: "Select" },
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];
const sadnessDrop = [
  { value:"Select", label:"Select" },
  { value:"I do not feel sad", label:"I do not feel sad" },
  { value:"I feel sad much of the time", label:"I feel sad much of the time" },
  { value:"I am sad all the time", label:"I am sad all the time" },
  { value:"I am so sad or unhappy that I can't stand it", label:"I am so sad or unhappy that I can't stand it" },
]
const agitationDrop = [
  { value:"Select", label:"Select" },
  { value:"I am no more restless or wound up than usual", label:"I am no more restless or wound up than usual" },
  { value:"I feel more restless or wound up than usual", label:"I feel more restless or wound up than usual" },
  { value:"I am so restless or agitated, it's hard to stay still", label:"I am so restless or agitated, it's hard to stay still" },
  { value:"I am so restless or agitated that I have to keep moving or doing something", label:"I am so restless or agitated that I have to keep moving or doing something" },
]
const pesimismDrop = [
  { value:"Select", label:"Select" },
  { value:"I am not discouraged about my future", label:"I am not discouraged about my future" },
  { value:"I feel more discouraged about my future than I used to", label:"I feel more discouraged about my future than I used to" },
  { value:"I do not expect things to work out for me", label:"I do not expect things to work out for me" },
  { value:"I feel my future is hopeless and will only get worse", label:"I feel my future is hopeless and will only get worse" },
]
const sleepingDrop = [
  { value:"Select", label:"Select" },
  { value:"I have not experienced any change in my sleeping", label:"I have not experienced any change in my sleeping" },
  { value:"I sleep somewhat more than usual", label:"I sleep somewhat more than usual" },
  { value:"I sleep somewhat less than usual", label:"I sleep somewhat less than usual" },
  { value:"I sleep a lot more than usual", label:"I sleep a lot more than usual" },
  { value:"I sleep a lot less than usual", label:"I sleep a lot less than usual" },
  { value:"I sleep most of the day", label:"I sleep most of the day" }, 
]
const pastFelureDrop = [
  { value:"Select", label:"Select" },
  { value:"I do not feel like a failure", label:"I do not feel like a failure" },
  { value:"I have failed more than I should have", label:"I have failed more than I should have" },
  { value:"As I look back, I see a lot of failures", label:"As I look back, I see a lot of failures" },
  { value:"I feel I am a total failure as a person", label:"I feel I am a total failure as a person" },
]
const irritabilityDrop = [
  { value:"Select", label:"Select" },
  { value:"I am not more irritable than usual", label:"I am not more irritable than usual" },
  { value:"I am more irritable than usual", label:"I am more irritable than usual" },
  { value:"I am much more irritable than usual", label:"I am much more irritable than usual" },
  { value:"I am irritable all the time", label:"I am irritable all the time" },
]
const lossPleasureDrop = [
  { value:"select", label:"Select" },
  { value:"I get as much pleasure as I ever did from the things I enjoy", label:"I get as much pleasure as I ever did from the things I enjoy" },
  { value:"I don't enjoy things as much as I used to", label:"I don't enjoy things as much as I used to" },
  { value:"I get very little pleasure from the things I used to enjoy", label:"I get very little pleasure from the things I used to enjoy" },
  { value:"I can't get any pleasure from the things I used to enjoy", label:"I can't get any pleasure from the things I used to enjoy" },
]
const appetiteChangeDrop = [
  { value:"Select", label:"Select" },
  { value:"I have not experienced any change in my appetite", label:"I have not experienced any change in my appetite" },
  { value:"My appetite is somewhat less than usual.", label:" My appetite is somewhat less than usual." },
  { value:"My appetite is somewhat greater than usual", label:"My appetite is somewhat greater than usual" },
  { value:"My appetite is much less than before", label:"My appetite is much less than before" },
  { value:" My appetite is much greater than usual", label:" My appetite is much greater than usual" },
  { value:"I have no appetite at all", label:"I have no appetite at all" },
  { value:"I crave food all the time", label:"I crave food all the time" },
]
const guiltyFeelingDrop = [
  { value:"Select", label:"Select" },
  { value:"I don't feel particularly guilty", label:"I don't feel particularly guilty" },
  { value:"Septic I feel guilty over many things I have done or should have done", label:"Septic I feel guilty over many things I have done or should have done" },
  { value:"I feel quite guilty most of the time", label:"I feel quite guilty most of the time" },
  { value:"I feel guilty all of the time", label:"I feel guilty all of the time" },
]
const lossInterestDrop = [
  { value:"Select", label:"Select" },
  { value:"I have not lost interest in other people or activities", label:"I have not lost interest in other people or activities" },
  { value:"I am less interested in other people or things than before", label:"I am less interested in other people or things than before" },
  { value:"I have lost most of my interest in other people or things", label:"I have lost most of my interest in other people or things" },
  { value:"It's hard to get interested in anything", label:"It's hard to get interested in anything" },
]
const punishFeelingDrop = [
  { value:"Select", label:"Select" },
  { value:"I don't feel I am being punished", label:"I don't feel I am being punished" },
  { value:" I feel I may be punished", label:" I feel I may be punished" },
  { value:"I expect to be punished", label:"I expect to be punished" },
  { value:"I feel I am being punished", label:"I feel I am being punished" },
]
const IndecisivenessDrop = [
  { value:"Select", label:"Select" },
  { value:"I make decisions about as well as ever", label:"I make decisions about as well as ever" },
  { value:"I find it more difficult to make decisions than usual", label:"I find it more difficult to make decisions than usual" },
  { value:"I have much greater difficulty in making decisions than I used to", label:"I have much greater difficulty in making decisions than I used to" },
  { value:"I have trouble making any decisions", label:"I have trouble making any decisions" },
]
const selfDislikeDrop = [
  { value:"Select", label:"Select" },
  { value:"I feel the same about myself as ever", label:"I feel the same about myself as ever" },
  { value:"I have lost confidence in myself", label:"I have lost confidence in myself" },
  { value:"I am disappointed in myself", label:"I am disappointed in myself" },
  { value:"I dislike myself", label:"I dislike myself" },
]
const worthlessnessDrop = [
  { value:"Select", label:"Select"},
  { value:"I do not feel I am worthless", label:"I do not feel I am worthless"},
  { value:"I don't consider myself as worthwhile and useful as I used to", label:"I don't consider myself as worthwhile and useful as I used to"},
  { value:"I feel more worthless as compared to others", label:"I feel more worthless as compared to others"},
  { value:"I feel utterly worthless", label:"I feel utterly worthless"},
]
const selfCriticalnessDrop = [
  { value:"Select", label:"Select"},
  { value:"I don't criticize or blame myself more than usual.", label:"I don't criticize or blame myself more than usual."},
  { value:" I am more critical of myself than I used to be", label:" I am more critical of myself than I used to be"},
  { value:"I criticize myself for all of my faults", label:"I criticize myself for all of my faults"},
  { value:"I blame myself for everything bad that happens", label:"I blame myself for everything bad that happens"},
]
const lossEnergyDrop = [
  { value:"Select", label:"Select"},
  { value:"I have as much energy as ever", label:"I have as much energy as ever"},
  { value:"I have less energy than I used to have", label:"I have less energy than I used to have"},
  { value:"I don't have enough energy to do very much", label:"I don't have enough energy to do very much"},
  { value:"I don't have enough energy to do anything", label:"I don't have enough energy to do anything"},
]
const sucidiThoughtsDrop = [
  { value:"Select", label:"Select"},
  { value:"I don't have any thoughts of killing myself", label:"I don't have any thoughts of killing myself"},
  { value:"I have thoughts of killing myself, but I would not carry them out", label:"I have thoughts of killing myself, but I would not carry them out"},
  { value:"I would like to kill myself", label:"I would like to kill myself"},
  { value:"I would kill myself if I had the chance", label:"I would kill myself if I had the chance"},
]
const concenDifficultyDrop = [
  { value:"Select", label:"Select"},
  { value:"I can concentrate as well as ever", label:"I can concentrate as well as ever"},
  { value:"I can't concentrate as well as usual", label:"I can't concentrate as well as usual"},
  { value:"It's hard to keep my mind on anything for very long", label:"It's hard to keep my mind on anything for very long"},
  { value:"I find I can't concentrate on anything", label:"I find I can't concentrate on anything"},
]
const cryingDrop = [
  { value:"Select", label:"Select"},
  { value:"I don't cry anymore than I used to", label:"I don't cry anymore than I used to"},
  { value:"I cry more than I used to", label:"I cry more than I used to"},
  { value:"I cry over every little thing", label:"I cry over every little thing"},
  { value:"I feel like crying, but I can't", label:"I feel like crying, but I can't"},
]
const tiredFatigueDrop = [
  { value:"Select", label:"Select" },
  { value:"I am no more tired or fatigued than usual", label:"I am no more tired or fatigued than usual" },
  { value:"I get more tired or fatigued more easily than usual", label:"I get more tired or fatigued more easily than usual" },
  { value:"I am too tired or fatigued to do a lot of the things I  used to do.", label:"I am too tired or fatigued to do a lot of the things I  used to do." },
  { value:"I am too tired or fatigued to do most of the  things I used to do", label:"I am too tired or fatigued to do most of the  things I used to do" },
]
const interestInSexDrop = [
  { value:"Select", label:"Select" },
  { value:"I have not noticed any recent change in my  interest in sex", label:"I have not noticed any recent change in my  interest in sex" },
  { value:"I am less interested in sex than I used to be", label:"I am less interested in sex than I used to be" },
  { value:"I am much less interested in sex now", label:"I am much less interested in sex now" },
  { value:"I have lost interest in sex completely", label:"I have lost interest in sex completely" },
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
            <li class="list-group-item"><Link to="/Patients/infections">Infections</Link></li>
            <li class="list-group-item"><Link to="/Patients/depression">Depression</Link></li>
      </ul>
    </div>
  
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Depression</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Sadness </label>
                  <select className="form-control" value={sadness} onChange={(e)=>{setSadness(e.target.value)}}>
                    { sadnessDrop && sadnessDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Agitation</label>
                  <select className="form-control" value={agitation} onChange={(e)=>{setAgitation(e.target.value)}}>
                    { agitationDrop && agitationDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Pessimism</label>
                  <select className="form-control" value={pessimism} onChange={(e)=>{setPessimism(e.target.value)}}>
                    { pesimismDrop && pesimismDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Changes in Sleeping Pattern </label>
                  <select className="form-control" value={sleepingPattern} onChange={(e)=>{setSleepingPattern(e.target.value)}}>
                    { sleepingDrop && sleepingDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Past Failure</label>
                  <select className="form-control" value={pastFelure} onChange={(e)=>{setPastFelure(e.target.value)}}>
                    { pastFelureDrop && pastFelureDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Irritability</label>
                  <select className="form-control" value={irritability} onChange={(e)=>{setIrritability(e.target.value)}}>
                    { irritabilityDrop && irritabilityDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Pleasure</label>
                  <select className="form-control" value={lossPleasure} onChange={(e)=>{setLossPleasure(e.target.value)}}>
                    { lossPleasureDrop && lossPleasureDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Changes in Appetite</label>
                  <select className="form-control" value={appetiteChange} onChange={(e)=>{setAppetiteChange(e.target.value)}}>
                    { appetiteChangeDrop && appetiteChangeDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Guilty Feelings</label>
                  <select className="form-control" value={guiltyFeeling} onChange={(e)=>{setGuiltyFeeling(e.target.value)}}>
                    { guiltyFeelingDrop && guiltyFeelingDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Interest</label>
                  <select className="form-control" value={lossInterest} onChange={(e)=>{setLossInterest(e.target.value)}}>
                    { lossInterestDrop && lossInterestDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Punishment Feelings</label>
                  <select className="form-control" value={punishFeeling} onChange={(e)=>{setPunishFeeling(e.target.value)}}>
                    { punishFeelingDrop && punishFeelingDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Indecisiveness</label>
                  <select className="form-control" value={indecisiveness} onChange={(e)=>{setIndecisiveness(e.target.value)}}>
                    { IndecisivenessDrop && IndecisivenessDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Self-Dislike</label>
                  <select className="form-control" value={selfDislike} onChange={(e)=>{setSelfDislike(e.target.value)}}>
                    { selfDislikeDrop && selfDislikeDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Worthlessness</label>
                  <select className="form-control" value={worthlessness} onChange={(e)=>{setWorthlessness(e.target.value)}}>
                    { worthlessnessDrop && worthlessnessDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Self-Criticalness</label>
                  <select className="form-control" value={selfCriticalness} onChange={(e)=>{setSelfCriticalness(e.target.value)}}>
                    { selfCriticalnessDrop && selfCriticalnessDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
             
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Energy</label>
                  <select className="form-control" value={lossEnergy} onChange={(e)=>{setLossEnergy(e.target.value)}}>
                    { lossEnergyDrop && lossEnergyDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Suicidal Thoughts or Wishes</label>
                  <select className="form-control" value={sucidiThoughts} onChange={(e)=>{setSucidiThoughts(e.target.value)}}>
                    { sucidiThoughtsDrop && sucidiThoughtsDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Concentration Difficulty</label>
                  <select className="form-control" value={concenDifficulty} onChange={(e)=>{setConcenDifficulty(e.target.value)}}>
                    { concenDifficultyDrop && concenDifficultyDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Crying</label>
                  <select className="form-control" value={crying} onChange={(e)=>{setCrying(e.target.value)}}>
                    { cryingDrop && cryingDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Tiredness or Fatigue</label>
                  <select className="form-control" value={tiredFatigue} onChange={(e)=>{setTiredFatigue(e.target.value)}}>
                    { tiredFatigueDrop && tiredFatigueDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Interest in Sex</label>
                  <select className="form-control" value={interestSex} onChange={(e)=>{setInterestSex(e.target.value)}}>
                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Total Score</label>
                  {/* <select className="form-control" value={interestInSex} onChange={(e)=>{setInterestInSex(e.target.value)}}>
                    { interestInSexDrop && interestInSexDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select> */}
                    <input type="text"  className='form-control' value={interestInSex} onChange={(e)=>{setInterestInSex(e.target.value)}}/>
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
