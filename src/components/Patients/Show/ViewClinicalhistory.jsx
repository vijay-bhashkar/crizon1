import React, { useEffect, useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CLINICALHISTORYGet, SETCLINICALHISTORYObj, CLINICALHISTORYGet_BY_PATIENT_ID } from "../../../redux/actions/ClinicalHistory/ClinicalHistory.actions";

export const ViewClinicalhistory = () => {

const [patientId, setPateintId] = useState("");
const dispatch = useDispatch();

useEffect(() => {
    if(patientId){
      dispatch(CLINICALHISTORYGet_BY_PATIENT_ID(patientId));
    }
}, [patientId]);

const cliHistoryObj = useSelector((states) => states.clinicalHistory.clinicalHistoriesObj);
const demograficObj = useSelector((states) => states.demografic.demograficObj);

const navigate = useNavigate();

useEffect(() => {
    dispatch(SETCLINICALHISTORYObj({}))
    if(demograficObj){
        setPateintId(demograficObj?._id)
    }
  }, [demograficObj]);



const [diarrhoea, setDiarrhoea] = useState("No");
const [nocurnalDiarrhoea, setNocurnalDiarrhoea] = useState("No");
const [bloodStools, setBloodStools] = useState("No");
const [urgency, setUrgency] = useState("None");
const [incontinence, setIncontinence] = useState("No");
const [tenesmus, setTenesmus] = useState("No");
const [painAbdomen, setPainAbdomen] = useState("No");
const [fever, setFever] = useState("No");
const [lossAppetite, setLossAppetite] = useState("No");
const [weightLoss, setWeightLoss] = useState("No");
const [fatigue, setFatigue] = useState("No");
const [clinicalOther, SetClinicalOther] = useState("No");
const [arthralgias, setArthralgias] = useState("No");
const [arthritis, setArthritis] = useState("No");
const [nephrolithiasis, setNephrolithiasis] = useState("No");
const [psc, setPsc] = useState("No");
const [ankylosing, setAnkylosing] = useState("No");
const [anemia, setAnemia] = useState("No");
const [erythema, setErythema] = useState("No");
const [pyoderma, setPyoderma] = useState("No");
const [episcleritis, setEpiscleritis] = useState("No");
const [osteoporosis, setOsteoporosis] = useState("No");
const [gallstones, setGallstones] = useState("No");
const [dvt, setDvt] = useState("No");
const [intestinalOther, setIntestinalOther] = useState("No");
const [tb, setTb] = useState("No");
const [varicella, setVaricella] = useState("No");
const [hbv, setHbv] = useState("No");
const [hcv, setHcv] = useState("No");
const [hiv, setHiv] = useState("No");
const [hospitalization, setHospitalization] = useState("No");
const [nsaidUse, setNsaidUse] = useState("No");
const [antibiotics, setAntibiotics] = useState("No");
const [herpesZoster, setHerpesZoster] = useState("No");
const [covid, setCovid] = useState("No");
const [diabetes, setDiabetes] = useState("No");
const [hypertension, setHypertension] = useState("No");
const [hypothyroidism, setHypothyroidism] = useState("No");
const [hyperthyroidism, setHyperthyroidism] = useState("No");
const [cad, setCad] = useState("No");
const [coad, setCoad] = useState("No"); 
const [cva, setCva] = useState("No");
const [ckd, setCkd] = useState("No");
const [cld, setCld] = useState("No");
const [surgery, setSurgery] = useState("No");
const [morbiditiesOther, setMorbiditiesOther] = useState("");
const [crohn, setCrohn] = useState("No");
const [ulcerative, setUlcerative] = useState("No");
const [relationship, setRelationship] = useState("");
const [relationship_2, setRelationship_2] = useState("");
const [smoking, setSmoking] = useState("No");
const [ivdu, setIvdu] = useState("No");
const [opium, setOpium] = useState("No");
const [alcohol, setAlcohol] = useState("No");
const [addictionOther, setAddictionOther] = useState("No");
const [hbv_1, setHbv_1] = useState("");
const [hbv_2, setHbv_2] = useState("");
const [hbv_3, setHbv_3] = useState("");
const [pneumococcal_1, setPneumococcal_1] = useState("");
const [pneumococcal_2, setPneumococcal_2] = useState("");
const [pneumococcal_3, setPneumococcal_3] = useState("");
const [influenza_1, setInfluenza_1] = useState("");
const [influenza_2, setInfluenza_2] = useState("");
const [influenza_3, setInfluenza_3] = useState("");
const [mmr_1, setMmr_1] = useState("");
const [mmr_2, setMmr_2] = useState("");
const [mmr_3, setMmr_3] = useState("");
const [bcg_1, setBcg_1] = useState("");
const [bcg_2, setBcg_2] = useState("");
const [bcg_3, setBcg_3] = useState("");
const [vzv_1, setVzv_1] = useState("");
const [vzv_2, setVzv_2] = useState("");
const [vzv_3, setVzv_3] = useState("");
const [hav_1, setHav_1] = useState("");
const [hav_2, setHav_2] = useState("");
const [hav_3, setHav_3] = useState("");
const [dpt_1, setDpt_1] = useState("");
const [dpt_2, setDpt_2] = useState("");
const [dpt_3, setDpt_3] = useState("");
const [hpv_1, setHpv_1] = useState("");
const [hpv_2, setHpv_2] = useState("");
const [hpv_3, setHpv_3] = useState("");
const [hzv_1, setHzv_1] = useState("");
const [hzv_2, setHzv_2] = useState("");
const [hzv_3, setHzv_3] = useState("");
const [diseaseExtent, setDiseaseExtent] = useState("");
const [stoolFrequency, setStoolFrequency] = useState("");
const [rectalBleeding, setRectalBleeding] = useState("");
const [findEndoscopy, setFindEndoscopy] = useState("");
const [physicianGlobal, setPhysicianGlobal] = useState("");
const [totaldisease, setTotaldisease] = useState("");
const [globalAssessment, setGLobalAssessment] = useState("");
const [vascularPattern, setVascularPattern] = useState("");
const [erosionUlcers, setErosionUlcers] = useState("");
const [bleeding, setBleeding] = useState("");
const [totalScore, setTotalScore] = useState("");
const [bowelFrequency, setBowelFrequency] = useState("");
const [urgencyDefecation, setUrgencyDefecation] = useState("");
const [bowelFrequency_2, setBowelFrequency_2] = useState("");
const [bloodStool, setBloodStool] = useState("");
const [generalBeing, setGeneralBeing] = useState("");
const [manifestations, setManifestations] = useState("");
const [totalScore_2, setTotalScore_2] = useState("");

    useEffect(()=>{
        if(cliHistoryObj){
            setDiarrhoea(cliHistoryObj?.diarrhoea);
            setNocurnalDiarrhoea(cliHistoryObj?.nocurnalDiarrhoea);
            setBloodStools(cliHistoryObj?.bloodStools);
            setUrgency(cliHistoryObj?.urgency);
            setIncontinence(cliHistoryObj?.incontinence);
            setTenesmus(cliHistoryObj?.tenesmus);
            setPainAbdomen(cliHistoryObj?.painAbdomen);
            setFever(cliHistoryObj?.fever);
            setLossAppetite(cliHistoryObj?.lossAppetite);
            setWeightLoss(cliHistoryObj?.weightLoss);
            setFatigue(cliHistoryObj?.fatigue);
            SetClinicalOther(cliHistoryObj?.clinicalOther);
            setArthralgias(cliHistoryObj?.arthralgias);
            setArthritis(cliHistoryObj?.arthritis);
            setNephrolithiasis(cliHistoryObj?.nephrolithiasis);
            setPsc(cliHistoryObj?.psc);
            setAnkylosing(cliHistoryObj?.ankylosing);
            setAnemia(cliHistoryObj?.anemia);
            setErythema(cliHistoryObj?.erythema);
            setPyoderma(cliHistoryObj?.pyoderma);
            setEpiscleritis(cliHistoryObj?.episcleritis);
            setOsteoporosis(cliHistoryObj?.osteoporosis);
            setGallstones(cliHistoryObj?.gallstones);
            setDvt(cliHistoryObj?.dvt);
            setIntestinalOther(cliHistoryObj?.intestinalOther);
            setTb(cliHistoryObj?.tb);
            setVaricella(cliHistoryObj?.varicella);
            setHbv(cliHistoryObj?.hbv);
            setHcv(cliHistoryObj?.hcv);
            setHiv(cliHistoryObj?.hiv);
            setHospitalization(cliHistoryObj?.hospitalization);
            setNsaidUse(cliHistoryObj?.nsaidUse);
            setAntibiotics(cliHistoryObj?.antibiotics);
            setHerpesZoster(cliHistoryObj?.herpesZoster);
            setCovid(cliHistoryObj?.covid);
            setDiabetes(cliHistoryObj?.diabetes);
            setHypertension(cliHistoryObj?.hypertension);
            setHypothyroidism(cliHistoryObj?.hypothyroidism);
            setHyperthyroidism(cliHistoryObj?.hyperthyroidism);
            setCad(cliHistoryObj?.cad);
            setCoad(cliHistoryObj?.coad);
            setCva(cliHistoryObj?.cva);
            setCkd(cliHistoryObj?.ckd);
            setCld(cliHistoryObj?.cld);
            setSurgery(cliHistoryObj?.surgery);
            setMorbiditiesOther(cliHistoryObj?.morbiditiesOther);
            setCrohn(cliHistoryObj?.crohn);
            setUlcerative(cliHistoryObj?.ulcerative);
            setRelationship(cliHistoryObj?.relationship);
            setRelationship_2(cliHistoryObj?.relationship_2);
            setSmoking(cliHistoryObj?.smoking);
            setIvdu(cliHistoryObj?.ivdu);
            setOpium(cliHistoryObj?.opium);
            setAlcohol(cliHistoryObj?.alcohol);
            setAddictionOther(cliHistoryObj?.addictionOther);
            setHbv_1(cliHistoryObj?.hbv_1);
            setHbv_2(cliHistoryObj?.hbv_2);
            setHbv_3(cliHistoryObj?.hbv_3);
            setPneumococcal_1(cliHistoryObj?.pneumococcal_1);
            setPneumococcal_2(cliHistoryObj?.pneumococcal_2);
            setPneumococcal_3(cliHistoryObj?.pneumococcal_3);
            setInfluenza_1(cliHistoryObj?.influenza_1);
            setInfluenza_2(cliHistoryObj?.influenza_2);
            setInfluenza_3(cliHistoryObj?.influenza_3);
            setMmr_1(cliHistoryObj?.mmr_1);
            setMmr_2(cliHistoryObj?.mmr_2);
            setMmr_3(cliHistoryObj?.mmr_3);
            setBcg_1(cliHistoryObj?.bcg_1);
            setBcg_2(cliHistoryObj?.bcg_2);
            setBcg_3(cliHistoryObj?.bcg_3);
            setVzv_1(cliHistoryObj?.vzv_1);
            setVzv_2(cliHistoryObj?.vzv_2);
            setVzv_3(cliHistoryObj?.vzv_3);
            setHav_1(cliHistoryObj?.hav_1);
            setHav_2(cliHistoryObj?.hav_2);
            setHav_3(cliHistoryObj?.hav_3);
            setDpt_1(cliHistoryObj?.dpt_1);
            setDpt_2(cliHistoryObj?.dpt_2);
            setDpt_3(cliHistoryObj?.dpt_3);
            setHpv_1(cliHistoryObj?.hpv_1);
            setHpv_2(cliHistoryObj?.hpv_2);
            setHpv_3(cliHistoryObj?.hpv_3);
            setHzv_1(cliHistoryObj?.hzv_1);
            setHzv_2(cliHistoryObj?.hzv_2);
            setHzv_3(cliHistoryObj?.hzv_3);
            setDiseaseExtent(cliHistoryObj?.diseaseExtent);
            setStoolFrequency(cliHistoryObj?.stoolFrequency);
            setRectalBleeding(cliHistoryObj?.rectalBleeding);
            setFindEndoscopy(cliHistoryObj?.findEndoscopy);
            setPhysicianGlobal(cliHistoryObj?.physicianGlobal);
            setTotaldisease(cliHistoryObj?.totaldisease);
            setGLobalAssessment(cliHistoryObj?.globalAssessment);
            setVascularPattern(cliHistoryObj?.vascularPattern);
            setErosionUlcers(cliHistoryObj?.erosionUlcers);
            setBleeding(cliHistoryObj?.bleeding);
            setTotalScore(cliHistoryObj?.totalScore);
            setBowelFrequency(cliHistoryObj?.bowelFrequency);
            setUrgencyDefecation(cliHistoryObj?.urgencyDefecation);
            setBowelFrequency_2(cliHistoryObj?.bowelFrequency_2);
            setBloodStool(cliHistoryObj?.bloodStool);
            setGeneralBeing(cliHistoryObj?.generalBeing);
            setManifestations(cliHistoryObj?.manifestations);
            setTotalScore_2(cliHistoryObj?.totalScore_2);
        }
    },[cliHistoryObj]);

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
                <Link class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal">
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
                                <h5>Clinical History</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Diarrhoea : </b> {diarrhoea}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Nocturnal diarrhea  : </b> {nocurnalDiarrhoea} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Blood in Stools : </b>  {bloodStools}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Urgency : </b>  {urgency}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Incontinence  : </b>  {incontinence} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Tenesmus : </b> {tenesmus}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Pain Abdomen : </b> {painAbdomen}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Fever : </b>  {fever}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Loss of Appetite  : </b> {lossAppetite}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Weight Loss : </b> {weightLoss}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Fatigue  : </b> {fatigue} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Other : </b>  {clinicalOther}  </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Extra Intestinal Manifestations</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Arthralgias : </b> {arthralgias}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Arthritis  : </b> {arthritis}   </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Nephrolithiasis  : </b> {nephrolithiasis}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>PSC : </b> {psc}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Ankylosing Spondylitis : </b> {ankylosing}   </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Anemia  : </b>  {anemia}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Erythema Nodosum  : </b> {erythema}    </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Pyoderma Gangrenosum  : </b> {pyoderma}   </label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Episcleritis : </b> {episcleritis}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Osteoporosis : </b> {osteoporosis}  </label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Gallstones  : </b> {gallstones} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>DVT : </b> {dvt} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Other: </b> {intestinalOther}  </label>
                                
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
                                <label><b>TB  : </b> {tb}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Chicken Pox (varicella) : </b> {varicella}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>HBV : </b> {hbv}   </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>HCV : </b> {hcv}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>HIV : </b> {hiv}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Hospitalization  : </b>  {hospitalization}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>NSAID’s use : </b>  {nsaidUse}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Antibiotics use : </b>  {antibiotics}   </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Herpes Zoster : </b>  {herpesZoster}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>COVID : </b>  {covid}  </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Co-morbidities</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Diabetes : </b> {diabetes}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Hypertension : </b> {hypertension}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Hypothyroidism  : </b> {hypothyroidism}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Hyperthyroidism  : </b>   {hyperthyroidism} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CAD : </b>  {cad}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>COAD : </b> {coad} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CVA  : </b> {cva}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CKD : </b>  {ckd}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CLD  : </b> {cld}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Surgery : </b> {surgery}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Other : </b> {morbiditiesOther}   </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Family History</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Crohn's  : </b>   {crohn} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label><b>Ulcerative Colitis (UC) : </b>  {ulcerative}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Relationship (Crohn's) : </b>  {relationship}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Relationship (Ulcerative) : </b>  {relationship_2}  </label>
                               
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Addiction</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Smoking  : </b> {smoking}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label><b>IVDU : </b>  {ivdu}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Opium : </b>  {opium}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Alcohol  : </b>   {alcohol} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Others : </b>  {addictionOther}  </label>
                                
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Vaccination History</h5>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center smallheding  justify-content-between'>
                        <div className='col-lg-1 text-end'>
                            <h5>HBV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {hbv_1}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2  : </b> {hbv_2}   </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {hbv_3}  </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Pneumococcal</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {pneumococcal_1}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b> {pneumococcal_2} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose  : </b> {pneumococcal_3}  </label>
                                
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Influenza</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {influenza_1}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b> {influenza_2}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {influenza_3}   </label>
                               
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>MMR</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {mmr_1}    </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b> {mmr_2}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose: </b> {mmr_3}  </label>
                                
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>BCG</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {bcg_1}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b>{bcg_2}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {bcg_3}   </label>
                                
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>VZV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {vzv_1} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b> {vzv_2}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {vzv_3} </label>
                               
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HAV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {hav_1} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b>{hav_2}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {hav_3}  </label>
                                
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>DPT</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {dpt_1}   </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b>{dpt_2}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {dpt_3}  </label>
                               
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HPV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b> {hpv_1}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b> {hpv_2}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {hpv_3}   </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HZV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 : </b>{hzv_1}   </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 : </b> {hzv_2} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose : </b> {hzv_3} </label>
                                
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Disease Extent</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>E1/E2/E3 : </b>  {diseaseExtent}   </label>
                               
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm addlist-frm mt-3'>
                        <div className='col-lg-12 mb-1'>
                            <div className='clinical'>
                                <h5>Mayo Scoring System For Assessment of Ulcerative Colitis Activity</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Stool Frequency  : </b> {stoolFrequency}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Rectal Bleeding: : </b> {rectalBleeding}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Findings on Endoscopy : </b> {findEndoscopy}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Physician's Global Assessment : </b> {physicianGlobal}  </label>
                                
                            </div>
                        </div>
                    </div>

                    <div className='row darkinput'>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Mayo Score: Total disease activity (=Sum of item scores) : </b> {totaldisease}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label><b>Physician's Global Assessment : </b> {globalAssessment}  </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row darkinput addlist-frm addlist-frm mt-4'>
                        <div className='col-lg-12 mb-1'>
                            <div className='clinical'>
                                <h5>UCEIS Score</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Vascular pattern : </b> {vascularPattern}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Erosions and ulcers : </b> {erosionUlcers}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Bleeding : </b> {bleeding}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Total score  : : </b> {totalScore}</label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row darkinput addlist-frm addlist-frm mt-4'>
                        <div className='col-lg-12 mb-1'>
                            <div className='clinical'>
                                <h5>SCCAI Score</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Bowel Frequency(Per Day) : </b> {bowelFrequency}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Urgency Of Defecation : </b> {urgencyDefecation}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Bowel Frequency(Per Night) : </b> {bowelFrequency_2} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Blood In Stool : </b> {bloodStool} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>General Well Being : </b> {generalBeing} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Extracolonic Manifestations : </b> {manifestations}  </label>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Total score : </b> {totalScore_2} </label>
                                
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <Link to="/Patients/Viewdemografics" className='btn btn-link mx-4'>Previous</Link>
                                <Link to="/Patients/Viewprevioustreatment" className='btn btn-link mx-4'>Next</Link>
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
