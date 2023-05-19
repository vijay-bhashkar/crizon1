import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate, useSearchParams} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { SETLEVERPERDETAILObj} from "../../../redux/actions/LeverPerDetail/LeverPerDetail.actions";


export const ShowDetail = () => {

    const dispatch = useDispatch();
    const leverObj = useSelector((states)=> states.leverPerDetail.leverPerDetailObj);

    const [searchParams, setSearchParams] = useSearchParams("edit");
    const [name , setName] = useState("");
    const [enrollDate , setEnrollDate] = useState("");
    const [email , setEmail] = useState("");
    const [contact , setContact] = useState("");
    const [password , setPassword] = useState("");
    const [conPassword , setConPassword] = useState("");
    const [age , setAge] = useState("");
    const [gender , setGender] = useState("");
    const [height , setHeight] = useState("");
    const [weight , setWeight] = useState("");
    const [bmi , setBmi] = useState("");
    const [address , setAddress] = useState("");


    const genderDrop = [
        { value: "select", label: "Select" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ]

    useEffect(()=>{
        if(leverObj){
            setName(leverObj?.name);
            setEnrollDate(moment(leverObj?.enrollDate).format("YYYY-MM-DD"));
            setEmail(leverObj?.email);
            setContact(leverObj?.contact);
            // setPassword(leverObj?.password);
            // setConPassword(leverObj?.conPassword);
            setAge(leverObj?.age);
            setGender(leverObj?.gender);
            setHeight(leverObj?.height);
            setWeight(leverObj?.weight);
            setBmi(leverObj?.bmi);
            setAddress(leverObj?.address);
        }
    },[leverObj]);
    
    useEffect(()=> {
        console.log(searchParams.get("edit"), "edit")
        if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
          dispatch(SETLEVERPERDETAILObj(null));
        }
      }, [searchParams.get("edit")]);

    return (
        <div className="content_wrapper">
            <div className="contentwraper_header">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                            <h5 className="mb-0 text-center text-white">
                                Patient (LEVER DISEASE)
                            </h5>
                        </div>
                        <div className="col-lg-4 text-end">
                            <div className='btnlist'>
                                <Link to="/lever-list" class="btn btn-defalut btn-md"><AiOutlineUnorderedList className='icon' /> <span>View List</span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='listheader text-center'>
                <ul class="list-group list-group-horizontal justify-content-center">
                    <li class="list-group-item p-2">Personal Detail</li>
                    <li class="list-group-item p-2">History</li>
                    <li class="list-group-item p-2">Etiological Work Up</li>
                </ul>
            </div>
            <div className="wrapper_contentbody">
                <div className='container-fluid'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-10'>
                            <div className='row mb-3'>
                                <div className='heaind text-center'>
                                    <h3>Patient Personal Details</h3>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label><b>Name : </b><span></span> {name}</label>
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Email : </b><span></span> {email}</label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span><b>Age : </b></span> {age}</label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span><b>Height : </b></span> {height}</label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span><b>B.M.I : </b></span> {bmi}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label><b>Date of Enrollment : </b><span></span> {enrollDate}</label>
                                        </div>
                                        <div className='from-group'>
                                            <label><b>Contact : </b><span></span> {contact}</label>
                                        </div>    
                                        <div className='from-group'>
                                            <label><b>Gender : </b><span></span> {gender}</label>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span><b>Weight : </b></span> {weight}</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                      <label><b>Address : </b> {address}</label>
                                    </div>
                                </div>
                            </div>                            
                            <div className='row mt-4'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center'> 
                                        <Link to="/show-lever-history" className='btn btn-link mx-3'>Next</Link> 
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
