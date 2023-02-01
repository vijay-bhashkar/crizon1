import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { toast } from "react-hot-toast";

import { DISEASEAdd, DISEASEGet, SETDISEASEObj, DISEASEUpdate, DISEASEDelete } from "../../redux/actions/Disease/Disease.actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const AddDiseases = () => {
    
    const [searchParams, setSearchParams] = useSearchParams("edit");
    const[service, setService] = useState();
    const[disease, setDisease] = useState();

    const dispatch = useDispatch();
    const diseaseArr = useSelector((states) => states.disease.diseases);
    const diseaseObj = useSelector((states)=> states.disease.diseaseObj);

    const serviceDrop = [
        { label: "select service", value:"select service" },
        { label:"I.B.D" , value:"ibd" },
        { label:"Lever" , value:"lever" },
    ];

    const handleAddDisease = ()=>{
        let obj = {
            service,
            disease
        }
        if(diseaseObj?._id){
        dispatch(DISEASEUpdate(diseaseObj?._id, obj));
        toast.success("Disease Updated successfully");
        }else{
        dispatch(DISEASEAdd(obj));
        toast.success("Disease Added successfully");
    }
}

    useEffect(()=>{
        if(diseaseObj){
            setService(diseaseObj?.service);
            setDisease(diseaseObj?.disease);
        }
    },[diseaseObj]);

    useEffect(()=> {
        if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
          dispatch(SETDISEASEObj(null))
        }
      }, [searchParams.get("edit")])

    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4"> 
                        </div>
                        <div className="col-lg-4">
                            <h5 className="mb-0 text-center text-white">
                                ADD DISEASE
                            </h5>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className='btnlist'>
                                <Link to="/List-Disease" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="wrapper_contentbody">
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div className='row mb-3'>
                                <div className='heaind text-center'>
                                    {/* <h3>Patient Personal Details</h3> */}
                                </div>
                            </div>
                            <div className='row'>
                                <div className="col-lg-4"></div>
                                <div className='col-lg-4 border p-5' style={{backgroundColor:"white"}}>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Service <span></span></label>
                                            <select className="form-control" value={service} onChange={(el)=>{setService(el.target.value)}}>
                                            { serviceDrop && serviceDrop.map((el)=> <option value={el.value}>{el.label}</option> )}
                                            </select>
                                        </div>
                                        <div className='from-group'>
                                            <label>Disease<span></span></label>
                                            <input type="text" className='form-control' value={disease} onChange={(el)=>{setDisease(el.target.value)}} />
                                        </div>
                                        <div className='row mt-4'>
                                        <div className='col-lg-12'>
                                            <div className='subbtn text-center'>
                                            { diseaseObj?
                                            <button className='btn btn-link' onClick={handleAddDisease}>Update</button>:
                                            <button className='btn btn-link' onClick={handleAddDisease}>Add</button> }
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}