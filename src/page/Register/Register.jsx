/* eslint-disable no-unused-vars */
import {  useContext, useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';


const Register = () => {

    const  {register} = useContext(AuthContext)

    const [show,setShow] = useState(false)


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.photo.value;
    const password = form.password.value;
    // console.log(name,email,password,image)
    // Password verification
    if(password.length < 6){
      alert('Password must be 6 character or longer')
      return
    }
    else if(! /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      alert('Password must contain at least one uppercase letter, one lowercase letter');
      return;
    }

  
    register(email, password)
      .then(result => {
        Swal.fire("Create User Successfully");
        console.log(result.user);
        form.reset()
      })
      .catch(error => {
        console.log(error);
        alert(error.message);
      });
  };

    return (
        <div className="content hero">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-black">Register now!</h1>
          </div>
          <div className="content card shrink-0 w-full lg:w-[520px] shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body lg:w-[520px]">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input name="email" type="email" placeholder="Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Photo URL</span>
                </label>
                <input name="photo" type="url" placeholder="Photo URL" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input name="password" type={show ? 'text':"password"} placeholder="Password" className="input input-bordered" required />
                <span onClick={() => setShow(!show)} className="absolute mt-12 ml-[200px] lg:ml-[420px]  text-2xl">
                    {show ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info font-bold">Register</button>
              </div>
              <p>Already have an account? <Link to={'/login'} className="text-green-500 font-bold mt-2">Login</Link></p>
  
            </form>
          </div>
        </div>
      </div>
    );
};

export default Register;

