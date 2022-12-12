import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Footer from "../components/Layout/Footer";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

export default function UnauthorizedRoutes() {
  return (
    <section className="body_bg">
      <div className="row">
        <div
          className="col-12"
          style={{
            height: "100vh",
            overflow: "hidden scroll",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Routes>
            <Route exact path="/" element={<Login Unauth />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </section>
  );
}
