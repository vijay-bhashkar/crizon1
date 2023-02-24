import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FOLLOWUPGet, FOLLOWUPDelete, SETFOLLOWUPObj } from "../../redux/actions/FollowUp/FollowUp.actions";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";
import { toast } from "react-hot-toast";
import { url } from "../../services/url.service";
export const FollowUpList = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
const [followupMainArr, setFollowupMainArr] = useState([]);
const [search, setSearch] = useState("");
const followupArr = useSelector((states)=> states.followup.followups);
const patientArr = useSelector((states)=> states.demografic.demografics);
// console.log(patientArr ,"patientArr");
const handleGet = () => {
  dispatch(FOLLOWUPGet());
};

useEffect(() => {
  handleGet()
  }, []);

  useEffect(() => {
    if (followupArr?.length) {
      setFollowupMainArr(followupArr);
      }
    }, [followupArr])
    
    useEffect(()=>{
      if(patientArr){
        let patientName = patientArr.filter(el=> el._id === followupArr?.patientId);
        console.log(patientName , "patientName");
      }
    }, [patientArr]);
    
  useEffect(()=>{
    if(search){
      let followUpSearch =  followupMainArr.filter(el => `${el.patientName}`.toLowerCase().includes(`${search}`.toLowerCase()));
      setFollowupMainArr(followUpSearch);
    }
  })

  const handleFollowupEdit = (row) => {
    dispatch(SETFOLLOWUPObj(row));
    navigate(`/FollowUp/Addfollowup?edit=true&id=${row?._id}`);
  };

  const handleFollowupView = (row) => {
    dispatch(SETFOLLOWUPObj(row));
    navigate("/FollowUp/viewfollowup");
  };
  
  const handleFollowupDelete = (row) => {
    dispatch(FOLLOWUPDelete(row._id))
    dispatch(SETFOLLOWUPObj(null))
    toast.success("Follow up deleted");
};

  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="viewadduser">
              </div>
            </div>
            <div className="col-lg-4"> 
            <input type="text" name="search" placeholder="Enter Patient's Name " className="form-control" value={search} onChange={(el)=>{setSearch(el.target.value)}}/>
            </div>
            <div className="col-lg-4 text-end display-flex"> 
             <div className="row">
            <div className='btnlist col-lg-6'>
            <a href={`${url}/followUp/getFollowupExcel`} class="btn btn-defalut btn-md">Export Follow Up</a>
            </div>
            <div className='btnlist col-lg-6'>
            <Link to="/FollowUp/Addfollowup" class="btn btn-defalut btn-md"> <BiUserPlus className="icon"/> Add Follow Up</Link>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table_view_list">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">S.NO</th>
              <th scope="col">Patient FollowUp Id</th>
              <th scope="col">Disease Extend</th>
              <th scope="col">Followup Date</th>
              {/* <th scope="col">Rectal Bleeding</th> */}
              {/* <th scope="col">Status</th> */}
              <th scope="col">Edit & Delete & View</th> 
            </tr>
          </thead>
          <tbody>

          {
            followupMainArr && followupMainArr.map((item,index) => <tr>
              <th scope="row" className="text-center">{index+1}</th>
              <th scope="row">{item.patientId}</th>
              <td>{item.diseaseExtend}</td>
              <td>{item.followUpDate}</td>
              {/* <td>{item.rectalBleeding}</td> */}
              {/* <td><span className="active">{item.status}</span></td> */}
              <td>
                <span className="editlist">
                  <FiEdit onClick={(e)=>{handleFollowupEdit(item)}} />
                </span>{" "}
                <span className="delete_list" style={{marginLeft:20}}>
                  <RiDeleteBin5Fill onClick={(e)=>{handleFollowupDelete(item)}}/>
                </span>
                <span className="delete_list" style={{marginLeft:20}}>
                  <GrView onClick={(e)=>{handleFollowupView(item)}}/>
                </span>
              </td>
            </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};
