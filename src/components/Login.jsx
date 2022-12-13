import React from 'react';
import { AiOutlineEyeInvisible } from "react-icons/ai";
import doctor from '../assets/images/doctor.png'
import { Link } from "react-router-dom";
function LoginForm() {
    return ( 
    <>
    <div className='loginbody'>
        <div className='container-fluid'>
            <div className='row justify-content-center'>
                <div className='col-lg-10'>
                    <div className='row g-0 '>
                        <div className='col-lg-6 text-end'>
                            <img src={doctor} alt="" className='img-fluid' />
                        </div>
                        <div className='col-lg-6 bg-white boxkogn'>
                            <div className='logion-boxfrm addlist-frm'>
                                <h3>Sign In</h3>
                                <div className='from-group'>
                                    <label>Email</label>
                                    <input type="text" className='form-control'/>
                                </div>
                                <div className='from-group'>
                                <label>Password</label>
                                <div className="form-group has-search">
                                    <span className="form-control-feedback"> <AiOutlineEyeInvisible /></span>
                                    <input type="text" className="form-control" />
                                </div>
                                </div>
                                <p><Link to="/">Forgot Password?</Link></p>
                                <div className='text-center'><button className='btnginin'> SIGN IN </button></div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div> 
        </div>
    </div>
    
    </>
    );
}

export default LoginForm;