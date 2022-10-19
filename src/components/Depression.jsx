import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";

export const Depression = () => {
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
          <Link to="/treatment" >Treatment</Link>{" "}
        </li>
        <li className="list-group-item">
          <Link to="/infections">Infections</Link>
        </li>
        <li className="list-group-item">
          <Link to="/depression" className="active">Depression</Link>
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
                  <label>Sadness</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Agitation</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Pessimism</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Changes in Sleeping Pattern</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Past Failure</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Irritability</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Pleasure</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Changes in Appetite</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Guilty Feelings</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Interest</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Punishment Feelings</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Indecisiveness</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Self-Dislike</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Worthlessness</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Self-Criticalness</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
             
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Energy</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Suicidal Thoughts or Wishes</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Concentration Difficulty</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Crying</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Tiredness or Fatigue</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Interest in Sex</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='from-group'>
                  <label>Loss of Interest in Sex</label>
                    <input type="text"  className='form-control' />
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
