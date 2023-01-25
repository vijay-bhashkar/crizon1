import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BiUserPlus } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from 'react-router-dom';
import { APPOINTMENTGet, SETAPPOINTMENTObj, APPOINTMENTDelete } from "../../redux/actions/Appointment/Appointment.actions";
import moment from 'moment';
export const ListAppointment = () => {

useEffect(() => {
    handleGet()
  }, []);

  const appointArr = useSelector((states) => states.appointment.appointments);
  const diseaseArr = useSelector((states) => states.hod.diseases);
  const roleUser = useSelector((states) => states.auth.user.roleUser);
  const role  =  useSelector((states)=> states.auth.role);
console.log(appointArr, "appoint Arr");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hodMainArr, sethodMainArr] = useState([]);
  const [appointDisplayArr, setAppointDisplayArr] = useState([]);
  const [disease , setDisease] =  useState("");
  const [doctor , setDoctor] =  useState("");
  const [search , setSearch] =  useState("");
  const [doctorId, setDoctorId] = useState(roleUser?._id); 
  const [indivisualDoctor, setIndivisualDoctor] = useState("");

  const handleGet = () => {
    let query = '';
    if(role == "DOCTOR" ){
      var date = new Date(), y = date.getFullYear(), m = date.getMonth();
      var firstDay = new Date(y, m, 1);
      var lastDay = new Date(y, m + 1, 0);
      let docIID = roleUser?._id;
       firstDay = moment(firstDay).format('YYYY-MM-DD');
       lastDay = moment(lastDay).format('YYYY-MM-DD');
      query += `startDate=${firstDay}&lastDate=${lastDay}&doctorId=${docIID}`
      console.log(query);
    }
    dispatch(APPOINTMENTGet(query));
  };

  useEffect(()=>{
    // const allIndivisualData = appointArr.filter(el=>el.doctorId == doctorId);
      // setIndivisualDoctor(allIndivisualData);
      // console.log(allIndivisualData , "all Indivisual Data");
  },[appointArr]);
 
  useEffect(() => {
    if (appointArr?.length) {
      sethodMainArr(appointArr);
      setAppointDisplayArr(appointArr);
      }
    }, [appointArr]);

    useEffect(() => {
      if (diseaseArr?.length) {
        setDisease(diseaseArr);
        }
      }, [diseaseArr]);

    const handleAppointEdit = (row) => {
      dispatch(SETAPPOINTMENTObj(row));
      navigate("/");
    };
  
    const handleAppointDelete = (row) => {
      dispatch(APPOINTMENTDelete(row._id))
      dispatch(SETAPPOINTMENTObj(null))
  }

  const options = [
    { value: "all", label: "All" },
    { value: "colitis", label: "colitis" },
    { value: "ulcerstive", label: "ulcerstive" },
  ];
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
                Appointment LIST
              </h5>
            </div>
            <div className="col-lg-4 text-end">
            <div className='viewadduser btnlist'>
            <div className='btnlist'>
              <Link to="/" class="btn btn-defalut btn-md"><BiUserPlus className='icon'/> Add Appointment</Link>
            </div>
           </div>
          </div>
          </div>
        </div>
      </div>
        <div className="wrapper_contentbody">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className=""></div>
            </div>
          </div>
          <div className='apportant-tbl tablebg mt-3'>
            <div className='container-fluid'>
              <div className='row justify-content-center'>
                <div className='col-lg-10'>
                  <div className='heading-title text-center'>
                    <h4>Appointment List</h4>
                  </div>
                </div>
                <div className='col-lg-10 table_view_list'>
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">S.No.</th>
                        {/* <th scope="col">Patient Name</th> */}
                        <th scope="col">Time</th>
                        <th scope="col">Date </th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit & Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      appointArr && appointArr.map((item,index) =>
                      <tr>
                        <th scope="row">{index+1}</th>
                        {/* <th>{item.patientName}</th> */}
                        <td>{item.selectedTime}</td>
                        <td>{item.selectedDate}</td>
                        <td><span className='status'>{item.availability}</span></td>
                        <td>
                        <span className="editlist" style={{paddingLeft:16}}>
                          <FiEdit onClick={(e)=>{handleAppointEdit(item)}} />
                        </span>{" "}
                        <span className="delete_list" style={{paddingLeft:16}}>
                         <RiDeleteBin5Fill onClick={(e)=>{handleAppointDelete(item)}}/>
                        </span>
                        </td>
                      </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='container-fluid mt-5'>
              <div className='row justify-content-center'>
                  <div className='col-lg-10'>
                    <div className=' text-center'>
                      <Link to="/Patientupcoming" className='nxt-btn'>Next</Link>
                    </div>
                  </div>
                  <div className='col-lg-10 mt-5 text-center'>
                  <nav aria-label="Page navigation paginationnum example ">
                      <ul className="pagination justify-content-center text-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link active"  href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
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
