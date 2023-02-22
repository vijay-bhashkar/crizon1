import React , { useEffect, useState } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link , useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { INFECTIONAdd, INFECTIONGet, INFECTIONDelete, SETINFECTIONObj, INFECTIONUpdate, INFECTIONGet_BY_PATIENT_ID } from "../../redux/actions/Infection/Infection.actions";
import { toast } from 'react-hot-toast';

export const Infections = () => {
  const [respiratory, setRespiratory] = useState("");
  const [ent, setEnt] = useState("");
  const [skin, setSkin] = useState("");
  const [tb, setTb] = useState("");
  const [genitourinary, setGenitourinary] = useState("");
  const [gastrointestinal, setGastrointestinal] = useState("");
  const [specificToIbd, setSpecificToIbd] = useState("");
  const [neurological, setNeurological] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");
  const [patientId, setPatientId] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

useEffect(() => {
  if(patientId){
    dispatch(INFECTIONGet_BY_PATIENT_ID(patientId));
  }
}, [patientId]);

const infectionObj = useSelector((states) => states.infection.infectionsObj);
const demograficObj = useSelector((states) => states.demografic.demograficObj); 

useEffect(() => {
  dispatch(SETINFECTIONObj({}))
  if(demograficObj){
    setPatientId(demograficObj?._id)
  }
}, [demograficObj]);

const handleAddInfection = () => {

  if(respiratory == "" || respiratory == undefined){
    toast.error("Respiratory is mandatory");
    return
  }
  if(ent == "" || ent == undefined){
    toast.error("Ent is mandatory");
    return
  }if(genitourinary == "" || genitourinary == undefined){
    toast.error("Genitourinary is mandatory");
    return
  }else{
  let obj = {
    patientId:demograficObj?._id,
    respiratory,
    ent,
    skin,
    tb,
    genitourinary,
    gastrointestinal,
    specificToIbd,
    neurological,
    miscellaneous,
    };
    if(infectionObj?._id) {
      dispatch(INFECTIONUpdate(infectionObj._id, obj));
      dispatch(SETINFECTIONObj(null))
      toast.success(" Infection Updated Successfully ");
    }else {
      dispatch(INFECTIONAdd(obj));
      toast.success(" Infection Created Successfully ");
    }
    // navigate("/Patients/depression");
  }
};

useEffect(() =>{
      if(infectionObj){
        setRespiratory(infectionObj?.respiratory);
        setEnt(infectionObj?.ent);
        setSkin(infectionObj?.skin);
        setTb(infectionObj?.tb);
        setGenitourinary(infectionObj?.genitourinary);
        setGastrointestinal(infectionObj?.gastrointestinal);
        setSpecificToIbd(infectionObj?.specificToIbd);
        setNeurological(infectionObj?.neurological);
        setMiscellaneous(infectionObj?.miscellaneous);
      }
},[infectionObj]);

const options = [
  { value: "Select", label: "Select" },
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
  ];
  const respiratoryDrop = [
    { value:"Select", label:"Select" },
    { value:"URTI/Sore Throat/Pharyngitis", label:"URTI/Sore Throat/Pharyngitis" },
    { value:"Sinusitis", label:"Sinusitis" },
    { value:"LRTI", label:"LRTI" },
    { value:"Pleuritis", label:"Pleuritis" },
  ]
  const entDrop = [
    { value:"Select", label:"Select" },
    { value:"Conjunctivitis/Others", label:"Conjunctivitis/Others" },
    { value:"Ear Infections", label:"Ear Infections" },
  ]
  const skinDrop = [
    { value:"Select", label:"Select" },
    { value:"Cellulitis", label:"Cellulitis" },
    { value:"Shingles", label:"Shingles" },
    { value:"Chicken Pox", label:"Chicken Pox" },
    { value:"Measles", label:"Measles" },
    { value:"Hand foot and mouth disease", label:"Hand foot and mouth disease" },
    { value:"Warts", label:"Warts" },
    { value:"Scabies", label:"Scabies" },
    { value:"Lice", label:"Lice" },
    { value:"Fungal infections", label:"Fungal infections" },
  ]

  const tbDrop = [
    { value:"Select", label:"Select" },
    { value:"Pulmonary TB", label:"Pulmonary TB" },
    { value:"Extrapulmonary TB", label:"Extrapulmonary TB" },
  ]
  const genitourineryDrop = [
    { value:"Select", label:"Select" },
    { value:"UTI", label:"UTI" },
    { value:"Pyelonephritis", label:"Pyelonephritis" },
    { value:"Pyelitis", label:"Pyelitis" },
    { value:"Cystitis", label:"Cystitis" },
    { value:"Bacterial vaginosis", label:"Bacterial vaginosis" },
    { value:"Chlamydia", label:"Chlamydia" },
    { value:"Gonorrhoea", label:"Gonorrhoea" },
    { value:"Trichomoniasis", label:"Trichomoniasis" },
    { value:"Syphilis", label:"Syphilis" },
    { value:"Genital warts", label:"Genital warts" },
  ]
  const gastrointestinalDrop = [
    { value:"Select", label:"Select" },
    { value:"Acute Gastroenteritis", label:"Acute Gastroenteritis" },
    { value:"Acute Colitis", label:"Acute Colitis" },
    { value:"Acute Viral Hepatitis", label:"Acute Viral Hepatitis" },
    { value:"Cholangitis", label:"Cholangitis" },
    { value:"Amoebic Liver Abscess", label:"Amoebic Liver Abscess" },
    { value:"Pyogenic Liver Abscess", label:"Pyogenic Liver Abscess" },
    { value:"Hydatid Cyst", label:"Hydatid Cyst" },
    { value:"Peritonitis", label:"Peritonitis" },
  ]
  const specificDrop = [
    { value:"Select", label:"Select" },
    { value:"C. diff Infection", label:"C. diff Infection" },
    { value:"CMV", label:"CMV" },
  ]
  const neurologicalDrop = [
    { value:"Select", label:"Select" },
    { value:"Meningitis", label:"Meningitis" },
    { value:"Encephalitis", label:"Encephalitis" },
  ]
  const miscellaneousDrop = [
    { value:"Select", label:"Select" },
    { value:"Enteric Fever", label:"Enteric Fever" },
    { value:"Septic Arthritis", label:"Septic Arthritis" },
    { value:"Dengue", label:"Dengue" },
    { value:"Malaria", label:"Malaria" },
    { value:"Chikungunya", label:"Chikungunya" },
    { value:"Leptospirosis", label:"Leptospirosis" },
    { value:"Scrub Typhus", label:"Scrub Typhus" },
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
            Beck's Depression Inventory (BDI-II)
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
            <h3>Infections</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Respiratory</label>
                  <select className='form-control' value={respiratory} onChange={(e)=>{setRespiratory(e.target.value)}}>
                    { respiratoryDrop && respiratoryDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>ENT</label>
                <select className='form-control' value={ent} onChange={(e)=>{setEnt(e.target.value)}}>
                  { entDrop && entDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                <label>Skin</label>
                <select className='form-control' value={skin} onChange={(e)=>{setSkin(e.target.value)}}>
                  { skinDrop && skinDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>TB</label>
                  <select className='form-control' value={tb} onChange={(e)=>{setTb(e.target.value)}}>
                  { tbDrop && tbDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Genitourinary</label>
                  <select className='form-control' value={genitourinary} onChange={(e)=>{setGenitourinary(e.target.value)}}>
                  { genitourineryDrop && genitourineryDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                  </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Gastrointestinal</label>
                  <select className='form-control' value={gastrointestinal} onChange={(e)=>{setGastrointestinal(e.target.value)}}>
                  { gastrointestinalDrop && gastrointestinalDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                </select>
                  {/* <Select options={options} placeholder="Select" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Specific to IBD</label>
                  <select className='form-control' value={specificToIbd} onChange={(e)=>{setSpecificToIbd(e.target.value)}}>
                  { specificDrop && specificDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Neurological</label>
                  <select className='form-control' value={neurological} onChange={(e)=>{setNeurological(e.target.value)}}>
                  { neurologicalDrop && neurologicalDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                </select>
                  {/* <input type="text" className='form-control'  /> */}
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Miscellaneous</label>
                  <select className='form-control' value={miscellaneous} onChange={(e)=>{setMiscellaneous(e.target.value)}}>
                  { miscellaneousDrop && miscellaneousDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                </select>
                  {/* <Select options={options} placeholder="No" /> */}
                </div>
              </div>
            </div>
            <div className='row mt-4'>
              <div className='col-lg-12'>
                  <div className='subbtn text-center'>
                      <Link to="../Patients/treatment" className='btn btn-link mx-4'>Previous</Link>
                      <button className='btn btn-link' onClick={handleAddInfection}>Next</button>
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
