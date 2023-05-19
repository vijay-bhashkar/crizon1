import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { ETIOLOGICALAdd, ETIOLOGICALGet, SETETIOLOGICALObj, ETIOLOGICALGet_BY_PATIENT_ID, ETIOLOGICALUpdate, ETIOLOGICALDelete } from "../../redux/actions/Etiological/Etiological.actions";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from 'react-router-dom';
import { toast } from "react-hot-toast";  

export const EtiologicalWorkup = () => {
    
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
    
    const handleSubmit = ()=>{
        let obj = {
            hbsag, 
            antiLgmHav,
            antiLgmHev, 
            hbvDna, 
            ana,
            ama, 
            antiHcv, 
            antiLkm,
            antiSma, 
            hcvrna, 
            tsh, 
            bldSugarf,
            cerulopslamin,
            hiv, 
            bldSugarpp,
            pt, 
            pti, 
            inr, 
            hb, 
            tlc, 
            platelets,
            sbil, 
            ast, 
            alt, 
            albumin, 
            globulin, 
            sap, 
            ggt, 
            bloodUrea, 
            creatinine, 
            ferritin, 
            iron, 
            tibc, 
            copper,
            others, 
            triglyceride, 
            ldl, 
            hdl, 
            vldl, 
            afp,
            endoscopy, 
            usgAbdomen, 
            fibroscan,
            biopsy, 
            varices,
            grades,
            stomach, 
            duodenum, 
            liverSpan, 
            steatosis, 
            splenomegaly,
            collaterals, 
            pvDiameter,
            ascites,
            sol,
            ekpa,
            cap, 
            hai, 
            stage,
            patientId
        }
        if(etiologicalObj?._id){
            dispatch(ETIOLOGICALUpdate(etiologicalObj?._id, obj));
            dispatch(SETETIOLOGICALObj(null));
            toast.success("Etiological Updated successfully");
        }else{
            dispatch(ETIOLOGICALAdd(obj));
            toast.success("Etiological Added successfully");
        }
    }

    useEffect(()=>{
        dispatch(SETETIOLOGICALObj({}));
        if(leverPerDetailObj){
            setPatientId(leverPerDetailObj?._id);
        }
    },[]);

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
          dispatch(SETETIOLOGICALObj(null));
        }
      }, [searchParams.get("edit")]);

   const options = [
       { label:"select" , value:"Select"},
       { label:"Yes" , value:"Yes"},
       { label:"No" , value:"No"},
   ];

   const stomachDrop = [
        { label:"select", value:"select" },
        { label:"Small", value:"small" },
        { label:"Medium", value:"medium" },
        { label:"Large", value:"large" },
   ];

   const duodenumDrop = [
        { label:"select", value:"select" },
        { label:"D1", value:"D1" },
        { label:"D2", value:"D2" },
   ]

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
            <li class="list-group-item"><Link to="/add-lever" >Personal Detail</Link></li>
            <li class="list-group-item"><Link to="/add-lever-history">History</Link></li>
            <li class="list-group-item"><Link to="/etiological-work-up">Etiological Work Up</Link></li>
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
                            <div className='clinical'>
                                {/* <h5>Etiological work up</h5> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HBsAg </label>
                                <input type="date" className="form-control" value={hbsag} onChange={(el)=>{setHbsag(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti IgM HAV </label>
                                < input type="date" className="form-control" value={antiLgmHav} onChange={(el)=>{setAntiLgmHav(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti IgM HEV </label>
                                < input type="date" className="form-control" value={antiLgmHev} onChange={(el)=>{setAntiLgmHev(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HBV DNA c/ml   </label>
                                < input type="date" className="form-control" value={hbvDna} onChange={(el)=>{setHbvDna(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>ANA  </label>
                                < input type="date" className="form-control" value={ana} onChange={(el)=>{setAna(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AMA  </label>
                                < input type="date" className="form-control" value={ama} onChange={(el)=>{setAma(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti HCV </label>
                                < input type="date" className="form-control" value={antiHcv} onChange={(el)=>{setAntiHcv(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti LKM </label>
                                < input type="date" className="form-control" value={antiLkm} onChange={(el)=>{setAntiLkm(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti SMA </label>
                                < input type="date" className="form-control" value={antiSma} onChange={(el)=>{setAntiSma(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HCVRNA  c/ml </label>
                                < input type="date" className="form-control" value={hcvrna} onChange={(el)=>{setHcvrna(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>T3/T4/TSH </label>
                                < input type="date" className="form-control" value={tsh} onChange={(el)=>{setTsh(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Bld Sugar F </label>
                                < input type="date" className="form-control" value={bldSugarf} onChange={(el)=>{setBldSugarf(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S.Cerulopslamin </label>
                                < input type="date" className="form-control" value={cerulopslamin} onChange={(el)=>{setCerulopslamin(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HIV </label>
                                < input type="date" className="form-control" value={hiv} onChange={(el)=>{setHiv(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Bld Sugar PP </label>
                                < input type="date" className="form-control" value={bldSugarpp} onChange={(el)=>{setBldSugarpp(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PT </label>
                                < input type="date" className="form-control" value={pt} onChange={(el)=>{setPt(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PTI </label>
                                < input type="date" className="form-control" value={pti} onChange={(el)=>{setPti(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>INR </label>
                                < input type="date" className="form-control" value={inr} onChange={(el)=>{setInr(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hb </label>
                                < input type="date" className="form-control" value={hb} onChange={(el)=>{setHb(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>TLC </label>
                                < input type="date" className="form-control" value={tlc} onChange={(el)=>{setTlc(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Platelets </label>
                                < input type="date" className="form-control" value={platelets} onChange={(el)=>{setPlatelets(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S.Bil </label>
                                < input type="date" className="form-control" value={sbil} onChange={(el)=>{setSbil(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AST</label>
                                < input type="date" className="form-control" value={ast} onChange={(el)=>{setAst(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>ALT </label>
                                < input type="date" className="form-control" value={alt} onChange={(el)=>{setAlt(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Albumin</label>
                                < input type="date" className="form-control" value={albumin} onChange={(el)=>{setAlbumin(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Globulin</label>
                                < input type="date" className="form-control" value={globulin} onChange={(el)=>{setGlobulin(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>SAP</label>
                                < input type="date" className="form-control" value={sap} onChange={(el)=>{setSap(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>GGT</label>
                                < input type="date" className="form-control" value={ggt} onChange={(el)=>{setGgt(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Blood Urea </label>
                                <input type="date" className="form-control" value={bloodUrea} onChange={(el)=>{setBloodUrea(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S creatinine </label>
                                <input type="date" className="form-control" value={creatinine} onChange={(el)=>{setCreatinine(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Ferritin </label>
                                <input type="date" className="form-control" value={ferritin} onChange={(el)=>{setFerritin(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Iron </label>
                                <input type="date" className="form-control" value={iron} onChange={(el)=>{setIron(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>TIBC</label>
                                <input type="date" className="form-control" value={tibc} onChange={(el)=>{setTibc(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Copper </label>
                                <input type="date" className="form-control" value={copper} onChange={(el)=>{setCopper(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Others</label>
                                <input type="date" className="form-control" value={others} onChange={(el)=>{setOthers(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Triglyceride</label>
                                <input type="date" className="form-control" value={triglyceride} onChange={(el)=>{setTriglyceride(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>LDL</label>
                                <input type="date" className="form-control" value={ldl} onChange={(el)=>{setLdl(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label> HDL </label>
                                <input type="date" className="form-control" value={hdl} onChange={(el)=>{setHdl(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>VLDL</label>
                                <input type="date" className="form-control" value={vldl} onChange={(el)=>{setVldl(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AFP</label>
                                <input type="date" className="form-control" value={afp} onChange={(el)=>{setAfp(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Endoscopy</label>
                                <input type="date" className="form-control" value={endoscopy} onChange={(el)=>{setEndoscopy(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>USG abdomen </label>
                                <input type="date" className="form-control" value={usgAbdomen} onChange={(el)=>{setUsgAbdomen(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Liver Fibroscan </label>
                                <input type="date" className="form-control" value={fibroscan} onChange={(el)=>{setFibroscan(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Liver Biopsy </label>
                                <input type="date" className="form-control" value={biopsy} onChange={(el)=>{setBiopsy(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Varices </label>
                                <select className="form-control" value={varices} onChange={(el)=>{setVarices(el.target.value)}}>
                                    { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Grades </label>
                                < input type="text" className="form-control" value={grades} onChange={(el)=>{setGrades(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Stomach </label>
                                <select className="form-control" value={stomach} onChange={(el)=>{setStomach(el.target.value)}}>
                                    { stomachDrop && stomachDrop.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Duodenum </label>
                                <select className="form-control" value={duodenum} onChange={(el)=>{setDuodenum(el.target.value)}}>
                                    { duodenumDrop && duodenumDrop.map((el)=> <option value={el.value}>{el.label}</option> ) }
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="from-group" >
                                <label>Liver span</label>
                                <input type="text" className="form-control" value={liverSpan} onChange={(el)=>{setLiverSpan(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Steatosis </label>
                                <select className="form-control" value={steatosis} onChange={(el)=>{setSteatosis(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Splenomegaly </label>
                                <select className="form-control" value={splenomegaly} onChange={(el)=>{setSplenomegaly(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Collaterals  </label>
                                <select className="form-control" value={collaterals} onChange={(el)=>{setCollaterals(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PV diameter (CM)  </label>
                                <input type="text" className="form-control" value={pvDiameter} onChange={(el)=>{setPvDiameter(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ascites  </label>
                                <select className="form-control" value={ascites} onChange={(el)=>{setAscites(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>SOL </label>
                                <select className="form-control" value={sol} onChange={(el)=>{setSol(el.target.value)}}>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CAP </label>
                                <input type="text" className="form-control" value={cap} onChange={(el)=>{setCap(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>E(kPa) </label>
                                <input type="text" className="form-control" value={ekpa} onChange={(el)=>{setEkpa(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HAI  </label>
                                <input type="text" className="form-control" value={hai} onChange={(el)=>{setHai(el.target.value)}}/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Stage </label>
                                <input type="text" className="form-control" value={stage} onChange={(el)=>{setStage(el.target.value)}}/>
                            </div>
                        </div>

                    </div>                    
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                            <Link to="../add-lever-history" className='btn btn-link mx-4'>Previous</Link>
                            { etiologicalObj?
                            <button className='btn btn-link' onClick={()=>{handleSubmit()}}>Update</button>:
                            <button className='btn btn-link' onClick={()=>{handleSubmit()}}>Add</button>}
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