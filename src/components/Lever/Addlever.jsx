import React, { useEffect, useState } from 'react';
import { AiOutlineUnorderedList } from "react-icons/ai";
import { Link, useNavigate, useSearchParams} from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { rolesObj } from '../../utils/roles';
import { LEVERPERDETAILAdd, LEVERPERDETAILGet, SETLEVERPERDETAILObj, LEVERPERDETAILUpdate,} from "../../redux/actions/LeverPerDetail/LeverPerDetail.actions";

export const Addlever = () => {

    const role = useSelector((states) => states.auth.role);
    const user = useSelector((states) => states.auth.user);
    const roleUser = useSelector((states) => states.auth.user.roleUser);
  
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    const [hodId, setHodId] = useState("");
    const [doctorId, setDoctorId] = useState("");
    const [service, setService] = useState("");

    const genderDrop = [
        { value: "select", label: "Select" },
        { value: "Male", label: "Male" },
        { value: "Female", label: "Female" },
    ]

    const onHandleSubmit = ()=>{
        let obj = {
            name,
            enrollDate,
            email,
            contact,
            age,
            gender,
            height,
            weight,
            bmi,
            address,
            hodId,
            service,
            doctorId
        }
        if(password){
            obj.password = password;
            obj.conPassword = conPassword;
        }
        if(leverObj?._id){
            dispatch(LEVERPERDETAILUpdate(leverObj?._id, obj));
            toast.success(" Patient Updated Successfully ");
        }else{
            dispatch(LEVERPERDETAILAdd(obj));
            toast.success(" Patient Added Successfully ");
        }
        navigate("/add-lever-history");
    };
    
    useEffect(()=>{
        if(role == "HOD"){
            if(roleUser){
                setHodId(roleUser?._id); 
                setService(roleUser?.service);
            }
        }else if(role == "DOCTOR"){
            if(roleUser){
                setDoctorId(roleUser?._id); 
                setHodId(roleUser?.hod); 
                setService(roleUser?.service);
            }
        }
    }, [roleUser]);


    useEffect(()=>{
        if(leverObj){
            setName(leverObj?.name);
            setEnrollDate(leverObj?.enrollDate);
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
                    <li class="list-group-item"><Link to="/add-lever" >Personal Detail</Link></li>
                    <li class="list-group-item"><Link to="/add-lever-history">History</Link></li>
                    <li class="list-group-item"><Link to="/etiological-work-up">Etiological Work Up</Link></li>
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
                                            <label>Name <span>*</span></label>
                                            <input type="text" className='form-control' value={name} onChange={(el)=>{setName(el.target.value)}} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Email<span>*</span></label>
                                            <input type="text" className='form-control' value={email} onChange={(el)=>{setEmail(el.target.value)}} />
                                        </div>
                                        <div className='from-group'>
                                            <label>Password <span>*</span></label>
                                            <input type="text" className='form-control' value={password} onChange={(el)=>{setPassword(el.target.value)}}/>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Age</span></label>
                                            <input type="text" className='form-control' value={age} onChange={(el)=>{setAge(el.target.value)}}/>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>Height</span></label>
                                            <input type="text" className='form-control' value={height} onChange={(el)=>{setHeight(el.target.value)}}/>
                                        </div>
                                        <div className='from-group'>
                                            <label> <span>B.M.I</span></label>
                                            <input type="text" className='form-control' value={bmi} onChange={(el)=>{setBmi(el.target.value)}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className='addlist-frm'>
                                        <div className='from-group'>
                                            <label>Date of Enrollment<span>*</span></label>
                                            <input type="date" className='form-control' value={enrollDate} onChange={(el)=>{setEnrollDate(el.target.value)}}/>
                                        </div>
                                        <div className='from-group'>
                                            <label>Contact<span>*</span></label>
                                            <input type="text" className='form-control' maxLength="10" value={contact} onChange={(el)=>{setContact(el.target.value)}}/>
                                        </div>
                                       
                                        <div className='from-group'>
                                            <label>Confirm Password <span>*</span></label>
                                            <input type="text" className='form-control' value={conPassword} onChange={(el)=>{setConPassword(el.target.value)}}/>
                                        </div>
                                        
                                        <div className='from-group'>
                                            <label>Gender<span>*</span></label>
                                            <select className='form-control' value={gender} onChange={(el)=>{setGender(el.target.value)}}>
                                                { genderDrop && genderDrop.map((el)=><option value={el.value}>{el.label}</option> )}
                                            </select>
                                        </div>

                                        <div className='from-group'>
                                            <label> <span>Weight</span></label>
                                            <input type="text" className='form-control' value={weight} onChange={(el)=>{setWeight(el.target.value)}}/>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div className='from-group'>
                                      <label>Address</label>
                                      <textarea name="address" class="form-control" col="2" row="2" value={address} onChange={(el)=>{setAddress(el.target.value)}}>
                                      </textarea>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='row mt-4'>
                                <div className='col-lg-12'>
                                    <div className='subbtn text-center'> 
                                        { leverObj?._id ?               
                                        <button className='btn btn-link mx-4' onClick={()=>{onHandleSubmit()}}>Update</button>:
                                        <button className='btn btn-link mx-4' onClick={()=>{onHandleSubmit()}}>Add</button> }
                                        {/* <Link to="/add-lever-history" className='btn btn-link mx-3'>Next</Link>  */}
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
export default Addlever;