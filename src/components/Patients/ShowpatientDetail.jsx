import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useParams } from 'react-router-dom';
import moment from "moment/moment";
import { useDispatch, useSelector } from "react-redux";
import { DEMOGRAFICGet, } from "../../redux/actions/Demografic/Demografic.actions";
import { CLINICALHISTORYGet,CLINICALHISTORYGet_BY_PATIENT_ID,SETCLINICALHISTORYObj } from "../../redux/actions/ClinicalHistory/ClinicalHistory.actions";
import { DEPRESSIONGet, DEPRESSIONGet_BY_PATIENT_ID, SETDEPRESSIONObj } from "../../redux/actions/Depression/Depression.actions";
import { PREVIOUSTREATMENTGet, SETPREVIOUSTREATMENTObj, PREVIOUSTREATMENTGet_BY_PATIENT_ID } from "../../redux/actions/PreviousTreatment/PreviousTreatment.actions";
import { NUTRITIONGet, SETNUTRITIONObj, NUTRITIONGet_BY_PATIENT_ID } from "../../redux/actions/Nutrition/Nutrition.actions";
import { INVESTIGATIONGet, SETINVESTIGATIONObj,  INVESTIGATIONGet_BY_PATIENT_ID } from "../../redux/actions/Investigation/Investigation.actions";
import { INFECTIONGet, SETINFECTIONObj, INFECTIONGet_BY_PATIENT_ID } from "../../redux/actions/Infection/Infection.actions";
import { TREATMENTGet, SETTREATMENTObj, TREATGet_BY_PATIENT_ID } from "../../redux/actions/Treatment/Treatment.actions";
import { CUSTOMERGet } from '../../redux/actions/Customer/Customer.actions';
export const ShowpatientDetail = () => {

const dispatch = useDispatch();

const cliHistoryObj = useSelector((states) => states.clinicalHistory.clinicalHistoriesObj);
const demograficObj = useSelector((states) => states.demografic.demograficObj);
// const depressionObj = useSelector((states) => states.depression.depressionObj);
const preTreatObj = useSelector((states) => states.previoustreatment.previousTreatmentsObj); 
const nutritionObj = useSelector((states) => states.nutrition.nutritionsObj);
const investigationObj = useSelector((states) => states.investigation.investigationsObj);
const treatmentObj = useSelector((states) => states.treatment.treatmentsObj);
const infectionObj = useSelector((states) => states.infection.infectionsObj);
const role = useSelector((states)=> states.auth.role);
const roleUserData = useSelector((states)=> states.auth.user.roleUser);

const {id} =  useParams();

useEffect(() => {
if(id){
  dispatch(CLINICALHISTORYGet_BY_PATIENT_ID(id));
  dispatch(DEPRESSIONGet_BY_PATIENT_ID(id));
  dispatch(PREVIOUSTREATMENTGet_BY_PATIENT_ID(id));
  dispatch(NUTRITIONGet_BY_PATIENT_ID(id));
  dispatch(INVESTIGATIONGet_BY_PATIENT_ID(id));
  dispatch(TREATGet_BY_PATIENT_ID(id));
  dispatch(INFECTIONGet_BY_PATIENT_ID(id));

}
}, [id]);
    //DEMOGRAFIC VARIABLES
const [ccfId, setCcfId] = useState("");
const [enrollDate, setEnrollDate] = useState("");
const [patientName, setPatientName] = useState("");
const [parentName, setParentName] = useState("");
const [age, setAge] = useState("");
const [sex, setSex] = useState("");
const [mrdNo, setMrdNo] = useState("");
const [diagnosisYear, setDiagnosisYear] = useState("");
const [phoneNo, setPhone] = useState("");
const [diagnosisMonth, setDiagnosisMonth] = useState("");
const [addressLine, setAddressLine] = useState("");
const [educationHead, setEducationHead] = useState("");
const [monthlyIncome, setMonthlyIncome] = useState("");
const [occupationHead, setOccupationHead] = useState("");
const [socioEconomy, setSocioEconomy] = useState("");
const [totalScore, setTotalScore] = useState("");
const [email, setEmail] = useState("");
const [doctor, setDoctor] = useState("");
const [disease, setDisease] = useState("");
const [hod, setHod] = useState("");
const [password, setPassword] = useState("");
const [conPassword, setConPassword] = useState("");
const [indiDisease, setIndiDisease] = useState("");
const [diseaseArr, setDiseaseArr] = useState("");
const [hodArr, setHodArr] = useState("");
const [doctorArr, setDoctorArr] = useState("");

    //CLINICAL HISTORY VARIABLES
const [diarrhoea, setDiarrhoea] = useState("");
const [nocurnalDiarrhoea, setNocurnalDiarrhoea] = useState("");
const [bloodStools, setBloodStools] = useState("");
const [urgency, setUrgency] = useState("");
const [incontinence, setIncontinence] = useState("");
const [tenesmus, setTenesmus] = useState("");
const [painAbdomen, setPainAbdomen] = useState("");
const [fever, setFever] = useState("");
const [lossAppetite, setLossAppetite] = useState("");
const [weightLoss, setWeightLoss] = useState("");
const [fatigue, setFatigue] = useState("");
const [clinicalOther, SetClinicalOther] = useState("");
const [arthralgias, setArthralgias] = useState("");
const [arthritis, setArthritis] = useState("");
const [nephrolithiasis, setNephrolithiasis] = useState("");
const [psc, setPsc] = useState("");
const [ankylosing, setAnkylosing] = useState("");
const [anemia, setAnemia] = useState("");
const [erythema, setErythema] = useState("");
const [pyoderma, setPyoderma] = useState("");
const [episcleritis, setEpiscleritis] = useState("");
const [osteoporosis, setOsteoporosis] = useState("");
const [gallstones, setGallstones] = useState("");
const [dvt, setDvt] = useState("");
const [intestinalOther, setIntestinalOther] = useState("");
const [tb, setTb] = useState("");
const [varicella, setVaricella] = useState("");
const [hbv, setHbv] = useState("");
const [hcv, setHcv] = useState("");
const [hiv, setHiv] = useState("");
const [hospitalization, setHospitalization] = useState("");
const [nsaidUse, setNsaidUse] = useState("");
const [antibiotics, setAntibiotics] = useState("");
const [diabetes, setDiabetes] = useState("");
const [hypertension, setHypertension] = useState("");
const [hypothyroidism, setHypothyroidism] = useState("");
const [hyperthyroidism, setHyperthyroidism] = useState("");
const [cad, setCad] = useState("");
const [coad, setCoad] = useState("");
const [cva, setCva] = useState("");
const [ckd, setCkd] = useState("");
const [cld, setCld] = useState("");
const [surgery, setSurgery] = useState("");
const [morbiditiesOther, setMorbiditiesOther] = useState("");
const [crohn, setCrohn] = useState("");
const [ulcerative, setUlcerative] = useState("");
const [relationship, setRelationship] = useState("");
const [relationship_2, setRelationship_2] = useState("");
const [smoking, setSmoking] = useState("");
const [ivdu, setIvdu] = useState("");
const [opium, setOpium] = useState("");
const [alcohol, setAlcohol] = useState("");
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
const [totalScore2, setTotalScore2] = useState("");
const [bowelFrequency, setBowelFrequency] = useState("");
const [urgencyDefecation, setUrgencyDefecation] = useState("");
const [bowelFrequency_2, setBowelFrequency_2] = useState("");
const [bloodStool, setBloodStool] = useState("");
const [generalBeing, setGeneralBeing] = useState("");
const [manifestations, setManifestations] = useState("");
const [totalScore_2, setTotalScore_2] = useState("");

   // Previous Treatment
   const [oralAsaName, setOralAsaName] = useState("");
   const [oralAsaDose, setOralAsaDose] = useState("");
   const [oralAsaStart, setOralAsaStart] = useState("");
   const [oralAsaEnd, setOralAsaEnd] = useState("");

   const [rectalSuppositoryName, setRectalSuppositoryName] = useState("");
   const [rectalSuppositoryDose, setRectalSuppositoryDose] = useState("");
   const [rectalSuppositoryStart, setRectalSuppositoryStart] = useState("");
   const [rectalSuppositoryEnd, setRectalSuppositoryEnd] = useState("");

   const [reacalFoamName, setReacalFoamName] = useState("");
   const [reacalFoamDose, setReacalFoamDose] = useState("");
   const [reacalFoamStart, setReacalFoamStart] = useState("");
   const [reacalFoamEnd, setReacalFoamEnd] = useState("");

   const [oralSteroidsName, setOralSteroidsName ] = useState("");
   const [oralSteroidsDose, setOralSteroidsDose ] = useState("");
   const [oralSteroidsStart, setOralSteroidsStart] = useState("");
   const [oralSteroidsEnd, setOralSteroidsEnd ] = useState("");

   const [ivSteroidsName, setIvSteroidsName] = useState("");
   const [ivSteroidsDose, setIvSteroidsDose] = useState("");
   const [ivSteroidsStart,  setIvSteroidsStart] = useState("");
   const [ivSteroidsEnd, setIvSteroidsEnd] = useState("");

   const [entofoamName, setEntofoamName] = useState("");
   const [entofoamDose, setEntofoamDose] = useState("");
   const [entofoamStart,  setEntofoamStart] = useState("");
   const [entofoamEnd,  setEntofoamEnd] = useState("");

   const [azaName, setAzaName] = useState("");
   const [azaDose, setAzaDose] = useState("");
   const [azaStart, setAzaStart] = useState("");
   const [azaEnd, setAzaEnd] = useState("");

   const [mpName, setMpName] = useState("");
   const [mpDose, setMpDose] = useState("");
   const [mpStart, setMpStart] = useState("");
   const [mpEnd, setMpEnd] = useState("");

   const [tgName,  setTgName] = useState("");
   const [tgDose,  setTgDose] = useState("");
   const [tgStart, setTgStart] = useState("");
   const [tgEnd,  setTgEnd] = useState("");
   
   const [infliximabName, setInfliximabName] = useState("");
   const [infliximabDose, setInfliximabDose] = useState("");
   const [infliximabStart, setInfliximabStart] = useState("");
   const [infliximabEnd, setInfliximabEnd] = useState("");

   const [adalimumabName, setAdalimumabName] = useState("");
   const [adalimumabDose, setAdalimumabDose] = useState("");
   const [adalimumabStart, setAdalimumabStart] = useState("");
   const [adalimumabEnd, setAdalimumabEnd] = useState("");

   const [vedolizumabName,   setVedolizumabName] = useState("");
   const [vedolizumabDose,   setVedolizumabDose] = useState("");
   const [vedolizumabStart,   setVedolizumabStart] = useState("");
   const [vedolizumabEnd,   setVedolizumabEnd] = useState("");

   const [ustekinumabName,    setUstekinumabName] = useState("");
   const [ustekinumabPose,   setUstekinumabPose] = useState("");
   const [ustekinumabStart,   setUstekinumabStart] = useState("");
   const [ustekinumabEnd,   setUstekinumabEnd] = useState("");

   const [tofacitinibName, setTofacitinibName] = useState("");
   const [tofacitinibPose, setTofacitinibPose] = useState("");
   const [tofacitinibStart,  setTofacitinibStart] = useState("");
   const [tofacitinibEnd,     setTofacitinibEnd] = useState("");

   const [fmtName,  setFmtName] = useState("");
   const [fmtPose,  setFmtPose] = useState("");
   const [fmtStart, setFmtStart] = useState("");
   const [fmtEnd,   setFmtEnd] = useState("");

   const [other, setOther] = useState("");
   const [asa, setAsa] = useState("");
   const [preSurgery, setPreSurgery] = useState("");
   const [sergeryDate, setSergeryDate] = useState("");
   const [typeSurgery, setTypeSurgery] = useState("");

     // Nutrition History

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
     const [fatigueNutri, setFatigueNutri] = useState("");
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

      // Investigation Details

      const [hb, setHb] = useState("");
      const [hbsAg, setHbsAg] = useState("");
      const [mcv, setMcv] = useState("");
      const [hivInvesti, setHivInvesti] = useState("");
      const [tlc, setTlc] = useState("");
      const [antiHcv, setAntiHcv] = useState("");
      const [plt, setPlt] = useState("");
      const [ebVcaLgm, setEbVcaLgm] = useState("");
      const [esr, setEsr] = useState("");
      const [ebVcaLgg, setEbVcaLgg] = useState("");
      const [crpQuanti, setCrpQuanti] = useState("");
      const [ebvEbna, setEbvEbna] = useState("");
      const [cmvLgm, setCmvLgm] = useState("");
      const [cmvLgg, setCmvLgg] = useState("");
      const [ast, setAst] = useState("");
      const [fecalCalpro, setFecalCalpro] = useState("");
      const [alt, setAlt] = useState("");
      const [stoolRoutine, setStoolRoutine] = useState("");
      const [alp, setAlp] = useState("");
      const [stoolCulture, setStoolCulture] = useState("");
      const [albumin, setAlbumin] = useState("");
      const [stoolGdh, setStoolGdh] = useState("");
      const [iron, setIron] = useState("");
      const [stoolDiffToxin, setStoolDiffToxin] = useState("");
      const [tibc, setTibc] = useState("");
      const [stoolDiffPcr, setStoolDiffPcr] = useState("");
      const [ferritin, setFerritin] = useState("");
      const [stoolBiofilm, setStoolBiofilm] = useState("");
      const [ca, setCa] = useState("");
      const [tpmp, setTpmp] = useState("");
      const [mg, setMg] = useState("");
      const [ndut, setNdut] = useState("");
      const [vitad, setVitad] = useState("");
      const [tgn, setTgn] = useState("");
      const [rbs, setRbs] = useState("");
      const [mmpr, setMmpr] = useState("");
      const [ascaLga, setAscaLga] = useState("");
      const [chestXRay, setChestXRay] = useState("");
      const [askalgg, setAskalgg] = useState("");
      const [xRayAbdomen, setXRayAbdomen] = useState("");
      const [vitaminb12, setVitaminb12] = useState("");
      const [microbiota, setMicrobiota] = useState("");
      const [panca, setPanca] = useState("");
      const [folate, setFolate] = useState("");
      const [urea, setUrea] = useState("");
      const [vzvAntibody, setVzvAntibody] = useState("");
      const [creatinine, setCreatinine] = useState("");
      const [mantoux, setMantoux] = useState("");
      const [ctAbdomen, setCtAbdomen] = useState("");
      const [nancyIndex, setNancyIndex] = useState("");
      const [ctChest, setCtChest] = useState("");
      const [rhi, setRhi] = useState("");
      const [mriAbdomen, setMriAbdomen] = useState("");
      const [geboeScore, setGeboeScore] = useState("");
      const [simplifiedMARIA, setSimplifiedMARIA] = useState("");
      const [clermontScore, setClermontScore] = useState("");
      const [microbiota_2, setMicrobiota_2] = useState("");

     // Treatment Details

  const [oralAsa, setOralAsa] = useState("");
  const [rectalAsa, setRectalAsa] = useState("");
  const [aza, setAza] = useState("");
  const [mp, setMp] = useState("");
  const [prednisolone, setPrednisolone] = useState("");
  const [infliximab, setInfliximab] = useState("");
  const [budesonide, setBudesonide] = useState("");
  const [rectalSteroids, setRectalSteroids] = useState("");
  const [adalimunab, setAdalimunab] = useState("");
  const [vedolizumab, setVedolizumab] = useState("");
  const [cyclosporine, setCyclosporine] = useState("");
  const [ustekinumab, setUstekinumab] = useState("");
  const [tofacitinib, setTofacitinib] = useState("");
  const [tacrolimus, setTacrolimus] = useState("");
  const [probiotics, setProbiotics] = useState("");
  const [filgotinib, setFilgotinib] = useState("");
  const [session_1, setSession_1] = useState("");
  const [session_2, setSession_2] = useState("");
  const [session_3, setSession_3] = useState("");
  const [session_4, setSession_4] = useState("");
  const [session_5, setSession_5] = useState("");
  const [session_6, setSession_6] = useState("");
  const [session_7, setSession_7] = useState("");
  const [session_8, setSession_8] = useState("");
  const [session_9, setSession_9] = useState("");
  const [session_10, setSession_10] = useState("");
  const [session_11, setSession_11] = useState("");
  const [session_12, setSession_12] = useState("");
  const [surgeryTreat, setSurgeryTreat] = useState("");
  const [specify, setSpecify] = useState("");

  // Infections Details

  const [respiratory, setRespiratory] = useState("");
  const [ent, setEnt] = useState("");
  const [skin, setSkin] = useState("");
  const [tbInfection, setTbInfection] = useState("");
  const [genitourinary, setGenitourinary] = useState("");
  const [gastrointestinal, setGastrointestinal] = useState("");
  const [specificToIbd, setSpecificToIbd] = useState("");
  const [neurological, setNeurological] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");

  // Depression Details


useEffect(() => {
    if (demograficObj) {
        setCcfId(demograficObj?.ccfId);
        setEnrollDate(moment(demograficObj?.enrollDate).format("YYYY-MM-DD"));
        setPatientName(demograficObj?.patientName);
        setParentName(demograficObj?.parentName);
        setAge(demograficObj?.age);
        setSex(demograficObj?.sex);
        setMrdNo(demograficObj?.mrdNo);
        setDiagnosisYear(demograficObj?.diagnosisYear);
        setPhone(demograficObj?.phoneNo);
        setDiagnosisMonth(demograficObj?.diagnosisMonth);
        setAddressLine(demograficObj?.addressLine);
        setEducationHead(demograficObj?.educationHead);
        setMonthlyIncome(demograficObj?.monthlyIncome);
        setOccupationHead(demograficObj?.occupationHead);
        setSocioEconomy(demograficObj?.socioEconomy);
        setTotalScore(demograficObj?.totalScore);
        setEmail(demograficObj?.email);
        setDoctor(demograficObj?.doctor);
        setDisease(demograficObj?.disease);
        setHod(demograficObj?.hod);
        setPassword(demograficObj?.password);
        setConPassword(demograficObj?.conPassword);
        setIndiDisease(demograficObj?.indiDisease);
    }
}, [demograficObj]);

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
        setLossAppetite(cliHistoryObj?.setLossAppetite);
        setWeightLoss(cliHistoryObj?.setWeightLoss);
        setFatigue(cliHistoryObj?.setFatigue);
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
        setHyperthyroidism(cliHistoryObj?.setHyperthyroidism);
        setCad(cliHistoryObj?.setCad);
        setCoad(cliHistoryObj?.setCoad);
        setCva(cliHistoryObj?.setCva);
        setCkd(cliHistoryObj?.setCkd);
        setCld(cliHistoryObj?.setCld);
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
        setHbv_1(moment(cliHistoryObj?.hbv_1).format("YYYY-MM-DD"));
        setHbv_2(moment(cliHistoryObj?.hbv_2).format("YYYY-MM-DD"));
        setHbv_3(moment(cliHistoryObj?.hbv_3).format("YYYY-MM-DD"));
        setPneumococcal_1(moment(cliHistoryObj?.pneumococcal_1).format("YYYY-MM-DD"));
        setPneumococcal_2(moment(cliHistoryObj?.pneumococcal_2).format("YYYY-MM-DD"));
        setPneumococcal_3(moment(cliHistoryObj?.pneumococcal_3).format("YYYY-MM-DD"));
        setInfluenza_1(moment(cliHistoryObj?.influenza_1).format("YYYY-MM-DD"));
        setInfluenza_2(moment(cliHistoryObj?.influenza_2).format("YYYY-MM-DD"));
        setInfluenza_3(moment(cliHistoryObj?.influenza_3).format("YYYY-MM-DD"));
        setMmr_1(moment(cliHistoryObj?.mmr_1).format("YYYY-MM-DD"));
        setMmr_2(moment(cliHistoryObj?.mmr_2).format("YYYY-MM-DD"));
        setMmr_3(moment(cliHistoryObj?.mmr_3).format("YYYY-MM-DD"));
        setBcg_1(moment(cliHistoryObj?.bcg_1).format("YYYY-MM-DD"));
        setBcg_2(moment(cliHistoryObj?.bcg_2).format("YYYY-MM-DD"));
        setBcg_3(moment(cliHistoryObj?.bcg_3).format("YYYY-MM-DD"));
        setVzv_1(moment(cliHistoryObj?.vzv_1).format("YYYY-MM-DD"));
        setVzv_2(moment(cliHistoryObj?.vzv_2).format("YYYY-MM-DD"));
        setVzv_3(moment(cliHistoryObj?.vzv_3).format("YYYY-MM-DD"));
        setHav_1(moment(cliHistoryObj?.hav_1).format("YYYY-MM-DD"));
        setHav_2(moment(cliHistoryObj?.hav_2).format("YYYY-MM-DD"));
        setHav_3(moment(cliHistoryObj?.hav_3).format("YYYY-MM-DD"));
        setDpt_1(moment(cliHistoryObj?.dpt_1).format("YYYY-MM-DD"));
        setDpt_2(moment(cliHistoryObj?.dpt_2).format("YYYY-MM-DD"));
        setDpt_3(moment(cliHistoryObj?.dpt_3).format("YYYY-MM-DD"));
        setHpv_1(moment(cliHistoryObj?.hpv_1).format("YYYY-MM-DD"));
        setHpv_2(moment(cliHistoryObj?.hpv_2).format("YYYY-MM-DD"));
        setHpv_3(moment(cliHistoryObj?.hpv_3).format("YYYY-MM-DD"));
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

useEffect(()=>{
    if(preTreatObj){
        setOralAsaName(preTreatObj?.oralAsa?.name);
        setOralAsaDose(preTreatObj?.oralAsa?.dose);
        setOralAsaStart(moment(preTreatObj?.oralAsa?.start).format("YYYY-MM-DD"));
        setOralAsaEnd(moment(preTreatObj?.oralAsa?.end).format("YYYY-MM-DD"));
        
        setRectalSuppositoryName(preTreatObj?.rectalSuppository?.name);
        setRectalSuppositoryDose(preTreatObj?.rectalSuppository?.dose);
        setRectalSuppositoryStart(moment(preTreatObj?.rectalSuppository?.start).format("YYYY-MM-DD"));
        setRectalSuppositoryEnd(moment(preTreatObj?.rectalSuppository?.end).format("YYYY-MM-DD"));

        setReacalFoamName(preTreatObj?.reacalFoam?.name);
        setReacalFoamDose(preTreatObj?.reacalFoam?.dose);
        setReacalFoamStart(moment(preTreatObj?.reacalFoam?.start).format("YYYY-MM-DD"));
        setReacalFoamEnd(moment(preTreatObj?.reacalFoam?.end).format("YYYY-MM-DD"));

        setOralSteroidsName(preTreatObj?.oralSteroids?.name);
        setOralSteroidsDose(preTreatObj?.oralSteroids?.dose);
        setOralSteroidsStart(moment(preTreatObj?.oralSteroids?.start).format("YYYY-MM-DD"));
        setOralSteroidsEnd(moment(preTreatObj?.oralSteroids?.end).format("YYYY-MM-DD"));
        
        setIvSteroidsName(preTreatObj?.ivSteroids?.name);
        setIvSteroidsDose(preTreatObj?.ivSteroids?.dose);
        setIvSteroidsStart(moment(preTreatObj?.ivSteroids?.start).format("YYYY-MM-DD"));
        setIvSteroidsEnd(moment(preTreatObj?.ivSteroids?.end).format("YYYY-MM-DD"));

        setEntofoamName(preTreatObj?.entofoam?.name);
        setEntofoamDose(preTreatObj?.entofoam?.dose);
        setEntofoamStart(moment(preTreatObj?.entofoam?.start).format("YYYY-MM-DD"));
        setEntofoamEnd(moment(preTreatObj?.entofoam?.end).format("YYYY-MM-DD"));

        setAzaName(preTreatObj?.aza?.name);
        setAzaDose(preTreatObj?.aza?.dose);
        setAzaStart(moment(preTreatObj?.aza?.start).format("YYYY-MM-DD"));
        setAzaEnd(moment(preTreatObj?.aza?.end).format("YYYY-MM-DD"));

        setMpName(preTreatObj?.mp?.name);
        setMpDose(preTreatObj?.mp?.dose);
        setMpStart(moment(preTreatObj?.mp?.start).format("YYYY-MM-DD"));
        setMpEnd(moment(preTreatObj?.mp?.end).format("YYYY-MM-DD"));

        setTgName(preTreatObj?.tg?.name);
        setTgDose(preTreatObj?.tg?.dose);
        setTgStart(moment(preTreatObj?.tg?.start).format("YYYY-MM-DD"));
        setTgEnd(moment(preTreatObj?.tg?.end).format("YYYY-MM-DD"));

        setInfliximabName(preTreatObj?.infliximab?.name);
        setInfliximabDose(preTreatObj?.infliximab?.dose);
        setInfliximabStart(moment(preTreatObj?.infliximab?.start).format("YYYY-MM-DD"));
        setInfliximabEnd(moment(preTreatObj?.infliximab?.end).format("YYYY-MM-DD"));

        setAdalimumabName(preTreatObj?.adalimumab?.name);
        setAdalimumabDose(preTreatObj?.adalimumab?.dose);
        setAdalimumabStart(moment(preTreatObj?.adalimumab?.start).format("YYYY-MM-DD"));
        setAdalimumabEnd(moment(preTreatObj?.adalimumab?.end).format("YYYY-MM-DD"));

        setVedolizumabName(preTreatObj?.vedolizumab?.name);
        setVedolizumabDose(preTreatObj?.vedolizumab?.dose);
        setVedolizumabStart(moment(preTreatObj?.vedolizumab?.start).format("YYYY-MM-DD"));
        setVedolizumabEnd(moment(preTreatObj?.vedolizumab?.end).format("YYYY-MM-DD"));

        setUstekinumabName(preTreatObj?.ustekinumab?.name);
        setUstekinumabPose(preTreatObj?.ustekinumab?.dose);
        setUstekinumabStart(moment(preTreatObj?.ustekinumab?.start).format("YYYY-MM-DD"));
        setUstekinumabEnd(moment(preTreatObj?.ustekinumab?.end).format("YYYY-MM-DD"));

        setTofacitinibName(preTreatObj?.tofacitinib?.name);
        setTofacitinibPose(preTreatObj?.tofacitinib?.dose);
        setTofacitinibStart(moment(preTreatObj?.tofacitinib?.start).format("YYYY-MM-DD"));
        setTofacitinibEnd(moment(preTreatObj?.tofacitinib?.end).format("YYYY-MM-DD"));

        setFmtName(preTreatObj?.fmt?.name);
        setFmtPose(preTreatObj?.fmt?.dose);
        setFmtStart(moment(preTreatObj?.fmt?.start).format("YYYY-MM-DD"));
        setFmtEnd(moment(preTreatObj?.fmt?.end).format("YYYY-MM-DD"));

        setOther(preTreatObj?.other);
        setAsa(preTreatObj?.asa);
        setPreSurgery(preTreatObj?.preSurgery);
        setSergeryDate(moment(preTreatObj?.sergeryDate).format("YYYY-MM-DD"));
        setTypeSurgery(preTreatObj?.typeSurgery);
    }
   },[preTreatObj]);

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
    }
  },[nutritionObj]);

  useEffect(()=>{
    if(investigationObj){
      setHb(investigationObj?.hb);
      setHbsAg(investigationObj?.hbsAg);
      setMcv(investigationObj?.mcv);
      setHiv(investigationObj?.hiv);
      setTlc(investigationObj?.tlc);
      setAntiHcv(investigationObj?.antiHcv);
      setPlt(investigationObj?.plt);
      setEbVcaLgm(investigationObj?.ebVcaLgm);
      setEsr(investigationObj?.esr);
      setEbVcaLgg(investigationObj?.ebVcaLgg);
      setCrpQuanti(investigationObj?.crpQuanti);
      setEbvEbna(investigationObj?.ebvEbna);
      setCmvLgm(investigationObj?.cmvLgm);
      setCmvLgg(investigationObj?.cmvLgg);
      setAst(investigationObj?.ast);
      setFecalCalpro(investigationObj?.fecalCalpro);
      setAlt(investigationObj?.alt);
      setStoolRoutine(investigationObj?.stoolRoutine);
      setAlp(investigationObj?.alp);
      setStoolCulture(investigationObj?.stoolCulture);
      setAlbumin(investigationObj?.albumin);
      setStoolGdh(investigationObj?.stoolGdh);
      setIron(investigationObj?.iron);
      setStoolDiffToxin(investigationObj?.stoolDiffToxin);
      setTibc(investigationObj?.tibc);
      setStoolDiffPcr(investigationObj?.stoolDiffPcr);
      setFerritin(investigationObj?.ferritin);
      setStoolBiofilm(investigationObj?.stoolBiofilm);
      setCa(investigationObj?.ca);
      setTpmp(investigationObj?.tpmp);
      setMg(investigationObj?.mg);
      setNdut(investigationObj?.ndut);
      setVitad(investigationObj?.vitad);
      setTgn(investigationObj?.tgn);
      setRbs(investigationObj?.rbs);
      setMmpr(investigationObj?.mmpr);
      setAscaLga(investigationObj?.ascaLga);
      setChestXRay(investigationObj?.chestXRay);
      setAskalgg(investigationObj?.askalgg);
      setXRayAbdomen(investigationObj?.xRayAbdomen);
      setVitaminb12(investigationObj?.vitaminb12);
      setMicrobiota(investigationObj?.microbiota);
      setPanca(investigationObj?.panca);
      setFolate(investigationObj?.folate);
      setUrea(investigationObj?.urea);
      setVzvAntibody(investigationObj?.vzvAntibody);
      setCreatinine(investigationObj?.creatinine);
      setMantoux(investigationObj?.mantoux);
      setCtAbdomen(investigationObj?.ctAbdomen);
      setNancyIndex(investigationObj?.nancyIndex);
      setCtChest(investigationObj?.ctChest);
      setRhi(investigationObj?.rhi);
      setMriAbdomen(investigationObj?.mriAbdomen);
      setGeboeScore(investigationObj?.geboeScore);
      setSimplifiedMARIA(investigationObj?.simplifiedMARIA);
      setClermontScore(investigationObj?.clermontScore);
      setMicrobiota_2(investigationObj?.microbiota_2);
    }
},[investigationObj]);

