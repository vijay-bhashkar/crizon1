import React, { useState, useEffect } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'; 
import { FOLLOWUPAdd, FOLLOWUPGet, SETFOLLOWUPObj, FOLLOWUPUpdate, FOLLOWUPDelete } from "../../redux/actions/FollowUp/FollowUp.actions";
import { DEMOGRAFICGet } from "../../redux/actions/Demografic/Demografic.actions";
export const Viewfollowup = () => {
    
    useEffect(() => {
        dispatch(DEMOGRAFICGet());
    }, []);

    const [patientId, setPatientId] = useState("");
    const [patientName, setPatientName] = useState("");
    const [ccfIdName, setCcfIdName] = useState("");
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
    const [patientSetName, setPatientSetName] = useState("");

    const dispatch = useDispatch();
    const followupObj = useSelector((states) => states.followup.followupObj);
    const patientArr = useSelector((states) => states.demografic.demografics);
    // console.log(patientArr , "patientArr");

useEffect(()=>{
    if(followupObj){

    // console.log(followupObj?.patientId,"followupObj?.patientI")
    setPatientId(followupObj?.patientId);
    setPatientName(followupObj?.patientName);
    setCcfIdName(followupObj?.ccfIdName);
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

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
           
          </div>
          <div className="col-lg-5">
            <h5 className="mb-0 text-center text-white">
             Followup (ULCERATIVE COLITIES DISEASE)
            </h5>
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
                  <label><b>Patient ID  : </b>{ccfIdName}</label><br/>
                  <label><b>Patient Name  : </b>{patientName}</label>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label><b>Date of Followup* : </b> {followupDate}</label>
                
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <h6 className='mt-4'>Mayo Scoring System For Assessment of Ulcerative Colitis Activity</h6>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label><b>Disease Extent  : </b> {diseaseExtend}</label>
              
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label><b>Stool Frequency : </b> {stoolFreq}</label>
                 
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label><b>Rectal Bleeding : </b> {rectalBleeding}</label>
                  
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label><b>Findings on Endoscopy : </b> {findEndoscope}</label>
               
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label><b>Physician's Global Assessment : </b> {phyAssess1}</label>
                
                </div>
              </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                        <label><b>Mayo Score: Total disease activity (=Sum of item scores) : </b> </label>
                    <div className='row darkinput'>
                        <div className='col-lg-6'>
                            <span>{mayoScore1}</span>
                        </div>
                        <div className='col-lg-6'>
                            <span>{mayoScore2}</span>
                        </div>
                    </div>
                    <div className='col-lg-12 mt-2'>
                        <div className='from-group darkinput'>
                            <label><b>Partial Mayo Score: Without Findings on endoscopy : </b> {mayoScore3}</label>
                          
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <h6 className='mt-4'>UCEIS Score</h6>
                    </div>
                    <div className='from-group mt-4'>
                        <label className='mb-2'><b>Physician's Global Assessment : </b> {phyAssess2}</label>
                        
                    </div>
                    <div className='from-group'>
                        <label className='mb-2'><b>Physician's Global Assessment : </b> {phyAssess3}</label>
                       
                    </div>
                    <div className='from-group'>
                        <label className='mb-2'><b>Physician's Global Assessment : </b> {phyAssess4}</label>
                       
                    </div>
                    <div className='from-group darkinput'>
                        <label className='mb-2'><b>Total score : </b> {totalScore1}</label>
                      
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <h6>SCCAI Score</h6>
                </div>
                <div className='col-lg-6'>
                     <div className='from-group'>
                        <label><b>Bowel Frequency(Per Day) : </b> {bowelDay}</label>
                      
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Height : </b> {height}</label>
                      
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Bowel Frequency(Per Night) : </b> {bowelNight}</label>
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Weight : </b> {weight}</label>  
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>General Well Being : </b> {genwellBeing}</label>
                    
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group darkinput'>
                        <label><b>BMI : </b> {bmi}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Urgency Of Defecation : </b> {urgencyDef}</label>
                      
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Handgrip Strength : </b> {handgrip}</label>
                  
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Blood In Stool : </b> {bloodStool}</label>
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Nancy Index : </b> {nancyIndex}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Extracolonic Manifestations : </b> {extracolonic}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>RHI : </b> {rhi}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group darkinput'>
                        <label><b>Total score : </b> {totalScore2}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Geboe’s Score : </b> {geboeScore}</label>
                     
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='from-group'>
                                <label><b>MIRT : </b> {mirt}</label>
                               
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='from-group'>
                                <label><b>MUST : </b> {must}</label>
                            
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
                        <label><b>Triceps skin fold thickness : </b> {tricepSkin}</label>
                      
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Total body fat percentage : </b> {totalBodyFat}</label>
                   
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Visceral Fat : </b> {visceral}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Resting metabolism : </b> {restingMetabol}</label>
                    
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Body age : </b> {bodyAge}</label>
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Subcutaneous fat (whole body )percentage : </b> {subcutWholebody}</label>
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Subcutaneous fat percentage (trunk) : </b> {subcutTrunk}</label>
                      
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Subcutaneous fat percentage (arms) : </b> {subcutArms}</label>
                
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Subcutaneous fat percentage (legs) : </b> {subcutLegs}</label>
                    
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Skeletal muscles (whole body) : </b> {skeltalWhole}</label>
                      
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Skeletal muscle (trunk) : </b> {skeltalTrunk}</label>
                    
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Skeletal muscle (arms) : </b> {skeltalArms}</label>
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Skeletal muscle (legs) : </b> {skeltalLegs}</label>
                    
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Mid Arm Circumference : </b> {midarmCircum}</label>
                        
                    </div>
                </div>            
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>CT SMI</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>CT skeletal muscle area : </b> {skeltalMuscle}</label>
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Mercuri stage : </b> {mercuriStage}</label>
                     
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Mean attenuation value : </b> {meanAttenuation}</label>
                      
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h6>Investigations</h6>
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>HB : </b> {hb}</label>
                   
                        </div>     
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>6TGN : </b> {tgn}</label>
                          
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>MCV : </b> {mcv}</label>
                           
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>6MMPR : </b> {mmpr}</label>
                           
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>PLT : </b> {plt}</label>
                        
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>AST : </b> {ast}</label>
                       
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>hsCRP : </b> {hscrp}</label>
                        
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>ALT : </b> {alt}</label>
                          
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>Albumin : </b> {albumin}</label>
                          
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>ALP : </b> {alp}</label>
                           
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>ESP : </b> {esp}</label>
                            
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>Stool C-diff Toxin : </b> {stoolcdiff}</label>
                           
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>Fecal Calprotectin : </b> {fecalCalpro}</label>
                           
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>Stool routine : </b> {stoolRoutine}</label>
                           
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>Ferritin : </b> {ferritin}</label>
                          
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>EBV – VCA IgM : </b> {ebvca}</label>
                  
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label><b>CMV IgM : </b> {cmvIgm}</label>
                           
                        </div> 
                    </div>
            </div>

            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Treatment</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Oral 5ASA : </b> {oralAsa}</label>
                     
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Adalimumab : </b> {adalimumab}</label>
                      
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Rectal 5ASA : </b> {rectalAsa}</label>
                   
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Vedolizumab : </b> {vedolizumab}</label>
                       
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>AZA : </b> {aza}</label>
                      
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Cyclosporine : </b> {cycloporine}</label>
                      
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>6-MP : </b> {mp}</label>
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Ustekinumab : </b> {ustekinumab}</label>
                     
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Prednisolone : </b> {prednisolone}</label>
                       
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Tofacitinib : </b> {tofacitinib}</label>
                    
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Budesonide : </b> {budesonide}</label>
                     
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Tacrolimus : </b> {tacrolimus}</label>
                    
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Rectal Steroids : </b> {rectalSteroid}</label>
                     
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Filgotinib : </b> {filgotinib}</label>
                       
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Infliximab : </b> {infliximab}</label>
                      
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Probiotics : </b> {probiotics}</label>
                      
                    </div> 
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>FMT Session</h6>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 1 : </b> {session1}</label>
                    
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 2 : </b> {session2}</label>
                   
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 3 : </b> {session3}</label>
                      
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 4 : </b> {session4}</label>
                      
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 5 : </b> {session5}</label>
                      
                    </div>
                </div>   
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 6 : </b> {session6}</label>
                      
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 7 : </b> {session7}</label>
                  
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 8 : </b> {session8}</label>
                   
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 9 : </b> {session9}</label>
                      
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 10 : </b> {session10}</label>
                 
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 11 : </b> {session11}</label>
                    
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label><b>Session 12 : </b> {session12}</label>
                     
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Surgery Advised</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Surgery : </b> {surgery}</label>
                    
                    </div>
                </div>
                <div className='col-lg-6'>
                     <div className='from-group'>
                        <label><b>If Surgery Yes : </b> {ifSurgery}</label>
                      
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Adverse Events to Drugs</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>5-ASA : </b> {adverseAsa}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Steroids : </b> {adverseSteroids}</label>
                       
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Infliximab/ Adalimumab : </b> {adverseInfliximab}</label>
                        
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>Tofacitinib : </b> {adverseTofacitinib}</label>
                        
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label><b>AZA/6-MP : </b> {adverseAza}</label>
                        
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
