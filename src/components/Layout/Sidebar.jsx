import React, { useEffect, useReducer } from 'react'
import { BiUserPlus } from "react-icons/bi";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from "../../redux/actions/auth/auth.actions";
import { rolesObj } from '../../utils/roles';


const Sidebar = () => {

const auth = useSelector((states)=> states.auth.user);
const role = useSelector((states)=> states.auth.role);

useDispatch(loginUser());
if(role == rolesObj.ADMIN){
  return (
    <div className="sidebar_wrapper fixed-sidebar">
      <div className="accordion-button">
        {/* <li><Link to="/Profile" class="dropdown-item" href="#">Profile</Link></li> */}
        <h5><Link to="/Profile"> <BiUserPlus className="iconaccrion" /> <span>  Profile</span> </Link></h5>            
      </div>
      <div className="accordion-button">
        <h5><Link to="/homegraph"> <BiUserPlus className="iconaccrion" /> <span>  Dashboard</span> </Link></h5>            
      </div>
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h5 class="accordion-header" id="disease">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseDisease" aria-expanded="true" aria-controls="collapseDisease"><BiUserPlus  className="iconaccrion" />
            <span>Diseases </span>
          </span>
        </h5>
        <div id="collapseDisease" class="accordion-collapse collapse show"  aria-labelledby="disease" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><Link to="/List-Disease"><span>List Diseases</span> </Link></li>
              <li><Link to="/Add-Disease"><span>Add Diseases</span> </Link></li>
            </ul>
          </div>
        </div>
    </div>
    <div class="accordion-item">
        <h5 class="accordion-header" id="headingAppoint">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAppoint" aria-expanded="true" aria-controls="collapseAppoint"><BiUserPlus  className="iconaccrion" />
            <span>Appointment </span>
          </span>
        </h5>
        <div id="collapseAppoint" class="accordion-collapse collapse show"  aria-labelledby="headingAppoint" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><Link to="/listAppointment" className=''> List Of Appointment </Link></li>
              <li><Link to="/appointmentform" className=''> Create Appointment</Link></li>
            </ul>
          </div>
        </div>
    </div>
      <div class="accordion-item">
        <h5 class="accordion-header" id="headingOne">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><BiUserPlus  className="iconaccrion" />
            <span>Manage H.O.D. </span>
          </span>
        </h5>
        <div id="collapseOne" class="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><Link to="/Hod/Hod" className=''> List Of H.O.D </Link></li>
              <li><Link to="/Hod/AddHod" className=''> Create H.O.D</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h5 class="accordion-header" id="headingdoctor">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoctor" aria-expanded="true" aria-controls="collapsedoctor"><BiUserPlus  className="iconaccrion" />
            <span>Manage Doctor </span>
          </span>
        </h5>
        <div id="collapsedoctor" class="accordion-collapse collapse show"  aria-labelledby="headingdoctor" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li> <Link to="/Doctor/ListView" className=''> List Of Doctor </Link></li>
              <li> <Link to="/Doctor/Adduser" className=''> Create Doctor</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h5 class="accordion-header" id="headingTwo">
          <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo"><BiUserPlus  className="iconaccrion" /> <span> I.B.D Patient </span>
          </span>
        </h5>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
         <div class="accordion-body">
            <ul>
              <li> <Link to="/Patients/PatientListView">List Of Patient </Link></li>
              <li><Link to="/Patients/Adddemographics">Add Patient</Link></li>
              <li><Link to="/Patients/Searchpatient">Search Patient</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h5 class="accordion-header" id="headingThree">
          <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseThree" aria-expanded="false"  aria-controls="collapseThree"><BiUserPlus  className="iconaccrion" /> <span> LEVER Patient </span>
          </span>
        </h5>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
         <div class="accordion-body">
            <ul>
              <li> <Link to="">List Of Patient </Link></li>
              <li><Link to="/add-lever">Add Patient</Link></li>
              <li><Link to="">Search Patient</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h5 class="accordion-header" id="headingthree">
          <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapsethree" aria-expanded="false"  aria-controls="collapsethree"><BiUserPlus  className="iconaccrion" /> <span> Manage Followup </span>
          </span>
        </h5>
        <div id="collapsethree" class="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
         <div class="accordion-body">
            <ul>
              <li><Link to="/FollowUp/followupList"> List Followup </Link></li>
              <li><Link to="/FollowUp/Addfollowup">Add Followup</Link></li>
              <li><Link to="/FollowUp/Addpatientdepression">Search FollowUp</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h5 class="accordion-header" id="headingsubAdmin">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubAdmin" aria-expanded="true" aria-controls="collapsesubAdmin"><BiUserPlus  className="iconaccrion" />
            <span>Manage Subadmin </span>
          </span>
        </h5>
        <div id="collapsesubAdmin" class="accordion-collapse collapse show"  aria-labelledby="headingsubAdmin" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li> <Link to="/SubAdmin/ListView" className=''> List Of Sub Admin </Link></li>
              <li> <Link to="/SubAdmin/AddSubAdmin" className=''> Create Sub Admin</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="accordion-button">
        <h5><Link to="/Medicalreport"> <BiUserPlus className="iconaccrion" /> <span>Patient Report</span> </Link></h5>            
      </div>
      
    </div>
  </div>
  )
}
 
if(role == rolesObj.HOD){
  return (
    <div className="sidebar_wrapper fixed-sidebar">
      <div className="accordion-button">
        <h5><Link to="/Hod/Profile"> <BiUserPlus className="iconaccrion" /> <span>  Profile</span> </Link></h5>            
      </div>
    
<div class="accordion" id="accordionExample">
<div class="accordion-item">
        <h5 class="accordion-header" id="headingAppoint">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAppoint" aria-expanded="true" aria-controls="collapseAppoint"><BiUserPlus  className="iconaccrion" />
            <span>Appointment </span>
          </span>
        </h5>
        <div id="collapseAppoint" class="accordion-collapse collapse show"  aria-labelledby="headingAppoint" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><Link to="/listAppointment" className=''> List Appointment </Link></li>
              <li><Link to="/" className=''> Create Appointment</Link></li>
            </ul>
          </div>
        </div>
    </div>

    <div className="accordion-button">
      <h5><Link to="/homegraph"> <BiUserPlus className="iconaccrion" /> <span>  Dashboard</span> </Link></h5>            
    </div>
<div className="accordion-button">
 <h5><Link  to="/Doctor/ListView"> <BiUserPlus className="iconaccrion" /> <span>  Doctors</span> </Link></h5>            
</div>

 {/* <div class="accordion-item">
   <h5 class="accordion-header" id="headingOne">
     <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><BiUserPlus  className="iconaccrion" />
       <span>Manage H.O.D. </span>
     </span>
   </h5>
   <div id="collapseOne" class="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
     <div class="accordion-body">
       <ul>
         <li><Link to="/Hod/AddHod" className=''> Create H.O.D</Link></li>
         <li><Link to="/Hod/Hod" className=''> List H.O.D </Link></li>
       </ul>
     </div>

   </div>
 </div> */}
 {/* <div class="accordion-item">
   <h5 class="accordion-header" id="headingdoctor">
     <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsedoctor" aria-expanded="true" aria-controls="collapsedoctor"><BiUserPlus  className="iconaccrion" />
       <span>Manage Doctor </span>
     </span>
   </h5>
   <div id="collapsedoctor" class="accordion-collapse collapse show"  aria-labelledby="headingdoctor" data-bs-parent="#accordionExample">
     <div class="accordion-body">
       <ul>
         <li> <Link to="/Doctor/Adduser" className=''> Create Doctor</Link></li>
         <li> <Link to="/Doctor/ListView" className=''> List Doctor </Link></li>
       </ul>
     </div>
   </div>
 </div> */}

 <div class="accordion-item">
   <h5 class="accordion-header" id="headingTwo">
     <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
       data-bs-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo"><BiUserPlus  className="iconaccrion" /> <span> Manage Patient </span>
     </span>
   </h5>
   <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
    <div class="accordion-body">
       <ul>
         <li><Link to="/Patients/PatientListView"> List Patient </Link></li>
         <li><Link to="/Patients/Adddemographics">Add Patient</Link></li>
         <li><Link to="/Patients/Addpatientdepression">Search Patient</Link></li>
       </ul>
     </div>
   </div>
 </div>
 
 {/* <div class="accordion-item">
   <h5 class="accordion-header" id="headingthree">
     <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
       data-bs-target="#collapsethree" aria-expanded="false"  aria-controls="collapsethree"><BiUserPlus  className="iconaccrion" /> <span> Manage Follwup </span>
     </span>
   </h5>
   <div id="collapsethree" class="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
    <div class="accordion-body">
       <ul>
         <li><Link to="/Addfollowup">Add Follwup</Link></li>
         <li> <Link to="/ListView"> List Follwup </Link></li>
         <li><Link to="/Addpatientdepression">Search Patient</Link></li>
       </ul>
     </div>
   </div>
 </div> */}
 {/* <div class="accordion-item">
   <h5 class="accordion-header" id="headingsubAdmin">
     <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubAdmin" aria-expanded="true" aria-controls="collapsesubAdmin"><BiUserPlus  className="iconaccrion" />
       <span>Manage Subadmin </span>
     </span>
   </h5>
   <div id="collapsesubAdmin" class="accordion-collapse collapse show"  aria-labelledby="headingsubAdmin" data-bs-parent="#accordionExample">
     <div class="accordion-body">
       <ul>
         <li> <Link to="/SubAdmin/AddSubAdmin" className=''> Create Sub Admin</Link></li>
         <li> <Link to="/SubAdmin/ListView" className=''> List Sub Admin </Link></li>
       </ul>
     </div>
   </div>
 </div> */}

</div>
</div>
  )
}

if(role == rolesObj.DOCTOR){
  return (
    <div className="sidebar_wrapper fixed-sidebar">
      <div className="accordion-button">
        <h5><Link to="/Doctor/Profile"> <BiUserPlus className="iconaccrion" /> <span>  Profile</span> </Link></h5>            
      </div>
      
    <div class="accordion" id="accordionExample">
    <div class="accordion-item">
        <h5 class="accordion-header" id="headingAppoint">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAppoint" aria-expanded="true" aria-controls="collapseAppoint"><BiUserPlus  className="iconaccrion" />
            <span>Appointment </span>
          </span>
        </h5>
        <div id="collapseAppoint" class="accordion-collapse collapse show"  aria-labelledby="headingAppoint" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li><Link to="/listAppointment" className=''> List Appointment </Link></li>
              <li><Link to="/" className=''> Create Appointment</Link></li>
            </ul>
          </div>
        </div>
    </div>

    <div className="accordion-button">
        <h5><Link to="/homegraph"> <BiUserPlus className="iconaccrion" /> <span>  Dashboard</span> </Link></h5>            
      </div>
     
      <div class="accordion-item">
        <h5 class="accordion-header" id="headingTwo">
          <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo"><BiUserPlus  className="iconaccrion" /> <span> Manage Patient </span>
          </span>
        </h5>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
         <div class="accordion-body">
            <ul>
              <li><Link to="/Patients/PatientListView"> List Patient </Link></li>
              <li><Link to="/Patients/Adddemographics">Add Patient</Link></li> 
              <li><Link to="/Patients/Addpatientdepression">Search Patient</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* <div class="accordion-item">
        <h5 class="accordion-header" id="headingthree">
          <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapsethree" aria-expanded="false"  aria-controls="collapsethree"><BiUserPlus  className="iconaccrion" /> <span> Manage Follwup </span>
          </span>
        </h5>
        <div id="collapsethree" class="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
         <div class="accordion-body">
            <ul>
              <li><Link to="/Addfollowup">Add Follwup</Link></li>
              <li> <Link to="/ListView"> List Follwup </Link></li>
              <li><Link to="/Addpatientdepression">Search Patient</Link></li>
            </ul>
          </div>
        </div>
      </div> */}
      {/* <div class="accordion-item">
        <h5 class="accordion-header" id="headingsubAdmin">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubAdmin" aria-expanded="true" aria-controls="collapsesubAdmin"><BiUserPlus  className="iconaccrion" />
            <span>Manage Subadmin </span>
          </span>
        </h5>
        <div id="collapsesubAdmin" class="accordion-collapse collapse show"  aria-labelledby="headingsubAdmin" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li> <Link to="/SubAdmin/AddSubAdmin" className=''> Create Sub Admin</Link></li>
              <li> <Link to="/SubAdmin/ListView" className=''> List Sub Admin </Link></li>
            </ul>
          </div>
        </div>
      </div> */}

    </div>
  </div>
  )
}

