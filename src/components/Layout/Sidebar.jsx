import React from 'react'
import { BiUserPlus } from "react-icons/bi";
import { Link } from 'react-router-dom';

 const Sidebar = () => {
  return (
    <div className="sidebar_wrapper fixed-sidebar">
         <div className="accordion-button">
        <h5><Link to="/homegraph"> <BiUserPlus className="iconaccrion" /> <span>  Profile</span> </Link></h5>            
    </div>
    <div className="accordion-button">
        <h5><Link to="/appointmentform"> <BiUserPlus className="iconaccrion" /> <span>  Book Appoiment</span> </Link></h5>            
    </div>
    {/* <div className="accordion-button">
        <h5><Link to="/homegraph"> <BiUserPlus className="iconaccrion" /> <span>Manage Account</span></Link></h5>            
    </div> */}
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h5 class="accordion-header" id="headingOne">
          <span class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><BiUserPlus  className="iconaccrion" />
            <span>Manage Account </span>
          </span>
        </h5>
        <div id="collapseOne" class="accordion-collapse collapse show"  aria-labelledby="headingOne" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <ul>
                  <li> <Link to="/Adduser" className=''> Create User</Link></li>
                  <li> <Link to="/ListView" className=''> List User </Link></li>
            </ul>
          </div>
        </div>
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
                <li><Link to="/Adddemographics">Add Patient</Link></li>
                <li> <Link to="/ListView"> List Patient </Link></li>
                <li><Link to="/Addpatientdepression">Search Patient</Link></li>
                {/* <li><Link to="/listview">List View</Link></li>
                <li><Link to="/adddemographics">Demographics</Link></li>
                <li><Link to="/addpatientdepression">Add patient depression</Link></li>
                <li><Link to="/addfollowup">Add Followup</Link></li> */}
              
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
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
      </div>
    </div>
  </div>
  )
}
export default Sidebar;