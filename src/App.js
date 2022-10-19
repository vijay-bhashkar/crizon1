import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/Style.css"
import Login from "./components/Login";
import DefaultLayout from "./components/Layout/Index.jsx";
import Appointment from "./components/Appointment/Appointment.jsx";
import { Departments } from "./components/Departments.jsx";
import { Hod } from "./components/Hod.jsx";
import { Patientupcoming } from "./components/Patientupcoming.jsx";
import { Medicalreport } from "./components/Medicalreport.jsx";
import { Adduser } from "./components/Adduser.jsx";
import { ListView } from "./components/ListView.jsx";
import { Adddemographics } from "./components/Adddemographics.jsx";
import { Clinicalhistory } from "./components/Clinicalhistory.jsx";
import { Previoustreatment } from "./components/Previoustreatment.jsx";
import { Nutritionalhistory } from "./components/Nutritionalhistory.jsx";
import { Investigations } from "./components/Investigations.jsx";
import { Treatment } from "./components/Treatment.jsx";
import { Infections } from "./components/Infections.jsx";
import { Depression } from "./components/Depression.jsx";
import { Addpatientdepression } from "./components/Addpatientdepression.jsx";
import { Addfollowup } from "./components/Addfollowup.jsx";
import { Homegraph } from "./components/Homegraph.jsx";
import { Appointmentform } from "./components/Appointmentform.jsx";
function App() {
  return (
    <BrowserRouter>
        {/* <Routes>
         <Route path="/" exact element={<Login />}></Route>
        </Routes> */}
      <DefaultLayout >
      <Routes>
        <Route path="/" exact element={<Appointment />}></Route>
        <Route path="/department" exact element={<Departments />}></Route>
        <Route path="/Hod" exact element={<Hod />}></Route>
        <Route path="/Patientupcoming" exact element={<Patientupcoming />}></Route>
        <Route path="/Medicalreport" exact element={<Medicalreport />}></Route>
        <Route path="/adduser" exact element={<Adduser />}></Route>
        <Route path="/listview" exact element={<ListView />}></Route>
        <Route path="/adddemographics" exact element={<Adddemographics />}></Route>
        <Route path="/clinicalhistory" exact element={<Clinicalhistory />}></Route>
        <Route path="/previoustreatment" exact element={<Previoustreatment />}></Route>
        <Route path="/nutritionalhistory" exact element={<Nutritionalhistory />}></Route>
        <Route path="/investigations" exact element={<Investigations />}></Route>
        <Route path="/treatment" exact element={<Treatment />}></Route>
        <Route path="/infections" exact element={<Infections />}></Route>
        <Route path="/depression" exact element={<Depression />}></Route>
        <Route path="/addpatientdepression" exact element={<Addpatientdepression />}></Route>
        <Route path="/addfollowup" exact element={<Addfollowup />}></Route>
        <Route path="/homegraph" exact element={<Homegraph />}></Route>
        <Route path="/appointmentform" exact element={<Appointmentform />}></Route>
      </Routes>
      </DefaultLayout>
    </BrowserRouter>
  );
}

export default App;