useEffect(() => {
    if (treatmentObj) {
      setOralAsa(treatmentObj?.oralAsa);
      setRectalAsa(treatmentObj?.rectalAsa);
      setAza(treatmentObj?.aza);
      setMp(treatmentObj?.mp);
      setPrednisolone(treatmentObj?.prednisolone);
      setInfliximab(treatmentObj?.infliximab);
      setBudesonide(treatmentObj?.budesonide);
      setRectalSteroids(treatmentObj?.rectalSteroids);
      setAdalimunab(treatmentObj?.adalimunab);
      setVedolizumab(treatmentObj?.vedolizumab);
      setCyclosporine(treatmentObj?.cyclosporine);
      setUstekinumab(treatmentObj?.ustekinumab);
      setTofacitinib(treatmentObj?.tofacitinib);
      setTacrolimus(treatmentObj?.tacrolimus);
      setProbiotics(treatmentObj?.probiotics);
      setFilgotinib(treatmentObj?.filgotinib);
      setSession_1(moment(treatmentObj?.session_1).format("YYYY-MM-DD"));
      setSession_2(moment(treatmentObj?.session_2).format("YYYY-MM-DD"));
      setSession_3(moment(treatmentObj?.session_3).format("YYYY-MM-DD"));
      setSession_4(moment(treatmentObj?.session_4).format("YYYY-MM-DD"));
      setSession_5(moment(treatmentObj?.session_5).format("YYYY-MM-DD"));
      setSession_6(moment(treatmentObj?.session_6).format("YYYY-MM-DD"));
      setSession_7(moment(treatmentObj?.session_7).format("YYYY-MM-DD"));
      setSession_8(moment(treatmentObj?.session_8).format("YYYY-MM-DD"));
      setSession_9(moment(treatmentObj?.session_9).format("YYYY-MM-DD"));
      setSession_10(moment(treatmentObj?.session_10).format("YYYY-MM-DD"));
      setSession_11(moment(treatmentObj?.session_11).format("YYYY-MM-DD"));
      setSession_12(moment(treatmentObj?.session_12).format("YYYY-MM-DD"));
      setSurgery(treatmentObj?.surgery);
      setSpecify(treatmentObj?.specify);
    }
}, [treatmentObj]);

