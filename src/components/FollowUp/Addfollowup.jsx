import React, { useState, useEffect } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'; 
import { useSearchParams } from 'react-router-dom';
import { FOLLOWUPAdd, FOLLOWUPGet, SETFOLLOWUPObj, FOLLOWUPUpdate, FOLLOWUPDelete } from "../../redux/actions/FollowUp/FollowUp.actions";
import { DEMOGRAFICGet } from "../../redux/actions/Demografic/Demografic.actions";
export const Addfollowup = () => {
    
    useEffect(() => {
        dispatch(DEMOGRAFICGet());
    }, []);

    const [searchParams, setSearchParams] = useSearchParams("edit");
    const [patientId, setPatientId] = useState("");
    const [followupDate, setFollowupDate] = useState("");
    const [diseaseExtend, setDiseaseExtend] = useState("");
    const [stoolFreq, setStoolFreq] = useState("");
    const [rectalBleeding, setRectalBleeding] = useState("");
    const [findEndoscope, setFindEndoscope] = useState("");
    const [phyAssess1, setPhyAssess1] = useState("");
    const [mayoScore1, setMayoScore1] = useState("");
    const [mayoScore2, setMayoScore2] = useState("");
    const [mayoScore3, setMayoScore3] = useState("");
    const [phyAssess2, setPhyAssess2] = useState("");
    const [phyAssess3, setPhyAssess3] = useState("");
    const [phyAssess4, setPhyAssess4] = useState("");
    const [totalScore1, setTotalScore1] = useState("");
    const [bowelDay, setBowelDay] = useState("");
    const [height, setHeight] = useState("");
    const [bowelNight, setBowelNight] = useState("");
    const [weight, setWeight] = useState("");
    const [genwellBeing, setGenwellBeing] = useState("");
    const [bmi, setBmi] = useState("");
    const [urgencyDef, setUrgencyDef] = useState("");
    const [handgrip, setHandgrip] = useState("");
    const [bloodStool, setBloodStool] = useState("");
    const [nancyIndex, setNancyIndex] = useState("");
    const [extracolonic, setExtracolonic] = useState("");
    const [rhi, setRhi] = useState("");
    const [totalScore2, setTotalScore2] = useState("");
    const [geboeScore, setGeboeScore] = useState("");
    const [mirt, setMirt] = useState("");
    const [must, setMust] = useState("");
    const [tricepSkin, setTricepSkin] = useState("");
    const [totalBodyFat, setTotalBodyFat] = useState("");
    const [visceral, setVisceral] = useState("");
    const [restingMetabol, setRestingMetabol] = useState("");
    const [bodyAge, setBodyAge] = useState("");
    const [subcutWholebody, setSubcutWholebody] = useState("");
    const [subcutTrunk, setSubcutTrunk] = useState("");
    const [subcutArms, setSubcutArms] = useState("");
    const [subcutLegs, setSubcutLegs] = useState("");
    const [skeltalWhole, setSkeltalWhole] = useState("");
    const [skeltalTrunk, setSkeltalTrunk] = useState("");
    const [skeltalArms, setSkeltalArms] = useState("");
    const [skeltalLegs, setSkeltalLegs] = useState("");
    const [midarmCircum, setMidarmCircum] = useState("");
    const [skeltalMuscle, setSkeltalMuscle] = useState("");
    const [mercuriStage, setMercuriStage] = useState("");
    const [meanAttenuation, setMeanAttenuation] = useState("");
    const [hb, setHb] = useState("");
    const [tgn, setTgn] = useState("");
    const [mcv, setMcv] = useState("");
    const [mmpr, setMmpr] = useState("");
    const [plt, setPlt] = useState("");
    const [ast, setAst] = useState("");
    const [hscrp, setHscrp] = useState("");
    const [alt, setAlt] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [alp, setAlp] = useState("");
    const [esp, setEsp] = useState("");
    const [stoolcdiff, setStoolcdiff] = useState("");
    const [fecalCalpro, setFecalCalpro] = useState("");
    const [stoolRoutine, setStoolRoutine] = useState("");
    const [ferritin, setFerritin] = useState("");
    const [ebvca, setEbvca] = useState("");
    const [cmvIgm, setCmvIgm] = useState("");
    const [oralAsa, setOralAsa] = useState("");
    const [adalimumab, setAdalimumab] = useState("");
    const [rectalAsa, setRectalAsa] = useState("");
    const [vedolizumab, setVedolizumab] = useState("");
    const [aza, setAza] = useState("");
    const [cycloporine, setCycloporine] = useState("");
    const [mp, setMp] = useState("");
    const [ustekinumab, setUstekinumab] = useState("");
    const [prednisolone, setPrednisolone] = useState("");
    const [tofacitinib, setTofacitinib] = useState("");
    const [budesonide, setBudesonide] = useState("");
    const [tacrolimus, setTacrolimus] = useState("");
    const [rectalSteroid, setRectalSteroid] = useState("");
    const [filgotinib, setFilgotinib] = useState("");
    const [infliximab, setInfliximab] = useState("");
    const [probiotics, setProbiotics] = useState("");
    const [session1, setSession1] = useState("");
    const [session2, setSession2] = useState("");
    const [session3, setSession3] = useState("");
    const [session4, setSession4] = useState("");
    const [session5, setSession5] = useState("");
    const [session6, setSession6] = useState("");
    const [session7, setSession7] = useState("");
    const [session8, setSession8] = useState("");
    const [session9, setSession9] = useState("");
    const [session10, setSession10] = useState("");
    const [session11, setSession11] = useState("");
    const [session12, setSession12] = useState("");
    const [surgery, setSurgery] = useState("");
    const [ifSurgery, setIfSurgery] = useState("");
    const [adverseAsa, setAdverseAsa] = useState("");
    const [adverseSteroids, setAdverseSteroids] = useState("");
    const [adverseInfliximab, setAdverseInfliximab] = useState("");
    const [adverseTofacitinib, setAdverseTofacitinib] = useState("");
    const [adverseAza, setAdverseAza] = useState("");

    const dispatch = useDispatch();
    const followupObj = useSelector((states) => states.followup.followupObj);
    const patientArr = useSelector((states) => states.demografic.demografics);

    const handleAddFollowUp = ()=>{
        let obj = {
            patientId,
            followupDate,
            diseaseExtend,
            stoolFreq,
            rectalBleeding,
            findEndoscope,
            phyAssess1,
            mayoScore1,
            mayoScore2,
            mayoScore3,
            phyAssess2,
            phyAssess3,
            phyAssess4,
            totalScore1,
            bowelDay,
            height,
            bowelNight,
            weight,
            genwellBeing,
            bmi,
            urgencyDef,
            handgrip,
            bloodStool,
            nancyIndex,
            extracolonic,
            rhi,
            totalScore2,
            geboeScore,
            mirt,
            must,
            tricepSkin,
            totalBodyFat,
            visceral,
            restingMetabol,
            bodyAge,
            subcutWholebody,
            subcutTrunk,
            subcutArms,
            subcutLegs,
            skeltalWhole,
            skeltalTrunk,
            skeltalArms,
            skeltalLegs,
            midarmCircum,
            skeltalMuscle,
            mercuriStage,
            meanAttenuation,
            hb,
            tgn,
            mcv,
            mmpr,
            plt,
            ast,
            hscrp,
            alt,
            albumin,
            alp,
            esp,
            stoolcdiff,
            fecalCalpro,
            stoolRoutine,
            ferritin,
            ebvca,
            cmvIgm,
            oralAsa,
            adalimumab,
            rectalAsa,
            vedolizumab,
            aza,
            cycloporine,
            mp,
            ustekinumab,
            prednisolone,
            tofacitinib,
            budesonide,
            tacrolimus,
            rectalSteroid,
            filgotinib,
            infliximab,
            probiotics,
            session1,
            session2,
            session3,
            session4,
            session5,
            session6,
            session7,
            session8,
            session9,
            session10,
            session11,
            session12,
            surgery,
            ifSurgery,
            adverseAsa,
            adverseSteroids,
            adverseInfliximab,
            adverseTofacitinib,
            adverseAza,
        }
        if(followupObj?._id){
            dispatch(FOLLOWUPUpdate(followupObj._id, obj));
            toast.success("Follow up updated")
        }else{
            dispatch(FOLLOWUPAdd(obj));
            dispatch(SETFOLLOWUPObj(null))
            toast.success("Follow up Added")
        }
    };

useEffect(()=>{
    if(followupObj){

    // console.log(followupObj?.patientId,"followupObj?.patientI")
    setPatientId(followupObj?.patientId);
    setFollowupDate(followupObj?.followupDate);
    setDiseaseExtend(followupObj?.diseaseExtend);
    setStoolFreq(followupObj?.stoolFreq);
    setRectalBleeding(followupObj?.rectalBleeding);
    setFindEndoscope(followupObj?.findEndoscope);
    setPhyAssess1(followupObj?.phyAssess1);
    setMayoScore1(followupObj?.mayoScore1);
    setMayoScore2(followupObj?.mayoScore2);
    setMayoScore3(followupObj?.mayoScore3);
    setPhyAssess2(followupObj?.phyAssess2);
    setPhyAssess3(followupObj?.phyAssess3);
    setPhyAssess4(followupObj?.phyAssess4);
    setTotalScore1(followupObj?.totalScore1);
    setBowelDay(followupObj?.bowelDay);
    setHeight(followupObj?.height);
    setBowelNight(followupObj?.bowelNight);
    setWeight(followupObj?.weight);
    setGenwellBeing(followupObj?.genwellBeing);
    setBmi(followupObj?.bmi);
    setUrgencyDef(followupObj?.urgencyDef);
    setHandgrip(followupObj?.handgrip);
    setBloodStool(followupObj?.bloodStool);
    setNancyIndex(followupObj?.nancyIndex);
    setExtracolonic(followupObj?.extracolonic);
    setRhi(followupObj?.rhi)
    setTotalScore2(followupObj?.totalScore2);
    setGeboeScore(followupObj?.geboeScore);
    setMirt(followupObj?.mirt);
    setMust(followupObj?.must);
    setTricepSkin(followupObj?.tricepSkin);
    setTotalBodyFat(followupObj?.totalBodyFat);
    setVisceral(followupObj?.visceral);
    setRestingMetabol(followupObj?.restingMetabol);
    setBodyAge(followupObj?.bodyAge);
    setSubcutWholebody(followupObj?.subcutWholebody);
    setSubcutTrunk(followupObj?.subcutTrunk);
    setSubcutArms(followupObj?.subcutArms);
    setSubcutLegs(followupObj?.subcutLegs);
    setSkeltalWhole(followupObj?.skeltalWhole);
    setSkeltalTrunk(followupObj?.skeltalTrunk);
    setSkeltalArms(followupObj?.skeltalArms);
    setSkeltalLegs(followupObj?.skeltalLegs);
    setMidarmCircum(followupObj?.midarmCircum);
    setSkeltalMuscle(followupObj?.skeltalMuscle);
    setMercuriStage(followupObj?.mercuriStage);
    setMeanAttenuation(followupObj?.meanAttenuation);
    setHb(followupObj?.hb)
    setTgn(followupObj?.tgn)
    setMcv(followupObj?.mcv)
    setMmpr(followupObj?.mmpr)
    setPlt(followupObj?.plt)
    setAst(followupObj?.ast)
    setHscrp(followupObj?.hscrp)
    setAlt(followupObj?.alt)
    setAlbumin(followupObj?.albumin)
    setAlp(followupObj?.alp)
    setEsp(followupObj?.esp)
    setStoolcdiff(followupObj?.stoolcdiff);
    setFecalCalpro(followupObj?.fecalCalpro);
    setStoolRoutine(followupObj?.stoolRoutine);
    setFerritin(followupObj?.ferritin);
    setEbvca(followupObj?.ebvca);
    setCmvIgm(followupObj?.cmvIgm);
    setOralAsa(followupObj?.oralAsa);
    setAdalimumab(followupObj?.adalimumab);
    setRectalAsa(followupObj?.rectalAsa);
    setVedolizumab(followupObj?.vedolizumab);
    setAza(followupObj?.aza);
    setCycloporine(followupObj?.cycloporine);
    setMp(followupObj?.mp);
    setUstekinumab(followupObj?.ustekinumab);
    setPrednisolone(followupObj?.prednisolone);
    setTofacitinib(followupObj?.tofacitinib);
    setBudesonide(followupObj?.budesonide);
    setTacrolimus(followupObj?.tacrolimus);
    setRectalSteroid(followupObj?.rectalSteroid);
    setFilgotinib(followupObj?.filgotinib);
    setInfliximab(followupObj?.infliximab);
    setProbiotics(followupObj?.probiotics);
    setSession1(followupObj?.session1);
    setSession2(followupObj?.session2);
    setSession3(followupObj?.session3);
    setSession4(followupObj?.session4);
    setSession5(followupObj?.session5);
    setSession6(followupObj?.session6);
    setSession7(followupObj?.session7);
    setSession8(followupObj?.session8);
    setSession9(followupObj?.session9);
    setSession10(followupObj?.session10);
    setSession11(followupObj?.session11);
    setSession12(followupObj?.session12);
    setSurgery(followupObj?.surgery);
    setIfSurgery(followupObj?.ifSurgery);
    setAdverseAsa(followupObj?.adverseAsa);
    setAdverseSteroids(followupObj?.adverseSteroids);
    setAdverseInfliximab(followupObj?.adverseInfliximab);
    setAdverseTofacitinib(followupObj?.adverseTofacitinib);
    setAdverseAza(followupObj?.adverseAza)
    }
},[followupObj]);  

useEffect(()=> {
    console.log(searchParams.get("edit"), "edit");
    if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
      dispatch(SETFOLLOWUPObj(null))
    }
  }, [searchParams.get("edit")])

    const options = [
        { value: "select", label: "Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];
    const stoolFreqDrop = [
        { value: "select", label: "Select" },
        { value: "Normal no. of stools", label: "Normal no. of stools" },
        { value: "1 to 2 stools more than normal", label: "1 to 2 stools more than normal" },
        { value: "3 to 4 stools more than normal", label: "3 to 4 stools more than normal" },
        { value: "5 or more stools more than normal", label: "5 or more stools more than normal" },
    ];
    const recBleedDrop = [
        { value:"select", label:"Select" },
        { value:"No blood seen", label:"No blood seen" },
        { value:"Streaks of blood with stool less than half the time", label:"Streaks of blood with stool less than half the time" },
        { value:"Obvious blood with stool most of the time", label:"Obvious blood with stool most of the time" },
        { value:"Blood alone passes", label:"Blood alone passes" },
    ];
    const endoscopyDrop = [
        { value:"select", label:"Select" },
        { value:"Normal or inactive disease", label:"Normal or inactive disease" },
        { value:"Mild disease(erythema,decreased vascular pattern,friability", label:"Mild disease(erythema,decreased vascular pattern,friability)" },
        { value:"Marked erythema,lack of vascular pattern,friability erosions", label:"Marked erythema,lack of vascular pattern,friability erosions)" },
        { value:"Severe disease(Spontaneous bleeding,ulceration)", label:"Severe disease(Spontaneous bleeding,ulceration)" },
    ];
    const gloAccessDrop = [
        { value:"select", label:"Select" },
        { value:"Normal", label:"Normal" },
        { value:"Mild disease", label:"Mild disease" },
        { value:"Moderate disease", label:"Moderate disease" },
        { value:"Severe disease", label:"Severe disease" },
    ];
    const vascularDrop = [
        { value:"select", label:"Select" },
        { value:"normal ", label:"Normal" },
        { value:"Patchy obliteration", label:"Patchy obliteration" },
        { value:"Obliterated", label:"Obliterated" },
    ];
    const bleedingDrop = [
        { value:"select", label:"Select" },
        { value:"None ", label:"None" },
        { value:"Mucosal ", label:"Mucosal " },
        { value:"Luminal mild ", label:"Luminal mild" },
        { value:"Luminal moderate or severe", label:"Luminal moderate or severe" },
    ];
    const erosinsDrop = [
        { value:"select", label:"Select" },
        { value:"None", label:"None " },
        { value:"Erosions", label:"Erosions" },
        { value:"Superficial ulcer ", label:"Superficial ulcer" },
        { value:"Deep ulcer", label:"Deep ulcer " },
    ];
    const bowldayDrop = [
        { value:"select", label:"Select" },
        { value:"1-3", label:"1-3 " },
        { value:"4-7", label:"4-7 " },
        { value:"7-9", label:"7-9 " },
        { value:">9", label:">9 " },
    ];
    const bowlnightDrop = [
        { value:"select", label:"Select" },
        { value:"0", label:"0" },
        { value:"1-3", label:"1-3 " },
        { value:"4-6", label:"4-6 " },
    ];
    const wellBeingDrop = [
        { value:"select", label:"Select" },
        { value:"Very Well", label:"Very Well" },
        { value:"Slightly Below Par", label:"Slightly Below Par " },
        { value:"Poor", label:"Poor " },
        { value:"Very Poor", label:"Very Poor " },
        { value:"Terrible", label:"Terrible " },
    ];
    const urgencyDrop = [
        { value:"select", label:"Select" },
        { value:"none", label:"None" },
        { value:"hurry", label:"Hurry" },
        { value:"immediately", label:"Immediately " },
        { value:"incontinence", label:"Incontinence" },
    ];
    const bloodStoolDrop = [
        { value:"select", label:"Select" },
        { value:"none", label:"None" },
        { value:"hurry", label:"Trace" },
        { value:"ocassionlly Frank", label:"Ocassionlly Frank" },
        { value:"usually Frank", label:"Usually Frank" },
    ];
    const extracolonicDrop = [
        { value:"select", label:"Select" },
        { value:"Uvetis", label:"Uvetis" },
        { value:"Trace", label:"Trace" },
        { value:"Pyoderma Gangrenosum ", label:"Pyoderma Gangrenosum " },
        { value:"erythema nodusum", label:"Erythema Nodusum " },
        { value:"arthropathy", label:"Arthropathy " },
    ];
    const oralAsaDrop = [
        { value: "Select", label:"Select" },
        { value: "1.2", label:"1.2" },
        { value: "2.4", label:"2.4" },
        { value: "3.6", label:"3.6" },
        { value: "4.8", label:"4.8" },
    ];
    const rectalAsaDrop = [
        {value:"Select", label:"Select"},
        {value:"500gm", label:"500gm"},
        {value:"1gm", label:"1gm"},
    ];
    const azaDrop = [
        {value:"Select", label:"Select"},
        {value:"25", label:"25"},
        {value:"50", label:"50"},
        {value:"75", label:"75"},
        {value:"100", label:"100"},
        {value:"125", label:"125"},
        {value:"150", label:"150"},
        {value:"175", label:"175"},
    ];
    const mpDrop = [
        {value:"Select", label:"Select"},
        {value:"50", label:"50"},
        {value:"100", label:"100"},
        {value:"150", label:"150"},
    ];
    const predenisoloniDrop = [
        { value:"Select", label:"Select" },
        { value:"5", label:"5" },
        { value:"10", label:"10" },
        { value:"15", label:"15" },
        { value:"20", label:"20" },
        { value:"25", label:"25" },
        { value:"30", label:"30" },
        { value:"40", label:"40" },
        { value:"60", label:"60" },
    ];
    const budesonideDrop = [
        { value:"Select", label:"Select" },
        { value:"3", label:"3" },
        { value:"6", label:"6" },
        { value:"9", label:"9" },
    ];
    const tofacitinibDrop = [
        { value:"select", label:"Select" },
        { value:"5", label:"5" },
        { value:"10", label:"10" },
        { value:"20", label:"20" },
    ];
    const infliximabDrop = [
        { value:"", label:"Select" },
        { value:"5 mg/kg", label:"5 mg/kg" },
        { value:"10 mg/kg", label:"10 mg/kg" },
    ];
    const adverseAsaDrop = [
        { value:"", label:"Select" },
        { value:"Paradoxical Diarrhea", label:"Paradoxical Diarrhea" },
        { value:"AKI", label:"AKI" },
        { value:"Pneumonitis", label:"Pneumonitis" },
        { value:"Pancreatitis", label:"Pancreatitis" },
        { value:"Male Infertility", label:"Male Infertility" },
        { value:"Others", label:"Others" },
    ];
    const adverseSteroidDrop = [
        { value:"", label:"Select" },
        { value:"Weight gain", label:"Weight gain" },
        { value:"Osteoporosis", label:"Osteoporosis" },
        { value:"Hypokalemia", label:"Hypokalemia" },
        { value:"Oral Candidiasis", label:"Oral Candidiasis" },
        { value:"Other infection", label:"Other infection" },
        { value:"High blood sugar", label:"High blood sugar" },
        { value:"Hirsutism", label:"Hirsutism" },
        { value:"Depression", label:"Depression" },
        { value:"Fatigue", label:"Fatigue" },
        { value:"Striae", label:"Striae" },
        { value:"Others", label:"Others" },
    ];
    const adverseInfliDrop = [
        { value:"", label:"Select" },
        { value:"Infusion reaction", label:"Infusion reaction" },
        { value:"TB", label:"TB" },
        { value:"CCF", label:"CCF" },
        { value:"Neurological disease", label:"Neurological disease" },
        { value:"Infections", label:"Infections" },
        { value:"Malignancie", label:"Malignancie" },
        { value:"Primary loss of response", label:"Primary loss of response" },
        { value:"Secondary loss of response", label:"Secondary loss of response" },
    ];
    const adverseTofacitDrop = [
        { value:"", label:"Select" },
        { value:"Zoster", label:"Zoster" },
        { value:"Cardiovascular Events", label:"Cardiovascular Events" },
        { value:"Dyslipidemia", label:"Dyslipidemia" },
        { value:"Others", label:"Others" },
    ];
    const adverseAzaDrop = [
        { value:"", label:"Select" },
        { value:"Leucopenia", label:"Leucopenia" },
        { value:"Hepatotoxicity  ", label:"Hepatotoxicity  " },
        { value:"Pancreatitis", label:"Pancreatitis" },
        { value:"Alopecia", label:"Alopecia" },
        { value:"Headache", label:"Headache" },
        { value:"Lymphoma", label:"Lymphoma" },
        { value:"Skin Cancer", label:"Skin Cancer" },
        { value:"GI – Intolerance", label:"GI – Intolerance" },
        { value:"Others", label:"Others" },
    ];

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
           
          </div>
          <div className="col-lg-5">
            {(followupObj?._id)?
            <h5 className="mb-0 text-center text-white">
            Update Followup (ULCERATIVE COLITIES DISEASE)
            </h5>:
            <h5 className="mb-0 text-center text-white">
            Add Followup (ULCERATIVE COLITIES DISEASE)
            </h5>}
          </div>
          <div className="col-lg-4 text-end">
            <div className="btnlist">
              <Link className="btn btn-defalut btn-md">
                <AiOutlineUnorderedList className="icon" />{" "}
                <span><Link to="/FollowUp/followupList" style={{textDecoration:"none"}}>View List</Link></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Patient ID* </label>
                  <select className='form-control' value={patientId} onChange={(e)=>{setPatientId(e.target.value)}}>
                    <option value={"patient"}>Please Select Patient</option>
                    { patientArr && patientArr.map((el)=><option value={el._id}>{el.ccfId} &nbsp; {el.patientName}</option>) }
                  </select>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Date of Followup*</label>
                  <input type="Date" className='form-control' value={followupDate} onChange={(e)=>{setFollowupDate(e.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <h6 className='mt-4'>Mayo Scoring System For Assessment of Ulcerative Colitis Activity</h6>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Disease Extent </label>
                <input type="text" className='form-control' value={diseaseExtend} onChange={(el)=>{setDiseaseExtend(el.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Stool Frequency</label>
                    <select className='form-control' value={stoolFreq} onChange={(el)=>{setStoolFreq(el.target.value)}}>
                        {stoolFreqDrop && stoolFreqDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                    </select>
                    {/* <Select options={stoolFreqDrop} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Rectal Bleeding</label>
                    <select className='form-control' value={rectalBleeding} onChange={(el)=>{setRectalBleeding(el.target.value)}}>
                        {recBleedDrop && recBleedDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                    </select>
                    {/* <Select options={recBleedDrop} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Findings on Endoscopy</label>
                    <select className='form-control' value={findEndoscope} onChange={(el)=>{setFindEndoscope(el.target.value)}}>
                        {endoscopyDrop && endoscopyDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                    </select>
                    {/* <Select options={endoscopyDrop} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Physician's Global Assessment</label>
                    <select className='form-control' value={phyAssess1} onChange={(el)=>{setPhyAssess1(el.target.value)}}>
                        {gloAccessDrop && gloAccessDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                    </select>
                    {/* <Select options={gloAccessDrop} placeholder="Select" /> */}
                </div>
              </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                        <label>Mayo Score: Total disease activity (=Sum of item scores)</label>
                    <div className='row darkinput'>
                        <div className='col-lg-6'>
                            <input type="text" className='form-control' def  value={mayoScore1} onChange={(el)=>{setMayoScore1(el.target.value)}}/>
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" className='form-control' value={mayoScore2} onChange={(el)=>{setMayoScore2(el.target.value)}}/>
                        </div>
                    </div>
                    <div className='col-lg-12 mt-2'>
                        <div className='from-group darkinput'>
                            <label>Partial Mayo Score: Without Findings on endoscopy</label>
                            <input type="text" className='form-control' value={mayoScore3} onChange={(el)=>{setMayoScore3(el.target.value)}}/>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <h6 className='mt-4'>UCEIS Score</h6>
                    </div>
                    <div className='from-group mt-4'>
                        <label className='mb-2'>Physician's Global Assessment</label>
                        <select className='form-control' value={phyAssess2} onChange={(el)=>{setPhyAssess2(el.target.value)}}>
                            {options && options.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                    <div className='from-group'>
                        <label className='mb-2'>Physician's Global Assessment</label>
                        <select className='form-control' value={phyAssess3} onChange={(el)=>{setPhyAssess3(el.target.value)}}>
                            {options && options.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                    <div className='from-group'>
                        <label className='mb-2'>Physician's Global Assessment</label>
                        <select className='form-control' value={phyAssess4} onChange={(el)=>{setPhyAssess4(el.target.value)}}>
                            {options && options.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                    <div className='from-group darkinput'>
                        <label className='mb-2'>Total score</label>
                        <input type="text" className='form-control' value={totalScore1} onChange={(el)=>{setTotalScore1(el.target.value)}} />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <h6>SCCAI Score</h6>
                </div>
                <div className='col-lg-6'>
                     <div className='from-group'>
                        <label>Bowel Frequency(Per Day)</label>
                        <select className='form-control' value={bowelDay} onChange={(el)=>{setBowelDay(el.target.value)}}>
                            {bowldayDrop && bowldayDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Height</label>
                        <input type="text" placeholder="Enter height" className="form-control" value={height} onChange={(el)=>{setHeight(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Bowel Frequency(Per Night)</label>
                        <select className='form-control' value={bowelNight} onChange={(el)=>{setBowelNight(el.target.value)}}>
                            {bowlnightDrop && bowlnightDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Weight</label>  
                        <input type="text" className='form-control' value={weight} onChange={(el)=>{setWeight(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>General Well Being</label>
                        <select className='form-control' value={genwellBeing} onChange={(el)=>{setGenwellBeing(el.target.value)}}>
                            {wellBeingDrop && wellBeingDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group darkinput'>
                        <label>BMI</label>
                        <input type="text" className='form-control' value={bmi} onChange={(el)=>{setBmi(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Urgency Of Defecation</label>
                        <select className='form-control' value={urgencyDef} onChange={(el)=>{setUrgencyDef(el.target.value)}}>
                            {urgencyDrop && urgencyDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Handgrip Strength</label>
                        <input type="text" className='form-control' value={handgrip} onChange={(el)=>{setHandgrip(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Blood In Stool</label>
                        <select className='form-control' value={bloodStool} onChange={(el)=>{setBloodStool(el.target.value)}}>
                            {bloodStoolDrop && bloodStoolDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Nancy Index</label>
                        <input type="text" className='form-control' value={nancyIndex} onChange={(el)=>{setNancyIndex(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Extracolonic Manifestations</label>
                        <select className='form-control' value={extracolonic} onChange={(el)=>{setExtracolonic(el.target.value)}}>
                            {extracolonicDrop && extracolonicDrop.map((el)=> <option value={el.value}>{el.label}</option>) }
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>RHI</label>
                        <input type="text" className='form-control' value={rhi} onChange={(el)=>{setRhi(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group darkinput'>
                        <label>Total score</label>
                        <input type="text" className='form-control' value={totalScore2} onChange={(el)=>{setTotalScore2(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Geboe’s Score</label>
                        <input type="text" className='form-control' value={geboeScore} onChange={(el)=>{setGeboeScore(el.target.value)}}/>
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='from-group'>
                                <label>MIRT</label>
                                <input type="text" className='form-control' value={mirt} onChange={(el)=>{setMirt(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='from-group'>
                                <label>MUST</label>
                                <input type="text" className='form-control' value={must} onChange={(el)=>{setMust(el.target.value)}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <h6>SCCAI Score</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Triceps skin fold thickness</label>
                        <input type="text" className='form-control' value={tricepSkin} onChange={(el)=>{setTricepSkin(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Total body fat percentage</label>
                        <input type="text" className='form-control' value={totalBodyFat} onChange={(el)=>{setTotalBodyFat(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Visceral Fat</label>
                        <input type="text" className='form-control' value={visceral} onChange={(el)=>{setVisceral(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Resting metabolism</label>
                        <input type="text" className='form-control' value={restingMetabol} onChange={(el)=>{setRestingMetabol(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Body age</label>
                        <input type="text" className='form-control' value={bodyAge} onChange={(el)=>{setBodyAge(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat (whole body )percentage</label>
                        <input type="text" className='form-control' value={subcutWholebody} onChange={(el)=>{setSubcutWholebody(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat percentage (trunk)</label>
                        <input type="text" className='form-control' value={subcutTrunk} onChange={(el)=>{setSubcutTrunk(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat percentage (arms)</label>
                        <input type="text" className='form-control' value={subcutArms} onChange={(el)=>{setSubcutArms(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat percentage (legs)</label>
                        <input type="text" className='form-control' value={subcutLegs} onChange={(el)=>{setSubcutLegs(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscles (whole body)</label>
                        <input type="text" className='form-control' value={skeltalWhole} onChange={(el)=>{setSkeltalWhole(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscle (trunk)</label>
                        <input type="text" className='form-control' value={skeltalTrunk} onChange={(el)=>{setSkeltalTrunk(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscle (arms)</label>
                        <input type="text" className='form-control' value={skeltalArms} onChange={(el)=>{setSkeltalArms(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscle (legs)</label>
                        <input type="text" className='form-control' value={skeltalLegs} onChange={(el)=>{setSkeltalLegs(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Mid Arm Circumference</label>
                        <input type="text" className='form-control' value={midarmCircum} onChange={(el)=>{setMidarmCircum(el.target.value)}}/>
                    </div>
                </div>            
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>CT SMI</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>CT skeletal muscle area</label>
                        <input type="text" className='form-control' value={skeltalMuscle} onChange={(el)=>{setSkeltalMuscle(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Mercuri stage</label>
                        <input type="text" className='form-control' value={mercuriStage} onChange={(el)=>{setMercuriStage(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Mean attenuation value</label>
                        <input type="text" className='form-control' value={meanAttenuation} onChange={(el)=>{setMeanAttenuation(el.target.value)}}/>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h6>Investigations</h6>
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>HB</label>
                            <input type="text" className='form-control' value={hb} onChange={(el)=>{setHb(el.target.value)}}/>
                        </div>     
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>6TGN</label>
                            <input type="text" className='form-control' value={tgn} onChange={(el)=>{setTgn(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>MCV</label>
                            <input type="text" className='form-control' value={mcv} onChange={(el)=>{setMcv(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>6MMPR</label>
                            <input type="text" className='form-control' value={mmpr} onChange={(el)=>{setMmpr(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>PLT</label>
                            <input type="text" className='form-control' value={plt} onChange={(el)=>{setPlt(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>AST</label>
                            <input type="text" className='form-control' value={ast} onChange={(el)=>{setAst(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>hsCRP</label>
                            <input type="text" className='form-control' value={hscrp} onChange={(el)=>{setHscrp(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>ALT</label>
                            <input type="text" className='form-control' value={alt} onChange={(el)=>{setAlt(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Albumin</label>
                            <input type="text" className='form-control' value={albumin} onChange={(el)=>{setAlbumin(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>ALP</label>
                            <input type="text" className='form-control' value={alp} onChange={(el)=>{setAlp(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>ESP</label>
                            <input type="text" className='form-control' value={esp} onChange={(el)=>{setEsp(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Stool C-diff Toxin</label>
                            <input type="text" className='form-control' value={stoolcdiff} onChange={(el)=>{setStoolcdiff(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Fecal Calprotectin</label>
                            <input type="text" className='form-control' value={fecalCalpro} onChange={(el)=>{setFecalCalpro(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Stool routine</label>
                            <input type="text" className='form-control' value={stoolRoutine} onChange={(el)=>{setStoolRoutine(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Ferritin</label>
                            <input type="text" className='form-control' value={ferritin} onChange={(el)=>{setFerritin(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>EBV – VCA IgM</label>
                            <input type="text" className='form-control' value={ebvca} onChange={(el)=>{setEbvca(el.target.value)}}/>
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>CMV IgM</label>
                            <input type="text" className='form-control' value={cmvIgm} onChange={(el)=>{setCmvIgm(el.target.value)}}/>
                        </div> 
                    </div>
            </div>

            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Treatment</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Oral 5ASA</label>
                        <select className='form-control' value={oralAsa} onChange={(el)=>{setOralAsa(el.target.value)}}>
                            {oralAsaDrop && oralAsaDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={oralAsaDrop} placeholder="Select" /> */}
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Adalimumab</label>
                        <input type="text" className='form-control' value={adalimumab} onChange={(el)=>{setAdalimumab(el.target.value)}}/>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Rectal 5ASA</label>
                        <select className='form-control' value={rectalAsa} onChange={(el)=>{setRectalAsa(el.target.value)}}>
                            {rectalAsaDrop && rectalAsaDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={rectalAsaDrop} placeholder="Select" /> */}
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Vedolizumab</label>
                        <input type="text" className='form-control' value={vedolizumab} onChange={(el)=>{setVedolizumab(el.target.value)}}/>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>AZA</label>
                        <select className='form-control' value={aza} onChange={(el)=>{setAza(el.target.value)}}>
                            {azaDrop && azaDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Cyclosporine</label>
                        <input type="text" className='form-control' value={cycloporine} onChange={(el)=>{setCycloporine(el.target.value)}}/>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>6-MP</label>
                        <select className='form-control' value={mp} onChange={(el)=>{setMp(el.target.value)}}>
                            {mpDrop && mpDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Ustekinumab</label>
                        <input type="text" className='form-control' value={ustekinumab} onChange={(el)=>{setUstekinumab(el.target.value)}}/>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Prednisolone</label>
                        <select className='form-control' value={prednisolone} onChange={(el)=>{setPrednisolone(el.target.value)}}>
                            {predenisoloniDrop && predenisoloniDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={predenisoloniDrop} placeholder="Select" /> */}
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Tofacitinib</label>
                        <select className='form-control' value={tofacitinib} onChange={(el)=>{setTofacitinib(el.target.value)}}>
                            {tofacitinibDrop && tofacitinibDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={tofacitinibDrop} placeholder="Select" /> */}
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Budesonide</label>
                        <select className='form-control' value={budesonide} onChange={(el)=>{setBudesonide(el.target.value)}}>
                            {budesonideDrop && budesonideDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={budesonideDrop} placeholder="Select" /> */}
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Tacrolimus</label>
                        <input type="text" className='form-control' value={tacrolimus} onChange={(el)=>{setTacrolimus(el.target.value)}}/>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Rectal Steroids</label>
                        <select className='form-control' value={rectalSteroid} onChange={(el)=>{setRectalSteroid(el.target.value)}}>
                            {options && options.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={options} placeholder="Select" /> */}
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Filgotinib</label>
                        <input type="text" className='form-control' value={filgotinib} onChange={(el)=>{setFilgotinib(el.target.value)}}/>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Infliximab</label>
                        <select className='form-control' value={infliximab} onChange={(el)=>{setInfliximab(el.target.value)}}>
                            {infliximabDrop && infliximabDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Probiotics</label>
                        <input type="text" className='form-control' value={probiotics} onChange={(el)=>{setProbiotics(el.target.value)}}/>
                    </div> 
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>FMT Session</h6>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 1</label>
                        <input type="date" className='form-control' value={session1} onChange={(el)=>{setSession1(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 2</label>
                        <input type="date" className='form-control' value={session2} onChange={(el)=>{setSession2(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 3</label>
                        <input type="date" className='form-control' value={session3} onChange={(el)=>{setSession3(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 4</label>
                        <input type="date" className='form-control' value={session4} onChange={(el)=>{setSession4(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 5</label>
                        <input type="date" className='form-control' value={session5} onChange={(el)=>{setSession5(el.target.value)}}/>
                    </div>
                </div>   
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 6</label>
                        <input type="date" className='form-control' value={session6} onChange={(el)=>{setSession6(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 7</label>
                        <input type="date" className='form-control' value={session7} onChange={(el)=>{setSession7(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 8</label>
                        <input type="date" className='form-control' value={session8} onChange={(el)=>{setSession8(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 9</label>
                        <input type="date" className='form-control' value={session9} onChange={(el)=>{setSession9(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 10</label>
                        <input type="date" className='form-control' value={session10} onChange={(el)=>{setSession10(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 11</label>
                        <input type="date" className='form-control' value={session11} onChange={(el)=>{setSession11(el.target.value)}}/>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 12</label>
                        <input type="date" className='form-control' value={session12} onChange={(el)=>{setSession12(el.target.value)}}/>
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Surgery Advised</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Surgery</label>
                        <select className='form-control' value={surgery} onChange={(el)=>{setSurgery(el.target.value)}}>
                            {options && options.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={options} placeholder="Select" /> */}
                    </div>
                </div>
                <div className='col-lg-6'>
                     <div className='from-group'>
                        <label>If Surgery Yes</label>
                        <select className='form-control' value={ifSurgery} onChange={(el)=>{setIfSurgery(el.target.value)}}>
                            {options && options.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                        {/* <Select options={options} placeholder="Select" /> */}
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Adverse Events to Drugs</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>5-ASA</label>
                        <select className='form-control' value={adverseAsa} onChange={(el)=>{setAdverseAsa(el.target.value)}}>
                            {adverseAsaDrop && adverseAsaDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Steroids</label>
                        <select className='form-control' value={adverseSteroids} onChange={(el)=>{setAdverseSteroids(el.target.value)}}>
                            {adverseSteroidDrop && adverseSteroidDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Infliximab/ Adalimumab</label>
                        <select className='form-control' value={adverseInfliximab} onChange={(el)=>{setAdverseInfliximab(el.target.value)}}>
                            {adverseInfliDrop && adverseInfliDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Tofacitinib</label>
                        <select className='form-control' value={adverseTofacitinib} onChange={(el)=>{setAdverseTofacitinib(el.target.value)}}>
                            {adverseTofacitDrop && adverseTofacitDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>AZA/6-MP</label>
                        <select className='form-control' value={adverseAza} onChange={(el)=>{setAdverseAza(el.target.value)}}>
                            {adverseAzaDrop && adverseAzaDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                        </select>
                    </div>
                </div>
            </div>
             <div className='row'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center mt-4 mb-5'>
                        {(followupObj?._id)?
                        <button to="" className='btn btn-link' onClick={handleAddFollowUp}>Update</button>
                        :
                        <button to="" className='btn btn-link' onClick={handleAddFollowUp}>Add Follow Up</button>
                        }
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
