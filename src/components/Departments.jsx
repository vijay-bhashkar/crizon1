import React from 'react'
import Select from "react-select";
import { Link } from 'react-router-dom';
export const Departments = () => {
  const options = [
    { value: "Secect Doctor", label: "Secect Doctor" },
    { value: "Doctor strawberry", label: "Doctor Strawberry" },
    { value: "Doctor vanilla", label: "Doctor Vanilla" },
  ];
  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="secound-header">
              </div>
            </div>
            <div className="col-lg-4">
              <h5 className="mb-0 text-center text-white">
              Deparetmenrt
              </h5>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </div>
        <div className="wrapper_contentbody">
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className=""></div>
              <div className="col-lg-5">
                <label>Department</label>
                <Select options={options} />
              </div>
              <div className="col-lg-5">
              
              </div>
            </div>
          </div>
          <div className='apportant-tbl tablebg mt-3'>
            <div className='container-fluid'>
              <div className='row justify-content-center'>
                <div className='col-lg-10'>
                  <div className='heading-title text-center'>
                    <h4>HODs List</h4>
                  </div>
                </div>
                <div className='col-lg-10'>
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">S.No.</th>
                        <th scope="col">Name of HODs</th>
                        <th scope="col">Doctor</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">9</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                      <tr>
                        <th scope="row">10</th>
                        <th>	Abhishek Malik</th>
                        <td>10</td>
                        <td>9856423185</td>
                        <td><span className='status'> Active </span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='container-fluid mt-5'>
              <div className='row justify-content-center'>
                  <div className='col-lg-10'>
                    <div className=' text-center'>
                      <Link to="/Hod" className='nxt-btn'>Next</Link>
                    </div>
                  </div>
                  <div className='col-lg-10 mt-5 text-center'>
                  <nav aria-label="Page navigation paginationnum example ">
                      <ul className="pagination justify-content-center text-center">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                          <i className="fa fa-chevron-left" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link active"  href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">4</a></li>
                        <li className="page-item"><a className="page-link" href="#">5</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                          <i className="fa fa-chevron-right" aria-hidden="true"></i>

                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
              </div>
            </div>

          </div>
      </div>
    </div>
  )
}
