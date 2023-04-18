import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NUTRITIONAdd, NUTRITIONGet, SETNUTRITIONObj, NUTRITIONUpdate, NUTRITIONDelete, NUTRITIONGet_BY_PATIENT_ID } from "../../redux/actions/Nutrition/Nutrition.actions";
import { toast } from "react-hot-toast";
export const Nutritionalhistory = () => {

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

  const [numbness, setNumbness] = useState("No");
  const [tinglingSensation, setTinglingSensation] = useState("No");
  const [burning, setBurning] = useState("No");
  const [reducedsensation, setReducedsensation] = useState("No");
  const [imbalance, setImbalance] = useState("No");
  const [infertility, setInfertility] = useState("No");
  const [bonyPains, setBonyPains] = useState("No");
  const [disturbedSmell, setDisturbedSmell] = useState("No");
  const [poorwound, setPoorwound] = useState("No");
  const [nightBlindness, setNightBlindness] = useState("No");
  const [oralUlcers, setOralUlcers] = useState("No");
  const [bleedingTend, setBleedingTend] = useState("No");
  const [fatigue, setFatigue] = useState("No");
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

  const handleAddNutrition =()=>{

    if(numbness == "" || numbness == undefined){
      toast.error("Numbness is required");
      return
    }if(tinglingSensation == "" || tinglingSensation == undefined){
      toast.error("Tingling Sensation is required");
      return
    }else{
    let obj = {
      patientId,
      numbness,
      tinglingSensation,
      burning,
      reducedsensation,
      imbalance,
      infertility,
      bonyPains,
      disturbedSmell,
      poorwound,
      nightBlindness,
      oralUlcers,
      bleedingTend,
      fatigue,
      dietPattern,
      height,
      weight,
      bmi,
      midarmCurcum,
      must,
      mirt,
      nrs2002,
      handGrip,
      tsf,
      tricepSkin,
      bodyFatPercent,
      visceralFat,
      restingmetaboli,
      bodyAge,
      subcutaWholebody,
      subcutaTrunk,
      subcutaArms,
      subcutaLegs,
      skeMuscelBody,
      skeMuscelTrunk,
      skeMuscelArms,
      skeMuscelLegs,
      ctSkeletal,
      mercuriStage,
      meanAttenuation,
    }
    if (nutritionObj?._id) {
        dispatch(NUTRITIONUpdate(nutritionObj._id, obj));
        dispatch(SETNUTRITIONObj(null))
        toast.success(" Nutrition Updated Successfully ");
    } else {
      console.log(obj);
      dispatch(NUTRITIONAdd(obj)); 
      localStorage.setItem('nutriHisItems', JSON.stringify(obj));
      toast.success(" Nutrition Created Successfully ");
    }
    navigate("/Patients/investigations");
  }
  };

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

  const options = [
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const dietDrop = [
    { value: "select", label: "Select"},
    { value: "Vegan", label: "Vegan"},
    { value: "Non-Vegetarian", label: "Non-Vegetarian"},
    { value: "Ovo-lacto vegetarian", label: "Ovo-lacto vegetarian"},
    { value: "Pesco vegetarian", label: "Pesco vegetarian"},
    { value: "Semi-vegetarian", label: "Semi-vegetarian"},
  ];
  
  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4"></div>
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
        </ul>
      </div>
      <div className="mt-5 mb-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heaind text-center">
              <h3>Nutritional Screening</h3>
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
                    <label>Numbness </label>
                    <select className="form-control" value={numbness} onChange={(e)=>{setNumbness(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                      
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Tingling sensation </label>
                    <select className="form-control" value={tinglingSensation} onChange={(e)=>{setTinglingSensation(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Burning </label>
                    <select className="form-control" value={burning} onChange={(e)=>{setBurning(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Reduced sensation </label>
                    <select className="form-control" value={reducedsensation} onChange={(e)=>{setReducedsensation(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Imbalance</label>
                    <select className="form-control" value={imbalance} onChange={(e)=>{setImbalance(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Infertility</label>
                    <select className="form-control" value={infertility} onChange={(e)=>{setInfertility(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
            
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Bony pains / Fractures</label>
                    <select className="form-control" value={bonyPains} onChange={(e)=>{setBonyPains(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Disturbed smell and taste</label>
                    <select className="form-control" value={disturbedSmell} onChange={(e)=>{setDisturbedSmell(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Poor wound healing</label>
                    <select className="form-control" value={poorwound} onChange={(e)=>{setPoorwound(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Night blindness / Dryness of eyes</label>
                    <select className="form-control" value={nightBlindness} onChange={(e)=>{setNightBlindness(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Oral ulcers</label>
                    <select className="form-control" value={oralUlcers} onChange={(e)=>{setOralUlcers(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Bleeding tendencies / bleeding gums</label>
                    <select className="form-control" value={bleedingTend} onChange={(e)=>{setBleedingTend(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Fatigue</label>
                    <select className="form-control" value={fatigue} onChange={(e)=>{setFatigue(e.target.value)}}>
                      { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Diet Pattern</label>
                    <select className="form-control" value={dietPattern} onChange={(e)=>{setDietPattern(e.target.value)}}>
                      { dietDrop && dietDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Height (in cms)</label>
                    <input type="number" className="form-control" value={height} onChange={(e)=>{setHeight(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Weight (in Kg)</label>
                    <input type="number" className="form-control" value={weight} onChange={(e)=>{setWeight(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>BMI</label>
                    <input type="text" className="form-control" value={bmi} onChange={(e)=>{setBmi(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Mid arm circumference</label>
                    <input type="text" className="form-control" value={midarmCurcum} onChange={(e)=>{setMidarmCurcum(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>MUST</label>
                    <input type="text" className="form-control" value={must} onChange={(e)=>{setMust(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>MIRT</label>
                    <input type="text" className="form-control" value={mirt} onChange={(e)=>{setMirt(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>NRS 2002</label>
                    <input type="text" className="form-control" value={nrs2002} onChange={(e)=>{setNrs2002(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Hand grip strength</label>
                    <input type="text" className="form-control" value={handGrip} onChange={(e)=>{setHandGrip(e.target.value)}}/>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>TSF</label>
                    <input type="text" className="form-control" value={tsf} onChange={(e)=>{setTsf(e.target.value)}}/>
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
                            <label>SM Area</label>
                            <input type="text" className="form-control" value={tricepSkin} onChange={(e)=>{setTricepSkin(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Body fat </label>
                            <input type="text" className="form-control" value={bodyFatPercent} onChange={(e)=>{setBodyFatPercent(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Visceral Fat</label>
                            <input type="text" className="form-control" value={visceralFat} onChange={(e)=>{setVisceralFat(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Resting metabolism</label>
                            <input type="text" className="form-control" value={restingmetaboli} onChange={(e)=>{setRestingmetaboli(e.target.value)}}/>
                        </div>
                    </div>
                    {/* <div className="col-lg-4">
                        <div className="from-group">
                            <label>Body age</label>
                            <input type="text" className="form-control" value={bodyAge} onChange={(e)=>{setBodyAge(e.target.value)}}/>
                        </div>
                    </div> */}
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat (whole body )percentage</label>
                            <input type="text" className="form-control" value={subcutaWholebody} onChange={(e)=>{setSubcutaWholebody(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat percentage (trunk)</label>
                            <input type="text" className="form-control" value={subcutaTrunk} onChange={(e)=>{setSubcutaTrunk(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat percentage (arms)</label>
                            <input type="text" className="form-control" value={subcutaArms} onChange={(e)=>{setSubcutaArms(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat percentage (legs)</label>
                            <input type="text" className="form-control" value={subcutaLegs} onChange={(e)=>{setSubcutaLegs(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscles (whole body)</label>
                            <input type="text" className="form-control" value={skeMuscelBody} onChange={(e)=>{setSkeMuscelBody(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscle (trunk)</label>
                            <input type="text" className="form-control" value={skeMuscelTrunk} onChange={(e)=>{setSkeMuscelTrunk(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscle (arms)</label>
                            <input type="text" className="form-control" value={skeMuscelArms} onChange={(e)=>{setSkeMuscelArms(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscle (legs)</label>
                            <input type="text" className="form-control" value={skeMuscelLegs} onChange={(e)=>{setSkeMuscelLegs(e.target.value)}}/>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          {/* <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
                <div className="row addlist-frm">
                    <div className="col-lg-12 mb-1">
                        <div className='clinical'>
                            <h5>CT SMI</h5>
                        </div>
                    </div> 
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>CT skeletal muscle area</label>
                            <input type="text" className="form-control" value={ctSkeletal} onChange={(e)=>{setCtSkeletal(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Mercuri stage</label>
                            <input type="text" className="form-control" value={mercuriStage} onChange={(e)=>{setMercuriStage(e.target.value)}}/>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Mean attenuation value</label>
                            <input type="text" className="form-control" value={meanAttenuation} onChange={(e)=>{setMeanAttenuation(e.target.value)}}/>
                        </div>
                    </div> 
                </div>
            </div>
          </div>   */}
          <div className='row mt-4'>
            <div className='col-lg-12'>
              <div className='subbtn text-center'>
                <Link to="../Patients/previoustreatment" className='btn btn-link mx-4'>Previous</Link>
                <button className='btn btn-link' onClick={handleAddNutrition}>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
