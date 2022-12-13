import React, { useEffect, useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { Link ,useNavigate} from 'react-router-dom';
import { HODAdd, HODGet, HODDelete, SETHODObj } from "../../redux/actions/Hod/Hod.actions";
export const Hod = () => {

useEffect(() => {
    handleGet()
  }, []);

  const hodArr = useSelector((states) => states.hod.hods);
  const diseaseArr = useSelector((states) => states.hod.diseases);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [hodMainArr, sethodMainArr] = useState([]);
  const [hodDisplayArr, sethodDisplayArr] = useState([]);
  const [disease , setDisease] =  useState("");
  const [doctor , setDoctor] =  useState("");

  const handleGet = () => {
    dispatch(HODGet());
  };
 
  useEffect(() => {
    if (hodArr?.length) {
      sethodMainArr(hodArr);
      sethodDisplayArr(hodArr);
      }
    }, [hodArr])

    useEffect(() => {
      if (diseaseArr?.length) {
        setDisease(diseaseArr);
        }
      }, [diseaseArr]);

    const hadleDisease = (disease) => {
      console.log(disease,"valuevalue")
      if (disease) {

        if(disease.value == 'all'){
          sethodDisplayArr(hodArr);

        } else {
          let hodDisease = hodArr.filter(el => el.disease == disease.value);
          console.log(hodDisease, "disease doctor");
          sethodDisplayArr(hodDisease);
        }
       

      }
    }
  
    const handleHodEdit = (row) => {
      dispatch(SETHODObj(row));
      navigate("/Hod/AddHod");
    };
  
    const handleHodDelete = (row) => {
      dispatch(HODDelete(row._id))
      dispatch(SETHODObj(null))
  }

  const options = [
    { value: "all", label: "All" },
    { value: "colitis", label: "colitis" },
    { value: "ulcerstive", label: "ulcerstive" },
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
                HODs
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
                <label>DISEASES</label>
                {/* <select className='form-control' value={disease} onChange={(el)=>{setDisease(el.target.value)}}>
                  { diseaseArr && diseaseArr.map((el)=><option value={el._id}>{el.name}</option>)}
                </select> */}
                <Select options={options} placeholder="Select" onChange={hadleDisease}/>
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
                        <th scope="col">Name of Doctor</th>
                        <th scope="col">Disease</th>
                        <th scope="col">Phone No.</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit & Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                      hodDisplayArr && hodDisplayArr.map((item,index) =>
                      <tr>
                        <th scope="row">{index+1}</th>
                        <th>{item.firstName}</th>
                        <td>{item.disease}</td>
                        <td>{item.phone}</td>
                        <td><span className='status'> Active </span></td>
                        <td>
                        <span className="editlist">
                          <FiEdit onClick={(e)=>{handleHodEdit(item)}} />
                        </span>{" "}
                        <span className="delete_list">
                         <RiDeleteBin5Fill onClick={(e)=>{handleHodDelete(item)}}/>
                        </span>
                        </td>
                      </tr>
                    )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className='container-fluid mt-5'>
              <div className='row justify-content-center'>
                  <div className='col-lg-10'>
                    <div className=' text-center'>
                      <Link to="/Patientupcoming" className='nxt-btn'>Next</Link>
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
