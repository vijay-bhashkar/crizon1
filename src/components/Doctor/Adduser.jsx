import React, { useEffect, useState } from "react";
import { BiUserPlus } from "react-icons/bi";
import { BiRefresh } from "react-icons/bi";
import { AiOutlineUnorderedList } from "react-icons/ai";
import Select from "react-select";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
// import { CUSTOMERAdd,CUSTOMERGet, SETCUSTOMERObj, CUSTOMERUpdate, DISEASEGet, HODGet, ALLDISEASEGet  } from "../../redux/actions/Customer/Customer.actions";
import { DOCTORAdd, DOCTORGet, SETDOCTORObj, DOCTORUpdate, DISEASEGet, HODGet, ALLDISEASEGet  } from "../../redux/actions/Doctor/Doctor.actions";
import { Link } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { toastError } from "../../utils/toastUtils";
export const Adduser = () => {

const [searchParams, setSearchParams] = useSearchParams("edit");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPassword] = useState("");
  const [securityQuest, setSecurityQuest] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [statue, setStatue] = useState("");
  const [securityAns, setSecurityAns] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [disease, setDisease]= useState("");
  const [diseaseMainArr, setDiseaseMainArr] = useState("");
  const [hodArr, setHodArr] = useState("");
  const [diseaseArr, setDiseaseArr] = useState("");
  const [hod, sethod] = useState("");
  const [service, setService] = useState("");

  const customerArr = useSelector((states) => states.doctor.doctors);
  const hodArrRedux = useSelector((states) => states.doctor.hods);
  const diseaseArrRedux = useSelector((states) => states.hod.diseases);

useEffect(() => {
    dispatch(DISEASEGet());
}, []);

useEffect(() => {
    dispatch(ALLDISEASEGet());
}, []);

useEffect(() => {
    dispatch(HODGet());
}, []);

const handleGet = () => {
    dispatch(DISEASEGet());
};

useEffect(() => {
    if(hodArrRedux){
        setHodArr(hodArrRedux);
    }
  }, [hodArrRedux]);

useEffect(() => {
    if(diseaseArrRedux){
        setDiseaseArr(diseaseArrRedux);
    }
  }, [diseaseArrRedux]);

useEffect(() => {
    handleGet()
}, []);

useEffect(() => {
    if (customerArr?.length) {
        setDiseaseMainArr(customerArr);
      }
    }, [customerArr]);

const hadleDisease = (diseaase)=> {
    setDisease(diseaase)
    if(diseaase){
    let diseaseHod = hodArrRedux.filter(el=>el.disease === diseaase);
    setHodArr(diseaseHod)
    }
}

const onServiceFun = (disease)=>{
    setService(disease);
    if(disease){
      let diseaseFilter = diseaseArrRedux.filter(el=>el.service === disease);
      setDiseaseArr(diseaseFilter);
      console.log(diseaseFilter, "asdfasdfasdf");
    }
    
  }

useEffect(()=> {
    console.log(searchParams.get("edit"), "edit")
    if(!searchParams.get("edit") || !searchParams.get("edit") == "true"){
      dispatch(SETDOCTORObj(null))
    }
  }, [searchParams.get("edit")]);

const customerObj = useSelector((states) => states.doctor.doctorObj);

