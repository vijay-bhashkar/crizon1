import React,{useState} from "react";
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
export const Appointmentform = () => {
  const Department = [
    { value: "hereditary diseases s", label: "hereditary diseases s" },
    { value: "Dental ", label: "Dental " },
    {
      value: "lower respiratory infections",
      label: "lower respiratory infections",
    },
  ];
  const bookdate = [
    { date: "20 Mon Sep", isactive: false },
    { date: "20 Mon Sep", isactive: false },
    { date: "21 Mon Sep", isactive: false },
    { date: "22 Mon Sep", isactive: false },
    { date: "23 Mon Sep", isactive: false },
  ];
  const [selectedDate, setSelectedDate] = useState(null)
  const [dateArray, setDateArray] = useState(bookdate)
  const doctor = [
    { value: "Dr. Sanjay Sachdeva", label: "Dr. Sanjay Sachdeva" },
    { value: "Dr. Sandeep Batra", label: "Dr. Sandeep Batra" },
    { value: "Dr. Bipin S Walia", label: "Dr. Bipin S Walia" },
    { value: "Dr. Amandeep Singh Dhillon", label: "Dr. Amandeep Singh Dhillon" },
  ];



  const handleDateSelected = (status,index) => {
    const list  = [...bookdate];
    list[index].isactive = status;
    let dateObj = list[index];
    setSelectedDate(dateObj.date);
    setDateArray(list);
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
                Add Followup (ULCERATIVE COLITIES DISEASE)
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
                    <label>Department</label>
                    <Select
                      options={Department}
                      placeholder="Select Department"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="from-group">
                    <label>Doctor</label>
                    <Select options={doctor} placeholder="Select Doctor" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="heading-title text-center">
                    <h4>Appointment Slot {selectedDate}</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="datemathed">
                    <div className="leftbtn">
                      <div className="icnocneter iconarrowleft">
                        <RiArrowLeftSLine className="icon" />
                      </div>
                    </div>
                    <div className="datebody">
                      <div className="listdate">
                        <ul>
                            {dateArray.map((p,i) => <li key={i} className={`${p.isactive === true ?'active':''}`} 
                            
                            onClick={(e) => {handleDateSelected(!p.isactive ,i)}}
                            
                            > {p.date}</li>)}
                        </ul>
                      </div>
                    </div>
                    <div className="rightbtn">
                      <RiArrowRightSLine className="icon" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="appoitmentable">  
                  {/* table-responsive */}
                    <table className="table">
                      <tbody className="">
                        <tr>
                          <th>09:00</th>
                          <td className="bookedappoiment">Booked</td>
                          <td className="available">Available</td>
                          <td className="bookedappoiment">Booked</td>
                          <td className="available">Available</td>
                          <td className="bookedappoiment">Booked</td>
                          <td className="available">Available</td>
                          <td className="bookedappoiment">Booked</td>
                        </tr>
                        <tr>
                          <th>10:00</th>
                          <td className="available">Available</td>
                          <td className="bookedappoiment">Booked</td>
                          <td className="available">Available</td>
                          <td className="bookedappoiment">Booked</td>
                          <td className="available">Available</td>
                          <td className="bookedappoiment">Booked</td>
                          <td className="available">available</td>
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
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/* <div>{listItems}</div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
