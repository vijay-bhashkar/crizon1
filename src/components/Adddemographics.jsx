import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from 'react-router-dom';
export const Adddemographics = () => {
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
           {/* <div className='viewadduser'>
            <ul >
                <li><BiUserPlus className='icon' /> <span>Add User</span></li>
                <li><AiOutlineUnorderedList className='icon' /> <span>Add User</span></li>
            </ul>
           </div> */}
          </div>
          <div className="col-lg-4">
          <h5 className="mb-0 text-center text-white">
          Patient (ULCERATIVE Colitis DISEASE)
              </h5>
          </div>
          <div className="col-lg-4 text-end">
            <div className='btnlist'>
                <Link class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><Link to="/adddemographics" className='active'>Demographics</Link></li>
            <li class="list-group-item"><Link to="/clinicalhistory" >Clinical History</Link></li>
            <li class="list-group-item"><Link to="/previoustreatment">Previous Treatment</Link></li>
            <li class="list-group-item"><Link to="/nutritionalhistory">Nutritional History</Link> </li>
            <li class="list-group-item"><Link to="/Investigations">Investigations</Link></li>
            <li class="list-group-item"><Link to="/treatment">Treatment</Link> </li>
            <li class="list-group-item"><Link to="/infections">Infections</Link></li>
            <li class="list-group-item"><Link to="/depression">Depression</Link></li>
            
        </ul>
    </div>
      <div className="wrapper_contentbody">
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row mb-3'>
                        <div className='heaind text-center'>
                            <h3>Patient Personal Details</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>CCF ID <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Name of Patient <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Age <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Mrd No. <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Phone No. <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>Date of Enrollment<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Father/Husband’s Name<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Sex<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Diagnosis Year<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Diagnosis Month<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-12'>
                        <div className='from-group addlist-frm'>
                            <label>Address Line 1<span>*</span></label>
                            <input type="text" className='form-control '  />
                        </div>
                        </div>
                    </div>
                    <div className='row mt-5'>
                        <div className='col-lg-12 mb-4'>
                            <div className='statusheading text-center'>
                                <h4>Kuppuswamy’s Socioeconomic status Scale</h4>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label>Eduation of the Head</label>
                                <Select options={options} placeholder="Select Education Score" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label>Monthly Family Income</label>
                                <Select options={options} placeholder="Select Monthly Family Income" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group addlist-frm'>
                                <label>Occupation of the Head</label>
                                <Select options={options} placeholder="Select Occupation Score.." />
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                            <div className='from-group'>
                                <label>Diagnosis Year<span>*</span></label>
                                <input type="text" className='form-control '  />
                            </div>
                        </div>
                        <div className='col-lg-6 addlist-frm mt-4'>
                        <div className='from-group'>
                                <label>Diagnosis Year<span>*</span></label>
                                <input type="text" className='form-control '  />
                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <Link to="" className='btn btn-link'>Submit</Link>
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
export default Adddemographics;