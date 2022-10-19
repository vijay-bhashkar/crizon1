import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from 'react-router-dom';
export const Clinicalhistory = () => {
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
                <Link class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='listheader'>
        <ul class="list-group list-group-horizontal">
            <li class="list-group-item"><Link to="/adddemographics" >Demographics</Link></li>
            <li class="list-group-item"><Link to="/clinicalhistory" className='active'>Clinical History</Link></li>
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
                            <h3>Clinical History</h3>
                        </div>
                    </div>
                    <div className='row addlist-frm'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Clinical History</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Diarrhoea </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Diarrhoea </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Diarrhoea</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Urgency </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Incontinence </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Tenesmus </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Pain Abdomen</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Fever</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Loss of Appetite</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Weight Loss</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Fatigue</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Other</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                    </div>



                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Extra Intestinal Manifestations</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Arthralgias </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Arthritis </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Nephrolithiasis</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PSC </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ankylosing Spondylitis </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anemia </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Erythema Nodosum </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Pyoderma Gangrenosum</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Episcleritis</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Osteoporosis</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Gallstones</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>DVT</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Other</label>
                                <Select options={options} placeholder="No"  />
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
                                <label>TB </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Chicken Pox (varicella) </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HBV</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HCV </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HIV </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hospitalization </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>NSAID’s use</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Antibiotics use</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                    </div>




                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Co-morbidities</h5>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Diabetes </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                        <div className='from-group'>
                                <label>Hypertension</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hypothyroidism</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hyperthyroidism </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CAD </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>COAD </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CVA</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CKD</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CLD</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Surgery</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Other</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                    </div>



                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Family History</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Crohn's </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label>Ulcerative Colitis (UC)</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Relationship</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Relationship </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Addiction</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Smoking </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label>IVDU</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Opium</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Alcohol </label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Vaccination History</h5>
                            </div>
                        </div>
                    </div>
                    <div className='row align-items-center smallheding  justify-content-between'>
                        <div className='col-lg-1 text-end'>
                            <h5>HBV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Pneumococcal</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>Influenza</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>MMR</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>VZV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>VZV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HAV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>

                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>DPT</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>
                    <div className='row  smallheding justify-content-between align-items-center mt-5'>
                        <div className='col-lg-1 text-end '>
                            <h5 className='text-md'>HPV</h5>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-1</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Dose-2</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            <div className='from-group'>
                                <label>Booster Dose</label>
                                <input type="date" className='form-control'  />
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm addlist-frm mt-5'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                <h5>Disease Extent</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>E1/E2/E3</label>
                                <input type="text" placeholder='' className='form-control' />
                            </div>
                        </div>
                    </div>

                    <div className='row addlist-frm addlist-frm mt-3'>
                        <div className='col-lg-12 mb-1'>
                            <div className='clinical'>
                                <h5>Mayo Scoring System For Assessment of Ulcerative Colitis Activity</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Stool Frequency</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Rectal Bleeding:</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Findings on Endoscopy</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Physician's Global Assessment</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                    </div>

                    <div className='row darkinput'>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Mayo Score: Total disease activity (=Sum of item scores)</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='from-group'>
                                <label>Physician's Global Assessment</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                    </div>
                    <div className='row darkinput addlist-frm addlist-frm mt-4'>
                        <div className='col-lg-12 mb-1'>
                            <div className='clinical'>
                                <h5>UCEIS Score</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Vascular pattern</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Erosions and ulcers</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Bleeding</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Total score</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                    </div>
                    
                    <div className='row darkinput addlist-frm addlist-frm mt-4'>
                        <div className='col-lg-12 mb-1'>
                            <div className='clinical'>
                                <h5>SCCAI Score</h5>
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Bowel Frequency(Per Day)</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Urgency Of Defecation</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Bowel Frequency(Per Night)</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Blood In Stool</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>General Well Being</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Extracolonic Manifestations</label>
                                <Select options={options} placeholder="No"  />
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='from-group'>
                                <label>Total score</label>
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
    </div>
  </div>
  )
}
