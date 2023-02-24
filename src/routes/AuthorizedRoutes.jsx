import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/Style.css"
import Login from "../components/Login.jsx";
import DefaultLayout from "../components/Layout/Index.jsx";
import {Appointment} from "../components/Appointment/Appointment.jsx";
import {ListAppointment} from "../components/Appointment/ListAppointment.jsx";
import { Departments } from "../components/Departments.jsx";

import { Hod } from "../components/Hod/Hod.jsx";
import { AddHod } from "../components/Hod/AddHod.jsx";  
import { Profile } from "../components/Hod/Profile.jsx";
import { ShowHod } from "../components/Hod/ShowHod.jsx";

import { Patientupcoming } from "../components/Patientupcoming.jsx";
import { Medicalreport } from "../components/Medicalreport.jsx";

import { Adduser } from "../components/Doctor/Adduser.jsx";
import { ListView } from "../components/Doctor/ListView.jsx";
import { ShowView } from "../components/Doctor/ShowView.jsx";
import { DoctorProfile } from "../components/Doctor/Profile.jsx";

import { Searchpatient } from "../components/Patients/Searchpatient.jsx";
import { PatientListView } from "../components/Patients/PatientListView.jsx";
import { Adddemographics } from "../components/Patients/Adddemographics.jsx";
import { Editdemographics } from "../components/Patients/Editdemographics.jsx";
import { Clinicalhistory } from "../components/Patients/Clinicalhistory.jsx";
import { Previoustreatment } from "../components/Patients/Previoustreatment.jsx";
import { Nutritionalhistory } from "../components/Patients/Nutritionalhistory.jsx";
import { Investigations } from "../components/Patients/Investigations.jsx";
import { Treatment } from "../components/Patients/Treatment.jsx";
import { Infections } from "../components/Patients/Infections.jsx";
import { Depression } from "../components/Patients/Depression.jsx";
import { ShowpatientDetail } from "../components/Patients/ShowpatientDetail.jsx";
import { PatientAppointment } from "../components/Patients/PatientAppointment.jsx";

import { Viewdemografics } from "../components/Patients/Show/Viewdemografics.jsx";
import { ViewClinicalhistory } from "../components/Patients/Show/ViewClinicalhistory.jsx";
import { ViewPrevioustreatment } from "../components/Patients/Show/ViewPrevioustreatment.jsx";
import { ViewNutrition } from "../components/Patients/Show/ViewNutrition.jsx";
import { ViewInvestigation } from "../components/Patients/Show/ViewInvestigation.jsx";
import { ViewTreatment } from "../components/Patients/Show/ViewTreatment.jsx";
import { ViewInfection } from "../components/Patients/Show/ViewInfection.jsx";
import { ViewDepression } from "../components/Patients/Show/ViewDepression.jsx";

import { Addfollowup } from "../components/FollowUp/Addfollowup.jsx";
import { Viewfollowup } from "../components/FollowUp/Viewfollowup.jsx";
import { Addpatientdepression } from "../components/FollowUp/Addpatientdepression.jsx";
import { FollowUpList } from "../components/FollowUp/FollowUpList.jsx";
import { Homegraph } from "../components/Homegraph.jsx";
import { Appointmentform } from "../components/Appointmentform.jsx";

import { AddLeverFollowUp } from "../components/LeverFollowUp/AddLeverFollowUp";
import { AllLeverFollowUp } from "../components/LeverFollowUp/AllLeverFollowUp";
import { SearchFollowUp } from "../components/LeverFollowUp/SearchFollowUp";
import { ViewLeverFollowUp } from "../components/LeverFollowUp/ViewLeverFollowUp";

import { AddSubAdmin } from "../components/SubAdmin/AddSubAdmin.jsx";
import { ViewSubAdmin } from "../components/SubAdmin/ViewSubAdmin.jsx";
import { SubAdminListview } from "../components/SubAdmin/ListView.jsx";
import { AdminProfile } from "../components/Profile.jsx";

import { Addlever } from "../components/Lever/Addlever.jsx";
import { AddLeverHistory } from "../components/Lever/AddLeverHistory";
import { EtiologicalWorkup } from "../components/Lever/EtiologicalWorkup";
import { LeverList } from "../components/Lever/LeverList";
import { SearchLeverPatient } from "../components/Lever/SearchLeverPatient";

import { ShowDetail } from "../components/Lever/Show/ShowDetail";
import { ShowHistory } from "../components/Lever/Show/ShowHistory";
import { ShowEtiological } from "../components/Lever/Show/ShowEtiological";

import { AddDiseases } from "../components/Diseases/AddDisease";
import { ListDisease } from "../components/Diseases/ListDisease";

import Header from "../components/Layout/Header";
import Sidebar from "../components/Layout/Sidebar";
import { useSelector } from "react-redux";


