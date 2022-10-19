import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from 'react-router-dom';
export const Adduser = () => {


  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           <div className='viewadduser'>
            <ul >
                <li><BiUserPlus className='icon' /> <span>Add User</span></li>
                <li><AiOutlineUnorderedList className='icon' /> <span>Add User</span></li>
            </ul>
           </div>
          </div>
          <div className="col-lg-4">
           
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
    </div>
      <div className="wrapper_contentbody">
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>First Name <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Company <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                
                                <div className='from-group'>
                                    <label>Email <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>State <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>City <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Password <span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Security Question<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Statue<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                

                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>Last Name<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Position/Title<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Phone<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Country<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>ZipCode<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='from-group'>
                                    <label>Answer<span>*</span></label>
                                    <input type="text" className='form-control '  />
                                </div>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                    <label>Verification Word*</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control"  />
                                        <span class="input-group-text"><BiRefresh /></span>
                                    </div>
                                    </div>
                                    <div className='col-lg-6'>
                                        <div className='from-group'>
                                            <label>&nbsp;</label>
                                            <input type="text" className='form-control '  />
                                        </div>
                                    </div>
                                </div>
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
