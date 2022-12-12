import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";

export const Addpatientdepression = () => {
  const options = [
        { value: "select", label: "Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ];
  const sexDrop = [
        { value: "select", label:"Select" },
        { value: "male", label:"Male" },
        { value: "female", label:"Female" },
    ];
  const bmiDrop = [
      { value: "select", label:"Select" },
      { value: "<=27", label:"Less than equal to 27" },
      { value: ">27", label:"Greater than 27" },
  ]
  let AgeArray = Array.from({length:100},(v,k)=>k+1)
  
  const months = [
    { value: "select", label:"Select month" },
    { value: "January", label:"January" },
    { value: "February", label:"February" },
    { value: "March", label:"March" },
    { value: "April", label:"April" },
    { value: "May", label:"May" },
    { value: "June", label:"June" },
    { value: "July", label:"July" },
    { value: "August", label:"August" },
    { value: "September", label:"September" },
    { value: "October", label:"October" },
    { value: "November", label:"November" },
    { value: "December", label:"December" },
  ]

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           
          </div>
          <div className="col-lg-4">
            <h5 className="mb-0 text-center text-white">
              Patient (ULCERATIVE Colitis DISEASE)
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
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Search Patient by Personal Details</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Name of Patient</label>
                    <input type="text" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Patient ID</label>
                  <input type="text" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Father/Husband's Name</label>
                  <input type="text" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Sex</label>
                  <Select options={sexDrop} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Age</label>
                  <select className='form-control'>
                    { AgeArray.map(item =><option value={item}>{item}</option>) }
                  </select>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>City</label>
                  <input type="text" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>State</label>
                  <input type="text" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Diagnosis Year</label>
                  {/* <Select options={options} placeholder="Select" /> */}
                  <input type="number" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Diagnosis Month</label>
                  <Select options={months} placeholder="Select" />
                </div>
              </div>
            </div>
           
            <div className='row mt-4'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center'>
                        <Link to="" className='btn btn-link'>Search</Link>
                    </div>
                </div>
             </div>
             <div className='row mt-5'>
                <div className='col-lg-12 heaind  text-center'>
                    <h3>Search by Clinical Manifestations</h3>
                </div>
                <div className='col-lg-12'>
                    <div className='from-group'>
                        <label>Extraintestinal Manifestations</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                     <div className='subbtn text-center mt-4 mb-5'>
                        <Link to="" className='btn btn-link'>Search</Link>
                    </div>
                    <div className='col-lg-12 heaind  text-center mt-4'>
                        <h3>Search by Examination</h3>
                    </div>
                </div>
             </div>
             <div className='row'>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>BMI</label>
                        <Select options={bmiDrop} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Pallor</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Perianal Fissure/Fistula/Abscess</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
             </div>
             <div className='row'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center mt-4 mb-5'>
                        <Link to="" className='btn btn-link'>Search</Link>
                    </div>
                </div>
             </div>
          </div>
      </div>
     </div>
    </div>
    </div>
  )
}
