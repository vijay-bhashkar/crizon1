import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";

export const EtiologicalWorkup = () => {

   const options = [
       { label:"select" , value:"Select"},
       { label:"Yes" , value:"Yes"},
       { label:"No" , value:"No"},
   ];

   const stomachDrop = [
        { label:"select", value:"select" },
        { label:"Small", value:"small" },
        { label:"Medium", value:"medium" },
        { label:"Large", value:"large" },
   ];

   const duodenumDrop = [
        { label:"select", value:"select" },
        { label:"D1", value:"D1" },
        { label:"D2", value:"D2" },
   ]

    return(
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
                            <h3>Etiological work up</h3>
                        </div>
                    </div>
                    <div className='row addlist-frm'>
                        <div className='col-lg-12 mb-3'>
                            <div className='clinical'>
                                {/* <h5>Etiological work up</h5> */}
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HBsAg </label>
                                <input type="date" className="form-control"/>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti IgM HAV </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti IgM HEV </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HBV DNA c/ml   </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>ANA  </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AMA  </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti HCV </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti LKM </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Anti SMA </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HCVRNA  c/ml </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>T3/T4/TSH </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Bld Sugar F </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S.Cerulopslamin </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HIV </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Bld Sugar PP </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PT </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PTI </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>INR </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Hb </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>TLC </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Platelets </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S.Bil </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AST</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>ALT </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Albumin</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Globulin</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>


                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>SAP</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>GGT</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Blood Urea </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S creatinine </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Ferritin </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Iron </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>TIBC</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>S Copper </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Others</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Triglyceride</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Triglyceride</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>LDL</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div><div className='col-lg-4'>
                            <div className='from-group'>
                                <label> HDL </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>VLDL</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>AFP</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Endoscopy</label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>USG abdomen </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Liver Fibroscan </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Liver Biopsy </label>
                                < input type="date" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Varices </label>
                                <select className="form-control">
                                    { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Grades </label>
                                < input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Stomach </label>
                                <select className="form-control">
                                    { stomachDrop && stomachDrop.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Duodenum </label>
                                <select className="form-control">
                                    { duodenumDrop && duodenumDrop.map((el)=> <option value={el.value}>{el.label}</option> ) }
                                </select>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="from-group">
                                <label>Liver span</label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Steatosis </label>
                                <select className="form-control">
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Splenomegaly </label>
                                <select className="form-control">
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Collaterals  </label>
                                <select className="form-control">
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>PV diameter (CM)  </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Ascites  </label>
                                <select className="form-control">
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>SOL </label>
                                <select className="form-control">
                                { options && options.map((el)=> <option value={el.value}>{el.label}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>CAP </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>E(kPa) </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>HAI  </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className='col-lg-4'>
                            <div className='from-group'>
                                <label>Stage </label>
                                <input type="text" className="form-control" />
                            </div>
                        </div>

                    </div>                    
                    <div className='row mt-4'>
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                <button className='btn btn-link'>Submit</button>
                                {/* <Link to="../add-lever" className='btn btn-link mx-4'>Next</Link> */}
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