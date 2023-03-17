import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ALLDISEASEGet, DOCTORGet } from "../redux/actions/Doctor/Doctor.actions";
import { DISEASEGet } from "../redux/actions/Disease/Disease.actions";
import { DEMOGRAFICGet } from "../redux/actions/Demografic/Demografic.actions";
import { APPOINTMENTAdd , APPOINTMENTUpdate, SETAPPOINTMENTObj } from "../redux/actions/Appointment/Appointment.actions";
import {getWeekDay,getMonthName} from "./Utility/DateUtility"
import {  toastError} from "./Utility/ToastUtils";
import moment from 'moment'
import { getAllAppointment } from "../services/Appointment.service";
export const Appointmentform = () => {
  const diseaseDrop = [
    { value: "all", label: "Select Disease" },
    { value: "ulcerstive", label: "Ulcerative" },
    { value: "colitis", label: "Colitis" },
  ];
  const serviceDrop = [
    { value:"ibd", label: "IBD" },
    { value:"lever", label: "Lever" },
]
  const [startDate, setstartDate] = useState(new Date (new Date().getFullYear(),new Date().getMonth(),new Date().getDate()));
  const [endDate, setendDate] = useState(new Date (new Date().getFullYear(),new Date().getMonth(),new Date().getDate()+7));
  const [currenDate, setcurrenDate] = useState(new Date());
  const [dateRangeArr, setdateRangeArr] = useState([]);
  const bookdate = [
    { date: "20/11/22", isactive: false },
    { date:  "21/11/22", isactive: false },
    { date:  "22/11/22", isactive: false },
    { date:  "23/11/22", isactive: false },
    { date:  "24/11/22", isactive: false },
    { date:  "25/11/22", isactive: false },
    { date:  "26/11/22", isactive: false },
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

  const bookAvailability = [
    { value: "Available", isactive: false },
    { value: "Available", isactive: false },
    { value: "Available", isactive: false },
    { value: "Available", isactive: false },
    { value: "Available", isactive: false },
    { value: "Available", isactive: false },
    { value: "Available", isactive: false },
  ]

  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [dateArray, setDateArray] = useState(bookdate)
  const [timeArray, setTimeArray] = useState(booktime)
  const [patientName, setPatientName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [doctorFinalName, setDoctorFinalName] = useState("");
  const [demoModal, setDemoModal] = useState(false);
  const [doctorSpec, setDoctorSpec] = useState("");
  const [doctor, setDoctor] = useState("");
  const [appointmentArr, setAppointmentArr] = useState([]);
  const [diseaseArr, setDiseaseArr] = useState("");
  const [hod, sethod] = useState("");
  const [service, setService] = useState("");
  const [diseaseId, setDiseaseId] = useState("");
  useEffect(() => {
    handleGet()
  }, []);

  const dispatch = useDispatch();
  const handleGet = () => {
    dispatch(DOCTORGet());
    dispatch(DEMOGRAFICGet());
    dispatch(DISEASEGet());
    
  };

  const onServiceFun = (service)=>{
    setService(service);
    if(service){
      let diseaseFilter = diseaseArrRedux.filter(el=>el.service === service);
      setDiseaseArr(diseaseFilter.map((el) => ({...el,value:el._id,name:el.disease})));
      console.log(diseaseFilter.map((el) => ({...el,value:el._id,name:el.disease})), "asdfasdfasdf");
    }
    
  }

const handleGetAllApoinment =  async () => {
  try {

        let query = ``;
        if(startDate){
          query += `startDate=${moment(startDate).format('YYYY-MM-DD')}`;
        }
        if(endDate){
          query += `&endDate=${moment(endDate).format('YYYY-MM-DD')}`;
        }
  let { data: res } = await getAllAppointment(query);
  if(res.data){

    console.log(res.data,"res.data")
    setAppointmentArr(res.data)
    setdateRangeArr(prev => [...prev])
  }
  } catch (error) {
  console.error(error);
      toastError(error)
  }

}

      // Add One Week in currndate

      const handleAddWeek = (week) => {

        const newDate = calculateWeeks(currenDate, week,'+');
        setcurrenDate(newDate)
        setstartDate(newDate)
        const endDate = calculateWeeks(newDate, week,'+');
        setendDate(endDate)
    }

    const handleSubWeek = (week) => {
        const newDate = calculateWeeks(currenDate, week,'-');
        setcurrenDate(newDate)
        setstartDate(newDate)

    }

    const  calculateWeeks = (date, weeks, action)  => {
       let  pointdate = new Date(date)
 
        if(action == '+') {
             pointdate.setDate(pointdate.getDate() + 7 * weeks);
        } else if (action == '-') {
          setendDate(date)
             pointdate.setDate(pointdate.getDate() - 7 * weeks);
        }   
       
       return pointdate;

      }


    
const  getdateRangeArr  = () => {

  let loop = new Date(startDate);

  console.log(loop,"looploop")
  const dateArray = [];
  while (loop.getTime() < endDate.getTime()) {  
    dateArray.push(loop)
    loop = new Date(loop);
    loop.setDate(loop.getDate() + 1);
  }

console.log(dateArray,"dateArraydateArray")
setdateRangeArr(dateArray)
}
useEffect(() => {
  console.log(startDate,"startDatestartDatestartDate")
  console.log(endDate,"endDateendDateendDateendDate")
  handleGetAllApoinment()

      getdateRangeArr()
  
  }, [startDate,endDate])


  const getAvailabilty  = (time,date) => {


    let testDate = new Date( new Date(date).getFullYear(), new Date(date).getMonth(), new Date(date).getDate()   )
      let dateObj = appointmentArr.find((el) =>new Date(testDate).getTime() == new Date(el.selectedDate).getTime() && time === el.selectedTime)
      console.log(dateObj,"dateObj--------------------------------")

      if(dateObj){
        return <td  className="bookedappoiment" onClick={()=>{handleDoctor(date, time)}}>Booked</td>
      } else {
        return <td  className="available" onClick={()=>{handleDoctor(date, time)}}>Available</td>
      }
    }
  const dcotorArrRedux = useSelector((states) => states.doctor.doctors);
  const diseaseArrRedux = useSelector((states) => states.disease.diseases);
  const appointObj = useSelector((states) => states.appointment.appointmentObj);
  const demograficArr = useSelector((states) => states.demografic.demografics);


  const hadleDisease = (disease) => {
    if (disease) {
      setDiseaseId(disease)
      let doctorSpec1 = dcotorArrRedux.filter(el => el.disease == disease);
      console.log(doctorSpec1,"doctorSpec1doctorSpec1doctorSpec1")
      setDoctorSpec(doctorSpec1);
    }
  }

  const handleAppointment = () => {
    let obj = {
      patientId:patientName,
      doctorId:doctor,
      service,
      diseaseId,
      selectedDate,
      selectedTime,
    }
    if(appointObj?._id){
      dispatch(APPOINTMENTUpdate(appointObj?._id, obj));
      dispatch(SETAPPOINTMENTObj(null));
    }else{
    dispatch(APPOINTMENTAdd(obj));
    dispatch(SETAPPOINTMENTObj(null));
    setDemoModal(false);
  }
  handleGet()
}
 
  useEffect(() =>{
    if(appointObj){
      setPatientName(appointObj?.patientName);
      setDoctorFinalName(appointObj?.doctorFinalName);
      setSelectedDate(appointObj?.selectedDate);
      setSelectedTime(appointObj?.selectedTime);
    }
  },[appointObj]);

  const handleDoctor = (date , time) => {
  
    if(service == ""){
      toastError("Please Select Service")
      return 0
    }
    if(diseaseId == ""){
      toastError("Please Select Disease")
      return 0
    }
       if(doctor == ""){
      toastError("Please Select Doctor")
      return 0

    }
    setDemoModal(true);
    
    setDoctorName(doctor?.firstName);
    setSelectedTime(time);
    setSelectedDate(new Date (new Date(date).getFullYear(),new Date(date).getMonth(),new Date(date).getDate()));
    setDoctorFinalName(doctor._id);
  }

  console.log(doctor, "doctor")




  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3"></div>
            <div className="col-lg-5">
              <h5 className="mb-0 text-center text-white">
                Add Patient Appointment
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
              <div className='from-group'>
                                    <label>Service<span>*</span></label>
                                    <select className="form-control" value={service} onChange={(e)=>{onServiceFun(e.target.value)}}>
                                        <option>Please Select</option>
                                        { serviceDrop && serviceDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                                    </select>
                                </div>
                                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Disease </label>
                    <select className='form-control' value={diseaseId} onChange={(el)=>{hadleDisease(el.target.value)}}>
                    <option value="">Please Select</option>
                    { diseaseArr && diseaseArr.map((el)=><option value={el._id}>{el.disease}</option> )}
              </select>
                    {/* <Select options={diseaseArr}  placeholder="Select Disease" onChange={hadleDisease} /> */}
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Doctor </label>
                    <select className="form-control" value={doctor} onChange={(el) => { setDoctor(el.target.value) }}>
                    <option value="">Please Select</option>
                      {doctorSpec && doctorSpec.map((el) => <option value={el._id}>{el.firstName}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
              </div>
              {/* <div className="row">
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
                                <li key={i} style={{ textDecoration: "none", flex: 1, textAlign: "center" }} className={`${p.isactive === true ? 'active' : ''}`} onClick={(e) => { handleDateSelected(!p.isactive, i) }}> {p.date}</li>)
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
                          <table className="table paddibg0_table11 mb-0" >
                        <tbody className="overflow_text">
                        { timeArray && timeArray.map((el)=>{
                          return (
                            <tr>
                           { dateArray.map(date =><td className="available" data-bs-toggle="modal" data-bs-target="#exampleModal"  onClick={handleDoctor(date.date , el.time)}>available</td>)}
                          </tr>
                         )} )}
                        </tbody>
                      </table>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
                  </div>
                </div>
              </div> */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-title text-center">
                    <h4>Appointment Slot</h4>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="appoitmentable">
                    <table className="table paddibg0_table mb-0">
                      <thead>
                        <tr>
                          <th style={{ padding: "10px 17px" }}> <div className="icnocneter iconarrowleft">
                            <RiArrowLeftSLine className="icon"  onClick={() =>handleSubWeek(1)} />
                          </div>
                          </th>
                          <td colSpan={7} className={"listdate"}>
                            <ul style={{ display: "flex", flexDirection: "row", listStyle: "none" }}>
                              {dateRangeArr.map((date, i) => (
                                <li key={i} style={{ textDecoration: "none", flex: 1, textAlign: "center" }} className={`${(new Date(new Date (new Date().getFullYear(),new Date().getMonth(),new Date().getDate()))).getTime() == (new Date(date)).getTime() ? 'aactive' : 'dddd'}`}> {getWeekDay(date.getDay())}<br/>{date.getDate()} {getMonthName(date.getMonth()+1)}</li>)
                              )}
                            </ul>
                          </td>
                          <th style={{ padding: "10px 23px" }}>
                            <div className="icnocneter rightbtn">
                              <RiArrowRightSLine className="icon"  onClick={() =>handleAddWeek(1)} />
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
                     
                     <table className="table paddibg0_table11 mb-0" >
                     <tbody className="overflow_text">
                     { timeArray && timeArray.map((el)=>{
                     return (
                     <tr>
                     { dateRangeArr.map((date) =>getAvailabilty(el.time,date) )}
                     </tr> )})}
                     </tbody>
                     </table>
                      </div>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Modal
                isOpen={demoModal}
                onRequestClose={() => setDemoModal(false)}
                className="custom-modal"
                bodyOpenClassName="custom-modal-body"
                overlayClassName="custom-modal-overlay"
                htmlOpenClassName="custom-modal-html"
                portalClassName="custom-modal-parent home-popup-parent"
                contentLabel="Example Modal"
              >
                <div className="home-popup">
                  <div className="container-fluid mb-3">
                    <div className="row position-relative">
                      <div className="col-lg-8 text-center">
                        <h5>Book Appointment</h5>
                      </div>
                      <div className="col-lg-4 text-center">
                        <a href="/Patients/adddemographics" style={{textDecoration:"none",color:"black"}}>new patient</a>
                      </div>
                        <div onClick={() => setDemoModal(false)} className="colsebtn">
                         <AiFillCloseCircle class="iocnclose" />
                        </div>
                    </div>
                </div>
                <p>Date : {new Date(selectedDate).toDateString()} </p>
                <p>Time : {selectedTime} </p>
              <select className="form-control" value={patientName} onChange={(el)=>{setPatientName(el.target.value)}}>
                <option value="patient">Select Patient</option>
                { demograficArr && demograficArr.map((el)=><option value={el?._id}>{el.patientName}</option>)}
              </select><br/>
              {/* <input type="text" className="form-control" placeholder="Enter Date" value={selectedDate}/><br/>
              <input type="text" className="form-control" placeholder="Enter Time" value={selectedTime}/><br/>
              <input type="text" className="form-control" placeholder="Enter doctor" value={doctorName} /> */}
              <div className="mt-3 btn_modal_submit">
               <button type="button" class="btn btn-primary btn-block" data-bs-dismiss="modal" onClick={()=>handleAppointment()} style={{width:'100%'}}>Submit</button>
              </div>
              </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};