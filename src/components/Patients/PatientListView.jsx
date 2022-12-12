import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { DEMOGRAFICGet, DEMOGRAFICDelete, SETDEMOGRAFICObj } from "../../redux/actions/Demografic/Demografic.actions";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link ,useNavigate} from "react-router-dom";
import { rolesObj } from "../../utils/roles";
export const PatientListView = () => {

const demograficArr = useSelector((states) => states.demografic.demografics);
const role = useSelector((states)=> states.auth.role);
const user = useSelector((states)=> states.auth.user);
const roleUser = useSelector((states)=> states.auth.user.roleUser);

const dispatch = useDispatch();
const navigate = useNavigate();

const [demograficMainArr, setDemograficMainArr] = useState([]);

const handleGet = () => {
  let query = "";
  if(role == rolesObj.HOD){
    query += `hod=${user?.roleUser?._id}`;
  }
  if(role == rolesObj.DOCTOR){
    query += `doctor=${user?.roleUser?._id}`;
  }
  if(role == rolesObj.PATIENT){
    query += `patient=${user?.roleUser?._id}`;
  }

dispatch(DEMOGRAFICGet(query));

};


useEffect(() => {
  dispatch(SETDEMOGRAFICObj({}))

  handleGet()
  }, []);

 useEffect(() => {
  if (demograficArr?.length) {
    setDemograficMainArr(demograficArr);
    }
  }, [demograficArr]);
  
  const handleDemograficEdit = (row) => {
    dispatch(SETDEMOGRAFICObj(row));
    navigate("/Patients/editdemographics");
  };

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

  const handleDemograficView = (row) => {
    dispatch(SETDEMOGRAFICObj(row));
    navigate("/Patients/ShowpatientDetail/"+row?._id);
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
                    <BiUserPlus className="icon" /> <span>Add Patient</span>
                  </li>
                  <li>
                    <AiOutlineUnorderedList className="icon" />{" "}
                    <span>Add Patient</span>
                  </li>
                </ul>
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
              <th scope="col" className="text-center">S.NO</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Parent Name</th>
              <th scope="col">Age </th>
              <th scope="col">Sex </th>
              <th scope="col">Status</th>
              {(role == rolesObj.ADMIN || role == rolesObj.HOD || role == rolesObj.DOCTOR)?
              <th scope="col">Edit & Delete</th>
              :<th scope="col">View</th>}
            </tr>
          </thead>
          <tbody>

          {
            demograficMainArr && demograficMainArr.map((item,index) => <tr>
              <th scope="row" className="text-center">
                {index+1}
              </th>
              <th scope="row">{item.patientName}</th>
              <td>{item.parentName}</td>
              <td>{item.age}</td>
              <td>{item.sex}</td>
              <td>
              <span className="active">{item.status}</span>
              </td>
              {(role == rolesObj.ADMIN || role == rolesObj.HOD || role == rolesObj.DOCTOR)?
              <td>
                <span className="editlist">
                <FiEdit onClick={(e)=>{handleDemograficEdit(item)}} />
                </span>{" "}
                <span className="delete_list">
                  <RiDeleteBin5Fill onClick={(e)=>{handleDemograficDelete(item)}}/>
                </span>
              </td>:
              <td>
                <span className="editlist">
                <FiEdit onClick={(e)=>{handleDemograficView(item)}} />
                </span>{" "}
              </td>}
            </tr>
            )
          }
          </tbody>
        </table>
      </div>
    </div>
  );
};
