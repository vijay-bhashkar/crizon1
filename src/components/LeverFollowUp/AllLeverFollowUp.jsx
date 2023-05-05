import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { toast } from "react-hot-toast";
import ReactPaginate from 'react-paginate';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { LEVERFOLLOWUPGet, SETLEVERFOLLOWUPObj, LEVERFOLLOWUPDelete } from "../../redux/actions/LeverFollowup/LeverFollowup.actions";
import { Link ,useNavigate} from "react-router-dom";
import { rolesObj } from "../../utils/roles";
import { url } from "../../services/url.service";
export const AllLeverFollowUp = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [setLeverData, setLeverFollowData] = useState();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState();
  const [totallimit, setTotallimit] = useState();

  const leverFollowArr = useSelector((states) => states.leverFollowup.leverfollowups);
  const paginateObj = useSelector((states) => states.leverFollowup.paginateData);
  const role = useSelector((states) => states.auth.role);
  const roleUser = useSelector((states) => states.auth.user.roleUser);

  const handleGet = ()=>{
    let query = {};
    query = `limit=${limit}&page=${page}`;
    dispatch(LEVERFOLLOWUPGet(query));
  }

  useEffect(() => { 
    handleGet();
  }, []);

  useEffect(()=>{
    if(leverFollowArr){
      setLeverFollowData(leverFollowArr);
    }
    if(paginateObj && paginateObj){
      setTotallimit(paginateObj?.totalPages)
      setTotal(paginateObj?.totalPages)
    }
  },[leverFollowArr]);

  useEffect(() => {
    if (page) {
      handleGet();
    }
  }, [page])

  const handleLeverEdit = (row) => {
    dispatch(SETLEVERFOLLOWUPObj(row));
    navigate("/LeverFollowUp/addfollowup");
  };
  
  const handleLeverDelete = (row) => {
    dispatch(LEVERFOLLOWUPDelete(row._id))
    dispatch(SETLEVERFOLLOWUPObj(null))
    toast.success("FollowUp deleted successfully");
};

const handleLeverView = (row) => {
  dispatch(SETLEVERFOLLOWUPObj(row));
  navigate("/LeverFollowUp/followupList");
};

  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="viewadduser">
                <ul>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h5 className="mb-0 text-center text-white">
                PATIENT LIST
              </h5>
            </div>
            <div className="col-lg-3 text-end">
            <div className='btnlist'>
              {(role == "ADMIN") ?
              <a href={`${url}/leverFollowup/downloadLeverFollowupExcel`} className="btn btn-defalut btn-md">Export Data</a>
              : "" }  
            </div> 
            </div>
            <div className="col-lg-2 ">
            <div className='btnlist'>
              <Link to="/LeverFollowUp/addfollowup" class="btn btn-defalut btn-md"> <BiUserPlus className="icon" /> Add FollowUp </Link>
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
              <th scope="col">Name of Patient</th>
              <th scope="col">Email</th>
              <th scope="col">FollowUp Date</th>
              <th scope="col">Phone No.</th>            
              <th scope="col">Edit &nbsp; Delete &nbsp;View</th> 
            </tr>
          </thead>
          <tbody>
            { setLeverData && setLeverData.map((item,index)=>(
            <tr key={index}>
              <th scope="row" className="text-center">
                {index+1}
              </th>
              <th scope="row">{item.name}</th>
              <td>{item.email}</td>
              <td>{item.enrollDate}</td>
              <td>{item.contact}</td>
              <td>
                <span className="editlist">
                  <FiEdit  onClick={(el)=>{handleLeverEdit(item)}}/>
                </span>{" "}&nbsp;&nbsp;
                <span className="delete_list">
                  <RiDeleteBin5Fill onClick={(el)=>{handleLeverDelete(item)}}/>
                </span>
                <span className="editlist" style={{marginLeft:30}}>
                  <GrView onClick={(el)=>{handleLeverView(item)}}/>
                </span>{" "}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='container-fluid my-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-10 text-center'>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={(e) => {
                setPage(e.selected + 1);
              }}
              pageRangeDisplayed={2}
              className='pagination_list'
              pageCount={total}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
