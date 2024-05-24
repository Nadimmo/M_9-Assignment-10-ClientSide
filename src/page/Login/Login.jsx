/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from 'sweetalert2';

const Login = () => {

    const [show, setShow] = useState(false);
    const {login,loginWithGoogle, loginWithGithub} = useContext(AuthContext)

    const location = useLocation()
    const navigate = useNavigate()
    console.log(location)

    const handlerLogin = (e)=>{
      e.preventDefault()
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      console.log(email,password)
      login(email,password)
      .then(result=>{
        console.log(result.user)
        Swal.fire("User Login Successfully");
        navigate(location?.state ? location?.state:"/")
      })
      .catch(error =>{
        console.log(error)
        alert(error.message)
      })
    }

    const handlergoolge = (e)=>{
        e.preventDefault()
        loginWithGoogle()
        .then((result)=>{
          Swal.fire(" User Login Successfully");
          navigate(location?.state ? location?.state:"/")
          console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    const handlergithub = (e)=>{
        e.preventDefault()
        loginWithGithub()
        .then((result)=>{
          Swal.fire(" User Login Successfully");
          navigate(location?.state ? location?.state:"/")
          console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="content hero  ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-black">Login now!</h1>
            
          </div>
          <div className="card shrink-0 w-full lg:w-[520px] shadow-2xl bg-base-100 content">
            <form onSubmit={handlerLogin} className="card-body lg:w-[520px]">
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input name="password" type={show ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                <span onClick={() => setShow(!show)} className="absolute mt-12 ml-[200px] lg:ml-[420px]  text-2xl">
                  {show ? <FaEyeSlash /> : <FaRegEye />}
                </span>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info font-bold">Login</button>
              </div>
              <div>
                <div>
                    <div className="flex mt-4">
                        <hr className="w-[49%]" />or <hr className="w-[49%]" />
                    </div>
   
                    <div className="mt-4 grid grid-cols-1">
                        <a onClick={handlergoolge} className="btn lg:text-xl text-black t" href=""><FcGoogle className="text-4xl"/> Login with Google</a>
                        <a onClick={handlergithub} className="btn text-black lg:text-xl  mt-6 " href=""><FaGithub className="text-4xl"></FaGithub> Login with Github</a>
                    </div>
                </div>
              </div>
              <p>Don't hav account? <Link to={'/register'} className="text-green-500 font-bold mt-3">Register</Link></p>
              
            </form>
          </div>
        </div>
              </div>
    );
};

export default Login;