import React, { useState } from "react";
// import { images } from "../Images/Images";
import CustomButton from "../Utility/Button";
import { DashboardBox } from "../Utility/DashboardBox";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/auth/auth.actions";
import { Link } from "react-router-dom";

function Login({ Unauth }) {
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");

  const [passwordIcon, setpasswordIcon] = useState("ion-eye");
  const dispatch = useDispatch();
  const passwordClick = () => {
    if (password === "password") {
      setpassword("text");
      setpasswordIcon("ion-eye-disabled");
    } else {
      setpassword("password");
      setpasswordIcon("ion-eye");
    }
  };
  const handleSubmit = () => {
    let obj = {
      email,
      password,
    };
    dispatch(loginUser(obj));
  };
  return (
    <main className="w-100">
      <section className={Unauth ? "product-category d-flex align-items-center" : "product-category"} style={{ minHeight: "85vh" }}>
        <div className="container-fluid p-0">
          {Unauth && (
            <div className="text-center col-lg-4 mx-auto mb-4">
              <div className="main-logo mx-auto mb-4">
              </div>
              <h5>Welcome back,</h5>
              <h5>Please login to your account</h5>
            </div>
          )}
          <DashboardBox className={Unauth ? "col-lg-4 mx-auto" : "col-lg-8"}>
            {!Unauth && <h5 className="blue-1 mb-4">Login To Your Account</h5>}
            <form className="form row">
              <div className="col-12 mb-3">
                <label>Enter Email </label>
                <div className="form-input">
                  <input className="form-control" name="name" value={email} onChange={(event) => setEmail(event.target.value)} type="text" />
                </div>
              </div>
              <div className="col-12 mb-3">
                <label>Password</label>
                <div className="form-input password-input">
                  <input className="form-control" name="email" value={password} type={password} onChange={(event) => setpassword(event.target.value)} />
                  <i className={passwordIcon} onClick={passwordClick}></i>
                </div>
              </div>
              <div className={Unauth ? "col-12 mt-2 text-center" : "col-12 mt-2"}>
                <CustomButton isBtn btntype="button" ClickEvent={handleSubmit} btnName="Submit" />
              </div>
            </form>
          </DashboardBox>
        </div>
      </section>
    </main>
  );
}

export default Login;