if(role == rolesObj.PATIENT){
  return (
    <div className="sidebar_wrapper fixed-sidebar">
      <div className="accordion-button">
      {/* <h5><Link to="/profile"> <BiUserPlus className="iconaccrion" /> <span>  Profile</span> </Link></h5>             */}
    </div>
    <div className="accordion-button">
      <h5><Link to="/appointmentform"> <BiUserPlus className="iconaccrion" /> <span>  Book Appoiment</span> </Link></h5>            
    </div>
    <div className="accordion-button">
      <h5><Link to="/Patients/PatientListView"> <BiUserPlus className="iconaccrion" /> <span>  View Detail</span> </Link></h5>            
    </div>
    {/* <div class="accordion" id="accordionExample">

      <div class="accordion-item">
        <h5 class="accordion-header" id="headingTwo">
          <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseTwo" aria-expanded="false"  aria-controls="collapseTwo"><BiUserPlus  className="iconaccrion" /> <span> View </span>
          </span>
        </h5>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
         <div class="accordion-body">
            <ul>
              <li><Link to="/Patients/Adddemographics">Add Patient</Link></li> 
              <li> <Link to="/Patients/PatientListView"> View Detail </Link></li>
              <li><Link to="/Patients/patientAppointment">Book Appointment</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="accordion-item">
        <h5 class="accordion-header" id="headingthree">
          <span class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapsethree" aria-expanded="false"  aria-controls="collapsethree"><BiUserPlus  className="iconaccrion" /> <span> Manage Follwoup </span>
          </span>
        </h5>
        <div id="collapsethree" class="accordion-collapse collapse" aria-labelledby="headingthree" data-bs-parent="#accordionExample">
         <div class="accordion-body">
            <ul>
              <li><Link to="/Addfollowup">Add Follwup</Link></li>
              <li> <Link to="/ListView"> List Follwup </Link></li>
              <li><Link to="/Addpatientdepression">Search Patient</Link></li>
            </ul>
          </div>
        </div>
      </div>
      /* <div class="accordion-item">
        <h5 class="accordion-header" id="headingsubAdmin">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesubAdmin" aria-expanded="true" aria-controls="collapsesubAdmin"><BiUserPlus  className="iconaccrion" />
            <span>Manage Subadmin </span>
          </span>
        </h5>
        <div id="collapsesubAdmin" class="accordion-collapse collapse show"  aria-labelledby="headingsubAdmin" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
              <li> <Link to="/SubAdmin/AddSubAdmin" className=''> Create Sub Admin</Link></li>
              <li> <Link to="/SubAdmin/ListView" className=''> List Sub Admin </Link></li>
            </ul>
          </div>
        </div>
      </div>

    </div> */}
  </div>
  )
}

}
export default Sidebar;