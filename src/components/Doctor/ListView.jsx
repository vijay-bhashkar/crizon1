import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { toast } from "react-hot-toast";
import ReactPaginate from 'react-paginate';
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { DOCTORGet, DOCTORDelete, SETDOCTORObj } from "../../redux/actions/Doctor/Doctor.actions";
import { Link ,useNavigate} from "react-router-dom";
import { rolesObj } from "../../utils/roles";
export const ListView = () => {

const customerArr = useSelector((states) => states.doctor.doctors);
const role = useSelector((states)=> states.auth.role);
const user = useSelector((states)=> states.auth.user);
const totalHod = useSelector((states) => states.doctor.total);
const totalPage = useSelector((states) => states.doctor.totalPages);

const dispatch = useDispatch();
const navigate = useNavigate();
const [customerMainArr, setCustomerMainArr] = useState([]);
const [search , setSearch] =  useState("");
const [limit , setLimit] = useState(5);
const [page , setPage] = useState(1);
const [total , setTotal] = useState(0);
const [totalPages , setTotalPages] = useState([]);
  
const handleGet = () => {
  let query = "";
  if(role == rolesObj.HOD){
    query += `hod=${user?.roleUser?._id}&limit=${limit}&page=${page}`;
  }  
  query += `limit=${limit}&page=${page}`;
  dispatch(DOCTORGet(query));
};

useEffect(() => {
  if(customerArr?.length){
    setCustomerMainArr(customerArr);
  }
  if(totalPage && totalPage){
    setTotalPages(totalPage);
    setTotal(totalPage);
  }
    
}, [customerArr]);

useEffect(() => {
  console.log(page)
  if(page){
    handleGet();
  }
}, [page])

useEffect(()=>{
  if(search){
    let filterAr = customerArr.filter(el => `${el.firstName}`.toLowerCase().includes(`${search}`.toLowerCase()));
    console.log(filterAr);
    setCustomerMainArr(filterAr);
  }
},[search]);

 useEffect(() => {
  if (customerArr?.length) {
    setCustomerMainArr(customerArr);
    }
  }, [customerArr])

  const handleCustomerEdit = (row) => {
    dispatch(SETDOCTORObj(row));
    navigate(`/Doctor/Adduser?edit=true&id=${row._id}`);
  };
  
  const handleCustomerDelete = (row) => {
    dispatch(DOCTORDelete(row._id))
    handleGet();
    dispatch(SETDOCTORObj(null))
    toast.success("Doctor deleted successfully");
};

const handleCustomerView = (row) => {
  dispatch(SETDOCTORObj(row));
  navigate("/Doctor/ShowView");
};

  return (
    <div className="content_wrapper">
      <div className="contentwraper_header">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="viewadduser">
                <ul>
                </ul>
              </div>
            </div>
            <div className="col-lg-3">
              <h5 className="mb-0 text-center text-white">
                DOCTOR LIST
              </h5>
            </div>
            <div className="col-lg-3 ">
            <div className='btnlist'>
              <input type="text" name="search" placeholder='Enter Doctor Name' className='form-control' value={search} onChange={(el)=>{setSearch(el.target.value)}} />
            </div>
          </div>
            <div className="col-lg-2 ">
            {(role == rolesObj.HOD)?"":
            <div className='btnlist'>
              <Link to="/Doctor/Adduser" class="btn btn-defalut btn-md"> <BiUserPlus className="icon" /> Add Doctor </Link>
            </div>
            }
            </div>
          </div>
        </div>
      </div>
      <div className="table_view_list container" style={{paddingLeft:100,paddingRight:100}}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                S.NO
              </th>
              <th scope="col">Name of Doctor</th>
              <th scope="col">Company</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone No.</th>
              {/* <th scope="col">Status</th> */}
              {(role == rolesObj.HOD)?
              <th scope="col">View</th>
              :
              <th scope="col">Edit &nbsp; Delete &nbsp; View</th> 
              }
            </tr>
          </thead>
          <tbody>

          {
            customerMainArr && customerMainArr.map((item,index) => <tr>
              <th scope="row" className="text-center">
                {index+1}
              </th>
              <th scope="row">{item.firstName}</th>
              <td>{item.company}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              {(role == rolesObj.HOD)?
              <td>
                <span className="editlist">
                <FiEdit onClick={(e)=>{handleCustomerView(item)}} />
                </span>{" "}                
              </td>
              :
              <td>
                <span className="editlist">
                <FiEdit onClick={(e)=>{handleCustomerEdit(item)}} />
                </span>{" "}&nbsp;&nbsp;
                <span className="delete_list">
                  <RiDeleteBin5Fill onClick={(e)=>{handleCustomerDelete(item)}}/>
                </span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="editlist">
                <GrView  onClick={(e)=>{handleCustomerView(item)}} />
                </span>{" "}
              </td>}
            </tr>
            )
          }
          </tbody>
        </table>
        <div className='container-fluid my-5'>
        <div className='row justify-content-center'>
          <div className='col-lg-10 text-center'>
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next"
              onPageChange={(e) => {
                setPage(e.selected + 1);
              }}
              pageRangeDisplayed={2}
              className='pagination_list'
              pageCount={totalPages}
              previousLabel="Previous"
              renderOnZeroPageCount={null}
            />
          </div>
        </div>
      </div>
      
      </div>
    </div>
  );
};
