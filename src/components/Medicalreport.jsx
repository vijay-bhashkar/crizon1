import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DEMOGRAFICGet } from "../redux/actions/Demografic/Demografic.actions";
import { DOCTORGet } from "../redux/actions/Doctor/Doctor.actions";
import { NUTRITIONGet } from "../redux/actions/Nutrition/Nutrition.actions";

export const Medicalreport = () => {

const [patientId, setPatientId] = useState("");
const [patientDetail, setPatientDetail] = useState("");
const [doctorId, setDoctorId] = useState("");
const [doctorName, setDoctorName] = useState("");
const [height, setHeight] = useState("");
const [weight, setWeight] = useState("");


var date = new Date().getDate();
var month = new Date().getMonth() + 1;
var year = new Date().getFullYear();
var fullDate = (date+'-'+month+'-'+year);

  const disPatch = useDispatch();
  useEffect(()=>{
    disPatch(DEMOGRAFICGet());
    disPatch(DOCTORGet());
    disPatch(NUTRITIONGet());
  },[]);

const demograficArr = useSelector((states) => states.demografic.demografics);
const doctorArr = useSelector((states) => states.doctor.doctors);
const nutritionArr = useSelector((states) => states.nutrition.nutritions);

const getPatients = (patientId)=>{
  setPatientId(patientId);
  if(patientId){
    let setDetail = demograficArr.find(el=>el._id == patientId);
    let setNutriDetail = nutritionArr.find(el=>el.patientId == patientId);
    let weightDetail = setNutriDetail?.weight;
    let heightDetail = setNutriDetail?.height;
    setWeight(weightDetail);
    setHeight(heightDetail);
    setPatientDetail(setDetail);
    setDoctorId(patientDetail?.doctor);
    doctorNameGet();
  }
}

const doctorNameGet = ()=>{
  if(doctorId){
  let doctorDetail = doctorArr.find(el=>el._id == doctorId);
  let doctorFullName = doctorDetail?.firstName;
  setDoctorName(doctorFullName);
}
};

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="secound-header"> </div>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-0 text-center text-white">
            Patient Medical Report
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
              <label>Search Patient to Generate Report </label>
              <select className='form-control' value={patientId} onChange={(el)=>{getPatients(el.target.value)}}>
                { demograficArr && demograficArr.map((el)=><option value={el._id}>{el.patientName}</option> )}
              </select>
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
                  <h4>Mr. {patientDetail?.patientName}</h4>
                </div>
              </div>
              <div className='col-lg-10'>
                <div className='patient-info'>
                  <div className='row'>
                    <div className='col-lg-12 text-center'>
                      <h4>Patient Information</h4>
                    </div>
                    <div className='col-lg-6 patent-infolet'>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Patient Name :</div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='texting'>{patientDetail?.patientName}</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Doctor Name :</div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='texting'>{doctorName}</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Mobile Number :</div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='texting'>+91 {patientDetail?.phoneNo}</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Address :</div>
                        </div>
                        <div className='col-lg-6'>  
                        <div className='texting'>{patientDetail?.addressLine}</div>
                        </div>
                      </div>
                    </div>
                    <div className='col-lg-6  patent-infolet'>
                    <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Parent Name :</div>
                        </div>
                        <div className='col-lg-6'>
                          <div className='texting'>{patientDetail?.parentName}</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Weight :</div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='texting'>{weight}  Kg</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Height :</div>
                        </div>
                        <div className='col-lg-6'>
                        <div className='texting'>{height} cms</div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-lg-4'>
                        <div className='addheading'>Date :</div>
                        </div>
                        <div className='col-lg-7'>
                        <div className='texting'>{fullDate}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='patientbody'>
                  <h4>Details</h4>
                  <p className='mb-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.-</p>
                  <h4 className='mb-4'>Laboratory Report</h4>
                  <div className='boxreport'>
                    <div className='row'>
                      <div className='col-lg-12 text-center '>
                        <h4>Bio Chemistry</h4>
                      </div>
                      <div className='col-lg-12 mt-4'>
                      <table class="table">
                            <thead>
                              <tr>
                                <th scope="col">Test Description</th>
                                <th scope="col">Result</th>
                                <th scope="col">Units</th>
                                <th scope="col">Reference range</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Test Description</td>
                                <td>6.5#</td>
                                <td>mg/dl</td>
                                <td>4.2 - 6.0</td>
                              </tr>
                              <tr>
                                <td>Test Description</td>
                                <td>6.5#</td>
                                <td>mg/dl</td>
                                <td>4.2 - 6.0</td>
                              </tr>
                              <tr>
                                <td>Test Description</td>
                                <td>6.5#</td>
                                <td>mg/dl</td>
                                <td>4.2 - 6.0</td>
                              </tr>
                              <tr>
                                <td>Test Description</td>
                                <td>6.5#</td>
                                <td>mg/dl</td>
                                <td>4.2 - 6.0</td>
                              </tr>
                            </tbody>
                          </table>
                      </div>
                    </div>
                  </div>
                  <h4 className='mt-4'>Details</h4>
                  <p className='mb-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.-</p>
                  <p className='mb-4'>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.-</p>
                  <div className='col-lg-12 mainright'>
                      <p className='text-right'>Signature</p>
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
