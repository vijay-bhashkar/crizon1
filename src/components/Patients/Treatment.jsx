import React, { useEffect, useState } from 'react';
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link , useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { TREATMENTAdd, TREATMENTGet, SETTREATMENTObj, TREATMENTUpdate, TREATMENTDelete, TREATGet_BY_PATIENT_ID } from "../../redux/actions/Treatment/Treatment.actions";
export const Treatment = () => {

const [patientId, setPatientId] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate();

useEffect(() => {
  if(patientId){
dispatch(TREATGet_BY_PATIENT_ID(patientId));
  }
}, [patientId]);

 const treatmentObj = useSelector((states) => states.treatment.treatmentsObj);
 const demograficObj = useSelector((states) => states.demografic.demograficObj);  

 useEffect(() => {
  dispatch(SETTREATMENTObj({}))
  if(demograficObj){
    setPatientId(demograficObj?._id)
  }
}, [demograficObj]);

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
  const [surgery, setSurgery] = useState("");
  const [specify, setSpecify] = useState("");

  const handleAddTreatment = ()=>{

    if(!oralAsa){
      alert("Oral ASA is required");
      return
    }
    if(!rectalAsa){
      alert("Rectal ASA is required");
      return
    }

    let obj = {
      patientId,
      oralAsa,
      rectalAsa,
      aza,
      mp,
      prednisolone,
      infliximab,
      budesonide,
      rectalSteroids,
      adalimunab,
      vedolizumab,
      cyclosporine,
      ustekinumab,
      tofacitinib,
      tacrolimus,
      probiotics,
      filgotinib,
      session_1,
      session_2,
      session_3,
      session_4,
      session_5,
      session_6,
      session_7,
      session_8,
      session_9,
      session_10,
      session_11,
      session_12,
      surgery,
      specify,
    }
    console.log(obj);
    if (treatmentObj?._id) {
        dispatch(TREATMENTUpdate(treatmentObj._id, obj));
        dispatch(SETTREATMENTObj(null))
    } else {
        console.log(obj);
    dispatch(TREATMENTAdd(obj));
    }

    navigate("/Patients/infections");
  };

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
      setSession_1(treatmentObj?.session_1);
      setSession_2(treatmentObj?.session_2);
      setSession_3(treatmentObj?.session_3);
      setSession_4(treatmentObj?.session_4);
      setSession_5(treatmentObj?.session_5);
      setSession_6(treatmentObj?.session_6);
      setSession_7(treatmentObj?.session_7);
      setSession_8(treatmentObj?.session_8);
      setSession_9(treatmentObj?.session_9);
      setSession_10(treatmentObj?.session_10);
      setSession_11(treatmentObj?.session_11);
      setSession_12(treatmentObj?.session_12);
      setSurgery(treatmentObj?.surgery);
      setSpecify(treatmentObj?.specify);
    }
}, [treatmentObj]);

  const options = [
    { value: "Select", label: "Select" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  const oralAsaDrop = [
    { value: "Select", label:"Select" },
    { value: "1.2", label:"1.2" },
    { value: "2.4", label:"2.4" },
    { value: "3.6", label:"3.6" },
    { value: "4.8", label:"4.8" },
  ]
  const rectalAsaDrop = [
    {value:"Select", label:"Select"},
    {value:"500gm", label:"500gm"},
    {value:"1gm", label:"1gm"},
  ]
  const azaDrop = [
    {value:"Select", label:"Select"},
    {value:"25", label:"25"},
    {value:"50", label:"50"},
    {value:"75", label:"75"},
    {value:"100", label:"100"},
    {value:"125", label:"125"},
    {value:"150", label:"150"},
    {value:"175", label:"175"},
  ]
  const mpDrop = [
    {value:"Select", label:"Select"},
    {value:"50", label:"50"},
    {value:"100", label:"100"},
    {value:"150", label:"150"},
  ]
  const predenisoloniDrop = [
    { value:"Select", label:"Select" },
    { value:"5", label:"5" },
    { value:"10", label:"10" },
    { value:"15", label:"15" },
    { value:"20", label:"20" },
    { value:"25", label:"25" },
    { value:"30", label:"30" },
    { value:"40", label:"40" },
    { value:"60", label:"60" },
  ]
  const infliximabDrop = [
    { value:"Select", label:"Select"},
    { value:"5 mg/kg", label:"5 mg/kg"},
    { value:"10 mg/kg", label:"10 mg/kg"},
  ]
  const budesonideDrop = [
    { value:"Select", label:"Select" },
    { value:"3", label:"3" },
    { value:"6", label:"6" },
    { value:"9", label:"9" },
  ]
  const adlimunabDrop = [
    { value:"Select", label:"Select" },
    { value:"160 mg", label:"160 mg" },
    { value:"80 mg", label:"80 mg" },
    { value:"40 mg", label:"40 mg" },
  ]
  const vedolizumanDrop = [
    { value:"select", label:"Select" },
    { value:"300 mg", label:"300 mg" },
  ]
  const tofacitiDrop = [
    { value:"Select", label:"Select" },
    { value:"5", label:"5" },
    { value:"10", label:"10" },
    { value:"20", label:"20" },
  ];
  const rectalSteroid = [
    { value:"select", label:"Select" },
    { value:"select", label:"Select" },
    { value:"select", label:"Select" },
  ]


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
                <AiOutlineUnorderedList className="icon" />{" "}
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
          <Link>Demographics</Link>
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
          <Link >Investigations</Link>
        </li>
        <li className="list-group-item">
          <Link>Treatment</Link>{" "}
        </li>
        <li className="list-group-item">
          <Link>Infections</Link>
        </li>
        <li className="list-group-item">
          <Link>Depression</Link>
        </li>
      </ul>
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
                  <label>Oral 5-ASA </label>
                  <select className='form-control' value={oralAsa} onChange={(e)=>{setOralAsa(e.target.value)}}>
                    { oralAsaDrop && oralAsaDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Rectal 5ASA</label>
                  <select className='form-control' value={rectalAsa} onChange={(e)=>{setRectalAsa(e.target.value)}}>
                    { rectalAsaDrop && rectalAsaDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>AZA</label>
                  <select className='form-control' value={aza} onChange={(e)=>{setAza(e.target.value)}}>
                    { azaDrop && azaDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>6-MP</label>
                  <select className='form-control' value={mp} onChange={(e)=>{setMp(e.target.value)}}>
                    { mpDrop && mpDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Prednisolone</label>
                  <select className='form-control' value={prednisolone} onChange={(e)=>{setPrednisolone(e.target.value)}}>
                    { predenisoloniDrop && predenisoloniDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Infliximab</label>
                  <select className='form-control' value={infliximab} onChange={(e)=>{setInfliximab(e.target.value)}}>
                    { infliximabDrop && infliximabDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Budesonide</label>
                  <select className='form-control' value={budesonide} onChange={(e)=>{setBudesonide(e.target.value)}}>
                    { budesonideDrop && budesonideDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Rectal Steroids</label>
                  <input type="text" className='form-control' value={rectalSteroids} onChange={(e)=>{setRectalSteroids(e.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Adalimunab</label>
                  <select className='form-control' value={adalimunab} onChange={(e)=>{setAdalimunab(e.target.value)}}>
                    { adlimunabDrop && adlimunabDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Vedolizumab</label>
                  <select className='form-control' value={vedolizumab} onChange={(e)=>{setVedolizumab(e.target.value)}}>
                    { vedolizumanDrop && vedolizumanDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Cyclosporine</label>
                  <input type="text" className='form-control' value={cyclosporine} onChange={(e)=>{setCyclosporine(e.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Ustekinumab</label>
                  <input type="text" className='form-control' value={ustekinumab} onChange={(e)=>{setUstekinumab(e.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Tofacitinib</label>
                  <select className='form-control' value={tofacitinib} onChange={(e)=>{setTofacitinib(e.target.value)}}>
                    { tofacitiDrop && tofacitiDrop.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Tacrolimus</label>
                  <input type="text" className='form-control' value={tacrolimus} onChange={(e)=>{setTacrolimus(e.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Probiotics</label>
                  <input type="text" className='form-control' value={probiotics} onChange={(e)=>{setProbiotics(e.target.value)}}/>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Filgotinib</label>
                  <input type="text" className='form-control' value={filgotinib} onChange={(e)=>{setFilgotinib(e.target.value)}}/>
                </div>
              </div>
              
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12 mb-1'>
                    <div className='clinical'>
                        <h5>FMT Session</h5>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 1</label>
                        <input type="date" className='form-control' value={session_1} onChange={(e)=>{setSession_1(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 2</label>
                        <input type="date" className='form-control' value={session_2} onChange={(e)=>{setSession_2(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                      <label>Session 3</label>
                      <input type="date" className='form-control' value={session_3} onChange={(e)=>{setSession_3(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 4</label>
                        <input type="date" className='form-control' value={session_4} onChange={(e)=>{setSession_4(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 5</label>
                        <input type="date" className='form-control' value={session_5} onChange={(e)=>{setSession_5(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 6</label>
                        <input type="date" className='form-control' value={session_6} onChange={(e)=>{setSession_6(e.target.value)}}/>
                    </div>
              </div>
              {/* <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 6</label>
                        <input type="date" className='form-control' value={budesonide} onChange={(e)=>{setBudesonide(e.target.value)}}/>
                    </div>
              </div> */}
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 7</label>
                        <input type="date" className='form-control' value={session_7} onChange={(e)=>{setSession_7(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 8</label>
                        <input type="date" className='form-control' value={session_8} onChange={(e)=>{setSession_8(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 9</label>
                        <input type="date" className='form-control' value={session_9} onChange={(e)=>{setSession_9(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 10</label>
                        <input type="date" className='form-control' value={session_10} onChange={(e)=>{setSession_10(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 11</label>
                        <input type="date" className='form-control' value={session_11} onChange={(e)=>{setSession_11(e.target.value)}}/>
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 12</label>
                        <input type="date" className='form-control' value={session_12} onChange={(e)=>{setSession_12(e.target.value)}}/>
                    </div>
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Surgery</label>
                    <select className='form-control' value={surgery} onChange={(e)=>{setSurgery(e.target.value)}}>
                    { options && options.map((ek)=><option value={ek.value}>{ek.label}</option>) }
                    </select>
                    {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
                <div className='col-lg-6'>
                <div className='from-group'>
                  <label>If Yes</label>
                  <input type="text" className='form-control' placeholder='Type of Sergery' value={specify} onChange={(e)=>{setSpecify(e.target.value)}}/>
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                  <div className='subbtn text-center'>
                      <Link to="../Patients/investigations" className='btn btn-link mx-4'>Previous</Link>
                      <button className='btn btn-link' onClick={handleAddTreatment}>Next</button>
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
