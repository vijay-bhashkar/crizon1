import React, { useEffect, useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { INVESTIGATIONAdd, INVESTIGATIONGet, SETINVESTIGATIONObj, INVESTIGATIONUpdate, INVESTIGATIONDelete, INVESTIGATIONGet_BY_PATIENT_ID } from "../../../redux/actions/Investigation/Investigation.actions";
import { toast } from 'react-hot-toast';
export const ViewInvestigation = () => {

  const [patientId, setPatientId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  if(patientId){
  dispatch(INVESTIGATIONGet_BY_PATIENT_ID(patientId));
  }
}, [patientId]);

const investigationObj = useSelector((states) => states.investigation.investigationsObj);
const demograficObj = useSelector((states) => states.demografic.demograficObj);  

useEffect(() => {
  dispatch(SETINVESTIGATIONObj({}))
  if(demograficObj){
    setPatientId(demograficObj?._id)
  }
}, [demograficObj]);

const [hb, setHb] = useState("");
const [hbsAg, setHbsAg] = useState("");
const [pcv, setPcv] = useState("");
const [mcv, setMcv] = useState("");
const [antiHcv, setAntiHcv] = useState("");
const [tlc, setTlc] = useState("");
const [hiv, setHiv] = useState("");
const [ebvVcaLgm, setEbvVcaLgm] = useState("");
const [plt, setPlt] = useState("");
const [ebvVcaLgg, setEbvVcaLgg] = useState("");
const [esr, setEsr] = useState("");
const [ebvEbnaLgg, setEbvEbnaLgg] = useState("");
const [crpQuantitative, setCrpQuantitative] = useState("");
const [cmvLgm, setCmvLgm] = useState("");
const [ast, setAst] = useState("");
const [cmvLgg, setCmvLgg] = useState("");
const [alt, setAlt] = useState("");
const [fecalCalprotectin, setFecalCalprotectin] = useState("");
const [pct, setPct] = useState("");
const [ggt, setGgt] = useState("");
const [cpk, setCpk] = useState("");
const [totalProtien, setTotalProtien] = useState("");
const [sodium, setSodium] = useState("");
const [cholesterol, setCholesterol] = useState("");
const [pottasium, setPottasium] = useState("");
const [vldl, setVldl] = useState("");
const [cmvIhc, setCmvIhc] = useState("");
const [ldl, setLdl] = useState("");
const [eberIsh, setEberIsh] = useState("");
const [hdl, setHdl] = useState("");
const [igra, setIgra] = useState("");
const [triglycerides, setTriglycerides] = useState("");
const [alp, setAlp] = useState("");
const [stoolRoutine, setStoolRoutine] = useState("");
const [albumin, setAlbumin] = useState("");
const [stoolCulture, setStoolCulture] = useState("");
const [iron, setIron] = useState("");
const [stoolGdh, setStoolGdh] = useState("");
const [tibc, setTibc] = useState("");
const [stoolcDiffToxin, setStoolcDiffToxin] = useState("");
const [ferritin, setFerritin] = useState("");
const [stoolcDiffPcr, setStoolcDiffPcr] = useState("");
const [calcium, setCalcium] = useState("");
const [stoolBiofilm, setStoolBiofilm] = useState("");
const [magnesium, setMagnesium] = useState("");
const [tpmt, setTpmt] = useState("");
const [vitamind, setVitamind] = useState("");
const [ndut, setNdut] = useState("");
const [rbs, setRbs] = useState("");
const [tgn, setTgn] = useState("");
const [ascaLgat, setAscaLgat] = useState("");
const [mmpr, setMmpr] = useState("");
const [ascaLgg, setAscaLgg] = useState("");
const [vitaminB12, setVitaminB12] = useState("");
const [pAnca, setPAnca] = useState("");
const [folate, setFolate] = useState("");
const [urea, setUrea] = useState("");
const [vzvAntibody, setVzvAntibody] = useState("");
const [creatinine, setCreatinine] = useState("");
const [chestXray, setChestXray] = useState("");
const [xrayAbdomen, setXrayAbdomen] = useState("");
const [mantoux, setMantoux] = useState("");
const [microbiota, setMicrobiota] = useState("");
const [ctAbdomen, setCtAbdomen] = useState("");
const [ctChest, setCtChest] = useState("");
const [mriAbdomen, setMriAbdomen] = useState("");
const [others, setOthers] = useState("");

useEffect(()=>{
    if(investigationObj){
      setHb(investigationObj?.hb);
      setHbsAg(investigationObj?.hbsAg);
      setPcv(investigationObj?.pcv);
      setMcv(investigationObj?.mcv);
      setAntiHcv(investigationObj?.antiHcv);
      setTlc(investigationObj?.tlc);
      setHiv(investigationObj?.hiv);
      setEbvVcaLgm(investigationObj?.ebvVcaLgm);
      setPlt(investigationObj?.plt);
      setEbvVcaLgg(investigationObj?.ebvVcaLgg);
      setEsr(investigationObj?.esr);
      setEbvEbnaLgg(investigationObj?.ebvEbnaLgg);
      setCrpQuantitative(investigationObj?.crpQuantitative);
      setCmvLgm(investigationObj?.cmvLgm);
      setAst(investigationObj?.ast);
      setCmvLgg(investigationObj?.cmvLgg);
      setAlt(investigationObj?.alt);
      setFecalCalprotectin(investigationObj?.fecalCalprotectin);
      setPct(investigationObj?.pct);
      setGgt(investigationObj?.ggt);
      setCpk(investigationObj?.cpk);
      setTotalProtien(investigationObj?.totalProtien);
      setSodium(investigationObj?.sodium);
      setCholesterol(investigationObj?.cholesterol);
      setPottasium(investigationObj?.pottasium);
      setVldl(investigationObj?.vldl);
      setCmvIhc(investigationObj?.cmvIhc);
      setLdl(investigationObj?.ldl);
      setEberIsh(investigationObj?.eberIsh);
      setHdl(investigationObj?.hdl);
      setIgra(investigationObj?.igra);
      setTriglycerides(investigationObj?.triglycerides);
      setAlp(investigationObj?.alp);
      setStoolRoutine(investigationObj?.stoolRoutine);
      setAlbumin(investigationObj?.albumin);
      setStoolCulture(investigationObj?.stoolCulture);
      setIron(investigationObj?.iron);
      setStoolGdh(investigationObj?.stoolGdh);
      setTibc(investigationObj?.tibc);
      setStoolcDiffToxin(investigationObj?.stoolcDiffToxin);
      setFerritin(investigationObj?.ferritin);
      setStoolcDiffPcr(investigationObj?.stoolcDiffPcr);
      setCalcium(investigationObj?.calcium);
      setStoolBiofilm(investigationObj?.stoolBiofilm);
      setMagnesium(investigationObj?.magnesium);
      setTpmt(investigationObj?.tpmt);
      setVitamind(investigationObj?.vitamind);
      setNdut(investigationObj?.ndut);
      setRbs(investigationObj?.rbs);
      setTgn(investigationObj?.tgn);
      setAscaLgat(investigationObj?.ascaLgat);
      setMmpr(investigationObj?.mmpr);
      setAscaLgg(investigationObj?.ascaLgg);
      setVitaminB12(investigationObj?.vitaminB12);
      setPAnca(investigationObj?.pAnca);
      setFolate(investigationObj?.folate);
      setUrea(investigationObj?.urea);
      setVzvAntibody(investigationObj?.vzvAntibody);
      setCreatinine(investigationObj?.creatinine);
      setChestXray(investigationObj?.chestXray);
      setXrayAbdomen(investigationObj?.xrayAbdomen);
      setMantoux(investigationObj?.mantoux);
      setMicrobiota(investigationObj?.microbiota);
      setCtAbdomen(investigationObj?.ctAbdomen);
      setCtChest(investigationObj?.ctChest);
      setMriAbdomen(investigationObj?.mriAbdomen);
      setOthers(investigationObj?.others);
    }
},[investigationObj]);

const options = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

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
                  <AiOutlineUnorderedList className="icon"/>{" "}
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
                    <label><b>HB  : </b> {hb} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>HBsAg  : </b> {hbsAg}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>PCV : </b> {pcv}   </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>MCV : </b> {mcv} </label>
                  
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Anti HCV  : </b> {antiHcv}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>TLC : </b> {tlc} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>  
                    <label><b>HIV  : </b> {hiv}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>EBV-VCA IgM  : </b> {ebvVcaLgm}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>PLT : </b> {plt} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>EBV-VCA IgG : </b> {ebvVcaLgg}  </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'> 
                    <label><b>ESR : </b> {esr}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>EBV-EBNA IgG  : </b> {ebvEbnaLgg}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CRP Quantitative  : </b> {crpQuantitative} </label> 
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CMV – IgM  : </b> {cmvLgm} </label> 
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>AST : </b> {ast} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CMV – IgG : </b> {cmvLgg}  </label>  
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ALT  : </b>{alt} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Fecal Calprotectin  : </b> {fecalCalprotectin}  </label> 
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>PCT : </b>  {pct} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>GGT  : </b> {ggt}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CPK : </b> {cpk} </label>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Total proteins : </b> {totalProtien} </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Sodium  : </b>{sodium} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Cholesterol : </b> {cholesterol}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Potassium  : </b> {pottasium}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>VLDL  : </b> {vldl}  </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CMV IHC  : </b> {cmvIhc} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>LDL  : </b> {ldl}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>EBER ISH  : </b> {eberIsh}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>HDL  : </b> {hdl}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>IGRA  : </b> {igra}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Triglycerides  : </b> {triglycerides}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ALP  : </b> {alp}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool Routine  : </b>  {stoolRoutine} </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Albumin  </b> {albumin} </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool Culture  : </b> {stoolCulture}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Iron  : </b> {iron}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool GDH  : </b>{stoolGdh}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>TIBC  : </b> {tibc} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool C-diff Toxin A  : </b>  {stoolcDiffToxin}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Ferritin  : </b> {ferritin}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool C-diff PCR  : </b> {stoolcDiffPcr} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Calcium  : </b> {calcium}  </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Stool Biofilm  : </b> {stoolBiofilm}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Magnesium  : </b> {magnesium} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>TPMT : </b> {tpmt}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Vitamin-D : </b> {vitamind} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>NDUT – 15  : </b> {ndut}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>RBS : </b> {rbs}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>6 – TGN  : </b> {tgn}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ASCA IgAt  : </b> {ascaLgat}  </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>6 – MMPR  : </b> {mmpr}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>ASCA IgG  : </b> {ascaLgg} </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Vitamin B12  : </b> {vitaminB12}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>P-ANCA : </b> {pAnca}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Folate  : </b> {folate} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Urea  : </b> {urea}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>VZV Antibody  : </b> {vzvAntibody} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Creatinine  : </b> {creatinine} </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Chest X Ray  : </b> {chestXray}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>X Ray abdomen  : </b> {xrayAbdomen} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Mantoux  : </b> {mantoux}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Microbiota  : </b> {microbiota} </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CT Abdomen : </b>  {ctAbdomen}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>CT Chest  : </b> {ctChest} </label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>MRI Abdomen : </b>  {mriAbdomen}  </label>
                    
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Others  : </b> {others}  </label>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center'>
                      <Link to="/Patients/Viewnutrition" className='btn btn-link mx-4'>Previous</Link>
                      <Link to="/Patients/Viewtreatment" className='btn btn-link mx-4'>Next</Link>
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
