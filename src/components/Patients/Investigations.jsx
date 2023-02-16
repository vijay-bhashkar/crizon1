import React, { useEffect, useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
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
const [mcv, setMcv] = useState("");
const [hiv, setHiv] = useState("");
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
const [pcv, setPcv] = useState("");

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
      mcv,
      hiv,
      tlc,
      antiHcv,
      plt,
      ebVcaLgm,
      esr,
      ebVcaLgg,
      crpQuanti,
      ebvEbna,
      cmvLgm,
      cmvLgg,
      ast,
      fecalCalpro,
      alt,
      stoolRoutine,
      alp,
      stoolCulture,
      albumin,
      stoolGdh,
      iron,
      stoolDiffToxin,
      tibc,
      stoolDiffPcr,
      ferritin,
      stoolBiofilm,
      ca,
      tpmp,
      mg, 
      ndut,
      vitad,
      tgn,
      rbs,
      mmpr,
      ascaLga,
      chestXRay,
      askalgg,
      xRayAbdomen,
      vitaminb12,
      microbiota,
      panca,
      folate,
      urea,
      vzvAntibody,
      creatinine,
      mantoux,
      ctAbdomen,
      nancyIndex,
      ctChest,
      rhi,
      mriAbdomen,
      geboeScore,
      simplifiedMARIA,
      clermontScore,
      microbiota_2,
    }
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
                    <input type="text" className='form-control'/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>HIV</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-VCA IgM</label>
                    <input type="text" className='form-control' value={ebVcaLgm} onChange={(e)=>{setEbVcaLgm(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>PLT</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-VCA IgG</label>
                    <input type="text" className='form-control' value={ebVcaLgg} onChange={(e)=>{setEbVcaLgg(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ESR</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-EBNA IgG</label>
                    <input type="text" className='form-control' value={ebvEbna} onChange={(e)=>{setEbvEbna(e.target.value)}}/>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CRP Quantitative</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CMV – IgM</label>
                    <input type="text" className='form-control' />
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
                    <input type="text" className='form-control' />
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
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>PCT</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>GGT</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CPK</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Total proteins</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Sodium</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Cholesterol</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Potassium</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>VLDL</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CMV IHC</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>LDL</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBER ISH</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>HDL</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>IGRA</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Triglycerides</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ALP</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Routine</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Albumin</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Culture</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Iron</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool GDH</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TIBC</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool C-diff Toxin A</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Ferritin</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool C-diff PCR</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Calcium</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Biofilm</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Magnesium</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TPMT</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Vitamin-D</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>NDUT – 15 </label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>RBS</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>6 – TGN</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ASCA IgAt</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>6 – MMPR</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ASCA IgG</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Vitamin B12</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>P-ANCA</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Folate</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Urea</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>VZV Antibody</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Creatinine</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Chest X Ray</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>X Ray abdomen</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Mantoux</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Microbiota</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CT Abdomen</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CT Chest</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>MRI Abdomen</label>
                    <input type="text" className='form-control' />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Others</label>
                    <input type="text" className='form-control' />
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