const dispatch = useDispatch();
  const handleAddCustomer = () => {

    if(firstName == "" || firstName == undefined){
        toast.error("First Name is mandatory")
        return
    }if(email == "" || email == undefined){
        toast.error("Email is mandatory")
        return
    }if(position == "" || position == undefined){
        toast.error("Position is mandatory")
        return
    }if(company == "" || company == undefined){
        toast.error("Hospital/Clinic name is mandatory")
        return
    }if(`${phone}`.length != 10){
        toast.error("Phone should be 10 digit")
        return
    }
    if(!customerObj?._id){
        if (password.trim().length == 0 ) {
          toast.error(" Password can not be Empty ");
        return;
      }
      if (password.trim().length < 5 ) {
          toast.error(" Password can not be less 5 digit");
        return;
      }
      if (password != conPassword ) {
          toast.error(" Password and Confirm Password Should Be Same");
        return;
      }
    }
    if(disease =="" || disease == undefined){
        toast.error("Please select Disease")
        return
    }if(hod == "" || hod == undefined){
        toast.error("Please select H.O.D")
        return
    }
    else{
    let obj = {
        firstName,
        lastName,
        company, 
        position, 
        email, 
        phone, 
        state, 
        country, 
        city, 
        securityQuest, 
        zipCode,
        statue,
        securityAns,
        hod,
        disease,
        service
    };
    if(password != conPassword){
        toast.error("Password and Confirm Password Should Be Same");
        return;
    }
    if(password){
        obj.password = password;
        obj.conPassword = conPassword;
    }

    if (customerObj?._id) {
        dispatch(DOCTORUpdate(customerObj._id, obj));
        toast.success(" Doctor Updated Successfully ");
    } else {
        dispatch(DOCTORAdd(obj));
        toast.success(" Doctor Added Successfully ");
    }
}
};

useEffect(() => {
    if (customerObj) {
        setFirstName(customerObj?.firstName);
        setLastName(customerObj?.lastName);
        setCompany(customerObj.company);
        setPosition(customerObj?.position);
        setEmail(customerObj?.email);
        setPhone(customerObj?.phone);
        setState(customerObj?.state);
        setCountry(customerObj?.country);
        setCity(customerObj?.city);
        // setPassword(customerObj?.password);
        // setConPassword(customerObj?.conPassword);
        setSecurityQuest(customerObj?.securityQuest);
        setZipCode(customerObj?.zipCode);
        setStatue(customerObj?.statue);
        setSecurityAns(customerObj?.securityAns);
        sethod(customerObj?.hod);
        setDisease(customerObj?.disease);
        setService(customerObj?.service);
    }
}, [customerObj]);