useEffect(() =>{
    if(infectionObj){
      setRespiratory(infectionObj?.respiratory);
      setEnt(infectionObj?.ent);
      setSkin(infectionObj?.skin);
      setTb(infectionObj?.tb);
      setGenitourinary(infectionObj?.genitourinary);
      setGastrointestinal(infectionObj?.gastrointestinal);
      setSpecificToIbd(infectionObj?.specificToIbd);
      setNeurological(infectionObj?.neurological);
      setMiscellaneous(infectionObj?.miscellaneous);
    }
},[infectionObj]);

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">
          <h5 className="mb-0 text-center text-white">
          Patient Personal Details
          </h5>
          </div>
          <div className="col-lg-4 text-end">
            <div className='btnlist'>
                {/* <Link class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="wrapper_contentbody">
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row mb-3'>
                        <div className='heaind text-center'>
                            <h3></h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>CCF ID </b> <span>: {ccfId}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Name of Patient </b> <span>: {patientName}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Age </b> <span>: {age}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Mrd No. </b> <span>: {mrdNo}</span></label>
                                   
                                </div>
                                <div className='from-group'>
                                    <label><b>Phone No. </b> <span>: {phoneNo}</span></label>
                                    
                                </div>
                                <div className='from-group'>
                                    <label><b>Email. </b> <span>: {email}</span></label>
                            
                                </div>
                                {/* <div className='from-group'>
                                    <label><b>Password. </b> <span>: {password}</span></label>
                                </div> */}
                                <div className='from-group'>
                                <label><b>Doctor </b> <span>: {doctor}</span></label>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label><b>Date of Enrollment </b><span>: {enrollDate}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Father/Husband’s Name</b><span>: {parentName}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Sex  </b><span>: {sex}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Diagnosis Year </b><span>: {diagnosisYear}</span></label>
                                </div>
                                <div className='from-group'>
                                    <label><b>Diagnosis Month</b><span>: {diagnosisMonth}</span></label>
                                </div>
                                <div className='from-group'>
                                <label><b>Disease </b> <span>: {disease} {indiDisease}</span></label>
                                </div>
                                {/* <div className='from-group'>
                                    <label><b>Confirm Password. </b> <span>: {conPassword}</span></label>
                                </div> */}
                            </div>
                        </div>
                        <div className='col-lg-12'>
                        <div className='from-group addlist-frm'>
                            <label><b>Address Line 1 </b><span>: {addressLine}</span></label>
                        </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-12 mb-4'>
                            <div className='statusheading text-center'>
                                <h4>Kuppuswamy’s Socioeconomic status Scale</h4>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label><b>Eduation of the Head : </b> {educationHead}</label>                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label><b>Monthly Family Income : </b> {monthlyIncome}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label><b>Occupation of the Head : </b> {occupationHead}</label>
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                            <div className='from-group'>
                                <label><b>Socio Economic Status  </b><span>: {socioEconomy}</span></label>
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                        <div className='from-group'>
                                <label><b>Total Score  </b><span>: {totalScore}</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                <label><b>Diarrhoea :</b> {diarrhoea}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Nocurnal Diarrhoea :</b> {nocurnalDiarrhoea}</label>                          
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Blood in Stools :</b> {bloodStools}</label>                       
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Urgency :</b> {urgency}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Incontinence :</b> {incontinence}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Tenesmus :</b> {tenesmus}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Pain Abdomen :</b> {painAbdomen}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Fever :</b> {fever}</label>
                           
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Loss of Appetite :</b> {lossAppetite}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Weight Loss :</b> {weightLoss}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Fatigue :</b> {fatigue}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Other :</b> {clinicalOther}</label>
                             
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
                                <label><b>Arthralgias :</b> {arthralgias}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Arthritis :</b> {arthritis}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Nephrolithiasis :</b> {nephrolithiasis}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>PSC :</b> {psc}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Ankylosing Spondylitis :</b> {ankylosing}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Anemia :</b> {anemia}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Erythema Nodosum  :</b> {erythema}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Pyoderma Gangrenosum :</b> {pyoderma}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Episcleritis :</b> {episcleritis}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Osteoporosis :</b> {osteoporosis}</label>
                           
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Gallstones :</b> {gallstones}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>DVT  :</b> {dvt}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Other :</b> {intestinalOther}</label>
                              
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
                                <label><b>TB :</b> {tb}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Chicken Pox (varicella) :</b> {varicella}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>HBV  :</b> {hbv}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>HCV  :</b> {hcv}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>HIV :</b> {hiv}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Hospitalization :</b> {hospitalization}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>NSAID’s use  :</b> {nsaidUse}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Antibiotics use  :</b> {antibiotics}</label>
                              
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
                                <label><b>Diabetes :</b> {diabetes}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label><b>Hypertension  :</b> {hypertension}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Hypothyroidism :</b> {hypothyroidism}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Hyperthyroidism  :</b> {hyperthyroidism}</label>
                            
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CAD :</b> {cad}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>COAD :</b> {coad}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CVA :</b> {cva}</label>
                            
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CKD  :</b> {ckd}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>CLD :</b> {cld}</label>
                            
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Surgery :</b> {surgery}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b>Other  :</b> {morbiditiesOther}</label>
                                
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
                                <label><b>Crohn's :</b> {crohn}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label><b>Ulcerative Colitis (UC) :</b> {ulcerative}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Relationship :</b> {relationship}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Relationship :</b> {relationship_2}</label>
                               
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
                                <label><b>Smoking :</b> {smoking}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label><b>IVDU :</b> {ivdu}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Opium :</b> {opium}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Alcohol :</b> {alcohol}</label>
                                
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
                                <label><b>Dose-1 :</b> {hbv_1}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {hbv_2}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {hbv_3}</label>
                               
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Pneumococcal</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {pneumococcal_1}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {pneumococcal_2}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {pneumococcal_3}</label>
                           
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Influenza</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {influenza_1}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {influenza_2}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {influenza_3}</label>
                               
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>MMR</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {mmr_1}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {mmr_2}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {mmr_3}</label>
                               
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>BCG</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {bcg_1}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {bcg_2}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {bcg_3}</label>
                               
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>VZV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {vzv_1}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {vzv_2}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {vzv_3}</label>
                              
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HAV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {hav_1}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {hav_2}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {hav_3}</label>
                               
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>DPT</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {dpt_1}</label>
                                
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {dpt_2}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {dpt_3}</label>
                            
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HPV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-1 :</b> {hpv_1}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Dose-2 :</b> {hpv_2}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label><b>Booster Dose :</b> {hpv_3}</label>
                              
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
                                <label><b>E1/E2/E3 :</b> {diseaseExtent}</label>
                               
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
                                <label><b>Stool Frequency :</b> {stoolFrequency}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Rectal Bleeding :</b> {rectalBleeding}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Findings on Endoscopy :</b> {findEndoscopy}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Physician's Global Assessment :</b> {physicianGlobal}</label>
                               
                            </div>
                        </div>
                    </div>

                    <div className='row darkinput'>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Mayo Score: Total disease activity (=Sum of item scores) :</b> {totaldisease}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label><b>Physician's Global Assessment :</b> {globalAssessment}</label>
                               
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
                                <label><b>Vascular pattern :</b> {vascularPattern}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Erosions and ulcers :</b> {erosionUlcers}</label>
                             
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Bleeding :</b> {bleeding}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Total score :</b> {totalScore}</label>
                                
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
                                <label><b>Bowel Frequency(Per Day) :</b> {bowelFrequency}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Urgency Of Defecation :</b> {urgencyDefecation}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Bowel Frequency(Per Night) :</b> {bowelFrequency_2}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Blood In Stool :</b> {bloodStool}</label>
                              
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>General Well Being :</b> {generalBeing}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Extracolonic Manifestations :</b> {manifestations} </label>
                              
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label><b>Total score :</b> {totalScore_2}</label>
                               
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    </div>
    
    <div className='pading40'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 heaind text-center'>
                        <h3>Previous Treatment</h3>
                    </div>
                </div>
            </div>
    </div>
    <div className='tratement_body-heading'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <h6>Name</h6>
                    </div>
                    <div className='col'>
                    <h6>Dose</h6>
                    </div>
                    <div className='col'>
                    <h6>Date Of Start</h6>
                    </div>
                    <div className='col'>
                    <h6>Date Of End</h6>
                    </div>
                </div>
            </div>
    </div>
    <div className='tratement_body mt-2 pb-5'>
            <div className='container-fluid'>
                <div className='row addlist-frm align-items-center'>
                    <div className='col'>
                        <div>
                            <h3>Oral 5-ASA</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <span> {oralAsaName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {oralAsaDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {oralAsaStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {oralAsaEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal 5-ASA Suppository</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span> {rectalSuppositoryName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {rectalSuppositoryDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {rectalSuppositoryStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {rectalSuppositoryEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal 5-ASA Foam</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span> {reacalFoamName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {reacalFoamDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {reacalFoamStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {reacalFoamEnd}</span>
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Oral steroids </h3> 
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span> {oralSteroidsName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {oralSteroidsDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {oralSteroidsStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {oralSteroidsEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>I/V steroids</h3>     
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                        <span> {ivSteroidsName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {ivSteroidsDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {ivSteroidsStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {ivSteroidsEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal steroids (Entofoam)</h3>
                        </div>
                    </div>  
                    <div className='col'>
                        <div className='form-group'>
                        <span> {entofoamName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {entofoamDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {entofoamStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {entofoamEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>AZA</h3>
                        </div>
                    </div>
                    <div className='col'> 
                        <div className='form-group'>
                        <span> {azaName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {azaDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {azaStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {azaEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>6-MP</h3>
                        </div>
                    </div>
                    <div className='col'> 
                        <div className='form-group'>
                        <span> {mpName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {mpDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {mpStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {mpEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>6-TG</h3>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tgName}</span>   
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tgDose}</span>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tgStart}</span>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tgEnd}</span>
                    </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Infliximab</h3>
                        </div>
                    </div>
                    <div className='col'>  
                    <div className='form-group'>
                    <span> {infliximabName}</span>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {infliximabDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {infliximabStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {infliximabEnd}</span>
                    </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Adalimumab</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                        <span> {adalimumabName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {adalimumabDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {adalimumabStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {adalimumabEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Vedolizumab</h3>
                        </div>
                    </div>
                    <div className='col'>  
                        <div className='form-group'>
                        <span> {vedolizumabName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {vedolizumabDose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {vedolizumabStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {vedolizumabEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Ustekinumab </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                        <span> {ustekinumabName}</span>   
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {ustekinumabPose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {ustekinumabStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {ustekinumabEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Tofacitinib </h3>
                        </div>
                    </div>
                    <div className='col'>       
                        <div className='form-group'>
                        <span> {tofacitinibName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tofacitinibPose}</span>
                    </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tofacitinibStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {tofacitinibEnd}</span>
                      
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>FMT </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'> 
                        <span> {fmtName}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {fmtPose}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {fmtStart}</span>
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                    <span> {fmtEnd}</span>
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm mt-3'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-5 ps-5'>
                        <div className='from-group'>
                            <label><b>Other :</b> {other}</label>
                        </div>
                    </div>
                    <div className='col-lg-5'>
                    <div className='from-group'>
                            <label><b>5-ASA : </b> {asa}</label>
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm mt-3 justify-content-end'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-4 ps-5'>
                        <div className='form-group'>
                            <label><b>Previous surgery :</b> {preSurgery}</label>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label><b>If Yes :</b> {sergeryDate}</label>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label><b>Type of surgery </b>: {typeSurgery}</label> 
                        </div>
                    </div>
                </div>
            </div>
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
                    <label><b>Numbness :</b> {numbness}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Tingling sensation :</b> {tinglingSensation}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Burning :</b> {burning}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Reduced sensation :</b> {reducedsensation}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Imbalance :</b> {imbalance}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Infertility :</b> {infertility}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Bony pains / Fractures :</b> {bonyPains}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Disturbed smell and taste :</b> {disturbedSmell}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Poor wound healing :</b> {poorwound}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Night blindness / Dryness of eyes :</b> {nightBlindness}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Oral ulcers :</b> {oralUlcers}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Bleeding tendencies / bleeding gums :</b> {bleedingTend}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Fatigue :</b> {fatigue}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Diet Pattern :</b> {dietPattern}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Height (in cms) :</b> {height}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Weight (in Kg) :</b> {weight}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>BMI :</b> {bmi}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Mid arm circumference :</b> {midarmCurcum}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>MUST :</b> {must}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>MIRT :</b> {mirt}</label>  
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>NRS 2002 :</b> {nrs2002}</label>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label><b>Hand grip strength :</b> {handGrip}</label>
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
                            <label><b>Triceps Skin fold Thickness :</b> {tricepSkin}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Total body fat percentage :</b> {bodyFatPercent}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Visceral Fat :</b> {visceralFat}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Resting metabolism :</b> {restingmetaboli}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Body age :</b> {bodyAge}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat (whole body )percentage :</b> {subcutaWholebody}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat percentage (trunk) :</b> {subcutaTrunk}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat percentage (arms) :</b> {subcutaArms}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Subcutaneous fat percentage (legs) :</b> {subcutaLegs}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscles (whole body) :</b> {skeMuscelBody}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscle (trunk) :</b> {skeMuscelTrunk}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscle (arms) :</b> {skeMuscelArms}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Skeletal muscle (legs) :</b> {skeMuscelLegs}</label>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
                <div className="row addlist-frm">
                    <div className="col-lg-12 mb-1">
                        <div className='clinical'>
                            <h5>CT SMI</h5>
                        </div>
                    </div> 
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>CT skeletal muscle area :</b> {ctSkeletal}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Mercuri stage :</b> {mercuriStage}</label>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label><b>Mean attenuation value :</b> {meanAttenuation}</label>
                        </div>
                    </div> 
                </div>
            </div>
          </div>  
        </div>
    </div>

    <div className="wrapper_contentbody">
       <div className='container-fluid'>
       <div className="row">
            <div className="col-lg-12 heaind text-center">
              <h3>Investigations</h3>
            </div>
          </div>
        <div className='row justify-content-center addlist-frm mt-3'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>HB :</b> {hb}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>HBsAg :</b> {hbsAg}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>MCV :</b> {mcv}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>HIV :</b> {tbInfection}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>TLC :</b> {tlc}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>AntiHCV :</b> {antiHcv}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>PLT :</b> {plt}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>EBV-VCA IgM :</b> {ebVcaLgm}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ESR :</b> {esr}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>EBV-VCA IgG :</b> {ebVcaLgg}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CRP Quantitative :</b> {crpQuanti}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>EBV-EBNA IgG :</b> {ebvEbna}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CMV-IgM :</b> {cmvLgm}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CMV-Ig G :</b> {cmvLgg}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>AST :</b> {ast}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Fecal Calprotactin :</b> {fecalCalpro}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ALT :</b> {alt}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool Routine :</b> {stoolRoutine}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ALP :</b> {alp}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool Culture :</b> {stoolCulture}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Albumin :</b> {albumin}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool GDH :</b> {stoolGdh}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Iron :</b> {iron}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool-C-Diff-Toxin :</b> {stoolDiffToxin}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>TIBC :</b> {tibc}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool-C-Diff-PCR :</b> {stoolDiffPcr}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Ferritin :</b> {ferritin}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool Biofilm :</b> {stoolBiofilm}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Ca+ :</b> {ca}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>TPMT :</b> {tpmp}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Mg :</b> {mg}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>NDUT-15 :</b> {ndut} </label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Vita-D :</b> {vitad}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>6-TGN :</b> {tgn}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>RBS :</b> {rbs}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>6-MMPR :</b> {mmpr}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ASCA IgA :</b> {ascaLga} </label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Chest X-ray :</b> {chestXRay}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ASCA IgG :</b> {askalgg}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>X-ray Abdomen :</b> {xRayAbdomen}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Vitamin B12 :</b> {vitaminb12}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Microbiota :</b> {microbiota} </label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>P-ANCA :</b> {panca}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Folate :</b> {folate} </label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Urea :</b> {urea}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>VZV Antibody :</b> {vzvAntibody}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Creatinine :</b> {creatinine}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Mantoux :</b> {mantoux}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CT Abdomen :</b> {ctAbdomen}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Nancy Index :</b> {nancyIndex}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CT Chest :</b> {ctChest}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>RHI :</b> {rhi}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>MRI Abdomen :</b> {mriAbdomen}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Geboe's Score :</b> {geboeScore}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Simplified MARIA score :</b> {simplifiedMARIA}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Clermont Score :</b> {clermontScore}</label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Microbiota :</b> {microbiota_2}</label>
                  </div>
                </div>
              </div>
            </div>
        </div>
       </div>
    </div>

    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
        <div className="col-lg-12 heaind text-center">
            <h3>Treatment</h3>
        </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Oral 5-ASA :</b> {oralAsa} </label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Rectal 5ASA :</b> {rectalAsa}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>AZA :</b> {aza}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>6-MP :</b> {mp}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Prednisolone :</b> {prednisolone}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Infliximab :</b> {infliximab }</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Budesonide :</b> {budesonide} </label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Rectal Steroids :</b> {rectalSteroids}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Adalimunab :</b> {adalimunab}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Vedolizumab :</b> {vedolizumab}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Cyclosporine :</b> {cyclosporine}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Ustekinumab :</b> {ustekinumab}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Tofacitinib :</b> {tofacitinib}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Tacrolimus :</b> {tacrolimus}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Probiotics :</b> {probiotics}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Filgotinib :</b> {filgotinib}</label>
                </div>
              </div> 
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12 mb-1'>
                    <div className='clinical'>
                        <h5><b>FMT Session</b></h5>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 1 :</b> {session_1}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 2 :</b> {session_2}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                      <label><b>Session 3 :</b> {session_3}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 4 :</b> {session_4}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 5 :</b> {session_5}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 6 :</b> {session_6}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 7 :</b> {session_7}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 8 :</b> {session_8}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 9 :</b> {session_9}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 10 :</b> {session_10}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 11 :</b> {session_11}</label>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 12 :</b> {session_12}</label>
                    </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label><b>Surgery :</b> {surgery}</label>
                </div>
              </div>
                <div className='col-lg-6'>
                <div className='from-group'>
                  <label><b>If Yes :</b> {specify}</label>
                </div>
              </div>
            </div>
          </div>
      </div>
     </div>
    </div>

    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Infections</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Respiratory </b>: {respiratory}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>ENT</b> : {ent}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                <label><b>Skin</b> : {skin}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>TB</b> : {tbInfection}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Genitourinary :</b> {genitourinary} </label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Gastrointestinal : </b> {gastrointestinal}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Specific to IBD :</b> {specificToIbd}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Neurological :</b> {neurological}</label>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label><b>Miscellaneous : </b> {miscellaneous}</label>
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
export default ShowpatientDetail;