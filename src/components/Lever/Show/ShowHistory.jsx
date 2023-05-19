import React, { useEffect, useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { LEVERHISTORYAdd, LEVERHISTORYGet, SETLEVERHISTORYObj, LEVHISGet_BY_PATIENT_ID, LEVERHISTORYUpdate } from "../../../redux/actions/LeverHistory/LeverHistory.actions";

export const ShowHistory = () => {

    const leverPerDetailObj = useSelector((states) => states.leverPerDetail.leverPerDetailObj);
    const leverHistoryObj = useSelector((states) => states.leverHistory.leverHistoryobj);

    const options = [
        { value:"select", label:"Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    const dispatch = useDispatch();

    const [patientId , setPatientId] = useState("");
    useEffect(() => {
        if(patientId){
          dispatch(LEVHISGet_BY_PATIENT_ID(patientId));
        }
    }, [patientId]);

    const [searchParams, setSearchParams] = useSearchParams("edit");

    const [asymptomatic, setAsymptomatic] = useState("");
    const [malaise, setMalaise] = useState("");
    const [fatigue, setFatigue] = useState("");
    const [ruqPain, setRuqPain] = useState("");
    const [pruritus, setPruritus] = useState("");
    const [jaundice, setJaundice] = useState("");
    const [hepatitis, setHepatitis] = useState("");
    const [recurrentFever, setRecurrentFever] = useState("");
    const [priorSurgery, setPriorSurgery] = useState("");
    const [giBleed, setGiBleed] = useState("");
    const [antiviralTherapy, setAntiviralTherapy] = useState("");
    const [drugUsed, setDrugUsed] = useState("");
    const [dentalExposure, setDentalExposure] = useState("");
    const [renalTx, setRenalTx] = useState("");
    const [alcohol, setAlcohol] = useState("");
    const [day, setDay] = useState("");
    const [week, setWeek] = useState("");
    const [years, setYears] = useState("");
    const [familyHistory, setFamilyHistory] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    

    useEffect(()=> {
        console.log(searchParams.get("edit"), "edit")
        if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
          dispatch(SETLEVERHISTORYObj(null));
        }
      }, [searchParams.get("edit")]);

     useEffect(()=>{
        dispatch(SETLEVERHISTORYObj({}));
        if(leverPerDetailObj){
            setPatientId(leverPerDetailObj?._id);
        }
    },[]);

    useEffect(()=>{
        if(leverHistoryObj){
        setAsymptomatic(leverHistoryObj?.asymptomatic);
        setMalaise(leverHistoryObj?.malaise);
        setFatigue(leverHistoryObj?.fatigue);
        setRuqPain(leverHistoryObj?.ruqPain);
        setPruritus(leverHistoryObj?.pruritus);
        setJaundice(leverHistoryObj?.jaundice);
        setHepatitis(leverHistoryObj?.hepatitis);
        setRecurrentFever(leverHistoryObj?.recurrentFever);
        setPriorSurgery(leverHistoryObj?.priorSurgery);
        setGiBleed(leverHistoryObj?.giBleed);
        setAntiviralTherapy(leverHistoryObj?.antiviralTherapy);
        setDrugUsed(leverHistoryObj?.drugUsed);
        setDentalExposure(leverHistoryObj?.dentalExposure);
        setRenalTx(leverHistoryObj?.renalTx);
        setAlcohol(leverHistoryObj?.alcohol);
        setDay(leverHistoryObj?.day);
        setWeek(leverHistoryObj?.week);
        setYears(leverHistoryObj?.years);
        setFamilyHistory(leverHistoryObj?.familyHistory);
        setWeight(leverHistoryObj?.weight);
        setHeight(leverHistoryObj?.height);
        setBmi(leverHistoryObj?.bmi);
        setBloodPressure(leverHistoryObj?.bloodPressure);
    }
    },[leverHistoryObj]);

    useEffect(()=> {
        console.log(searchParams.get("edit"), "edit")
        if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
          dispatch(SETLEVERHISTORYObj(null));
        }
      }, [searchParams.get("edit")])

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">
          <h5 className="mb-0 text-center text-white">
          Patient (LEVER DISEASE)
          </h5>
          </div>
          <div className="col-lg-4 text-end">
            <div className='btnlist'>
                <Link to="/lever-list" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal justify-content-center">
            <li class="list-group-item p-2">Personal Detail</li>
            <li class="list-group-item p-2">History</li>
            <li class="list-group-item p-2">Etiological Work Up</li>
        </ul>
    </div>
      <div className="wrapper_contentbody">
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row mb-3'>
                        <div className='heaind text-center'>
                            <h3>Clinical History</h3>
                        </div>
                    </div>
                    <div className='row addlist-frm'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Clinical Presentation</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Asymptomatic  </b> :  {asymptomatic} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Malaise  </b> : {malaise} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b> Fatigue  </b> :  {fatigue}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b> RUQ pain  </b> : {ruqPain} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b> Pruritus  </b> :  {pruritus}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b> Jaundice  </b> :  {jaundice}</label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Past History</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Viral hepatitis  </b> :  {hepatitis}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b> Recurrent fever  </b> :  {recurrentFever}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Prior surgery/Blood transfusions </b> :  {priorSurgery}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> GI Bleed </b> : {giBleed} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Antiviral therapy & duration </b> :  {antiviralTherapy}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Drug used </b> :  {drugUsed}</label>
                                
                            </div>
                        </div>  
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Dental exposure </b> :  {dentalExposure}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Renal tx </b> :  {renalTx}</label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>H/O Alcohol</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Alcohol  </b> :  {alcohol}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Gm/day  </b> : {day} </label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Days/Week  </b> : {week} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> No of yrs  </b> :  {years}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Family History  </b> :  {familyHistory}</label>
                            
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Clinical Features</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Wt (Kg)  </b> :  {weight}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Ht (cm)  </b> :  {height}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> BMI (Kg/cm2)  </b> :  {bmi}</label>
                                
                            </div>
                        </div> 
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>  Blood Pressure  </b> :  {bloodPressure}</label>
                               
                            </div>
                        </div>
                    </div>                    
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <Link to="/show-lever-patient" className='btn btn-link mx-4'>Previous</Link>
                                <Link to="/show-lever-etiological" className='btn btn-link mx-4'>Next</Link>
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
