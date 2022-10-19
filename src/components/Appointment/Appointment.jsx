import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import Select from "react-select";
 const Appointment = () => {

    const options = [
        { value: "Secect Doctor", label: "Secect Doctor" },
        { value: "Doctor strawberry", label: "Doctor Strawberry" },
        { value: "Doctor vanilla", label: "Doctor Vanilla" },
      ];
      
  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="secound-header">
              <ul>
                <li>
                  {" "}
                  <BiUserPlus className="icon" />
                </li>
                <li>Add Appointment</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-0 text-center text-white">
              Appointment Form
            </h5>
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
    <div className="wrapper_contentbody">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className=""></div>
          <div className="col-lg-5">
            <label>Doctor</label>
            <Select options={options} />
          </div>
          <div className="col-lg-5">
            <label>Doctor</label>
            <Select options={options} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Appointment;