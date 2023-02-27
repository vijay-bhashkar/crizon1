import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

export const ViewLeverFollowUp = () => {
    
    const dispatch = useDispatch();

    const leverFolloObj = useSelector((states) =>states.leverFollowup.leverfollowupObj);

    const [name, setName] = useState("");
    const [enrollDate, setEnrollDate] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [bmi, setBmi] = useState("");
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
    const [weight_2, setWeight_2] = useState("");
    const [height_2, setHeight_2] = useState("");
    const [bmi_2, setBmi_2] = useState("");
    const [bloodPressure, setBloodPressure] = useState("");
    const [hbsag, setHbsag] = useState("");
    const [antiLgmHav, setAntiLgmHav] = useState("");
    const [antiLgmHev, setAntiLgmHev] = useState("");
    const [hbvDna, setHbvDna] = useState("");
    const [ana, setAna] = useState("");
    const [ama, setAma] = useState("");
    const [antiHcv, setAntiHcv] = useState("");
    const [antiLkm, setAntiLkm] = useState("");
    const [antiSma, setAntiSma] = useState("");
    const [hcvrna, setHcvrna] = useState("");
    const [tsh, setTsh] = useState("");
    const [bldSugarf, setBldSugarf] = useState("");
    const [cerulopslamin, setCerulopslamin] = useState("");
    const [hiv, setHiv] = useState("");
    const [bldSugarpp, setBldSugarpp] = useState("");
    const [pt, setPt] = useState("");
    const [pti, setPti] = useState("");
    const [inr, setInr] = useState("");
    const [hb, setHb] = useState("");
    const [tlc, setTlc] = useState("");
    const [platelets, setPlatelets] = useState("");
    const [sbil, setSbil] = useState("");
    const [ast, setAst] = useState("");
    const [alt, setAlt] = useState("");
    const [albumin, setAlbumin] = useState("");
    const [globulin, setGlobulin] = useState("");
    const [sap, setSap] = useState("");
    const [ggt, setGgt] = useState("");
    const [bloodUrea, setBloodUrea] = useState("");
    const [creatinine, setCreatinine] = useState("");
    const [ferritin, setFerritin] = useState("");
    const [iron, setIron] = useState("");
    const [tibc, setTibc] = useState("");
    const [copper, setCopper] = useState("");
    const [others, setOthers] = useState("");
    const [triglyceride, setTriglyceride] = useState("");
    const [ldl, setLdl] = useState("");
    const [hdl, setHdl] = useState("");
    const [vldl, setVldl] = useState("");
    const [afp, setAfp] = useState("");
    const [endoscopy, setEndoscopy] = useState("");
    const [usgAbdomen, setUsgAbdomen] = useState("");
    const [fibroscan, setFibroscan] = useState("");
    const [biopsy, setBiopsy] = useState("");
    const [varices, setVarices] = useState("");
    const [grades, setGrades] = useState("");
    const [stomach, setStomach] = useState("");
    const [duodenum, setDuodenum] = useState("");
    const [liverSpan, setLiverSpan] = useState("");
    const [steatosis, setSteatosis] = useState("");
    const [splenomegaly, setSplenomegaly] = useState("");
    const [collaterals, setCollaterals] = useState("");
    const [pvDiameter, setPvDiameter] = useState("");
    const [ascites, setAscites] = useState("");
    const [sol, setSol] = useState("");
    const [cap, setCap] = useState("");
    const [ekpa, setEkpa] = useState("");
    const [hai, setHai] = useState("");
    const [stage, setStage] = useState("");
  
    useEffect(()=>{
        if(leverFolloObj){
            setName(leverFolloObj?.name);
            setEnrollDate(leverFolloObj?.enrollDate);
            setEmail(leverFolloObj?.email);
            setContact(leverFolloObj?.contact);
            setAge(leverFolloObj?.age);
            setGender(leverFolloObj?.gender);
            setHeight(leverFolloObj?.height);
            setWeight(leverFolloObj?.weight);
            setBmi(leverFolloObj?.bmi);
            setAsymptomatic(leverFolloObj?.asymptomatic);
            setMalaise(leverFolloObj?.malaise);
            setFatigue(leverFolloObj?.fatigue);
            setRuqPain(leverFolloObj?.ruqPain);
            setPruritus(leverFolloObj?.pruritus);
            setJaundice(leverFolloObj?.jaundice);
            setHepatitis(leverFolloObj?.hepatitis);
            setRecurrentFever(leverFolloObj?.recurrentFever);
            setPriorSurgery(leverFolloObj?.priorSurgery);
            setGiBleed(leverFolloObj?.giBleed);
            setAntiviralTherapy(leverFolloObj?.antiviralTherapy);
            setDrugUsed(leverFolloObj?.drugUsed) ;
            setDentalExposure(leverFolloObj?.dentalExposure) ;
            setRenalTx(leverFolloObj?.renalTx) ; 
            setAlcohol(leverFolloObj?.alcohol) ;
            setDay(leverFolloObj?.day) ;
            setWeek(leverFolloObj?.week) ;
            setYears(leverFolloObj?.years) ;
            setFamilyHistory(leverFolloObj?.familyHistory) ;
            setWeight_2(leverFolloObj?.weight_2) ;
            setHeight_2(leverFolloObj?.height_2) ;
            setBmi_2(leverFolloObj?.bmi_2) ;
            setBloodPressure(leverFolloObj?.bloodPressure) ;
            setHbsag(leverFolloObj?.hbsag) ;
            setAntiLgmHav(leverFolloObj?.antiLgmHav) ;
            setAntiLgmHev(leverFolloObj?.antiLgmHev) ;
            setHbvDna(leverFolloObj?.hbvDna) ;
            setAna(leverFolloObj?.ana) ; 
            setAma(leverFolloObj?.ama) ;
            setAntiHcv(leverFolloObj?.antiHcv) ;
            setAntiLkm(leverFolloObj?.antiLkm) ;
            setAntiSma(leverFolloObj?.antiSma) ;
            setHcvrna(leverFolloObj?.hcvrna) ;
            setTsh(leverFolloObj?.tsh) ;
            setBldSugarf(leverFolloObj?.bldSugarf) ;
            setCerulopslamin(leverFolloObj?.cerulopslamin) ;
            setHiv(leverFolloObj?.hiv) ;
            setBldSugarpp(leverFolloObj?.bldSugarpp) ;
            setPt(leverFolloObj?.pt) ;
            setPti(leverFolloObj?.pti) ;
            setInr(leverFolloObj?.inr) ;
            setHb(leverFolloObj?.hb) ;
            setTlc(leverFolloObj?.tlc) ;
            setPlatelets(leverFolloObj?.platelets) ;
            setSbil(leverFolloObj?.sbil) ;
            setAst(leverFolloObj?.ast) ;
            setAlt(leverFolloObj?.alt) ;
            setAlbumin(leverFolloObj?.albumin) ;
            setGlobulin(leverFolloObj?.globulin) ;
            setSap(leverFolloObj?.sap) ;
            setGgt(leverFolloObj?.ggt) ;
            setBloodUrea(leverFolloObj?.bloodUrea) ;
            setCreatinine(leverFolloObj?.creatinine) ;
            setFerritin(leverFolloObj?.ferritin) ;
            setIron(leverFolloObj?.iron) ;
            setTibc(leverFolloObj?.tibc) ;
            setCopper(leverFolloObj?.copper) ;
            setOthers(leverFolloObj?.others) ;
            setTriglyceride(leverFolloObj?.triglyceride) ;
            setLdl(leverFolloObj?.ldl) ;
            setHdl(leverFolloObj?.hdl) ;
            setVldl(leverFolloObj?.vldl) ;
            setAfp(leverFolloObj?.afp) ;
            setEndoscopy(leverFolloObj?.endoscopy) ;
            setUsgAbdomen(leverFolloObj?.usgAbdomen) ;
            setFibroscan(leverFolloObj?.fibroscan) ;
            setBiopsy(leverFolloObj?.biopsy) ;
            setVarices(leverFolloObj?.varices) ;
            setGrades(leverFolloObj?.grades) ;
            setStomach(leverFolloObj?.stomach) ;
            setDuodenum(leverFolloObj?.duodenum) ;
            setLiverSpan(leverFolloObj?.liverSpan) ;
            setSteatosis(leverFolloObj?.steatosis) ;
            setSplenomegaly(leverFolloObj?.splenomegaly) ;
            setCollaterals(leverFolloObj?.collaterals) ;
            setPvDiameter(leverFolloObj?.pvDiameter) ;
            setAscites(leverFolloObj?.ascites) ;
            setSol(leverFolloObj?.sol) ;
            setCap(leverFolloObj?.cap) ;
            setEkpa(leverFolloObj?.ekpa) ;
            setHai(leverFolloObj?.hai) ;
            setStage(leverFolloObj?.stage) ;
        }
    },[leverFolloObj]);

    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <h5 className="mb-0 text-center text-white">
                                Patient (LEVER DISEASE)
                            </h5>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className='btnlist'>
                                <Link to="/LeverFollowUp/viewfollowup" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
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
                                    <h3>Lever Patient Follow Up</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label><b>Name : </b><span> {name}</span></label>                                          
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Email: </b><span> {email}</span></label>                                           
                                        </div>

                                        <div className='from-group'>
                                            <label> <span><b>Age : </b>  {age}</span></label>                                          
                                        </div>
                                        <div className='from-group'>
                                            <label> <span><b>Height : </b>  {height} </span></label>                                           
                                        </div>
                                        <div className='from-group'>
                                            <label> <span><b>B.M.I : </b> {bmi}  </span></label>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label><b>Date of Enrollment: </b><span> {enrollDate}  </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Contact : </b> <span> {contact}  </span></label>
                                        </div>

                                        <div className='from-group'>
                                            <label><b>Gender: </b><span> {gender} </span></label>
                                        </div>

                                        <div className='from-group'>
                                            <label> <span><b>Weight: </b>  {weight}   </span></label>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className='col-lg-12'>
                                <div className='row mb-3'>
                                    <div className='heaind text-center pt-4'>
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
                                            <label><b>Asymptomatic : </b>  {asymptomatic}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Malaise : </b> {malaise} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Fatigue : </b>  {fatigue}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>RUQ pain : </b>  {ruqPain}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Pruritus : </b>  {pruritus}  </label>
                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Jaundice  : </b>  {jaundice} </label>
                                           
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
                                            <label><b>Viral hepatitis : </b>   {hepatitis}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Recurrent fever : </b>  {recurrentFever}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Prior surgery/Blood transfusions : </b>  {priorSurgery}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>GI Bleed : </b>  {giBleed}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Antiviral therapy & duration : </b>  {antiviralTherapy}  </label>
                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Drug used : </b> {drugUsed}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Dental exposure : </b> {dentalExposure} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Renal tx : </b> {renalTx}  </label>
                                           
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
                                            <label><b>Alcohol : </b>  {alcohol}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Gm/day : </b>  {day}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Days/Week : </b>  {week}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>No of yrs : </b>   {years}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Family History : </b>  {familyHistory}  </label>
                                            
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
                                            <label><b>Wt (Kg) : </b> {weight_2}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Ht (cm) : </b>  {height_2}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>BMI (Kg/cm2) : </b>  {bmi_2}  </label>
                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label> <b>Blood Pressure  : </b>  {bloodPressure}  </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-12'>
                                <div className='row mb-3'>
                                    <div className='heaind text-center'>
                                        <h3>Etiological work up</h3>
                                    </div>
                                </div>
                                <div className='row addlist-frm'>
                                    <div className='col-lg-12 mb-3'>
                                        <div className='clinical'>
                                
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>HBsAg : </b> {hbsag} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Anti IgM HAV : </b>  {antiLgmHav} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Anti IgM HEV : </b>  {antiLgmHev} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>HBV DNA c/ml : </b>   {hbvDna}  </label>
                                        
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>ANA  : </b>  {ana}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>AMA : </b>   {ama} </label>                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Anti HCV : </b>  {antiHcv} </label>                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Anti LKM  : </b>  {antiLkm} </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Anti SMA : </b>  {antiSma} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>HCVRNA  c/ml : </b> {hcvrna} </label>
                                         
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>T3/T4/TSH : </b>   {tsh} </label>
                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Bld Sugar F  : </b>  {bldSugarf} </label>
                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>S.Cerulopslamin  : </b>  {cerulopslamin} </label>
                                         
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>HIV : </b> {hiv}  </label>
                                        
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Bld Sugar PP : </b>  {bldSugarpp}  </label>
                                        
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>PT : </b>  {pt}  </label>
                                        
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>PTI : </b>  {pti}  </label>
                                      
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>INR  : </b>  {inr}  </label>
                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Hb : </b>  {hb}  </label>
                                        
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>TLC : </b>  {tlc} </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Platelets : </b>  {platelets}  </label>
                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>S.Bil : </b> {sbil} </label>
                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>AST : </b> {ast} </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>ALT : </b>  {alt} </label>
                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Albumin : </b> {albumin}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Globulin : </b>  {globulin} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>SAP : </b> {sap}   </label>
                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>GGT  : </b>  {ggt}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Blood Urea : </b> {bloodUrea}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>S creatinine : </b>   {creatinine}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>S Ferritin : </b>  {ferritin} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>S Iron : </b>  {iron}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>TIBC : </b> {tibc}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>S Copper : </b>{copper} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Others: </b> {others}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Triglyceride : </b> {triglyceride} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>LDL : </b> {ldl}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label> <b>HDL : </b> {hdl}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>VLDL : </b> {vldl}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>AFP : </b> {afp}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Endoscopy : </b> {endoscopy}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>USG abdomen : </b> {usgAbdomen}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Liver Fibroscan  : </b> {fibroscan} </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Liver Biopsy : </b>  {biopsy} </label>
                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Varices : </b> {varices}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Grades : </b>  {grades} </label>
                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Stomach : </b>  {stomach}  </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Duodenum  : </b> {duodenum}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="from-group" >
                                            <label><b>Liver span : </b> {liverSpan}   </label>
                                            
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Steatosis : </b>  {steatosis}  </label>                                          
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Splenomegaly : </b>   {splenomegaly}  </label>                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Collaterals : </b>   {collaterals}  </label>                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>PV diameter (CM) : </b> {pvDiameter}  </label>                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Ascites : </b>  {ascites} </label>                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>SOL : </b>  {sol} </label>                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>CAP : </b>  {cap}   </label>                                        
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>E(kPa) : </b>  {ekpa} </label>
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>HAI : </b>   {hai} </label>                                           
                                        </div>
                                    </div>
                                    <div className='col-lg-4'>
                                        <div className='from-group'>
                                            <label><b>Stage : </b>  {stage}  </label>                                           
                                        </div>
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
export default ViewLeverFollowUp;