import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { Link } from "react-router-dom";

export const Addfollowup = () => {
    const options = [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ];
  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-3">
           
          </div>
          <div className="col-lg-5">
            <h5 className="mb-0 text-center text-white">
            Add Followup (ULCERATIVE COLITIES DISEASE)
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

  
    <div className="wrapper_contentbody">
     <div className='container-fluid'>
      <div className='row justify-content-center addlist-frm mt-3'>
          <div className='col-lg-10'>
          <div className='row'>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Patient ID*</label>
                  <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <label>Date of Followup*</label>
                  <input type="text" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                  <h6 className='mt-4'>Mayo Scoring System For Assessment of Ulcerative Colitis Activity</h6>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Disease Extent</label>
                <input type="text" className='form-control' />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Stool Frequency</label>
                    <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Rectal Bleeding</label>
                    <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Findings on Endoscopy</label>
                    <Select options={options} placeholder="Select" />
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='from-group'>
                    <label>Physician's Global Assessment</label>
                    <Select options={options} placeholder="Select" />
                </div>
              </div>
            </div>
            <div className='row'>
                <div className='col-lg-6'>
                        <label>Mayo Score: Total disease activity (=Sum of item scores)</label>
                    <div className='row darkinput'>
                        <div className='col-lg-6'>
                            <input type="text" className='form-control' def />
                        </div>
                        <div className='col-lg-6'>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                    <div className='col-lg-12 mt-2'>
                        <div className='from-group darkinput'>
                            <label>Partial Mayo Score: Without Findings on endoscopy</label>
                            <input type="text" className='form-control' />
                        </div>
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <h6 className='mt-4'>UCEIS Score</h6>
                    </div>
                    <div className='from-group mt-4'>
                        <label className='mb-2'>Physician's Global Assessment</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                    <div className='from-group'>
                        <label className='mb-2'>Physician's Global Assessment</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                    <div className='from-group'>
                        <label className='mb-2'>Physician's Global Assessment</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                    <div className='from-group darkinput'>
                        <label className='mb-2'>Total score</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <h6>UCEIS Score</h6>
                </div>
                <div className='col-lg-6'>
                     <div className='from-group'>
                        <label>Bowel Frequency(Per Day)</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Height</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Bowel Frequency(Per Night)</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Bowel Frequency(Per Night)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>General Well Being</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group darkinput'>
                        <label>BMI</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Urgency Of Defecation</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Handgrip Strength</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Blood In Stool</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
           
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Nancy Index</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Extracolonic Manifestations</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>RHI</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group darkinput'>
                        <label>Total score</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Geboe’s Score</label>
                        <input type="text" className='form-control' />
                    </div>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <div className='from-group'>
                                <label>MIRT</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                        <div className='col-lg-12'>
                            <div className='from-group'>
                                <label>MUST</label>
                                <input type="text" className='form-control' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-12'>
                    <h6>SCCAI Score</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Triceps skin fold thickness</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Total body fat percentage</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Visceral Fat</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Resting metabolism</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Body age</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat (whole body )percentage</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat percentage (trunk)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat percentage (arms)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Subcutaneous fat percentage (legs)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscles (whole body)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscle (trunk)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscle (arms)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Skeletal muscle (legs)</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Mid Arm Circumference</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
              
            </div>

            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>CT SMI</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>CT skeletal muscle area</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Mercuri stage</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Mean attenuation value</label>
                        <input type="text" className='form-control' />
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h6>Investigations</h6>
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>HB</label>
                            <input type="text" className='form-control' />
                        </div>     
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>6TGN</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>MCV</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>6MMPR</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>PLT</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>AST</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>hsCRP</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>ALT</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Albumin</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>ALP</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>ESP</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Stool C-diff Toxin</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Fecal Calprotectin</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Stool routine</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>Ferritin</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>EBV – VCA IgM</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
                    <div className='col-lg-6'>
                        <div className='from-group'>
                            <label>CMV IgM</label>
                            <input type="text" className='form-control' />
                        </div> 
                    </div>
            </div>

            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Treatment</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Oral 5ASA</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Adalimumab</label>
                        <input type="text" className='form-control' />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Rectal 5ASA</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Vedolizumab</label>
                        <input type="text" className='form-control' />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>AZA</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Cyclosporine</label>
                        <input type="text" className='form-control' />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>6-MP</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Ustekinumab</label>
                        <input type="text" className='form-control' />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Prednisolone</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Tofacitinib</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Budesonide</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Tacrolimus</label>
                        <input type="text" className='form-control' />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Rectal Steroids</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Filgotinib</label>
                        <input type="text" className='form-control' />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Infliximab</label>
                        <Select options={options} placeholder="Select" />
                    </div> 
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Probiotics</label>
                        <input type="text" className='form-control' />
                    </div> 
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>FMT Session</h6>
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
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Surgery Advised</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Surgery</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                     <div className='from-group'>
                        <label>If Surgery Yes</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
            </div>
            <div className='row mt-5'>
                <div className='col-lg-12'>
                    <h6>Adverse Events to Drugs</h6>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>5-ASA</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Steroids</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Infliximab/ Adalimumab</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>Tofacitinib</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
                <div className='col-lg-6'>
                    <div className='from-group'>
                        <label>AZA/6-MP</label>
                        <Select options={options} placeholder="Select" />
                    </div>
                </div>
            </div>
             <div className='row'>
                <div className='col-lg-12'>
                    <div className='subbtn text-center mt-4 mb-5'>
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
