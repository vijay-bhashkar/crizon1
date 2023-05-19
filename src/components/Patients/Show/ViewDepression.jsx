import React , { useEffect, useState } from 'react';
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DEPRESSIONAdd,DEPRESSIONGet, DEPRESSIONDelete, SETDEPRESSIONObj, DEPRESSIONUpdate, DEPRESSIONGet_BY_PATIENT_ID } from "../../../redux/actions/Depression/Depression.actions";
import { toast } from 'react-hot-toast';
export const ViewDepression = () => {

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

useEffect(() => {
  dispatch(SETDEPRESSIONObj({}))
  if(demograficObj){
    setPatientId(demograficObj?._id)
  }
}, [demograficObj]);

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
            <h3><b>Depression  </b> </h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Sadness  : </b> {sadness}</label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Agitation : </b> {agitation}</label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Pessimism : </b> {pessimism}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Changes in Sleeping Pattern  : </b> {sleepingPattern}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Past Failure : </b> {pastFelure}</label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Irritability : </b> {irritability}</label>
              
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Loss of Pleasure : </b> {lossPleasure}</label>
              
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Changes in Appetite : </b> {appetiteChange}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Guilty Feelings : </b> {guiltyFeeling}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Loss of Interest : </b> {lossInterest}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Punishment Feelings : </b> {punishFeeling}</label>
               
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Indecisiveness : </b> {indecisiveness}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Self-Dislike : </b> {selfDislike}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Worthlessness : </b> {worthlessness}</label>
                
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Self-Criticalness : </b> {selfCriticalness}</label>
                 
                </div>
              </div>
             
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Loss of Energy : </b> {lossEnergy}</label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Suicidal Thoughts or Wishes : </b> {sucidiThoughts}</label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Concentration Difficulty : </b> {concenDifficulty}</label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Crying : </b> {crying}</label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Tiredness or Fatigue : </b> {tiredFatigue}</label>
                 
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Loss of Interest in Sex : </b> {interestSex}</label>
                  
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Total Score : </b> {interestInSex}</label>
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                <div className='subbtn text-center'>
                  <Link to="../Patients/Viewinfection" className='btn btn-link mx-4'>Previous</Link>
      
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
