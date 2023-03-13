import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from 'react-router-dom';
import toast from "react-hot-toast";
import { HODGet, HODDelete, SETHODObj, DISEASEGet} from "../../redux/actions/Hod/Hod.actions";
export const Hod = () => {

useEffect(() => {
    handleGet();
  }, []);

  const hodArr = useSelector((states) => states.hod.hods);
  const totalHod = useSelector((states) => states.hod.total);
  const diseaseArr = useSelector((states) => states.hod.diseases);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hodMainArr, sethodMainArr] = useState([]);
  const [hodDisplayArr, sethodDisplayArr] = useState([]);
  const [disease , setDisease] =  useState("");
  const [doctor , setDoctor] =  useState("");
  const [search , setSearch] =  useState("");
  const [limit , setLimit] = useState(2);
  const [page , setPage] = useState(1);
  const [total , setTotal] = useState(0);
  let [totalPages , setTotalPages] = useState([]);

  const [allDisease , setAllDisease] = useState("");
  const [service, setService] = useState("");
  const [finalDisease, setFinalDisease] = useState("");

  const handleGet = () => {
    let query = "";
      query += `limit=${limit}&page=${page}`;
    dispatch(HODGet(query));
    dispatch(DISEASEGet());
  };

  const handlePaginate = ()=>{
    let query = "";
    query += `limit=${limit}&page=${page}`;
    dispatch(HODGet(query));
  }
 
  useEffect(() => {
    if (hodArr?.length) {
      sethodMainArr(hodArr);
      setTotal(totalHod);
      let totalPages = totalHod/limit;
      setTotalPages(Array(totalPages).fill(0).map((_,i)=>i));
      sethodDisplayArr(hodArr);
      }
    }, [hodArr]);

    useEffect(() => {
      if(search) {
      let filterAr = hodArr.filter(el => `${el.firstName}`.toLowerCase().includes(`${search}`.toLowerCase()));
      console.log(filterAr,"search")
        sethodDisplayArr(filterAr);
        }
      }, [search])


    useEffect(() => {
      if(diseaseArr?.length) {
        setDisease(diseaseArr);
        }
      }, [diseaseArr]);

    const hadleDisease = (disease) => {
      setFinalDisease(disease);
      console.log(disease, "ye kya hai");
      if (disease) {
        if(disease.value == 'all'){
          sethodDisplayArr(hodArr);
        } else {
          let hodDisease = hodArr.filter(el => el.disease == disease);
          console.log(hodDisease , "hodDisease,hodDisease");
          sethodDisplayArr(hodDisease);
        }
      }
    }

    const handleService = (service)=>{
      console.log("sdfsadf");
      setService(service);
        if(service){
          if(service == 'all'){
            sethodDisplayArr(hodArr);
          }else{
          const getDisease = diseaseArr.filter(el => el.service === service);
          setAllDisease(getDisease);
        }
      }
    }

    const handleHodEdit = (row) => {
      dispatch(SETHODObj(row));
      navigate(`/Hod/AddHod?edit=true&id=${row._id}`);
    };
  
    const handleHodDelete = (row) => {
      dispatch(HODDelete(row._id))
      toast.success("Hod deleted successfully");
      dispatch(SETHODObj(null))
  }
    const handleHodView = (row) => {
      dispatch(SETHODObj(row))
      navigate("/Hod/ShowHod");
  }

  const options = [
    { value: "all", label: "All" },
    { value: "crohn's", label: "Crohn's" },
    { value: "ulcerstive colitis", label: "Ulcerstive colitis" },
  ];
  const serviceDrop = [
    { label: "All", value:"all" },
    { label: "IBD", value:"ibd" },
    { label: "LEVER", value:"lever" },
  ]

  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="secound-header">
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="mb-0 text-center text-white">
                HOD LIST
              </h5>
            </div>
            <div className="col-lg-4 text-end">
            <div className='viewadduser btnlist'>
            <div className='btnlist'>
              <Link to="/Hod/AddHod" class="btn btn-defalut btn-md"><BiUserPlus className='icon'/> Add H.O.D</Link>
            </div>
           </div>
          </div>
          </div>
        </div>
      </div>
        <div className="wrapper_contentbody">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-lg-3">
                <label>Service</label>
                <select className='form-control' value={service} onChange={(e)=>{handleService(e.target.value)}}>
                  { serviceDrop && serviceDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                </select>
              </div>
              <div className="col-lg-3">
                <label>DISEASES</label>
                {/* <Select options={options} placeholder="Select Disease" onChange={hadleDisease}/> */}
                <select className='form-control' value={finalDisease} onChange={(e)=>{hadleDisease(e.target.value)}} >
                  <option>Select Disease</option>
                  { allDisease && allDisease.map((el)=><option value={el._id}>{el.disease}</option>)}
                </select>
              </div>
              <div className="col-lg-3">
                <label></label>
                <input type="text" name="search" placeholder='Enter Hod Name' className='form-control' value={search} onChange={(el)=>{setSearch(el.target.value)}} />
              </div>
            </div>
          </div>
          <div className='apportant-tbl tablebg mt-3'>
            <div className='container-fluid'>
              <div className='row justify-content-center'>
                <div className='col-lg-10'>
                  <div className='heading-title text-center'>
                    <h4>HODs List</h4>
                  </div>
                </div>
                <div className='col-lg-10 table_view_list'>
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Name of Doctor</th>
                        <th scope="col">Disease</th>
                        <th scope="col">Phone No.</th>
                        {/* <th scope="col">Status</th> */}
                        <th scope="col">Edit & Delete & View</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      hodDisplayArr && hodDisplayArr.map((item,index) =>(
                      <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <th>{item?.firstName}</th>
                        <td>{item?.disease}</td>
                        <td>{item?.phone}</td>
                        {/* <td><span className='status'> Active </span></td> */}
                        <td>
                        <span className="editlist" style={{paddingLeft:16}}>
                          <FiEdit onClick={(e)=>{handleHodEdit(item)}} />
                        </span>{" "}
                        <span className="delete_list" style={{paddingLeft:16}}>
                         <RiDeleteBin5Fill onClick={(e)=>{handleHodDelete(item)}}/>
                        </span>
                        <span className="editlist" style={{paddingLeft:20}}>
                         <GrView onClick={(e)=>{handleHodView(item)}}/>
                        </span>
                        </td>
                      </tr>
                    )
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='container-fluid mt-5'>
              <div className='row justify-content-center'>
                  <div className='col-lg-10 text-center'>
                  <nav aria-label="Page navigation paginationnum example ">
                      <ul className="pagination justify-content-center text-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                          </a>
                      </li>
                        { totalPages && totalPages.map((el)=><li className="page-item" onClick={(el)=>{handlePaginate()}}><a className="page-link active">{el+1}</a></li>)}
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                        <i className="fa fa-chevron-right" aria-hidden="true"></i>
                        </a>
                      </li>
                      </ul>
                    </nav>
                  </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}
