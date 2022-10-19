import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
export const Treatment = () => {
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
    <div className="listheader">
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <Link to="/adddemographics">Demographics</Link>
        </li>
        <li className="list-group-item">
          <Link to="/clinicalhistory">Clinical History</Link>
        </li>
        <li className="list-group-item">
          <Link to="/previoustreatment">Previous Treatment</Link>
        </li>
        <li className="list-group-item">
          <Link to="/nutritionalhistory" >
            Nutritional History
          </Link>{" "}
        </li>
        <li className="list-group-item">
          <Link to="/Investigations" >Investigations</Link>
        </li>
        <li className="list-group-item">
          <Link to="/treatment" className="active">Treatment</Link>{" "}
        </li>
        <li className="list-group-item">
          <Link to="/infections">Infections</Link>
        </li>
        <li className="list-group-item">
          <Link to="/depression">Depression</Link>
        </li>
      </ul>
    </div>
  
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
     <div className="row">
          <div className="col-lg-12 heaind text-center">
            <h3>Treatment</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Oral 5-ASA</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Rectal 5ASA</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>AZA</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>6-MP</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Prednisolone</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Infliximab</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Budesonide</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Rectal Steroids</label>
                  <input type="text" className='form-control'  />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Adalimunab</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Vedolizumab</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Cyclosporine</label>
                  <input type="text" className='form-control'  />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Ustekinumab</label>
                  <input type="text" className='form-control'  />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Tofacitinib</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Cyclosporine</label>
                  <input type="text" className='form-control'  />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Probiotics</label>
                  <input type="text" className='form-control'  />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Filgotinib</label>
                  <input type="text" className='form-control'  />
                </div>
              </div>
              
            </div>
            <div className='row mt-4'>
                <div className='col-lg-12 mb-1'>
                    <div className='clinical'>
                        <h5>FMT Session</h5>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 1</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 2</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 3</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 4</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 5</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 6</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 6</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 7</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 8</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 9</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 10</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 11</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              <div className='col-lg-4'>
                    <div className='from-group'>
                        <label>Session 12</label>
                        <input type="date" className='form-control'  />
                    </div>
              </div>
              
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                <div className='from-group'>
                        <label>Surgery</label>
                        <Select options={options} placeholder="No" />
                    </div>
                </div>
                <div className='col-lg-6'>
                <div className='from-group'>
                        <label>If Yes</label>
                        <Select options={options} placeholder="No" />
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
