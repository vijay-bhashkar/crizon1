import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, Navigate } from "react-router-dom";
import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { DOCTORGet } from "../../redux/actions/Doctor/Doctor.actions";
import { DEMOGRAFICGet } from "../../redux/actions/Demografic/Demografic.actions";
import { APPOINTMENTAdd , APPOINTMENTUpdate, SETAPPOINTMENTObj, APPOINTMENTGet} from "../../redux/actions/Appointment/Appointment.actions";
import { rolesObj } from "../../utils/roles";
export const Appointment = () => {

  const diseaseDrop = [
    { value: "all", label: "Select Disease" },
    { value: "ulcerstive", label: "Ulcerative" },
    { value: "colitis", label: "Colitis" },
  ];
  // const bookdate = [
  //   { date:  `2017-06-17T00:00:00.000+00:00`, isactive: false },
  //   { date:  `2017-06-17T00:00:00.000+00:00`, isactive: false },
  //   { date:  `2017-06-17T00:00:00.000+00:00`, isactive: false },
  //   { date:  `2017-06-17T00:00:00.000+00:00`, isactive: false },
  //   { date:  `2022-12-16T00:00:00.000+00:00`, isactive: false },
  //   { date:  `2022-12-18T00:00:00.000+00:00`, isactive: false },
  //   { date:  `2022-12-17T00:00:00.000+00:00`, isactive: false },
  // ];

  const bookdate = [
    { date:  "2021-11-17", isactive: false },
    { date:  "2021-11-18", isactive: false },
    { date:  "2021-11-19", isactive: false },
    { date:  "2021-11-20", isactive: false },
    { date:  "2022-12-21", isactive: false },
    { date:  "2022-12-22", isactive: false },
    { date:  "2022-12-23", isactive: false },
  ];

  const booktime = [
    { time: "10:00", isactive: false },
    { time: "11:00", isactive: false },
    { time: "12:00", isactive: false },
    { time: "13:00", isactive: false },
    { time: "14:00", isactive: false },
    { time: "15:00", isactive: false },
    { time: "16:00", isactive: false },
    { time: "17:00", isactive: false },
    { time: "18:00", isactive: false },
  ]

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [dateArray, setDateArray] = useState(bookdate)
  const [timeArray, setTimeArray] = useState(booktime)
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorFinalName, setDoctorFinalName] = useState("");
  const [demoModal, setDemoModal] = useState(false);
  const [doctor, setDoctor] = useState("");
  const [availability, setAvailability] = useState("booked");
  const [appointArray, setAppointArray] = useState("");
  const [indiDoctorAppoint, setIndiDoctorAppoint] = useState("");

  useEffect(() => {
    handleGet()
  }, []);

  const dispatch = useDispatch();
  const handleGet = () => {
    
    if(role == rolesObj.DOCTOR){
      let doctorId  = roleUser?._id; 
      
    }
    dispatch(DOCTORGet());
    dispatch(DEMOGRAFICGet());

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

  const doctorArr = useSelector((states) => states.doctor.doctors);
  const appointObj = useSelector((states) => states.appointment.appointmentObj);
  const appointArr = useSelector((states) => states.appointment.appointments);
  const demograficArr = useSelector((states) => states.demografic.demografics);
  const roleUser = useSelector((states) => states.auth.user.roleUser);
  const role = useSelector((states) => states.auth.role);
  const [doctorId, setDoctorId] = useState(roleUser?._id); 
  const [indivisualDoctor, setIndivisualDoctor] = useState("");

 // const checkAvailability = appointArr.find(el=> el.availability == availability);

  const handleSubmitAppointment = (date,time) => {
    let obj = {
      selectedTime:time,
      selectedDate:date,
      availability,
      doctorId
    };
    if(appointObj?._id){
      dispatch(APPOINTMENTUpdate(appointObj._id, obj));
    }else{
    dispatch(APPOINTMENTAdd(obj));
    dispatch(SETAPPOINTMENTObj(null));
    setDemoModal(false);
  }
}

useEffect(()=>{
  if(role == "DOCTOR" ){
    // const allIndivisualData = appointArr.filter(el=>el.doctorId == doctorId);
    // setIndivisualDoctor(allIndivisualData);
    // console.log(allIndivisualData , "all Indivisual Data");
  }
},[appointArr])

  useEffect(() =>{
    if(appointObj){
      setPatientName(appointObj?.patientName);
      setDoctorFinalName(appointObj?.doctorFinalName);
      setSelectedDate(appointObj?.selectedDate);
      setSelectedTime(appointObj?.selectedTime);
    }
  },[appointObj]);

  const handleDoctor = () => {
    setDemoModal(true);
    let doctorName = doctorArr.find(el => el._id == doctor);
    setDoctorName(doctorName);
    setDoctorFinalName(doctorName._id);
  }

  const data = [{ name: "test1" }, { name: "test2" }];
  const listItems = data.map((d) => <li key={d.name}>{d.name}</li>);

  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3"></div>
            <div className="col-lg-5">
              <h5 className="mb-0 text-center text-white">
                Save Your Appointment
              </h5>
            </div>
            <div className="col-lg-4 text-end">
              <div className="btnlist">
                <Link className="btn btn-defalut btn-md">
                  <AiOutlineUnorderedList className="icon" />{" "}
                  <span><Link to="/ListAppointment">View List </Link></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper_contentbody">
        <div className="container-fluid">
          <div className="row justify-content-center addlist-frm mt-3">
            <div className="col-lg-10">
              <div className="row addlist-frm mb-3">
                <div className="col-lg-6">
                </div>
                <div className="col-lg-6">
                </div>
              </div>
              <div className="row">
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-title text-center">
                    <h4>Appointment Slot {selectedDate}</h4>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="appoitmentable">
                    <table className="table paddibg0_table mb-0">
                      <thead>
                        <tr>
                          <th style={{ padding: "10px 17px" }}> <div className="icnocneter iconarrowleft">
                            <RiArrowLeftSLine className="icon" />
                          </div>
                          </th>
                          <td colSpan={7} className={"listdate"}>
                            <ul style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
                              {dateArray.map((p, i) => (
                                <li key={i} style={{ textDecoration: "none", flex: 1, textAlign: "center" }} className={`${p.isactive === true ? 'active' : ''}`}> {p.date}</li>)
                              )}
                            </ul>
                          </td>
                          <th style={{ padding: "10px 23px" }}>
                            <div className="icnocneter rightbtn">
                              <RiArrowRightSLine className="icon" />
                            </div>
                          </th>
                        </tr>
                      </thead>
                    </table>
                    <div className="scroller_text"> 
                      <div className="container appoitmentable">
                        <div className="row">
                          <div className="col-lg-12 p-0">
                            <div className="table_flex">
                              <div className="timearea">
                              <table className="table mb-0">
                                { timeArray && timeArray.map((el)=><tr><th>{el.time}</th></tr> )}
                              </table>
                          </div>
                      {(appointArr?.booked)?
                      <table className="table paddibg0_table11 mb-0" >
                        <tbody className="overflow_text">
                        { timeArray && timeArray.map((el)=>{
                        return (
                        <tr>
                        { dateArray.map((date) =><td className="available" onClick={()=>{handleSubmitAppointment(date.date, el.time , availability)}}>Booked</td> )}
                        </tr> )})}
                        </tbody>
                      </table>
                     :
                     <table className="table paddibg0_table11 mb-0" >
                     <tbody className="overflow_text">
                     { timeArray && timeArray.map((el)=>{
                     return (
                     <tr>
                     { dateArray.map((date) =><td className="available" onClick={()=>{handleSubmitAppointment(date.date, el.time , availability)}}>Available</td> )}
                     </tr> )})}
                     </tbody>
                   </table>
                     }
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
