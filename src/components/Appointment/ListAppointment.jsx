import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { AiFillSchedule } from "react-icons/ai";
import { BiUserPlus } from "react-icons/bi";
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from 'react-router-dom';
import { APPOINTMENTGet, SETAPPOINTMENTObj, APPOINTMENTDelete } from "../../redux/actions/Appointment/Appointment.actions";
import moment from 'moment';
export const ListAppointment = () => {

useEffect(() => {
    handleGet()
  }, []);

  const diseaseArr = useSelector((states) => states.disease.diseases);
  const appointArr = useSelector((states) => states.appointment.appointments);
  const totalAppoint = useSelector((states) => states.appointment.total);
  const totalpage = useSelector((states) => states.appointment.totalPages);
  // const diseaseArr = useSelector((states) => states.hod.diseases);
  const roleUser = useSelector((states) => states.auth.user.roleUser);
  const role  =  useSelector((states)=> states.auth.role);
 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hodMainArr, sethodMainArr] = useState([]);
  const [appointDisplayArr, setAppointDisplayArr] = useState([]);
  const [disease , setDisease] =  useState("");
  const [doctor , setDoctor] =  useState("");
  const [search , setSearch] =  useState("");
  const [doctorId, setDoctorId] = useState(roleUser?._id); 
  const [indivisualDoctor, setIndivisualDoctor] = useState("");
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [total, setTotal] = useState();
  const [totalPages, setTotalPages] = useState();

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
    }
    query+= `limit=${limit}&page=${page}`;
    dispatch(APPOINTMENTGet(query));
  };

  // useEffect(()=>{
  //   const allIndivisualData = appointArr.filter(el=>el.doctorId == doctorId);
  //     setIndivisualDoctor(allIndivisualData);
  //     console.log(allIndivisualData , "all Indivisual Data");
  // },[appointArr]);
 
  useEffect(() => {
    if(appointArr?.length) {
      sethodMainArr(appointArr);
      setAppointDisplayArr(appointArr);
      }
    if(totalAppoint && totalAppoint){
      setTotalPages(totalpage);
      // setTotal(totalpage);
    }
    }, [appointArr]);

    useEffect(() => {
      if (diseaseArr?.length) {
        setDisease(diseaseArr);
        }
      }, [diseaseArr]);

      useEffect(() => {
        console.log(page)
        if(page){
          handleGet();
        }
      }, [page])

    const handleAppointEdit = (row) => {
      dispatch(SETAPPOINTMENTObj(row));
      navigate("/");
    };
  
    const handleAppointDelete = (row) => {
      dispatch(APPOINTMENTDelete(row._id))
      dispatch(SETAPPOINTMENTObj(null))
    }

    const handleAppointSchedule = (row)=>{
      dispatch(SETAPPOINTMENTObj(row));
      navigate(`/appointmentform/${row.doctorFinalName}`);
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
              <Link to="/appointmentform/64071d7b2caa35805f872d8b" class="btn btn-defalut btn-md"><BiUserPlus className='icon'/> Add Appointment</Link>
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
                        <th scope="col">Time</th>
                        <th scope="col">Date </th>
                        <th scope="col">Patient </th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Availability</th>
                        <th scope="col">Edit & Delete</th>
                        <th scope="col">Get Schedule</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      appointArr && appointArr.map((item,index) =>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <td>{item.selectedTime}</td>
                        <td>{item.selectedDate}</td>
                        <td><span className='status'>{item.patientName}</span></td>
                        <td><span className='status'>{item.doctorFinalName}</span></td>
                        <td><span className='status'>{item.availability}</span></td>
                        <td>
                        <span className="editlist" style={{paddingLeft:16}}>
                          <FiEdit onClick={(e)=>{handleAppointEdit(item)}} />
                        </span>{" "}
                        <span className="delete_list" style={{paddingLeft:16}}>
                         <RiDeleteBin5Fill onClick={(e)=>{handleAppointDelete(item)}}/>
                        </span>
                        </td>
                        <td>
                        <span className="editlist" style={{paddingLeft:16}}>
                         <Link to={"/appointmentform"}>
                         <AiFillSchedule/>
                          </Link> 
                        </span>{" "}
                        
                        </td>
                      </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
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
              pageCount={totalPages}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
          </div>
      </div>
    </div>
  )
}
