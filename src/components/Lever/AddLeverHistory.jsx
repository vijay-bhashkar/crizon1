import React, { useEffect, useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { LEVERHISTORYAdd, LEVERHISTORYGet, SETLEVERHISTORYObj, LEVHISGet_BY_PATIENT_ID, LEVERHISTORYUpdate } from "../../redux/actions/LeverHistory/LeverHistory.actions";

export const AddLeverHistory = () => {

    const leverPerDetailObj = useSelector((states) => states.leverPerDetail.leverPerDetailObj);
    const leverHistoryObj = useSelector((states) => states.leverHistory.leverHistoryobj);

    const options = [
        { value:"select", label:"Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

    const dispatch = useDispatch();
    const navigate = useNavigate();

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

    let onHandleSubmit = ()=>{
        let obj = {
            asymptomatic,
            malaise,
            fatigue,
            ruqPain,
            pruritus,
            jaundice,
            hepatitis,
            recurrentFever,
            priorSurgery,
            giBleed,
            antiviralTherapy,
            drugUsed,
            dentalExposure,
            renalTx,
            alcohol,
            day,
            week,
            years,
            familyHistory,
            weight,
            height,
            bmi,
            bloodPressure,
            patientId
        }
        console.log(patientId, "patientId");
        if(leverHistoryObj?._id){
            dispatch(LEVERHISTORYUpdate(leverHistoryObj?._id , obj));
            dispatch(SETLEVERHISTORYObj(null));
            toast.success("Patient history Updated Successfully ");
        }else{
            dispatch(LEVERHISTORYAdd(obj));
            toast.success("Patient history Added Successfully ");
        }
        navigate("/etiological-work-up");
    };

     useEffect(()=>{
        // dispatch(SETLEVERHISTORYObj({}));
        if(leverPerDetailObj){
            setPatientId(leverPerDetailObj?._id);
        }
    },[leverPerDetailObj]);

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
          Patient (LIVER DISEASE)
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
            <li class="list-group-item"><Link to="/add-lever" >Personal Detail</Link></li>
            <li class="list-group-item"><Link to="/add-lever-history">History</Link></li>
            <li class="list-group-item"><Link to="/etiological-work-up">Etiological Work Up</Link></li>
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
                                <label>Asymptomatic </label>
                                <select className='form-control' value={asymptomatic} onChange={(el)=>{setAsymptomatic(el.target.value)}}>
                                   { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Malaise </label>
                                <select className='form-control' value={malaise} onChange={(el)=>{setMalaise(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Fatigue </label>
                                <select className='form-control' value={fatigue} onChange={(el)=>{setFatigue(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>RUQ pain </label>
                                <select className='form-control' value={ruqPain} onChange={(el)=>{setRuqPain(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Pruritus </label>
                                <select className='form-control' value={pruritus} onChange={(el)=>{setPruritus(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Jaundice </label>
                                <select className='form-control' value={jaundice} onChange={(el)=>{setJaundice(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
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
                                <label>Viral hepatitis </label>
                                <select className='form-control' value={hepatitis} onChange={(el)=>{setHepatitis(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Recurrent fever </label>
                                <select className='form-control' value={recurrentFever} onChange={(el)=>{setRecurrentFever(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Prior surgery/Blood transfusions</label>
                                <select className='form-control' value={priorSurgery} onChange={(el)=>{setPriorSurgery(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>GI Bleed</label>
                                <select className='form-control' value={giBleed} onChange={(el)=>{setGiBleed(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Antiviral therapy & duration</label>
                                <select className='form-control' value={antiviralTherapy} onChange={(el)=>{setAntiviralTherapy(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Drug used</label>
                                <select className='form-control' value={drugUsed} onChange={(el)=>{setDrugUsed(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>  
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Dental exposure</label>
                                <select className='form-control' value={dentalExposure} onChange={(el)=>{setDentalExposure(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Renal tx</label>
                                <select className='form-control' value={renalTx} onChange={(el)=>{setRenalTx(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
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
                                <label>Alcohol </label>
                                <select className='form-control' value={alcohol} onChange={(el)=>{setAlcohol(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Gm/day </label>
                                <input type="text" className='form-control' value={day} onChange={(el)=>{setDay(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Days/Week </label>
                                <input type="text" className='form-control' value={week} onChange={(el)=>{setWeek(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>No of yrs </label>
                                <input type="text" className='form-control' value={years} onChange={(el)=>{setYears(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Family History </label>
                                <select className='form-control' value={familyHistory} onChange={(el)=>{setFamilyHistory(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
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
                                <label>Wt (Kg) </label>
                                <input type="text" className='form-control' value={weight} onChange={(el)=>{setWeight(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ht (cm) </label>
                                <input type="text" className='form-control' value={height} onChange={(el)=>{setHeight(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>BMI (Kg/cm2) </label>
                                <input type="text" className='form-control' value={bmi} onChange={(el)=>{setBmi(el.target.value)}}/>
                            </div>
                        </div> 
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label> Blood Pressure </label>
                                <input type="text" className='form-control' value={bloodPressure} onChange={(el)=>{setBloodPressure(el.target.value)}}/>
                            </div>
                        </div>
                    </div>                    
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                            <Link to="../add-lever" className='btn btn-link mx-4'>Previous</Link>
                                { leverHistoryObj?
                                <button className='btn btn-link' onClick={()=>{onHandleSubmit()}}>Update</button>:
                                <button className='btn btn-link' onClick={()=>{onHandleSubmit()}}>Next</button> }
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
