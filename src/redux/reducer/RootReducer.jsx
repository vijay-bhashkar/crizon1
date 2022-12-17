import { combineReducers } from "redux";

import { customerReducer } from "./Customer/Customer.reducer";
import { authReducer } from "./auth/auth.reducer";
import { demograficReducer } from "./Demografic/Demografic.reducer";
import { depressionReducer } from "./Depression/Depression.reducer";
import { infectionReducer } from "./Infection/Infection.reducer";
import { treatmentReducer } from "./Treatment/Treatment.reducer";
import { investigationReducer } from "./Investigation/Investigation.reducer";
import { clinicalHistoryReducer } from "./ClinicalHistory/ClinicalHistory.reducer";
import { nutritionReducer } from "./Nutrition/Nutrition.reducer";
import { previousTreatmentReducer } from "./PreviousTreatment/PreviousTreatment.reducer";
import { hodReducer } from "./Hod/Hod.reducer";
import { subAdminReducer } from "./SubAdmin/SubAdmin.reducer";
import { doctorReducer } from "./Doctor/Doctor.reducer";
import { followupReducer } from "./FollowUp/FollowUp.reducer";
import { appointmentReducer } from "./Appointment/Appointment.reducer";

const RootReducer = combineReducers({
  auth: authReducer,
  customer: customerReducer,
  demografic: demograficReducer,
  depression: depressionReducer,
  infection: infectionReducer,
  treatment: treatmentReducer,
  investigation: investigationReducer,
  clinicalHistory: clinicalHistoryReducer,
  nutrition: nutritionReducer,
  previoustreatment: previousTreatmentReducer,
  hod : hodReducer,
  subAdmin : subAdminReducer,
  doctor : doctorReducer,
  followup : followupReducer,
  appointment : appointmentReducer,
});

export default RootReducer;
