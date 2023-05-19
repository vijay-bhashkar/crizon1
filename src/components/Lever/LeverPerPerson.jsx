import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate, useSearchParams} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { rolesObj } from '../../utils/roles';
import { LEVERPERDETAILGet, SETLEVERPERDETAILObj } from "../../redux/actions/LeverPerDetail/LeverPerDetail.actions";
import { LEVHISGet_BY_PATIENT_ID } from "../../redux/actions/LeverHistory/LeverHistory.actions";
import { ETIOLOGICALGet_BY_PATIENT_ID } from "../../redux/actions/Etiological/Etiological.actions";

export const LeverPerPerson = () => {

    const role = useSelector((states) => states.auth.role);
    const user = useSelector((states) => states.auth.user);
    const roleUser = useSelector((states) => states.auth.user.roleUser);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const leverObj = useSelector((states)=> states.leverPerDetail.leverPerDetailObj);
    const leverPerDetailObj = useSelector((states) => states.leverPerDetail.leverPerDetailObj);
    const leverHistoryObj = useSelector((states) => states.leverHistory.leverHistoryobj);
    const etiologicalObj = useSelector((states) => states.etiological.etiologicalobj);

const { id } =  useParams();
console.log(id , "id id id");
useEffect(() => {
if(id){
  dispatch(LEVHISGet_BY_PATIENT_ID(id));
  dispatch(ETIOLOGICALGet_BY_PATIENT_ID(id));
}
}, [id]);

    const [searchParams, setSearchParams] = useSearchParams("edit");
    const [name , setName] = useState("");
    const [enrollDate , setEnrollDate] = useState("");
    const [email , setEmail] = useState("");
    const [contact , setContact] = useState("");
    const [age , setAge] = useState("");
    const [gender , setGender] = useState("");
    const [height , setHeight] = useState("");
    const [weight , setWeight] = useState("");
    const [bmi , setBmi] = useState("");
    const [address , setAddress] = useState("");

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
    const [weight2, setWeight2] = useState("");
    const [height2, setHeight2] = useState("");
    const [bmi2, setBmi2] = useState("");
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
        if(leverObj){
            setName(leverObj?.name);
            setEnrollDate(leverObj?.enrollDate);
            setEmail(leverObj?.email);
            setContact(leverObj?.contact);
            setAge(leverObj?.age);
            setGender(leverObj?.gender);
            setHeight(leverObj?.height);
            setWeight(leverObj?.weight);
            setBmi(leverObj?.bmi);
            setAddress(leverObj?.address);
        }
    },[leverObj]);

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

    useEffect(()=>{
        if(etiologicalObj){
            setHbsag(etiologicalObj?.hbsag);
            setAntiLgmHav(etiologicalObj?.antiLgmHav);
            setAntiLgmHev(etiologicalObj?.antiLgmHev);
            setHbvDna(etiologicalObj?.hbvDna);
            setAna(etiologicalObj?.ana);
            setAma(etiologicalObj?.ama);
            setAntiHcv(etiologicalObj?.antiHcv);
            setAntiLkm(etiologicalObj?.antiLkm);
            setAntiSma(etiologicalObj?.antiSma);
            setHcvrna(etiologicalObj?.hcvrna);
            setTsh(etiologicalObj?.tsh);
            setBldSugarf(etiologicalObj?.bldSugarf);
            setCerulopslamin(etiologicalObj?.cerulopslamin);
            setHiv(etiologicalObj?.hiv);
            setBldSugarpp(etiologicalObj?.bldSugarpp);
            setPt(etiologicalObj?.pt);
            setPti(etiologicalObj?.pti);
            setInr(etiologicalObj?.inr);
            setHb(etiologicalObj?.hb);
            setTlc(etiologicalObj?.tlc);
            setPlatelets(etiologicalObj?.platelets);
            setSbil(etiologicalObj?.sbil);
            setAst(etiologicalObj?.ast);
            setAlt(etiologicalObj?.alt);
            setAlbumin(etiologicalObj?.albumin);
            setGlobulin(etiologicalObj?.globulin);
            setSap(etiologicalObj?.sap);
            setGgt(etiologicalObj?.ggt);
            setBloodUrea(etiologicalObj?.bloodUrea);
            setCreatinine(etiologicalObj?.creatinine);
            setFerritin(etiologicalObj?.ferritin);
            setIron(etiologicalObj?.iron);
            setTibc(etiologicalObj?.tibc);
            setCopper(etiologicalObj?.copper);
            setOthers(etiologicalObj?.others);
            setTriglyceride(etiologicalObj?.triglyceride);
            setLdl(etiologicalObj?.ldl);
            setHdl(etiologicalObj?.hdl);
            setVldl(etiologicalObj?.vldl);
            setAfp(etiologicalObj?.afp);
            setEndoscopy(etiologicalObj?.endoscopy);
            setUsgAbdomen(etiologicalObj?.usgAbdomen);
            setFibroscan(etiologicalObj?.fibroscan);
            setBiopsy(etiologicalObj?.biopsy);
            setVarices(etiologicalObj?.varices);
            setGrades(etiologicalObj?.grades);
            setStomach(etiologicalObj?.stomach);
            setDuodenum(etiologicalObj?.duodenum);
            setLiverSpan(etiologicalObj?.liverSpan);
            setSteatosis(etiologicalObj?.steatosis);
            setSplenomegaly(etiologicalObj?.splenomegaly);
            setCollaterals(etiologicalObj?.collaterals);
            setPvDiameter(etiologicalObj?.pvDiameter);
            setAscites(etiologicalObj?.ascites);
            setSol(etiologicalObj?.sol);
            setCap(etiologicalObj?.cap);
            setEkpa(etiologicalObj?.ekpa);
            setHai(etiologicalObj?.hai);
            setStage(etiologicalObj?.stage);
        }
    },[etiologicalObj]);

    
    useEffect(()=> {
        console.log(searchParams.get("edit"), "edit")
        if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
          dispatch(SETLEVERPERDETAILObj(null));
        }
      }, [searchParams.get("edit")]);

    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <h5 className="mb-0 text-center text-white">
                                Patient (LIVER DISEASE)
                            </h5>
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
                                    <h3>Patient Personal Details</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Name <span>  {name} </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label>Email<span>  {email} </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Age   {age}  </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Height   {height} </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>B.M.I  {bmi}  </span></label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Date of Enrollment<span>  {enrollDate}  </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label>Contact<span>  {contact}  </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label>Gender<span>  {gender}  </span></label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Weight  {weight}   </span></label>                                           
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                      <label>Address  {address}  </label>
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
                                <h5>Clinical Presentation</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Asymptomatic    {asymptomatic} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Malaise   {malaise} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Fatigue   {fatigue} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>RUQ pain    {ruqPain} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Pruritus    {pruritus} </label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Jaundice   {jaundice}  </label>
                               
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
                                <label>Viral hepatitis  {hepatitis}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Recurrent fever   {recurrentFever}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Prior surgery/Blood transfusions   {priorSurgery} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>GI Bleed  {giBleed}  </label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Antiviral therapy & duration  {antiviralTherapy}  </label>
                              
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Drug used  {drugUsed}  </label>
                               
                            </div>
                        </div>  
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Dental exposure   {dentalExposure}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Renal tx {renalTx}  </label>
                              
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
                                <label>Alcohol  {alcohol}  </label>
                            
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Gm/day   {day}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Days/Week   {week}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>No of yrs   {years} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Family History   {familyHistory}  </label>
                               
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
                                <label>Wt (Kg)   {weight}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ht (cm)   {height}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>BMI (Kg/cm2)  {bmi}  </label>
                                
                            </div>
                        </div> 
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label> Blood Pressure   {bloodPressure}  </label>
                                
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
                                <label>HBsAg  {hbsag}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti IgM HAV    {antiLgmHav} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti IgM HEV   {antiLgmHev}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HBV DNA c/ml   {hbvDna}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>ANA   {ana} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AMA   {ama} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti HCV   {antiHcv} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti LKM  {antiLkm}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti SMA   {antiSma}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HCVRNA  c/ml   {hcvrna} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>T3/T4/TSH   {tsh} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Bld Sugar F  {bldSugarf} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S.Cerulopslamin   {cerulopslamin} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HIV  {hiv}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Bld Sugar PP  {bldSugarpp} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PT  {pt} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PTI   {pti} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>INR  {inr} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hb  {hb} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>TLC  {tlc} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Platelets  {platelets} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S.Bil  {sbil} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AST  {ast}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>ALT   {alt}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Albumin   {albumin} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Globulin  {globulin} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>SAP  {sap} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>GGT  {ggt} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Blood Urea   {bloodUrea} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S creatinine  {creatinine} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Ferritin  {ferritin} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Iron  {iron} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>TIBC  {tibc}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Copper   {copper} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Others  {others}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Triglyceride  {triglyceride}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>LDL  {ldl}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label> HDL   {hdl}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>VLDL  {vldl}  </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AFP  {afp}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Endoscopy  {endoscopy}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>USG abdomen   {usgAbdomen} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Liver Fibroscan  {fibroscan} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Liver Biopsy   {biopsy} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Varices   {varices}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Grades  {grades} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Stomach   {stomach} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Duodenum   {duodenum} </label>
                                
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="from-group" >
                                <label>Liver span  {liverSpan} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Steatosis   {steatosis} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Splenomegaly   {splenomegaly} </label>
                               
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Collaterals  {collaterals}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PV diameter (CM)   {pvDiameter} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ascites  {ascites}  </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>SOL  {sol} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CAP  {cap}   </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>E(kPa)   {ekpa} </label>
                                
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HAI   {hai} </label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Stage   {stage} </label>
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
export default LeverPerPerson;