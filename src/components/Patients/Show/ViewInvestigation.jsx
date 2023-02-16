import React, { useEffect, useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'; 
import { SETINVESTIGATIONObj, INVESTIGATIONGet_BY_PATIENT_ID } from "../../../redux/actions/Investigation/Investigation.actions";
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
          <li className="list-group-item">
            <Link >Demographics</Link>
          </li>
          <li className="list-group-item">
            <Link >Clinical History</Link>
          </li>
          <li className="list-group-item">
            <Link >Previous Treatment</Link>
          </li>
          <li className="list-group-item">
            <Link >
              Nutritional History
            </Link>{" "}
          </li>
          <li className="list-group-item">
            <Link>Investigations</Link>
          </li>
          <li className="list-group-item">
            <Link >Treatment</Link>{" "}
          </li>
          <li className="list-group-item">
            <Link>Depression</Link>
          </li>
          <li className="list-group-item">
            <Link >Infections</Link>
          </li>
          
        </ul>
      </div>
    
      <div className="wrapper_contentbody">
       <div className='container-fluid'>
       <div className="row">
            <div className="col-lg-12 heaind text-center">
              <h3><b>Investigations </b></h3>
            </div>
          </div>
        <div className='row justify-content-center addlist-frm mt-3'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>HB :</b>  {hb}</label>                  
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
                    <label><b>HIV :</b> {hiv}</label>
                   
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
                    <label><b>TIBC :</b> {tibc} </label>
                 
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
                    <label><b>NDUT-15 :</b> {ndut}</label>
                   
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
                    <label><b>ASCA IgA :</b> {ascaLga}</label>
                 
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
                    <label><b>Microbiota :</b> {microbiota}</label>
                  
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>P-ANCA :</b> {panca}</label>
                   
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label><b>Folate :</b> {folate}</label>
                  
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
              <div className='row mt-4'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center'>
                        <Link to="../Patients/Viewnutrition" className='btn btn-link mx-4'>Previous</Link>
                        <Link to="../Patients/Viewtreatment" className='btn btn-link mx-4'>Next</Link>
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
