import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
export const Nutritionalhistory = () => {
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
            <Link to="/nutritionalhistory" className="active">
              Nutritional History
            </Link>{" "}
          </li>
          <li className="list-group-item">
            <Link to="/Investigations">Investigations</Link>
          </li>
          <li className="list-group-item">
            <Link to="/treatment">Treatment</Link>{" "}
          </li>
          <li className="list-group-item">
            <Link to="/infections">Infections</Link>
          </li>
          <li className="list-group-item">
            <Link to="/depression">Depression</Link>
          </li>
        </ul>
      </div>
      <div className="mt-5 mb-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heaind text-center">
              <h3>Nutritional Screening</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper_contentbody">
        <div className="container-fluid">
          <div className="row addlist-frm justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Numbness </label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Tingling sensation </label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Burning </label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Reduced sensation </label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Imbalance</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Infertility</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Bony pains / Fractures</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Disturbed smell and taste</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Poor wound healing</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Night blindness / Dryness of eyes</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Oral ulcers</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Bleeding tendencies / bleeding gums</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Fatigue</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Diet Pattern</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Height (in cms)</label>
                    <Select options={options} placeholder="No" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Weight (in Kg)</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>BMI</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Mid arm circumference</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>MUST</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>MIRT</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>NRS 2002</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="from-group">
                    <label>Hand grip strength</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
                <div className="row addlist-frm">
                    <div className="col-lg-12 mb-3">
                        <div className='clinical'>
                            <h5>BODY COMPOSITION ANALYSIS</h5>
                        </div>
                    </div> 
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Hand grip strength</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Total body fat percentage</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Visceral Fat</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Resting metabolism</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Body age</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat (whole body )percentage</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat percentage (trunk)</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat percentage (arms)</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Subcutaneous fat percentage (legs)</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscles (whole body)</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscle (trunk)</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscle (arms)</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Skeletal muscle (legs)</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                </div>
            </div>
            
    
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-lg-10">
                <div className="row addlist-frm">
                    <div className="col-lg-12 mb-1">
                        <div className='clinical'>
                            <h5>CT SMI</h5>
                        </div>
                    </div> 
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>CT skeletal muscle area</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Mercuri stage</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="from-group">
                            <label>Mean attenuation value</label>
                            <input type="text" className="form-control" />
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
  );
};
