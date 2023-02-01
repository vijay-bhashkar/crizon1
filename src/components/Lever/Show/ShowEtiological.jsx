import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { ETIOLOGICALGet, SETETIOLOGICALObj, ETIOLOGICALGet_BY_PATIENT_ID } from "../../../redux/actions/Etiological/Etiological.actions";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import moment from "moment";

export const ShowEtiological = () => {
    
    const dispatch = useDispatch();
    
    const [patientId , setPatientId] = useState("");
    useEffect(() => {
        if(patientId){
            dispatch(ETIOLOGICALGet_BY_PATIENT_ID(patientId));
        }
    }, [patientId]);

    const leverPerDetailObj = useSelector((states) => states.leverPerDetail.leverPerDetailObj);
    const etiologicalObj = useSelector((states) => states.etiological.etiologicalobj);

    const [searchParams, setSearchParams] = useSearchParams("edit");

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
        dispatch(SETETIOLOGICALObj({}));
        if(leverPerDetailObj){
            setPatientId(leverPerDetailObj?._id);
        }
    },[]);

    useEffect(()=>{
        if(etiologicalObj){
            setHbsag(moment(etiologicalObj?.hbsag).format("YYYY-MM-DD"));
            setAntiLgmHav(moment(etiologicalObj?.antiLgmHav).format("YYYY-MM-DD"));
            setAntiLgmHev(moment(etiologicalObj?.antiLgmHev).format("YYYY-MM-DD"));
            setHbvDna(moment(etiologicalObj?.hbvDna).format("YYYY-MM-DD"));
            setAna(moment(etiologicalObj?.ana).format("YYYY-MM-DD"));
            setAma(moment(etiologicalObj?.ama).format("YYYY-MM-DD"));
            setAntiHcv(moment(etiologicalObj?.antiHcv).format("YYYY-MM-DD"));
            setAntiLkm(moment(etiologicalObj?.antiLkm).format("YYYY-MM-DD"));
            setAntiSma(moment(etiologicalObj?.antiSma).format("YYYY-MM-DD"));
            setHcvrna(moment(etiologicalObj?.hcvrna).format("YYYY-MM-DD"));
            setTsh(moment(etiologicalObj?.tsh).format("YYYY-MM-DD"));
            setBldSugarf(moment(etiologicalObj?.bldSugarf).format("YYYY-MM-DD"));
            setCerulopslamin(moment(etiologicalObj?.cerulopslamin).format("YYYY-MM-DD"));
            setHiv(moment(etiologicalObj?.hiv).format("YYYY-MM-DD"));
            setBldSugarpp(moment(etiologicalObj?.bldSugarpp).format("YYYY-MM-DD"));
            setPt(moment(etiologicalObj?.pt).format("YYYY-MM-DD"));
            setPti(moment(etiologicalObj?.pti).format("YYYY-MM-DD"));
            setInr(moment(etiologicalObj?.inr).format("YYYY-MM-DD"));
            setHb(moment(etiologicalObj?.hb).format("YYYY-MM-DD"));
            setTlc(moment(etiologicalObj?.tlc).format("YYYY-MM-DD"));
            setPlatelets(moment(etiologicalObj?.platelets).format("YYYY-MM-DD"));
            setSbil(moment(etiologicalObj?.sbil).format("YYYY-MM-DD"));
            setAst(moment(etiologicalObj?.ast).format("YYYY-MM-DD"));
            setAlt(moment(etiologicalObj?.alt).format("YYYY-MM-DD"));
            setAlbumin(moment(etiologicalObj?.albumin).format("YYYY-MM-DD"));
            setGlobulin(moment(etiologicalObj?.globulin).format("YYYY-MM-DD"));
            setSap(moment(etiologicalObj?.sap).format("YYYY-MM-DD"));
            setGgt(moment(etiologicalObj?.ggt).format("YYYY-MM-DD"));
            setBloodUrea(moment(etiologicalObj?.bloodUrea).format("YYYY-MM-DD"));
            setCreatinine(moment(etiologicalObj?.creatinine).format("YYYY-MM-DD"));
            setFerritin(moment(etiologicalObj?.ferritin).format("YYYY-MM-DD"));
            setIron(moment(etiologicalObj?.iron).format("YYYY-MM-DD"));
            setTibc(moment(etiologicalObj?.tibc).format("YYYY-MM-DD"));
            setCopper(moment(etiologicalObj?.copper).format("YYYY-MM-DD"));
            setOthers(moment(etiologicalObj?.others).format("YYYY-MM-DD"));
            setTriglyceride(moment(etiologicalObj?.triglyceride).format("YYYY-MM-DD"));
            setLdl(moment(etiologicalObj?.ldl).format("YYYY-MM-DD"));
            setHdl(moment(etiologicalObj?.hdl).format("YYYY-MM-DD"));
            setVldl(moment(etiologicalObj?.vldl).format("YYYY-MM-DD"));
            setAfp(moment(etiologicalObj?.afp).format("YYYY-MM-DD"));
            setEndoscopy(moment(etiologicalObj?.endoscopy).format("YYYY-MM-DD"));
            setUsgAbdomen(moment(etiologicalObj?.usgAbdomen).format("YYYY-MM-DD"));
            setFibroscan(moment(etiologicalObj?.fibroscan).format("YYYY-MM-DD"));
            setBiopsy(moment(etiologicalObj?.biopsy).format("YYYY-MM-DD"));
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
          dispatch(SETETIOLOGICALObj(null));
        }
      }, [searchParams.get("edit")]);

    return(
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
          </div>
          <div className="col-lg-4">
          <h5 className="mb-0 text-center text-white">
          Patient (LEVER DISEASE)
          </h5>
          </div>
          <div className="col-lg-4 text-end">
            <div className='btnlist'>
                <Link to="/lever-list" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal justify-content-center">
            <li class="list-group-item"><Link >Personal Detail</Link></li>
            <li class="list-group-item"><Link >History</Link></li>
            <li class="list-group-item"><Link >Etiological Work Up</Link></li>
        </ul>
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
                            <div className='clinical'></div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> HBsAg </b> : {hbsag}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Anti IgM HAV </b> : {antiLgmHav}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Anti IgM HEV </b> : {antiLgmHev}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> HBV DNA c/ml </b> :  {hbvDna} </label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> ANA </b> : {ana} </label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> AMA </b> : {ama} </label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Anti HCV </b> : {antiHcv}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Anti LKM </b> : {antiLkm}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Anti SMA </b> : {antiSma}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> HCVRNA  c/ml </b> : {hcvrna}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> T3/T4/TSH </b> : {tsh}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Bld Sugar F </b> : {bldSugarf}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> S.Cerulopslamin </b> : {cerulopslamin}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> HIV </b> : {hiv}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Bld Sugar PP </b> : {bldSugarpp}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> PT </b> : {pt}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> PTI </b> : {pti}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> INR </b> : {inr}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Hb </b> : {hb}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> TLC </b> : {tlc}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Platelets </b> : {platelets}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> S.Bil </b> : {sbil}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> AST</b> : {ast}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> ALT </b> : {alt}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Albumin</b> : {albumin}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Globulin</b> : {globulin}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> SAP</b> : {sap}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> GGT</b> : {ggt}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Blood Urea </b> : {bloodUrea}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> S creatinine </b> : {creatinine}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> S Ferritin </b> : {ferritin}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> S Iron </b> : {iron}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> TIBC</b> : {tibc}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> S Copper</b> : {copper} </label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Others</b> : {others}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Triglyceride</b> : {triglyceride}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> LDL</b> : {ldl}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label> <b> HDL </b> : {hdl}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> VLDL</b> : {vldl}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> AFP</b> : {afp}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Endoscopy</b> : {endoscopy}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> USG abdomen </b> : {usgAbdomen}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Liver Fibroscan </b> : {fibroscan}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Liver Biopsy </b> : {biopsy}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Varices </b> : {varices}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Grades </b> : {grades}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Stomach </b> : {stomach}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Duodenum </b> : {duodenum}</label>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="from-group" >
                                <label><b> Liver span</b> : {liverSpan}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Steatosis </b> : {steatosis}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Splenomegaly </b> : {splenomegaly}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Collaterals </b> :  {collaterals}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> PV diameter (CM) </b> :  {pvDiameter}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Ascites </b> : {ascites} </label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> SOL </b> : {sol}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> CAP </b> : {cap}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> E(kPa) </b> : {ekpa}</label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> HAI </b> : {hai} </label>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label><b> Stage </b> : {stage}</label>                               
                            </div>
                        </div>

                    </div>                    
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                            <Link to="/show-lever-history" className='btn btn-link mx-4'>Previous</Link>
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