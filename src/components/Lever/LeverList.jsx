import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { toast } from "react-hot-toast";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { LEVERPERDETAILGet, LEVERPERDETAILDelete, SETLEVERPERDETAILObj } from "../../redux/actions/LeverPerDetail/LeverPerDetail.actions";
import { Link ,useNavigate} from "react-router-dom";
import { rolesObj } from "../../utils/roles";
export const LeverList = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [leverData, setLeverData] = useState();

  const leverArr = useSelector((states) => states.leverPerDetail.leverPerDetails);

  const handleGet = ()=>{
    dispatch(LEVERPERDETAILGet());
  }

  useEffect(() => { 
    handleGet();
  }, []);

  useEffect(()=>{
    if(leverArr){
      setLeverData(leverArr);
    }
  },[leverArr]);

  const handleCustomerEdit = (row) => {
    dispatch(SETLEVERPERDETAILObj(row));
    navigate(`/add-lever?edit=true&id=${row._id}`);
  };
  
  const handleCustomerDelete = (row) => {
    dispatch(LEVERPERDETAILDelete(row._id))
    dispatch(SETLEVERPERDETAILObj(null))
    toast.success("Patient deleted successfully");
};

const handleCustomerView = (row) => {
  dispatch(SETLEVERPERDETAILObj(row));
  navigate(`/show-lever-patient?edit=true&id=${row._id}`);
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
            <div className="col-lg-3 ">
          </div>
            <div className="col-lg-2 ">
            <div className='btnlist'>
              <Link to="/add-lever" class="btn btn-defalut btn-md"> <BiUserPlus className="icon" /> Add Patient </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table_view_list">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                S.NO
              </th>
              <th scope="col">Name of Patient</th>
              <th scope="col">Email</th>
              <th scope="col">Gender</th>
              <th scope="col">Phone No.</th>            
              <th scope="col">Edit &nbsp; Delete &nbsp;View</th> 
            </tr>
          </thead>
          <tbody>
            { leverData && leverData.map((item,index)=>(
            <tr key={index}>
              <th scope="row" className="text-center">
                {index+1}
              </th>
              <th scope="row">{item.name}</th>
              <td>{item.email}</td>
              <td>{item.gender}</td>
              <td>{item.contact}</td>
              <td>
                <span className="editlist">
                  <FiEdit onClick={(e)=>{handleCustomerEdit(item)}} />
                </span>{" "}&nbsp;&nbsp;
                <span className="delete_list">
                <RiDeleteBin5Fill onClick={(e)=>{handleCustomerDelete(item)}} />
                </span>
                <span className="editlist" style={{marginLeft:30}}>
                <GrView onClick={(e)=>{handleCustomerView(item)}} />
                </span>{" "}
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
