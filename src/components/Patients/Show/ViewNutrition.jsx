import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SETNUTRITIONObj, NUTRITIONGet_BY_PATIENT_ID } from "../../../redux/actions/Nutrition/Nutrition.actions";
import { toast } from "react-hot-toast";
export const ViewNutrition = () => {

  const [ patientId, setPateintId ] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if(patientId){
  dispatch(NUTRITIONGet_BY_PATIENT_ID(patientId));
    }
}, [patientId]);

  const nutritionObj = useSelector((states) => states.nutrition.nutritionsObj);
  const demograficObj = useSelector((states) => states.demografic.demograficObj);
  
  useEffect(() => {
    dispatch(SETNUTRITIONObj({}))
    if(demograficObj){
      setPateintId(demograficObj?._id)
    }
  }, [demograficObj]);

  const [numbness, setNumbness] = useState("");
  const [tinglingSensation, setTinglingSensation] = useState("");
  const [burning, setBurning] = useState("");
  const [reducedsensation, setReducedsensation] = useState("");
  const [imbalance, setImbalance] = useState("");
  const [infertility, setInfertility] = useState("");
  const [bonyPains, setBonyPains] = useState("");
  const [disturbedSmell, setDisturbedSmell] = useState("");
  const [poorwound, setPoorwound] = useState("");
  const [nightBlindness, setNightBlindness] = useState("");
  const [oralUlcers, setOralUlcers] = useState("");
  const [bleedingTend, setBleedingTend] = useState("");
  const [fatigue, setFatigue] = useState("");
  const [dietPattern, setDietPattern] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [midarmCurcum, setMidarmCurcum] = useState("");
  const [must, setMust] = useState("");
  const [mirt, setMirt] = useState("");
  const [nrs2002, setNrs2002] = useState("");
  const [handGrip, setHandGrip] = useState("");
  const [tricepSkin, setTricepSkin] = useState("");
  const [bodyFatPercent, setBodyFatPercent] = useState("");
  const [visceralFat, setVisceralFat] = useState("");
  const [restingmetaboli, setRestingmetaboli] = useState("");
  const [bodyAge, setBodyAge] = useState("");
  const [subcutaWholebody, setSubcutaWholebody] = useState("");
  const [subcutaTrunk, setSubcutaTrunk] = useState("");
  const [subcutaArms, setSubcutaArms] = useState("");
  const [subcutaLegs, setSubcutaLegs] = useState("");
  const [skeMuscelBody, setSkeMuscelBody] = useState("");
  const [skeMuscelTrunk, setSkeMuscelTrunk] = useState("");
  const [skeMuscelArms, setSkeMuscelArms] = useState("");
  const [skeMuscelLegs, setSkeMuscelLegs] = useState("");
  const [ctSkeletal, setCtSkeletal] = useState("");
  const [mercuriStage, setMercuriStage] = useState("");
  const [meanAttenuation, setMeanAttenuation] = useState("");
  const [tsf, setTsf] = useState("");

  useEffect(()=>{
    if(nutritionObj){
      setNumbness(nutritionObj?.numbness);
      setTinglingSensation(nutritionObj?.tinglingSensation);
      setBurning(nutritionObj?.burning);
      setReducedsensation(nutritionObj?.reducedsensation);
      setImbalance(nutritionObj?.imbalance);
      setInfertility(nutritionObj?.infertility);
      setBonyPains(nutritionObj?.bonyPains);
      setDisturbedSmell(nutritionObj?.disturbedSmell);
      setPoorwound(nutritionObj?.poorwound);
      setNightBlindness(nutritionObj?.nightBlindness);
      setOralUlcers(nutritionObj?.oralUlcers);
      setBleedingTend(nutritionObj?.bleedingTend);
      setFatigue(nutritionObj?.fatigue);
      setDietPattern(nutritionObj?.dietPattern);
      setHeight(nutritionObj?.height);
      setWeight(nutritionObj?.weight);
      setBmi(nutritionObj?.bmi);
      setMidarmCurcum(nutritionObj?.midarmCurcum);
      setMust(nutritionObj?.must);
      setMirt(nutritionObj?.mirt);
      setNrs2002(nutritionObj?.nrs2002);
      setHandGrip(nutritionObj?.handGrip);
      setTricepSkin(nutritionObj?.tricepSkin);
      setBodyFatPercent(nutritionObj?.bodyFatPercent);
      setVisceralFat(nutritionObj?.visceralFat);
      setRestingmetaboli(nutritionObj?.restingmetaboli);
      setBodyAge(nutritionObj?.bodyAge);
      setSubcutaWholebody(nutritionObj?.subcutaWholebody);
      setSubcutaTrunk(nutritionObj?.subcutaTrunk);
      setSubcutaArms(nutritionObj?.subcutaArms);
      setSubcutaLegs(nutritionObj?.subcutaLegs);
      setSkeMuscelBody(nutritionObj?.skeMuscelBody);
      setSkeMuscelTrunk(nutritionObj?.skeMuscelTrunk);
      setSkeMuscelArms(nutritionObj?.skeMuscelArms);
      setSkeMuscelLegs(nutritionObj?.skeMuscelLegs);
      setCtSkeletal(nutritionObj?.ctSkeletal);
      setMercuriStage(nutritionObj?.mercuriStage);
      setMeanAttenuation(nutritionObj?.meanAttenuation);
      setTsf(nutritionObj?.tsf);
    }
  },[nutritionObj]);

  
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
      <div className="mt-5 mb-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heaind text-center">
              <h3><b>Nutritional Screening  </b></h3>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper_contentbody">
        <div className="container-fluid">
          <div className="row addlist-frm justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Numbness  : </b> {numbness}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Tingling sensation  : </b> {tinglingSensation}</label>
                    
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Burning  : </b> {burning}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Reduced sensation  : </b> {reducedsensation}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Imbalance : </b> {imbalance}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Infertility : </b> {infertility}</label>
                    
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Bony pains / Fractures : </b> {bonyPains}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Disturbed smell and taste : </b> {disturbedSmell}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Poor wound healing : </b> {poorwound}</label>                
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Night blindness / Dryness of eyes : </b> {nightBlindness}</label>                 
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Oral ulcers : </b> {oralUlcers}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Bleeding tendencies / bleeding gums : </b> {bleedingTend}</label>                  
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Fatigue : </b> {fatigue}</label>
                  
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Diet Pattern : </b> {dietPattern}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Height (in cms) : </b> {height}</label>
                  
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Weight (in Kg) : </b> {weight}</label>
                  
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>BMI : </b> {bmi}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Mid arm circumference : </b> {midarmCurcum}</label>
                   
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>MUST : </b> {must}</label>
                    
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>MIRT : </b> {mirt}</label>
                 
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>NRS 2002 : </b> {nrs2002}</label>
                
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Hand grip strength : </b> {handGrip}</label>
                 
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>TSF : </b>   {tsf} </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
                <div className="row addlist-frm">
                    <div className="col-lg-12 mb-3">
                        <div className='clinical'>
                            <h5>BODY COMPOSITION ANALYSIS</h5>
                        </div>
                    </div> 
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>SM Area : </b> {tricepSkin}   </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Body fat  : </b> {bodyFatPercent} </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Visceral Fat  : </b> {visceralFat} </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Resting metabolism  : </b> {restingmetaboli}  </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat (whole body )percentage  : </b> {subcutaWholebody}  </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat percentage (trunk) : </b> {subcutaTrunk}  </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat percentage (arms)  : </b>{subcutaArms}   </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat percentage (legs)  : </b> {subcutaLegs} </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscles (whole body)  : </b> {skeMuscelBody} </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscle (trunk) : </b> {skeMuscelTrunk} </label>
                            
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscle (arms)  : </b>{skeMuscelArms} </label>
                           
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscle (legs)  : </b> {skeMuscelLegs}  </label>
                            
                        </div>
                    </div>
                </div>
            </div>
          </div>      
          <div className='row mt-4'>
            <div className='col-lg-12'>
              <div className='subbtn text-center'>
                <Link to="../Patients/Viewprevioustreatment" className='btn btn-link mx-4'>Previous</Link>
                <Link to="../Patients/Viewinvestigation" className='btn btn-link mx-4'>Next</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
