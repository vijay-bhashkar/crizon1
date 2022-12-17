import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DOCTORGet } from "../redux/actions/Doctor/Doctor.actions";
import { DEMOGRAFICGet } from "../redux/actions/Demografic/Demografic.actions";
import { APPOINTMENTAdd } from "../redux/actions/Appointment/Appointment.actions";
export const Appointmentform = () => {
  const diseaseDrop = [
    { value: "all", label: "Select Disease" },
    { value: "ulcerstive", label: "Ulcerative" },
    { value: "colitis", label: "Colitis" },
  ];
  const bookdate = [
    { date: "20 Mon Sep", isactive: false },
    { date: "21 Tue Sep", isactive: false },
    { date: "22 Wed Sep", isactive: false },
    { date: "23 Thur Sep", isactive: false },
    { date: "24 Fri Sep", isactive: false },
    { date: "25 Sat Sep", isactive: false },
    { date: "26 Sun Sep", isactive: false },
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
  const [doctorSpec, setDoctorSpec] = useState("");
  const [doctor, setDoctor] = useState("");

  useEffect(() => {
    handleGet()
  }, []);

  const dispatch = useDispatch();
  const handleGet = () => {
    dispatch(DOCTORGet());
    dispatch(DEMOGRAFICGet());
    dispatch(APPOINTMENTAdd());
  };

  const doctorArr = useSelector((states) => states.doctor.doctors);
  const demograficArr = useSelector((states) => states.demografic.demografics);

  const hadleDisease = (disease) => {
    if (disease.value) {
      let doctorSpec = doctorArr.filter(el => el.disease == disease.value);
      setDoctorSpec(doctorSpec);
    }
  }

  const handleAppointment = () => {
    let obj = {
      patientName,
      doctorFinalName,
      selectedDate,
      selectedTime,
    }
    dispatch(APPOINTMENTAdd(obj));
  }

  const handleDoctor = () => {
    setDemoModal(true);
    let doctorName = doctorArr.find(el => el._id == doctor);
    console.log(doctorName.firstName, "name name name");
    setDoctorName(doctorName);
    setDoctorFinalName(doctorName?._id);
  }

  const handleDateSelected = (status, index) => {
    const list = [...bookdate];
    list[index].isactive = status;
    let dateObj = list[index];
    setSelectedDate(dateObj.date);
    setDateArray(list);
  }

  const handleTimeSelected = (status, index) => {
    const timeList = [...booktime];
    timeList[index].isactive = status;
    let timeObj = timeList[index];
    setSelectedTime(timeObj.time);
    setTimeArray(timeList);
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
                Add Patient Appointment
              </h5>
            </div>
            <div className="col-lg-4 text-end">
              <div className="btnlist">
                <Link className="btn btn-defalut btn-md">
                  <AiOutlineUnorderedList className="icon" />{" "}
                  <span>View List</span>
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
                  <div className="from-group">
                    <label>Disease </label>
                    <Select options={diseaseDrop} placeholder="Select Disease" onChange={hadleDisease} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Doctor </label>
                    <select className="form-control" value={doctor} onChange={(el) => { setDoctor(el.target.value) }}>
                      {doctorSpec && doctorSpec.map((el) => <option value={el._id}>{el.firstName}</option>)}
                    </select>
                  </div>
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
                          <th style={{ padding: "10px 42px" }}> <div className="icnocneter iconarrowleft">
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
                      <table className="table paddibg0_table11 mb-0" >
                        <tbody className="overflow_text">
                          <tr>
                            <th>10:00</th>                                                                       
                            <td data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn btnbook" onClick={handleDoctor}>Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">available</td>
                            <th></th>
                          </tr>

                          <tr>
                            <th>11:00</th>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <th></th>

                          </tr>
                          <tr>
                            <th>12:00</th>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">available</td>
                            <th></th>

                          </tr>
                          <tr>
                            <th>13:00</th>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">available</td>
                            <th></th>

                          </tr>
                          <tr>
                            <th>14:00</th>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">available</td>
                            <th></th>

                          </tr>
                          <tr>
                            <th>15:00</th>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">available</td>
                            <th></th>

                          </tr>

                          <tr>
                            <th>16:00</th>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">available</td>
                            <th></th>

                          </tr>
                          <tr>
                            <th>17:00</th>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">available</td>
                            <th></th>

                          </tr>
                          <tr>
                            <th>18:00</th>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">Available</td>
                            <td className="bookedappoiment">Booked</td>
                            <td className="available">available</td>
                            <th></th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Book Appointmaent</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <select className="form-control" value={patientName} onChange={(el)=>{setPatientName(el.target.value)}}>
          <option value="patient">Select Patient</option>
          { demograficArr && demograficArr.map((el)=><option value={el?._id}>{el.patientName}</option>)}
        </select><br/>
        <input type="text" className="form-control" placeholder="Enter Date" value={selectedDate}/><br/>
        <input type="text" className="form-control" placeholder="Enter Time"/><br/>
        <input type="text" className="form-control" placeholder="Enter doctor" value={doctorName?.firstName} /><br/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary btn-block" data-bs-dismiss="modal" onClick={handleAppointment}>Submit</button>
      </div>
    </div>
  </div>
</div> */}
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
                      <div className="col-lg-12 text-center">
                        <h4>Book Appointment</h4>
                      </div>
                      
                      <div onClick={() => setDemoModal(false)} className="colsebtn">
                         <AiFillCloseCircle class="iocnclose" />
                      </div>
                      
                    </div>
                  </div>
                 
                  <select className="form-control" value={patientName} onChange={(el)=>{setPatientName(el.target.value)}}>
          <option value="patient">Select Patient</option>
          { demograficArr && demograficArr.map((el)=><option value={el?._id}>{el.patientName}</option>)}
        </select><br/>
        <input type="text" className="form-control" placeholder="Enter Date" value={selectedDate}/><br/>
        <input type="text" className="form-control" placeholder="Enter Time"/><br/>
        <input type="text" className="form-control" placeholder="Enter doctor" value={doctorName?.firstName} />

        <div className="mt-3 btn_modal_submit">
                <button type="button" class="btn btn-success btn-block" data-bs-dismiss="modal" onClick={handleAppointment} style={{width:'100%'}}>Submit</button>
           </div>
                </div>
              </Modal>




        {/* <Link className="btn btnbook"onClick={() => {setDemoModal(true);}}>open modal</Link> */}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};
