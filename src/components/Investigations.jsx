import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";
export const Investigations = () => {
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
            <Link to="/Investigations" className="active">Investigations</Link>
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
    
      <div className="wrapper_contentbody">
       <div className='container-fluid'>
       <div className="row">
            <div className="col-lg-12 heaind text-center">
              <h3>Investigations</h3>
            </div>
          </div>
        <div className='row justify-content-center addlist-frm mt-3'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>HB</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>HBsAg</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>MCV</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>HIV</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TLC</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>AntiHCV</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>PLT</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-VCA IgM</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ESR</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-VCA IgG</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CRP Quantitative</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>EBV-EBNA IgG</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CMV-IgM</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CMV-Ig G</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>AST</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Fecal Calprotactin</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ALT</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Routine</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ALP</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Culture</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Albumin</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool GDH</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Iron</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool-C-Diff-Toxin</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TIBC</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool-C-Diff-PCR</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Ferritin</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Stool Biofilm</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Ca+</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>TPMT</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Mg</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>NDUT-15</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Vita-D</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>6-TGN</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>RBS</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>6-MMPR</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ASCA IgA</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Chest X-ray</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>ASCA IgG</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>X-ray Abdomen</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Vitamin B12</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Microbiota</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>P-ANCA</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Folate</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Urea</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>VZV Antibody</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Creatinine</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Mantoux</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CT Abdomen</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Nancy Index</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>CT Chest</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>RHI</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>MRI Abdomen</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Geboe's Score</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Simplified MARIA score</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Clermont Score</label>
                    <input type="text" className='form-control'  />
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='from-group'>
                    <label>Microbiota</label>
                    <input type="text" className='form-control'  />
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
