import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";

export const Infections = () => {
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
            Beck's Depression Inventory (BDI-II)
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
          <Link to="/treatment" >Treatment</Link>{" "}
        </li>
        <li className="list-group-item">
          <Link to="/infections" className="active">Infections</Link>
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
            <h3>Infections</h3>
          </div>
        </div>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Respiratory</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>ENT</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Skin</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>TB</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Genitourinary</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Gastrointestinal</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Specific to IBD</label>
                  <Select options={options} placeholder="No" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Neurological</label>
                  <input type="text" className='form-control'  />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Miscellaneous</label>
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
