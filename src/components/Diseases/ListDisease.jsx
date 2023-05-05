import React from "react";
import { BiUserPlus } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import ReactPaginate from 'react-paginate';
import { Link, useNavigate } from "react-router-dom";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { DISEASEGet, SETDISEASEObj , DISEASEDelete } from "../../redux/actions/Disease/Disease.actions";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

export const ListDisease = () =>{

  const [mainArray, setMainArray] = useState("");
  const [diseaseMainArray, setDiseaseMainArray] = useState("");
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [totalPages, setTotalPages] = useState([]);
  
  const diseaseArr = useSelector((states)=> states.disease.diseases);
  const totalDisease = useSelector((states)=> states.disease.total);
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    handleGet()
  }, []);
  
  const handleGet = () => {
    let query = "";
    query+= `limit=${limit}&page=${page}`;
    dispatch(DISEASEGet(query));
  };
  
  useEffect(()=>{
    if(diseaseArr?.length){
      setMainArray(diseaseArr);
    }
  }, [diseaseArr]);

  useEffect(() => {
    console.log(page)
    if(page){
      handleGet();
    }
  }, [page])

  useEffect(() => {
    if (diseaseArr?.length) {
      setDiseaseMainArray(diseaseArr);
      setTotal(totalDisease);   
      let totalPages = Math.ceil(totalDisease/limit);
      setTotalPages(totalPages);
      }
    }, [diseaseArr]);

  const handleEdit = (row)=>{
    dispatch(SETDISEASEObj(row));
    navigate(`/Add-Disease?edit=true&id=${row._id}`);
  };

  const handleDelete = (row)=>{
    dispatch(DISEASEDelete(row._id));
    toast.success("Disease deleted successfully");
  }

    return(
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
                DISEASE LIST
              </h5>
            </div>
            <div className="col-lg-3 ">
          </div>
            <div className="col-lg-2 ">
            <div className='btnlist'>
              <Link to="/Add-Disease" class="btn btn-defalut btn-md"> <BiUserPlus className="icon" /> Add Disease </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table_view_list">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-center">
                S.NO
              </th>
              <th scope="col">Service</th>
              <th scope="col">Disease Name</th>
              <th scope="col">Edit &nbsp; Delete </th> 
            </tr>
          </thead>
          <tbody>
            { mainArray && mainArray.map((item,index) => (
             <tr key={index}>
              <th scope="row" className="text-center">{index+1}</th>
              <th scope="row">{item.service}</th>
              <td>{item.disease}</td>  
              <td>
                <span className="editlist" >
                <FiEdit onClick={(e)=>{handleEdit(item)}}/>
                </span>{" "}&nbsp;&nbsp;
                <span className="delete_list">
                  <RiDeleteBin5Fill onClick={(e)=>{handleDelete(item)}}/>
                </span>
              </td>
            </tr>
           ) )}
          </tbody>
        </table>
      </div>
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
    )
};