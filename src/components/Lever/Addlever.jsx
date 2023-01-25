import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';


export const Addlever = () => {

    const gender = [
        { value: "select", label: "Select" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ]

    let AgeArray = Array.from({ length: 100 }, (v, k) => k + 1)

    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4">
                           
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mb-0 text-center text-white">
                                Patient (LEVER DISEASE)
                            </h5>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className='btnlist'>
                                <Link to="/Patients/PatientListView" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='listheader text-center'>
                <ul class="list-group list-group-horizontal justify-content-center">
                    <li class="list-group-item"><Link >Personal Detail</Link></li>
                    <li class="list-group-item"><Link >History</Link></li>
                    <li class="list-group-item"><Link >Etiological Work Up</Link></li>
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
                                            <label>Name <span>*</span></label>
                                            <input type="text" className='form-control' />
                                        </div>
                                        <div className='from-group'>
                                            <label>Email<span>*</span></label>
                                            <input type="text" className='form-control '  />
                                        </div>
                                        <div className='from-group'>
                                            <label>Password <span>*</span></label>
                                            <input type="text" className='form-control'  />
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Age</span></label>
                                            <input type="text" className='form-control'  />
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Height</span></label>
                                            <input type="text" className='form-control '  />
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>B.M.I</span></label>
                                            <input type="text" className='form-control '  />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Date of Enrollment<span>*</span></label>
                                            <input type="date" className='form-control '  />
                                        </div>
                                        <div className='from-group'>
                                            <label>Contact<span>*</span></label>
                                            <input type="text" className='form-control '  />
                                        </div>
                                       
                                        <div className='from-group'>
                                            <label>Confirm Password <span>*</span></label>
                                            <input type="text" className='form-control'  />
                                        </div>
                                        
                                        <div className='from-group'>
                                            <label>Gender<span>*</span></label>
                                            <select className='form-control' >
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="">Male</option>
                                            </select>
                                        </div>

                                        <div className='from-group'>
                                            <label> <span>Weight</span></label>
                                            <input type="text" className='form-control '  />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                      <label>Address</label>
                                      <textarea name="address" class="form-control" col="2" row="2"></textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='row mt-4'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center'>
                                        <button className='btn btn-link mx-4'>Submit</button>
                                        <Link to="/add-lever-history" className='btn btn-link mx-3'>Next</Link>
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
export default Addlever;