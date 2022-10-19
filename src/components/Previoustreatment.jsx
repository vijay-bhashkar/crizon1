import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from 'react-router-dom';
export const Previoustreatment = () => {
    const options = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      
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
                    <Link className="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className='listheader'>
            <ul className="list-group list-group-horizontal">
                <li className="list-group-item"><Link to="/adddemographics" >Demographics</Link></li>
                <li className="list-group-item"><Link to="/clinicalhistory" >Clinical History</Link></li>
                <li className="list-group-item"><Link to="/previoustreatment" className='active'>Previous Treatment</Link></li>
                <li className="list-group-item"><Link to="/nutritionalhistory" >Nutritional History</Link> </li>
                <li className="list-group-item"><Link to="/Investigations">Investigations</Link></li>
                <li className="list-group-item"><Link to="/treatment">Treatment</Link> </li>
                <li className="list-group-item"><Link to="/infections">Infections</Link></li>
                <li className="list-group-item"><Link to="/depression">Depression</Link></li>
                
            </ul>
        </div>
        <div className='pading40'>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 heaind text-center'>
                        <h3>Previous Treatment</h3>
                    </div>
                </div>
            </div>
        </div>
        <div className='tratement_body-heading'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'></div>
                    <div className='col'>
                        <h6>Name</h6>
                    </div>
                    <div className='col'>
                    <h6>Dose</h6>
                    </div>
                    <div className='col'>
                    <h6>Date Of Start</h6>
                    </div>
                    <div className='col'>
                    <h6>Date Of End</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className='tratement_body mt-2 pb-5'>
            <div className='container-fluid'>
               
                <div className='row addlist-frm align-items-center'>
                    <div className='col'>
                        <div>
                            <h3>Oral 5-ASA</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal 5-ASA Suppository</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal 5-ASA Foam</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Oral steroids </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>I/V steroids</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Rectal steroids (Entofoam)</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>AZA</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>6-MP</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>6-TG</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Infliximab</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Adalimumab</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Vedolizumab</h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Ustekinumab </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>Tofacitinib </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm align-items-center mt-2'>
                    <div className='col'>
                        <div>
                            <h3>FMT </h3>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col'>
                    <div className='form-group'>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                </div>

                <div className='row addlist-frm mt-3'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-5 ps-5'>
                        <div className='from-group'>
                            <label>Other</label>
                            <Select options={options} placeholder="No"  />
                        </div>
                    </div>
                    <div className='col-lg-5'>
                    <div className='from-group'>
                            <label>5-ASA</label>
                            <Select options={options} placeholder="No"  />
                        </div>
                    </div>
                </div>
                <div className='row addlist-frm mt-3 justify-content-end'>
                    <div className='col-lg-2'></div>
                    <div className='col-lg-4 ps-5'>
                        <div className='form-group'>
                            <label>Previous surgery</label>
                            <Select options={options} placeholder="No"  />
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label>If Yes</label>
                            <input type="date" className='form-control' />
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className='form-group'>
                            <label>Type of surgery</label>
                            <input type="text" className='form-control' />
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
  )
}
