import React, { useEffect, useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { INVESTIGATIONAdd, INVESTIGATIONGet, SETINVESTIGATIONObj, INVESTIGATIONUpdate, INVESTIGATIONDelete, INVESTIGATIONGet_BY_PATIENT_ID } from "../../redux/actions/Investigation/Investigation.actions";
import { toast } from 'react-hot-toast';
export const Investigations = () => {

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



const handleAddInvestigation = ()=> {

  if(hb == "" || hb == undefined){
    toast.error("H.B is required");
    return
  }if(hbsAg == "" || hbsAg == undefined){
    toast.error("HB s AG is required");
    return
  }if(mcv == "" || mcv == undefined){
    toast.error("MCV is required");
    return
  }else{
    let obj = {
      patientId,
      hb,
      hbsAg,
      pcv,
      mcv,
      antiHcv,
      tlc,
      hiv,
      ebvVcaLgm,
      plt,
      ebvVcaLgg,
      esr,
      ebvEbnaLgg,
      crpQuantitative,
      cmvLgm,
      ast,
      cmvLgg,
      alt,
      fecalCalprotectin,
      pct,
      ggt,
      cpk,
      totalProtien,
      sodium,
      cholesterol,
      pottasium,
      vldl,
      cmvIhc,
      ldl,
      eberIsh,
      hdl,
      igra,
      triglycerides,
      alp,
      stoolRoutine,
      albumin,
      stoolCulture,
      iron,
      stoolGdh,
      tibc,
      stoolcDiffToxin,
      ferritin,
      stoolcDiffPcr,
      calcium,
      stoolBiofilm,
      magnesium,
      tpmt,
      vitamind,
      ndut,
      rbs,
      tgn,
      ascaLgat,
      mmpr,
      ascaLgg,
      vitaminB12,
      pAnca,
      folate,
      urea,
      vzvAntibody,
      creatinine,
      chestXray,
      xrayAbdomen,
      mantoux,
      microbiota,
      ctAbdomen,
      ctChest,
      mriAbdomen,
      others
    }

    console.log(obj , "investigation obj");
    if (investigationObj?._id) {
      dispatch(INVESTIGATIONUpdate(investigationObj._id, obj));
      dispatch(SETINVESTIGATIONObj(null))
      toast.success(" Investigation Updated Successfully ");
    }else{
      dispatch(INVESTIGATIONAdd(obj));
      toast.success(" Investigation Created Successfully ");
    }
      navigate("/Patients/treatment");
  }
};

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
                    <label>HB</label>
                    <input type="text" className='form-control' value={hb} onChange={(e)=>{setHb(e.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>HBsAg</label>
                    <input type="text" className='form-control' value={hbsAg} onChange={(e)=>{setHbsAg(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>PCV</label>
                    <input type="text" className='form-control' value={pcv} onChange={(e)=>{setPcv(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>MCV</label>
                    <input type="text" className='form-control' value={mcv} onChange={(e)=>{setMcv(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Anti HCV</label>
                    <input type="text" className='form-control' value={antiHcv} onChange={(e)=>{setAntiHcv(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TLC</label>
                    <input type="text" className='form-control' value={tlc} onChange={(el)=>{setTlc(el.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>  
                    <label>HIV</label>
                    <input type="text" className='form-control' value={hiv} onChange={(e)=>{setHiv(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-VCA IgM</label>
                    <input type="text" className='form-control' value={ebvVcaLgm} onChange={(e)=>{setEbvVcaLgm(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>PLT</label>
                    <input type="text" className='form-control'  value={plt} onChange={(e)=>{setPlt(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-VCA IgG</label>
                    <input type="text" className='form-control' value={ebvVcaLgg} onChange={(e)=>{setEbvVcaLgg(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'> 
                    <label>ESR</label>
                    <input type="text" className='form-control' value={esr} onChange={(e)=>{setEsr(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-EBNA IgG</label>
                    <input type="text" className='form-control' value={ebvEbnaLgg} onChange={(e)=>{setEbvEbnaLgg(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CRP Quantitative</label> 
                    <input type="text" className='form-control' value={crpQuantitative} onChange={(e)=>{setCrpQuantitative(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CMV – IgM</label> 
                    <input type="text" className='form-control' value={cmvLgm} onChange={(e)=>{setCmvLgm(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>AST</label>
                    <input type="text" className='form-control' value={ast} onChange={(e)=>{setAst(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CMV – IgG</label>  
                    <input type="text" className='form-control' value={cmvLgg} onChange={(e)=>{setCmvLgg(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ALT</label>
                    <input type="text" className='form-control' value={alt} onChange={(e)=>{setAlt(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Fecal Calprotectin</label> 
                    <input type="text" className='form-control' value={fecalCalprotectin} onChange={(e)=>{setFecalCalprotectin(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>PCT</label>
                    <input type="text" className='form-control' value={pct} onChange={(el)=>{setPct(el.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>GGT</label>
                    <input type="text" className='form-control' value={ggt} onChange={(el)=>{setGgt(el.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CPK</label>
                    <input type="text" className='form-control' value={cpk} onChange={(el)=>{setCpk(el.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Total proteins</label>
                    <input type="text" className='form-control' value={totalProtien} onChange={(el)=>{setTotalProtien(el.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Sodium</label>
                    <input type="text" className='form-control' value={sodium} onChange={(el)=>{setSodium(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Cholesterol</label>
                    <input type="text" className='form-control' value={cholesterol} onChange={(el)=>{setCholesterol(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Potassium</label>
                    <input type="text" className='form-control' value={pottasium} onChange={(el)=>{setPottasium(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>VLDL</label>
                    <input type="text" className='form-control' value={vldl} onChange={(el)=>{setVldl(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CMV IHC</label>
                    <input type="text" className='form-control' value={cmvIhc} onChange={(el)=>{setCmvIhc(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>LDL</label>
                    <input type="text" className='form-control' value={ldl} onChange={(el)=>{setLdl(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBER ISH</label>
                    <input type="text" className='form-control' value={eberIsh} onChange={(el)=>{setEberIsh(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>HDL</label>
                    <input type="text" className='form-control' value={hdl} onChange={(el)=>{setHdl(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>IGRA</label>
                    <input type="text" className='form-control' value={igra} onChange={(el)=>{setIgra(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Triglycerides</label>
                    <input type="text" className='form-control' value={triglycerides} onChange={(el)=>{setTriglycerides(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ALP</label>
                    <input type="text" className='form-control' value={alp} onChange={(el)=>{setAlp(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Routine</label>
                    <input type="text" className='form-control' value={stoolRoutine} onChange={(el)=>{setStoolRoutine(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Albumin</label>
                    <input type="text" className='form-control' value={albumin} onChange={(el)=>{setAlbumin(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Culture</label>
                    <input type="text" className='form-control' value={stoolCulture} onChange={(el)=>{setStoolCulture(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Iron</label>
                    <input type="text" className='form-control' value={iron} onChange={(el)=>{setIron(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool GDH</label>
                    <input type="text" className='form-control' value={stoolGdh} onChange={(el)=>{setStoolGdh(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TIBC</label>
                    <input type="text" className='form-control' value={tibc} onChange={(el)=>{setTibc(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool C-diff Toxin A</label>
                    <input type="text" className='form-control' value={stoolcDiffToxin} onChange={(el)=>{setStoolcDiffToxin(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Ferritin</label>
                    <input type="text" className='form-control' value={ferritin} onChange={(el)=>{setFerritin(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool C-diff PCR</label>
                    <input type="text" className='form-control' value={stoolcDiffPcr} onChange={(el)=>{setStoolcDiffPcr(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Calcium</label>
                    <input type="text" className='form-control' value={calcium} onChange={(el)=>{setCalcium(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Biofilm</label>
                    <input type="text" className='form-control' value={stoolBiofilm} onChange={(el)=>{setStoolBiofilm(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Magnesium</label>
                    <input type="text" className='form-control' value={magnesium} onChange={(el)=>{setMagnesium(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TPMT</label>
                    <input type="text" className='form-control' value={tpmt} onChange={(el)=>{setTpmt(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Vitamin-D</label>
                    <input type="text" className='form-control' value={vitamind} onChange={(el)=>{setVitamind(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>NDUT – 15 </label>
                    <input type="text" className='form-control' value={ndut} onChange={(el)=>{setNdut(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>RBS</label>
                    <input type="text" className='form-control' value={rbs} onChange={(el)=>{setRbs(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>6 – TGN</label>
                    <input type="text" className='form-control' value={tgn} onChange={(el)=>{setTgn(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ASCA IgAt</label>
                    <input type="text" className='form-control' value={ascaLgat} onChange={(el)=>{setAscaLgat(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>6 – MMPR</label>
                    <input type="text" className='form-control' value={mmpr} onChange={(el)=>{setMmpr(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ASCA IgG</label>
                    <input type="text" className='form-control' value={ascaLgg} onChange={(el)=>{setAscaLgg(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Vitamin B12</label>
                    <input type="text" className='form-control' value={vitaminB12} onChange={(el)=>{setVitaminB12(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>P-ANCA</label>
                    <input type="text" className='form-control' value={pAnca} onChange={(el)=>{setPAnca(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Folate</label>
                    <input type="text" className='form-control' value={folate} onChange={(el)=>{setFolate(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Urea</label>
                    <input type="text" className='form-control' value={urea} onChange={(el)=>{setUrea(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>VZV Antibody</label>
                    <input type="text" className='form-control' value={vzvAntibody} onChange={(el)=>{setVzvAntibody(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Creatinine</label>
                    <input type="text" className='form-control' value={creatinine} onChange={(el)=>{setCreatinine(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Chest X Ray</label>
                    <input type="text" className='form-control' value={chestXray} onChange={(el)=>{setChestXray(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>X Ray abdomen</label>
                    <input type="text" className='form-control' value={xrayAbdomen} onChange={(el)=>{setXrayAbdomen(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Mantoux</label>
                    <input type="text" className='form-control' value={mantoux} onChange={(el)=>{setMantoux(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Microbiota</label>
                    <input type="text" className='form-control' value={microbiota} onChange={(el)=>{setMicrobiota(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CT Abdomen</label>
                    <input type="text" className='form-control' value={ctAbdomen} onChange={(el)=>{setCtAbdomen(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CT Chest</label>
                    <input type="text" className='form-control' value={ctChest} onChange={(el)=>{setCtChest(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>MRI Abdomen</label>
                    <input type="text" className='form-control' value={mriAbdomen} onChange={(el)=>{setMriAbdomen(el.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Others</label>
                    <input type="text" className='form-control' value={others} onChange={(el)=>{setOthers(el.target.value)}}/>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center'>
                        <Link to="../Patients/nutritionalhistory" className='btn btn-link mx-4'>Previous</Link>
                        <button className='btn btn-link' onClick={handleAddInvestigation}>Next</button>
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
