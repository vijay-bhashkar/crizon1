import React from 'react'
import { Link } from 'react-router-dom'

export const Patientupcoming = () => {
  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="secound-header">
              
              </div>
            </div>
            <div className="col-lg-6">
              <h5 className="mb-0 text-center text-white">
              Patient
              </h5>
            </div>
            <div className="col-lg-3">
            <div className="form-group has-search">
              <span className="fa fa-search form-control-feedback"></span>
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            </div>
          </div>
        </div>
      </div>
        <div className="wrapper_contentbody">
          <div className='apportant-tbl tablebg mt-3'>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                        <div className='tabscontrol'>
                        <ul className="nav nav-pills mb-3 justify-content-center " id="pills-tab" role="tablist">
                            <span className='boder-cover d-flex'>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">UpComing</button>
                            </li>
                            <li className="nav-item" role="presentation">
                              <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Complete</button>
                            </li>
                            </span>
                        </ul>
                        </div>
                    </div>
                </div>

              <div className='row justify-content-center mt-5'>
                <div className='col-lg-10'>
                  <div className='heading-title text-center'>
                    <h4>List</h4>
                  </div>
                </div>
                <div className='col-lg-10'>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">AppointmentTime</th>
                        <th scope="col">Name of Doctor</th>
                        <th scope="col">Department</th>
                        <th scope="col">Medical issues</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">28 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">26 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">24 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">01 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">05 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                      </tr>
                    </tbody>
                  </table>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                    <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Date</th>
                        <th scope="col">AppointmentTime</th>
                        <th scope="col">Name of Doctor</th>
                        <th scope="col">Department</th>
                        <th scope="col" colspan="2">Medical issues</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">28 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">26 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">24 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">01 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">05 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="" className="viewtbn"> View  </Link></td>
                      </tr>
                      <tr>
                        <th scope="row">20 Sep 2022</th>
                        <td>09:00 to 10:00</td>
                        <th>Abhishek Malik</th>
                        <td>Department Name5</td>
                        <td>simply dummy text </td>
                        <td><Link to="/Medicalreport" className="viewtbn"> View  </Link></td>
                      </tr>
                    </tbody>
                  </table> 
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
