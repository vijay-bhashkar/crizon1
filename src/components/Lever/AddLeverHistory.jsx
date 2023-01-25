import React, { useEffect, useState } from 'react'
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

export const AddLeverHistory = () => {

    const options = [
        { value:"select", label:"Select" },
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
    ];

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
                <Link class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
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
                            <h3>Clinical History</h3>
                        </div>
                    </div>
                    <div className='row addlist-frm'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Clinical Presentation</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Asymptomatic</label>
                                <select className='form-control' >
                                   { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Malaise </label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Fatigue </label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>RUQ pain </label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Pruritus </label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Jaundice </label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Past History</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Viral hepatitis </label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Recurrent fever </label>
                                <select className='form-control' >
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Prior surgery/Blood transfusions</label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>GI Bleed</label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>   
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>GI Bleed</label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Antiviral therapy & duration</label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Drug used</label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>  
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Dental exposure</label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Renal tx</label>
                                <select className='form-control'>
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>H/O Alcohol</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Alcohol </label>
                                <select className='form-control' >
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Gm/day </label>
                                <input type="text" className='form-control'/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Days/Week </label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>No of yrs </label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Family History </label>
                                <select className='form-control' >
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Clinical Features</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Wt (Kg) </label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ht (cm) </label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>BMI (Kg/cm2) </label>
                                <input type="text" className='form-control' />
                            </div>
                        </div> 
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label> Blood Pressure </label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                    </div>                    
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <button className='btn btn-link'>Submit</button>
                                <Link to="../etiological-work-up" className='btn btn-link mx-4'>Next</Link>
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