function AuthorizedRoutes() {
  const role = useSelector((states)=> states.auth.role);
  return (
    <>
          <Header/>
            <div className="bodybb-color">
              <div className="wrapper_body">
                <Sidebar/>
                  <Routes>
                    {(role == 'ADMIN')?
                      <Route path="/" exact element={<Homegraph />}></Route> :
                      <Route path="/" exact element={<Appointment />}></Route> }
                      <Route path="/listAppointment" exact element={<ListAppointment />}></Route>
                      <Route path="/department" exact element={<Departments />}></Route>
                      <Route path="/Hod/Hod" exact element={<Hod />}></Route>
                      <Route path="/Hod/AddHod" exact element={<AddHod />}></Route>
                      <Route path="/Hod/Profile" exact element={<Profile/>}></Route>
                      <Route path="/Hod/ShowHod" exact element={<ShowHod/>}></Route>

                      <Route path="/Patientupcoming" exact element={<Patientupcoming />}></Route>
                      <Route path="/Medicalreport" exact element={<Medicalreport />}></Route>
                      <Route path="/Doctor/adduser" exact element={<Adduser />}></Route>
                      <Route path="/Doctor/listview" exact element={<ListView />}></Route>
                      <Route path="/Doctor/ShowView" exact element={<ShowView />}></Route>
                      <Route path="/Doctor/Profile" exact element={<DoctorProfile/>}></Route>

                      <Route path="/Patients/Searchpatient" exact element={<Searchpatient />}></Route>
                      <Route path="/Patients/PatientListView" exact element={<PatientListView />}></Route>
                      <Route path="/Patients/adddemographics" exact element={<Adddemographics />}></Route>
                      <Route path="/Patients/editdemographics" exact element={<Editdemographics />}></Route>
                      <Route path="/Patients/clinicalhistory" exact element={<Clinicalhistory />}></Route>
                      <Route path="/Patients/previoustreatment" exact element={<Previoustreatment />}></Route>
                      <Route path="/Patients/nutritionalhistory" exact element={<Nutritionalhistory />}></Route>
                      <Route path="/Patients/investigations" exact element={<Investigations />}></Route>
                      <Route path="/Patients/treatment" exact element={<Treatment />}></Route>
                      <Route path="/Patients/infections" exact element={<Infections />}></Route>
                      <Route path="/Patients/depression" exact element={<Depression />}></Route>
                      <Route path="/Patients/ShowpatientDetail/:id" exact element={<ShowpatientDetail />}></Route>
                      <Route path="/Patients/patientAppointment" exact element={<PatientAppointment />}></Route>

                      <Route path="/Patients/Viewdemografics" exact element={<Viewdemografics/>}></Route>
                      <Route path="/Patients/Viewclinicalhistory" exact element={<ViewClinicalhistory/>}></Route>
                      <Route path="/Patients/Viewprevioustreatment" exact element={<ViewPrevioustreatment/>}></Route>
                      <Route path="/Patients/Viewnutrition" exact element={<ViewNutrition/>}></Route>
                      <Route path="/Patients/Viewinvestigation" exact element={<ViewInvestigation/>}></Route>
                      <Route path="/Patients/Viewtreatment" exact element={<ViewTreatment/>}></Route>
                      <Route path="/Patients/Viewinfection" exact element={<ViewInfection/>}></Route>
                      <Route path="/Patients/Viewdepression" exact element={<ViewDepression/>}></Route>

                      <Route path="/FollowUp/addfollowup" exact element={<Addfollowup />}></Route>
                      <Route path="/FollowUp/viewfollowup" exact element={<Viewfollowup />}></Route>
                      <Route path="/FollowUp/addpatientdepression" exact element={<Addpatientdepression />}></Route>
                      <Route path="/FollowUp/followupList" exact element={<FollowUpList />}></Route>
                      <Route path="/homegraph" exact element={<Homegraph />}></Route>
                      <Route path="/appointmentform" exact element={<Appointmentform />}></Route>

                      <Route path="/LeverFollowUp/addfollowup" exact element={<AddLeverFollowUp />}></Route>
                      <Route path="/LeverFollowUp/viewfollowup" exact element={<AllLeverFollowUp />}></Route>
                      <Route path="/LeverFollowUp/searchFollowUp" exact element={<SearchFollowUp />}></Route>
                      <Route path="/LeverFollowUp/followupList" exact element={<ViewLeverFollowUp />}></Route>
                      
                      <Route path="/subAdmin/addSubAdmin" exact element={<AddSubAdmin />}></Route>
                      <Route path="/subAdmin/viewSubAdmin" exact element={<ViewSubAdmin />}></Route>
                      <Route path="/subAdmin/listView" exact element={<SubAdminListview />}></Route>
                      <Route path="/Profile" exact element={<AdminProfile />}></Route>
                      <Route path="/login" exact element={<Login />}></Route>

                      <Route path="/add-lever" exact element={<Addlever />}></Route>
                      <Route path="/add-lever-history" exact element={<AddLeverHistory />}></Route>
                      <Route path="/etiological-work-up" exact element={<EtiologicalWorkup />}></Route>
                      <Route path="/lever-list" exact element={<LeverList />}></Route>
                      <Route path="/search-lever-patient" exact element={<SearchLeverPatient />}></Route>

                      <Route path="/show-lever-patient" exact element={<ShowDetail />}></Route>
                      <Route path="/show-lever-history" exact element={<ShowHistory />}></Route>
                      <Route path="/show-lever-etiological" exact element={<ShowEtiological />}></Route>

                      <Route path="/Add-Disease" exact element={<AddDiseases />}></Route>
                      <Route path="/List-Disease" exact element={<ListDisease />}></Route>


                    </Routes>
              </div>
            </div>
   </>
  );
}

export default AuthorizedRoutes;