const question = [
    { value:"What's your pet name?", label:"What's your pet name?" },
    { value:"What's your favourite food?", label:"What's your favourite food?" },
    { value:"What's your mother maiden name?", label:"What's your mother maiden name?" },
    { value:"What's your birth city?", label:"What's your birth city?" },
    { value:"What's your nick name?", label:"What's your nick name?" },
]
const statues = [
    { value:"Select", label:"Select" },
    { value:"disabled" , label:"disabled" },
    { value:"enabled" , label:"enabled" },
]
const serviceDrop = [
    { value:"ibd", label: "IBD" },
    { value:"lever", label: "Lever" },
]

  return (
    <div className="content_wrapper">
    <div className="contentwraper_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-lg-4">
           <div className='viewadduser'>
            <ul >
                {/* <li><BiUserPlus className='icon' /> <span>Add User</span></li> */}
                {/* <li><AiOutlineUnorderedList className='icon' /> <span>Add User</span></li> */}
            </ul>
           </div>
          </div>
          <div className="col-lg-4">
            {(customerObj?._id)?
          <h5 className="mb-0 text-center text-white"> UPDATE DOCTOR </h5>
          :<h5 className="mb-0 text-center text-white"> ADD DOCTOR </h5>}
          </div>
          <div className="col-lg-4 text-end">
            <div className='btnlist'>
              <span><Link to="/Doctor/ListView" class="btn btn-defalut btn-md"> <AiOutlineUnorderedList className="icon" /> View List</Link></span>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="wrapper_contentbody">
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>First Name <span>*</span></label>
                                    <input type="text" className='form-control' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  />
                                </div>
                                <div className='from-group'>
                                    <label>Hospital/Clinic <span>*</span></label>
                                    <input type="text" className='form-control' value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
                                </div>
                                
                                <div className='from-group'>
                                    <label>Email <span>*</span></label>
                                    <input type="text" className='form-control' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Password <span>*</span></label>
                                    <input type="text" className='form-control' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>State <span>*</span></label>
                                    <input type="text" className='form-control' value={state} onChange={(e)=>{setState(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>City <span>*</span></label>
                                    <input type="text" className='form-control' value={city} onChange={(e)=>{setCity(e.target.value)}}/>
                                </div>
                                
                                <div className='from-group'>
                                    <label>Security Question <span>*</span></label>

                                    <select  className="form-control" value={securityQuest} onChange={(e)=>{setSecurityQuest(e.target.value)}}>
                                        {
                                          question && question.map((el)=><option value={el.value}>{el.label}</option>)
                                        }
                                    </select>
                                </div>
                                {/* <div className='from-group'>
                                    <label>Status<span></span></label>
                                    <select className="form-control" value={statue} onChange={(e)=>{setStatue(e.target.value)}}>
                                        { statues && statues.map((el)=><option value={el.value}>{el.label}</option>) }
                                    </select>
                                </div> */}
                                <div className='from-group'>
                                    <label>Service<span>*</span></label>
                                    <select className="form-control" value={service} onChange={(e)=>{onServiceFun(e.target.value)}}>
                                        <option>Please Select</option>
                                        { serviceDrop && serviceDrop.map((el)=><option value={el.value}>{el.label}</option>) }
                                    </select>
                                </div>

                                <div className='from-group'>
                                    <label>H.O.D<span>*</span></label>
                                    <select className="form-control" value={hod} onChange={(e)=>{sethod(e.target.value)}}>
                                    <option value=""> Please Select Hod</option>
                                        { hodArr && hodArr.map((el)=><option value={el._id}>{ el.firstName }</option>) }
                                    </select>
                                </div>
                                
                            
                            </div>
                        </div>
                        <div className='col-lg-6'>
                            <div className='addlist-frm'>
                                <div className='from-group'>
                                    <label>Last Name<span></span></label>
                                    <input type="text" className='form-control' value={lastName} onChange={(e)=>{setLastName(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Position/Title<span>*</span></label>
                                    <input type="text" className='form-control' value={position} onChange={(e)=>{setPosition(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Phone<span>*</span></label>
                                    <input type="text" className='form-control' maxLength={10} value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Confirm Password<span>*</span></label>
                                    <input type="text" className='form-control ' value={conPassword} onChange={(e)=>{setConPassword(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>Country<span>*</span></label>
                                    <input type="text" className='form-control' value={country} onChange={(e)=>{setCountry(e.target.value)}}/>
                                </div>
                                <div className='from-group'>
                                    <label>ZipCode<span>*</span></label>
                                    <input type="text" className='form-control' maxlength={6} value={zipCode} onChange={(e)=>{setZipCode(e.target.value)}}/>
                                </div>
                                
                                <div className='from-group'>
                                    <label>Answer<span>*</span></label>
                                    <input type="text" className='form-control' value={securityAns} onChange={(e)=>{setSecurityAns(e.target.value)}}/>
                                </div>
                                
                                

                                <div className='from-group'>
                                    <label>Disease<span>*</span></label>
                                    <select className="form-control" value={disease} onChange={(e)=>{hadleDisease(e.target.value)}}>
                                        <option value=""> Please Select Disease</option>
                                        { diseaseArr && diseaseArr.map((el)=><option value={el._id}>{el.disease}</option>) }
                                    </select>
                                </div>

                                <div className='row'>
                                  <div className='col-lg-6'>
                                    <label>Verification Word*</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control"  />
                                        <span class="input-group-text"><BiRefresh /></span>
                                    </div>
                                  </div>
                                  <div className='col-lg-6'>
                                    <div className='from-group'>
                                        <label>&nbsp;</label>
                                        <input type="text" className='form-control '  />
                                    </div>
                                  </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='row mt-4'>  
                        <div className='col-lg-12'>
                            <div className='subbtn text-center'>
                                {(customerObj?._id)?
                                <button to="" className='btn btn-link' onClick={handleAddCustomer}>Update Doctor</button>
                                :<button to="" className='btn btn-link' onClick={handleAddCustomer}>Add Doctor</button>}
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
