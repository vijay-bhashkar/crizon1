import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { SUBADMINGet, SUBADMINDelete, SETSUBADMINObj } from "../../redux/actions/SubAdmin/SubAdmin.actions";
import { AiOutlineUnorderedList } from "react-icons/ai";
// import Select from "react-select";
import { Link ,useNavigate} from "react-router-dom";
export const SubAdminListview = () => {

const subAdminArr = useSelector((states) => states.subAdmin.subAdmins);
console.log(subAdminArr);

const dispatch = useDispatch();
const navigate = useNavigate();
const [customerMainArr, setCustomerMainArr] = useState([]);
const handleGet = () => {
  dispatch(SUBADMINGet());
};

useEffect(() => {
  handleGet()
  }, []);


 useEffect(() => {
  if (subAdminArr?.length) {
    setCustomerMainArr(subAdminArr);
    }
  }, [subAdminArr]);

  const handleSubAdminEdit = (row) => {
    dispatch(SETSUBADMINObj(row));
    navigate("/SubAdmin/AddSubAdmin");
  };

  const handleSubAdminDelete = (row) => {
    dispatch(SUBADMINDelete(row._id))
    dispatch(SETSUBADMINObj(null))
}


  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="viewadduser">
              <div className='btnlist'>
              <Link to="/SubAdmin/AddSubAdmin" class="btn btn-defalut btn-md"> <BiUserPlus className='icon' />Add Sub Admin</Link>
              </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
            <div className="col-lg-4"></div>
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
              <th scope="col">Name </th>
              <th scope="col">Email</th>
              <th scope="col">Role Address</th>
              <th scope="col">Status</th>
              <th scope="col">Edit & Delete</th>
            </tr>
          </thead>
          <tbody>

          {
            customerMainArr && customerMainArr.map((item,index) => <tr>
              <th scope="row" className="text-center"> {index+1} </th>
              <th scope="row">{item.name}</th>
              <td>{item.email}</td>
              <td>{item.role}</td>
              <td><span className="active">{item.status}</span></td>
              <td>
                <span className="editlist">
                <FiEdit onClick={(e)=>{handleSubAdminEdit(item)}} />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill onClick={(e)=>{handleSubAdminDelete(item)}}/>
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
