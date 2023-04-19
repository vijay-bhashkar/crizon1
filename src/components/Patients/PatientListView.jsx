import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
// import XLSX from "xlsx";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { DEMOGRAFICGet, DEMOGRAFICDelete, SETDEMOGRAFICObj,GETALLDisease } from "../../redux/actions/Demografic/Demografic.actions";
import { LEVERPERDETAILGet,SETLEVERPERDETAILObj  } from "../../redux/actions/LeverPerDetail/LeverPerDetail.actions";
import { Link ,useNavigate} from "react-router-dom";
import { rolesObj } from "../../utils/roles";
import { url } from "../../services/url.service";

export const PatientListView = () => {

const demograficArr = useSelector((states) => states.demografic.demografics);
const diseaseArr = useSelector((states) => states.demografic.diseases);
const role = useSelector((states)=> states.auth.role);
const user = useSelector((states)=> states.auth.user);
const roleUser = useSelector((states)=> states.auth.user.roleUser);
const hodArr = useSelector((states) => states.hod.hods);
const leverPerDetailArr = useSelector((states) =>states.leverPerDetail.leverPerDetails);

const [search, setSearch] = useState("");

const dispatch = useDispatch();
const navigate = useNavigate();

const [demograficMainArr, setDemograficMainArr] = useState([]);
const [service, setService] = useState("");
const [finalDisease, setFinalDisease] = useState("");
const [allDisease , setAllDisease] = useState("");
const [leverMainArr , setLeverMainArr] = useState("");

const handleGet = () => {
  let query = "";
  if(role == rolesObj.HOD){
    query += `hod=${user?.roleUser?._id}`;
    dispatch(DEMOGRAFICGet(query));
  }
  if(role == rolesObj.DOCTOR){
    query += `doctorId=${user?.roleUser?._id}`;
    dispatch(DEMOGRAFICGet(query));
  }
  if(role == rolesObj.PATIENT){
    query += `patient=${user?.roleUser?._id}`;
    dispatch(DEMOGRAFICGet(query));
  }

  let leverQuery ="";
  if(role == rolesObj.PATIENT){
    leverQuery += `patientId=${user?.roleUser?._id}`;
    dispatch(LEVERPERDETAILGet(leverQuery));
  }
  
  dispatch(GETALLDisease());
};


useEffect(() => {
  dispatch(SETDEMOGRAFICObj({}))
  handleGet()
  }, []);

useEffect(()=>{
  if(search){
    let patientArr = demograficArr.filter(el => `${el.patientName}`.toLowerCase().includes(`${search}`.toLowerCase()));
    console.log(patientArr);
    setDemograficMainArr(patientArr);
  }
})

  useEffect(()=>{
    if(leverPerDetailArr?.length){
      setLeverMainArr(leverPerDetailArr); 
    }
  })  

 useEffect(() => {
  if (demograficArr?.length) {
    setDemograficMainArr(demograficArr);
    }
  }, [demograficArr]);
  
  const handleDemograficEdit = (row) => {
    dispatch(SETDEMOGRAFICObj(row));
    navigate(`/Patients/editdemographics?edit=true&id=${row._id}`);
  };
  
  const handleDemograficAllView = (row) => {
    dispatch(SETDEMOGRAFICObj(row));
    navigate(`/Patients/Viewdemografics?edit=true&id=${row._id}`);
  }; 
  
  const handleLeverView =(row) =>{
    dispatch(SETLEVERPERDETAILObj(row));
    navigate(`/lever-per-person/${row._id}`);
  }

  const handleDemograficDelete = (row) => {
    let query = "";
    if(role == rolesObj.HOD){
      query += `hod=${user?.roleUser?._id}`;
    }

    let obj = {
      query : query,
      id:row._id
    }
    dispatch(DEMOGRAFICDelete(obj))
    dispatch(SETDEMOGRAFICObj(null))
  }

  const hadleDisease = (disease) => {
    setFinalDisease(disease);
    if (disease) {
      if(disease.value == 'all'){
        setDemograficMainArr(demograficArr);
      } else {
        let hodDisease = demograficArr.filter(el => el.disease == disease);
        setDemograficMainArr(hodDisease);
      }
    }
  }

  const handleService = (service)=>{
    setService(service);
    if(service){
      if(service == 'all'){
        setDemograficMainArr(demograficArr);
      }else{
        const serviceGet = diseaseArr.filter(el => el.service == service);
        // console.log(serviceGet , "serviceGet serviceGet");
        setAllDisease(serviceGet);
      }
    }
  }

  const handleDemograficView = (row) => {
    dispatch(SETDEMOGRAFICObj(row));
    navigate("/Patients/ShowpatientDetail/"+row?._id);
  };

  const options = [
    { value: "all", label: "All" },
    { value: "crohn's", label: "Crohn's" },
    { value: "ulcerstive colitis", label: "Ulcerstive colitis" },
  ];

  const serviceDrop = [
    { label:"All", value:"all" },
    { label:"IBD", value:"ibd" },
    { label:"LEVER", value:"lever" },
  ]
  
  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
          <div className="col-lg-4">
            </div>
            {(role == "ADMIN" || role == "DOCTOR" || role == "HOD")?
            <div className="col-lg-3"><span style={{color:"white"}}><h5>PATIENT'S LIST</h5></span></div>
            : "" }
            <div className="col-lg-3 text-end">
            <div className='btnlist'> 
            {(role == "ADMIN")? 
            <a href={`${url}/demografic/downloadAllPatient`} target="_blank" class="btn btn-defalut btn-md ">Export Data</a>
            : "" }
            </div>
            </div>
            {(role == "ADMIN" || role == "DOCTOR" || role == "HOD")? 
            <div className="col-lg-2 text-end">
            <div className='btnlist'>
              <Link to={"/Patients/Adddemographics"} class="btn btn-defalut btn-md"><BiUserPlus className="icon"/> Add Patient </Link>
            </div>
            </div>
            : "" }
          </div>
        </div>
      </div>
      <div className="container-fluid">
           {(role != "PATIENT")?
            <div className="row justify-content-center py-3">
              <div className="col-lg-4">
              <label>Service</label>
              <select className="form-control" value={service} onChange={(e)=>{handleService(e.target.value)}}>
                { serviceDrop && serviceDrop.map((el)=><option  value={el.value}>{el.label}</option>) }
              </select>
              </div>
              <div className="col-lg-4">
                <label>Search by disease</label>
                {/* <Select options={options} placeholder="Select Disease" onChange={hadleDisease}/> */}
                <select className="form-control" value={finalDisease} onChange={(e)=>{hadleDisease(e.target.value)}}>
                 { allDisease && allDisease.map((el)=><option value={el._id}>{el.disease}</option>)}
                </select>
              </div>
              <div className="col-lg-4">
                <label>Search by patient</label>
                <input type="text" name="search" placeholder='Enter Patient Name' className='form-control' value={search} onChange={(el)=>{setSearch(el.target.value)}} />
              </div>
            </div>
           :""}
          </div>
          
      <div className="table_view_list">
        <table class="table">
          {(demograficMainArr?.length)?
          <thead>
            <tr>
              <th scope="col" className="text-center">S.NO</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Parent Name</th>
              <th scope="col">Age </th>
              <th scope="col">Sex </th>
              {/* <th scope="col">Status</th> */}
              {(role == rolesObj.ADMIN || role == rolesObj.HOD || role == rolesObj.DOCTOR)?
              <th scope="col">Edit & Delete & View</th>
              :<th scope="col">View</th>}
            </tr>
          </thead>
          :""}
          <tbody>
          {
            demograficMainArr && demograficMainArr.map((item,index) => <tr>
              <th scope="row" key={index} className="text-center">
                {index+1}
              </th>
              <th scope="row">{item.patientName}</th>
              <td>{item.parentName}</td>
              <td>{item.age}</td>
              <td>{item.sex}</td>
              {/* <td>
              <span className="active">{item.status}</span>
              </td> */}
              {(role == rolesObj.ADMIN || role == rolesObj.HOD || role == rolesObj.DOCTOR)?
              <td>
                <span className="editlist" style={{marginLeft:20}}>
                <FiEdit onClick={(e)=>{handleDemograficEdit(item)}} />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill onClick={(e)=>{handleDemograficDelete(item)}}/>
                </span>
                <span className="editlist" style={{marginLeft:20}}>
                <GrView onClick={(e)=>{handleDemograficAllView(item)}} />
                </span>{" "}
              </td>:
              <td>
                <span className="editlist" style={{marginLeft:20}}>
                <FiEdit onClick={(e)=>{handleDemograficView(item)}} />
                </span>{" "}
              </td>}
            </tr>
            )
          }
          </tbody>
        </table>
      </div>

       {(leverMainArr)?
       <div className="table_view_list">
       {/* <table class="table">
         <thead>
           <tr>
             <th scope="col" className="text-center">S.NO</th>
             <th scope="col">Patient Name</th>
             <th scope="col">Enroll Date</th>
             <th scope="col">Age </th>
             <th scope="col">Sex </th>
             <th scope="col">View</th>
           </tr>
         </thead>
         <tbody>
         {
           leverMainArr && leverMainArr.map((item,index) => <tr>
             <th scope="row" key={index} className="text-center">
               {index+1}
             </th>
             <th scope="row">{item.name}</th>
             <td>{item.enrollDate}</td>
             <td>{item.age}</td>
             <td>{item.gender}</td>
             <td>
               <span className="editlist" style={{marginLeft:20}}>
               <FiEdit onClick={(e)=>{handleLeverView(item)}} />
               </span>{" "}
             </td>
           </tr>
           )
         }
         </tbody>
       </table> */}
     </div>
       :""}

    </div>
  );
};
