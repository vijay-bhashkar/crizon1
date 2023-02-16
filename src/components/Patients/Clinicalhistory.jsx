import React, { useEffect, useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { CLINICALHISTORYAdd, CLINICALHISTORYGet, SETCLINICALHISTORYObj, CLINICALHISTORYUpdate, CLINICALHISTORYDelete, CLINICALHISTORYGet_BY_PATIENT_ID } from "../../redux/actions/ClinicalHistory/ClinicalHistory.actions";
import { toast } from 'react-hot-toast';

export const Clinicalhistory = () => {

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
const [herpesZoster, setHerpesZoster] = useState("No");
const [covid, setCovid] = useState("No");
const [addictionOther, setAddictionOther] = useState("");

const handleAddClinicalHistory = ()=>{
    if(patientId == ""){
        toast.error("Please create patient or select patient ")
        return
    }if(diarrhoea == "" || diarrhoea == undefined){
        toast.error("Diarrhoea is mandatory")
        return
    }if(bloodStools == "" || bloodStools == undefined){
        toast.error("BloodStools is mandatory")
        return
    }if(urgency == "" || urgency == undefined){
        toast.error(" Urgency is mandatory")
        return
    }else{

let obj = {
patientId,
diarrhoea,
nocurnalDiarrhoea,
bloodStools,
urgency,
incontinence,
tenesmus,
painAbdomen,
fever,
lossAppetite,
weightLoss,
fatigue,
clinicalOther,
arthralgias,
arthritis,
nephrolithiasis,
psc,
ankylosing,
anemia,
erythema,
pyoderma,
episcleritis,
osteoporosis,
gallstones,
dvt,
intestinalOther,
tb,
varicella,
hbv,
hcv,
hiv,
hospitalization,
nsaidUse,
antibiotics,
diabetes,
hypertension,
hypothyroidism,
hyperthyroidism,
cad,
coad,
cva,
ckd,
cld,
surgery,
morbiditiesOther,
crohn,
ulcerative,
relationship,
relationship_2,
smoking,
ivdu,
opium,
alcohol,
hbv_1,
hbv_2,
hbv_3,
pneumococcal_1,
pneumococcal_2,
pneumococcal_3,
influenza_1,
influenza_2,
influenza_3,
mmr_1,
mmr_2,
mmr_3,
bcg_1,
bcg_2,
bcg_3,
vzv_1,
vzv_2,
vzv_3,
hav_1,
hav_2,
hav_3,
dpt_1,
dpt_2,
dpt_3,
hpv_1,
hpv_2,
hpv_3,
diseaseExtent,
stoolFrequency,
rectalBleeding,
findEndoscopy,
physicianGlobal,
totaldisease,
globalAssessment,
vascularPattern,
erosionUlcers,
bleeding,
totalScore,
bowelFrequency,
urgencyDefecation,
bowelFrequency_2, 
bloodStool,
generalBeing,
manifestations,
totalScore_2,
}

    if (cliHistoryObj?._id) {
      dispatch(CLINICALHISTORYUpdate(cliHistoryObj._id, obj));
      dispatch(SETCLINICALHISTORYObj(null));
      toast.success(" Clinical History Updated Successfully ");
    } else {
      dispatch(CLINICALHISTORYAdd(obj));
      toast.success(" Clinical History created Successfully ");
    }
      navigate("/Patients/previoustreatment");
  }
};

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

    const options = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ];

    const relationships = [
        { value:"select", label:"Select" },
        { value:"Parent", label:"Parent" },
        { value:"Sibing", label:"Sibing" },
        { value:"Child", label:"Child" },
        { value:"Uncle", label:"Uncle" },
        { value:"Aunty", label:"Aunty" },
        { value:"Cousin", label:"Cousin" },
        { value:"Grandparents", label:"Grandparents" },
        { value:"Grandchild", label:"Grandchild" },
    ]

    const smokings = [
        { value:"yes", label:"Yes" },
        { value:"no", label:"No" },
        { value:"reformed", label:"Reformed" }
    ]

    const stool = [
        { value:"select", label:"Select" },
        { value:"0", label:"Normal no. of stools" },
        { value:"1 to 2 stools more than normal", label:"1 to 2 stools more than normal" },
        { value:"3 to 4 stools more than normal", label:"3 to 4 stools more than normal" },
        { value:"5 or more stools more than normal", label:"5 or more stools more than normal" },
    ]

    const rectal = [
        { value:"select", label:"Select" },
        { value:"0", label:"No blood seen" },
        { value:"Streaks of blood with stool less than half the time", label:"Streaks of blood with stool less than half the time" },
        { value:"Obvious blood with stool most of the time", label:"Obvious blood with stool most of the time" },
        { value:"Blood alone passes", label:"Blood alone passes" },
    ] 

    const endoscopy = [
        { value:"select", label:"Select" },
        { value:"0", label:"Normal or inactive disease"},
        { value:"Mild disease(erythema,decreased vascular pattern,friability)", label:"Mild disease(erythema,decreased vascular pattern,friability)"},
        { value:"Marked erythema,lack of vascular pattern,friability erosions)", label:"Marked erythema,lack of vascular pattern,friability erosions)"},
        { value:"Severe disease(Spontaneous bleeding,ulceration)", label:"Severe disease(Spontaneous bleeding,ulceration)"},
    ]

    const physician = [
        { value:"select", label:"Select" },
        { value:"Normal", label:"Normal"},
        { value:"Mild disease", label:"Mild disease"},
        { value:"Moderate disease", label:"Moderate disease"},
        { value:"Severe disease", label:"Severe disease"},
    ]

    const ucies = [
        { value:"select", label:"Select" },
        { value:"Normal ", label:"Normal " },
        { value:"Patchy obliteration ", label:"Patchy obliteration " },
        { value:"Obliterated ", label:"Obliterated " }, 
    ]

    const erosins = [
        { value:"select", label:"Select" },
        { value:"None ", label:"None " },
        { value:"Erosions ", label:"Erosions " },
        { value:"Superficial ulcer ", label:"Superficial ulcer " },
        { value:"Deep ulcer ", label:"Deep ulcer " },
    ]
    const blood = [
        { value:"select", label:"Select" },
        { value:"None ", label:"None " },
        { value:"Mucosal ", label:"Mucosal " },
        { value:"Luminal mild ", label:"Luminal mild " },
        { value:"Luminal moderate or severe ", label:"Luminal moderate or severe " },
    ]
    const bowlDay = [
        { value:"select", label:"Select" },
        { value:"1-3 ", label:"1-3 " },
        { value:"4-7 ", label:"4-7 " },
        { value:"7-9 ", label:"7-9 " },
        { value:" >9 ", label:" >9 " },
    ]
    const bowlNight = [
        { value:"select", label:"Select" },
        { value:"0 ", label:"0 " },
        { value:"1-3 ", label:"1-3 " },
        { value:"4-6 ", label:"4-6 " },
    ]
    const wellBeing = [
        { value:"select", label:"Select" },
        { value:"Very Well", label:"Very Well" },
        { value:"Slightly Below Par ", label:"Slightly Below Par " },
        { value:"Poor ", label:"Poor " },
        { value:"Very Poor ", label:"Very Poor " },
        { value:"Terrible ", label:"Terrible " },
    ]
    const urgrncy = [
        { value:"select", label:"Select" },
        { value:"None ", label:"None " },
        { value:"Hurry ", label:"Hurry " },
        { value:"Immediately ", label:"Immediately " },
        { value:"Incontinence ", label:"Incontinence " },
    ]
    const stoolBlood = [
        { value:"select", label:"Select" },
        { value:"None ", label:"None " },
        { value:"Trace ", label:"Trace " },
        { value:"Ocassionlly Frank ", label:"Ocassionlly Frank " },
        { value:"Usually Frank ", label:"Usually Frank " },
    ]
    const manifest = [
        { value:"select", label:"Select" },
        { value:"Uvetis ", label:"Uvetis " },
        { value:"Pyoderma Gangrenosum ", label:"Pyoderma Gangrenosum " },
        { value:"Erythema Nodusum ", label:"Erythema Nodusum " },
        { value:"Arthropathy ", label:"Arthropathy " },
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
                <Link class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal">
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
                                <label>Diarrhoea</label>
                                <select className='form-control' value={diarrhoea} onChange={(e)=>{setDiarrhoea(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Nocturnal diarrhea </label>
                                <select className='form-control' value={nocurnalDiarrhoea} onChange={(e)=>{setNocurnalDiarrhoea(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Blood in Stools</label>
                                <select className='form-control' value={bloodStools} onChange={(e)=>{setBloodStools(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Urgency </label>
                                <select className='form-control' value={urgency} onChange={(e)=>{setUrgency(e.target.value)}}>
                                    { urgrncy && urgrncy.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={urgrncy} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Incontinence </label>
                                <select className='form-control' value={incontinence} onChange={(e)=>{setIncontinence(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Tenesmus </label>
                                <select className='form-control' value={tenesmus} onChange={(e)=>{setTenesmus(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Pain Abdomen</label>
                                <select className='form-control' value={painAbdomen} onChange={(e)=>{setPainAbdomen(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Fever</label>
                                <select className='form-control' value={fever} onChange={(e)=>{setFever(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Loss of Appetite</label>
                                <select className='form-control' value={lossAppetite} onChange={(e)=>{setLossAppetite(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Weight Loss</label>
                                <select className='form-control' value={weightLoss} onChange={(e)=>{setWeightLoss(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Fatigue</label>
                                <select className='form-control' value={fatigue} onChange={(e)=>{setFatigue(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Other</label>
                                <input type="text" placeholder='Pleace Specify' className='form-control' value={clinicalOther} onChange={(e)=>{SetClinicalOther(e.target.value)}}/>
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
                                <label>Arthralgias </label>
                                <select className='form-control' value={arthralgias} onChange={(e)=>{setArthralgias(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Arthritis </label>
                                <select className='form-control' value={arthritis} onChange={(e)=>{setArthritis(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Nephrolithiasis</label>
                                <select className='form-control' value={nephrolithiasis} onChange={(e)=>{setNephrolithiasis(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PSC </label>
                                <select className='form-control' value={psc} onChange={(e)=>{setPsc(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ankylosing Spondylitis </label>
                                <select className='form-control' value={ankylosing} onChange={(e)=>{setAnkylosing(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anemia </label>
                                <select className='form-control' value={anemia} onChange={(e)=>{setAnemia(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Erythema Nodosum </label>
                                <select className='form-control' value={erythema} onChange={(e)=>{setErythema(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Pyoderma Gangrenosum</label>
                                <select className='form-control' value={pyoderma} onChange={(e)=>{setPyoderma(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No" /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Episcleritis</label>
                                <select className='form-control' value={episcleritis} onChange={(e)=>{setEpiscleritis(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Osteoporosis</label>
                                <select className='form-control' value={osteoporosis} onChange={(e)=>{setOsteoporosis(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Gallstones</label>
                                <select className='form-control' value={gallstones} onChange={(e)=>{setGallstones(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>DVT</label>
                                <select className='form-control' value={dvt} onChange={(e)=>{setDvt(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Other</label>
                                <input type="text" placeholder='Please Specify' className='form-control' value={intestinalOther} onChange={(e)=>{setIntestinalOther(e.target.value)}} />
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
                                <label>TB </label>
                                <select className='form-control' value={tb} onChange={(e)=>{setTb(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Chicken Pox (varicella) </label>
                                <select className='form-control' value={varicella} onChange={(e)=>{setVaricella(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HBV</label>
                                <select className='form-control' value={hbv} onChange={(e)=>{setHbv(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HCV </label>
                                <select className='form-control' value={hcv} onChange={(e)=>{setHcv(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HIV </label>
                                <select className='form-control' value={hiv} onChange={(e)=>{setHiv(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hospitalization </label>
                                <select className='form-control' value={hospitalization} onChange={(e)=>{setHospitalization(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>NSAID’s use</label>
                                <select className='form-control' value={nsaidUse} onChange={(e)=>{setNsaidUse(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Antibiotics use</label>
                                <select className='form-control' value={antibiotics} onChange={(e)=>{setAntibiotics(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Herpes Zoster</label>
                                <select className='form-control' value={herpesZoster} onChange={(e)=>{setHerpesZoster(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>COVID</label>
                                <select className='form-control' value={covid} onChange={(e)=>{setCovid(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
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
                                <label>Diabetes </label>
                                <select className='form-control' value={diabetes} onChange={(e)=>{setDiabetes(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Hypertension</label>
                                <select className='form-control' value={hypertension} onChange={(e)=>{setHypertension(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hypothyroidism</label>
                                <select className='form-control' value={hypothyroidism} onChange={(e)=>{setHypothyroidism(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hyperthyroidism </label>
                                <select className='form-control' value={hyperthyroidism} onChange={(e)=>{setHyperthyroidism(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CAD </label>
                                <select className='form-control' value={cad} onChange={(e)=>{setCad(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>COAD </label>
                                <select className='form-control' value={coad} onChange={(e)=>{setCoad(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CVA</label>
                                <select className='form-control' value={cva} onChange={(e)=>{setCva(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CKD</label>
                                <select className='form-control' value={ckd} onChange={(e)=>{setCkd(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CLD</label>
                                <select className='form-control' value={cld} onChange={(e)=>{setCld(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Surgery</label>
                                <select className='form-control' value={surgery} onChange={(e)=>{setSurgery(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Other</label>
                                <input type="text" className='form-control' value={morbiditiesOther} onChange={(e)=>{setMorbiditiesOther(e.target.value)}}/>
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
                                <label>Crohn's </label>
                                <select className='form-control' value={crohn} onChange={(e)=>{setCrohn(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label>Ulcerative Colitis (UC)</label>
                                <select className='form-control' value={ulcerative} onChange={(e)=>{setUlcerative(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Relationship (Crohn's)</label>
                                <select className='form-control' value={relationship} onChange={(e)=>{setRelationship(e.target.value)}}>
                                    { relationships && relationships.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={relationships} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Relationship (Ulcerative)</label>
                                <select className='form-control' value={relationship_2} onChange={(e)=>{setRelationship_2(e.target.value)}}>
                                    { relationships && relationships.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={relationships} placeholder="Select"  /> */}
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
                                <label>Smoking </label>
                                <select className='form-control' value={smoking} onChange={(e)=>{setSmoking(e.target.value)}}>
                                    { smokings && smokings.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={smokings} placeholder="select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label>IVDU</label>
                                <select className='form-control' value={ivdu} onChange={(e)=>{setIvdu(e.target.value)}}>
                                    { smokings && smokings.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={smokings} placeholder="select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Opium</label>
                                <select className='form-control' value={opium} onChange={(e)=>{setOpium(e.target.value)}}>
                                    { smokings && smokings.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={smokings} placeholder="select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Alcohol </label>
                                <select className='form-control' value={alcohol} onChange={(e)=>{setAlcohol(e.target.value)}}>
                                    { smokings && smokings.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Others </label>
                                <input type="text" placeholder='Please Specify' className='form-control' value={addictionOther} onChange={(e)=>{setAddictionOther(e.target.value)}} />
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
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={hbv_1} onChange={(e)=>{setHbv_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={hbv_2} onChange={(e)=>{setHbv_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={hbv_3} onChange={(e)=>{setHbv_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Pneumococcal</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={pneumococcal_1} onChange={(e)=>{setPneumococcal_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={pneumococcal_2} onChange={(e)=>{setPneumococcal_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={pneumococcal_3} onChange={(e)=>{setPneumococcal_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Influenza</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={influenza_1} onChange={(e)=>{setInfluenza_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={influenza_2} onChange={(e)=>{setInfluenza_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={influenza_3} onChange={(e)=>{setInfluenza_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>MMR</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={mmr_1} onChange={(e)=>{setMmr_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={mmr_2} onChange={(e)=>{setMmr_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={mmr_3} onChange={(e)=>{setMmr_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>BCG</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={bcg_1} onChange={(e)=>{setBcg_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={bcg_2} onChange={(e)=>{setBcg_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={bcg_3} onChange={(e)=>{setBcg_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>VZV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={vzv_1} onChange={(e)=>{setVzv_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={vzv_2} onChange={(e)=>{setVzv_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={vzv_3} onChange={(e)=>{setVzv_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HAV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={hav_1} onChange={(e)=>{setHav_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={hav_2} onChange={(e)=>{setHav_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={hav_3} onChange={(e)=>{setHav_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>DPT</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control' value={dpt_1} onChange={(e)=>{setDpt_1(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={dpt_2} onChange={(e)=>{setDpt_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={dpt_3} onChange={(e)=>{setDpt_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HPV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'value={hpv_1} onChange={(e)=>{setHpv_1(e.target.value)}} />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={hpv_2} onChange={(e)=>{setHpv_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={hpv_3} onChange={(e)=>{setHpv_3(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HZV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'value={hzv_1} onChange={(e)=>{setHzv_1(e.target.value)}} />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control' value={hzv_2} onChange={(e)=>{setHzv_2(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control' value={hzv_3} onChange={(e)=>{setHzv_3(e.target.value)}}/>
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
                                <label>E1/E2/E3</label>
                                <input type="text" placeholder='' className='form-control' value={diseaseExtent} onChange={(e)=>{setDiseaseExtent(e.target.value)}}/>
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
                                <label>Stool Frequency</label>
                                <select className='form-control' value={stoolFrequency} onChange={(e)=>{setStoolFrequency(e.target.value)}}>
                                    { stool && stool.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={stool} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Rectal Bleeding:</label>
                                <select className='form-control' value={rectalBleeding} onChange={(e)=>{setRectalBleeding(e.target.value)}}>
                                    { rectal && rectal.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={rectal} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Findings on Endoscopy</label>
                                <select className='form-control' value={findEndoscopy} onChange={(e)=>{setFindEndoscopy(e.target.value)}}>
                                    { endoscopy && endoscopy.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={endoscopy} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Physician's Global Assessment</label>
                                <select className='form-control' value={physicianGlobal} onChange={(e)=>{setPhysicianGlobal(e.target.value)}}>
                                    { physician && physician.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={physician} placeholder="Select" /> */}
                            </div>
                        </div>
                    </div>

                    <div className='row darkinput'>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Mayo Score: Total disease activity (=Sum of item scores)</label>
                                <input type="text" className='form-control' value={totaldisease} onChange={(e)=>{setTotaldisease(e.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label>Physician's Global Assessment</label>
                                <input type="text" className='form-control' value={globalAssessment} onChange={(e)=>{setGLobalAssessment(e.target.value)}}/>
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
                                <label>Vascular pattern</label>
                                <select className='form-control' value={vascularPattern} onChange={(e)=>{setVascularPattern(e.target.value)}}>
                                    { ucies && ucies.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={ucies} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Erosions and ulcers</label>
                                <select className='form-control' value={erosionUlcers} onChange={(e)=>{setErosionUlcers(e.target.value)}}>
                                    { erosins && erosins.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={erosins} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Bleeding</label>
                                <select className='form-control' value={bleeding} onChange={(e)=>{setBleeding(e.target.value)}}>
                                    { blood && blood.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={blood} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Total score</label>
                                <select className='form-control' value={totalScore} onChange={(e)=>{setTotalScore(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <input type="text" className='form-control' /> */}
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
                                <label>Bowel Frequency(Per Day)</label>
                                <select className='form-control' value={bowelFrequency} onChange={(e)=>{setBowelFrequency(e.target.value)}}>
                                    { bowlDay && bowlDay.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={bowlDay} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Urgency Of Defecation</label>
                                <select className='form-control' value={urgencyDefecation} onChange={(e)=>{setUrgencyDefecation(e.target.value)}}>
                                    { options && options.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={options} placeholder="No"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Bowel Frequency(Per Night)</label>
                                <select className='form-control' value={bowelFrequency_2} onChange={(e)=>{setBowelFrequency_2(e.target.value)}}>
                                    { bowlNight && bowlNight.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={bowlNight} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Blood In Stool</label>
                                <select className='form-control' value={bloodStool} onChange={(e)=>{setBloodStool(e.target.value)}}>
                                    { stoolBlood && stoolBlood.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={stoolBlood} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>General Well Being</label><select className='form-control' value={generalBeing} onChange={(e)=>{setGeneralBeing(e.target.value)}}>
                                    { wellBeing && wellBeing.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={wellBeing} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Extracolonic Manifestations</label>
                                <select className='form-control' value={manifestations} onChange={(e)=>{setManifestations(e.target.value)}}>
                                    { manifest && manifest.map((el)=><option value={el.value}>{el.label}</option>) }
                                </select>
                                {/* <Select options={manifest} placeholder="Select"  /> */}
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Total score</label>
                                <input type="text" className='form-control' value={totalScore_2} onChange={(e)=>{setTotalScore_2(e.target.value)}}/>
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <Link to="../Patients/editdemographics" className='btn btn-link mx-4'>Previous</Link>
                                <button className='btn btn-link' onClick={handleAddClinicalHistory}>Next</button>
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
