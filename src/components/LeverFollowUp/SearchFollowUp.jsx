import React from 'react'
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LEVERFOLLOWUPGet, SETLEVERFOLLOWUPObj } from "../../redux/actions/LeverFollowup/LeverFollowup.actions";


export const SearchFollowUp = () => {

  const [patientName, setPatientName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const [displayProduct, setdisplayProduct] = useState([])
  const patientArr = useSelector((states) => states.demografic.demografics);
  const followupArr = useSelector((states) => states.leverFollowup.leverfollowups);

  console.log(followupArr ,"aaaaaaaaaaaa");

  const dispatch = useDispatch();



  const genderDrop = [
    { value: "select", label: "Select" },
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  
  ];

  const handleFollowupView = (row) => {
    dispatch(SETLEVERFOLLOWUPObj(row));
    navigate("/LeverFollowUp/followupList");
  };

  const onHandleFollowup = () => {

    let searchPatientList = [];
    if (`${patientName}` != '') {
      searchPatientList = followupArr.filter(el => `${el.name}`.toLowerCase().includes(`${patientName}`.toLowerCase()));
    }
    if (`${email}` != '') {
      searchPatientList = followupArr.filter(el => `${el.email}`.toLowerCase().includes(`${email}`.toLowerCase()));
    }
    if (`${age}` != '') {
      searchPatientList = followupArr.filter(el => `${el.age}`.toLowerCase().includes(`${age}`.toLowerCase()));
    }
    if (`${gender}` != '') {
      searchPatientList = followupArr.filter(el => `${el.gender}`.toLowerCase().includes(`${gender}`.toLowerCase()));
      console.log(searchPatientList, "search gender");
    }
    
    setdisplayProduct(searchPatientList);

  }


  const handleGet = () => {
    let query = "";
    dispatch(LEVERFOLLOWUPGet());
  };

  useEffect(() => {
    handleGet()
  }, []);

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

      <div className="wrapper_contentbody">
        <div className='container-fluid'>
          <div className="row">
            <div className="col-lg-12 heaind text-center">
              <h3>Search Patient by Personal Details</h3>
            </div>
          </div>
          <div className='row justify-content-center addlist-frm mt-3'>
            <div className='col-lg-10'>
              <div className='row'>
                <div className='col-lg-6'>
                  <div className='from-group'>
                    <label>Patient Name </label>
                    <input type="text" className='form-control' value={patientName} onChange={(el)=> {setPatientName(el.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='from-group'>
                    <label>Email Id : </label>
                    <input type="email" className='form-control' value={email} onChange={(el)=>{setEmail(el.target.value)}} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='from-group'>
                    <label>Age : </label>
                    <input type="text" className='form-control' value={age} onChange={(el) => { setAge(el.target.value) }} />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div className='from-group'>
                    <label>Gender : </label>
                    {/* <input type="text" className='form-control'  /> */}
                    <select className='form-control' value={gender} onChange={(el)=>{setGender(el.target.value)}}>
                      { genderDrop && genderDrop.map((el)=><option value={el.value}>{el.label}</option>)}
                    </select>
                  </div>
                </div>
              </div>
              <div className='row mt-4'>
                <div className='col-lg-12'>
                  <div className='subbtn text-center'>
                    <button to="" className='btn btn-link' onClick={onHandleFollowup}>Search</button>
                  </div>
                </div>
              </div>
              <div>
                <div className=" col-lg-12table_view_list py-4">
                  <table class="table">
                    <thead style={{ backgroundColor: "white" }}>
                      <tr>
                        <th scope="col" className="text-center">S.NO</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Age</th>
                        <th scope="col">Gender</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        displayProduct && displayProduct.map((item, index) =>
                          <tr style={{ backgroundColor: "white" }}>
                            <th scope="row" className="text-center">{index + 1}</th>
                            <td scope="row">{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>{item.gender}</td>
                            <td>
                              <span className="delete_list" style={{ marginLeft: 20 }}>
                                <GrView onClick={(e) => { handleFollowupView(item) }} />
                              </span>
                            </td>
                          </tr>
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
