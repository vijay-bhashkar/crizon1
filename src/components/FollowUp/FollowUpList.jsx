import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { FOLLOWUPGet, FOLLOWUPDelete, SETFOLLOWUPObj } from "../../redux/actions/FollowUp/FollowUp.actions";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";
export const FollowUpList = () => {

const dispatch = useDispatch();
const navigate = useNavigate();
const [followupMainArr, setFollowupMainArr] = useState([]);
const [search, setSearch] = useState("");
const followupArr = useSelector((states)=> states.followup.followups);

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
    if(search){
      let followUpSearch =  followupMainArr.filter(el => `${el.patientId}`.toLowerCase().includes(`${search}`.toLowerCase()));
      setFollowupMainArr(followUpSearch);
    }
  })

  const handleFollowupEdit = (row) => {
    dispatch(SETFOLLOWUPObj(row));
    navigate("/FollowUp/Addfollowup");
  };
  
  const handleFollowupDelete = (row) => {
    dispatch(FOLLOWUPDelete(row._id))
    dispatch(SETFOLLOWUPObj(null))
};

  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="viewadduser">
                <ul>
                  <li>
                  </li>
                  {/* <li>
                    <AiOutlineUnorderedList className="icon" />{" "}
                    <span>Add User</span>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-lg-4"> 
            <input type="text" name="search" placeholder="Enter Patient's followup Id" className="form-control" value={search} onChange={(el)=>{setSearch(el.target.value)}}/>
            </div>
            <div className="col-lg-4 text-end">
            <div className='btnlist'>
            <Link to="/FollowUp/Addfollowup" class="btn btn-defalut btn-md"> <BiUserPlus className="icon"/> Add Follow Up</Link>
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
              <th scope="col">Patient Id</th>
              <th scope="col">Disease Extend</th>
              <th scope="col">Stool Frequency</th>
              <th scope="col">Rectal Bleeding</th>
              <th scope="col">Status</th>
              <th scope="col">Edit & Delete</th> 
            </tr>
          </thead>
          <tbody>

          {
            followupMainArr && followupMainArr.map((item,index) => <tr>
              <th scope="row" className="text-center">{index+1}</th>
              <th scope="row">{item.patientId}</th>
              <td>{item.diseaseExtend}</td>
              <td>{item.stoolFreq}</td>
              <td>{item.rectalBleeding}</td>
              <td>
              <span className="active">{item.status}</span>
              </td>
              <td>
                <span className="editlist">
                  <FiEdit onClick={(e)=>{handleFollowupEdit(item)}} />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill onClick={(e)=>{handleFollowupDelete(item)}}/>
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
