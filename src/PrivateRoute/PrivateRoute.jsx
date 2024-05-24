/* eslint-disable react/no-deprecated */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    if(loader){
        return    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100px' }}>
        <div style={{ width: '20px', height: '40px', backgroundColor: '#007bff', margin: '0 2px', animation: 'line-wave 1.5s infinite ease-in-out', animationDelay: '0s' }}></div>
        <div style={{ width: '20px', height: '60px', backgroundColor: 'tomato', margin: '0 2px', animation: 'line-wave 1.5s infinite ease-in-out', animationDelay: '0.2s' }}></div>
        <div style={{ width: '20px', height: '80px', backgroundColor: 'orange', margin: '0 2px', animation: 'line-wave 1.5s infinite ease-in-out', animationDelay: '0.4s' }}></div>
        <div style={{ width: '20px', height: '60px', backgroundColor: 'green', margin: '0 2px', animation: 'line-wave 1.5s infinite ease-in-out', animationDelay: '0.6s' }}></div>
        <div style={{ width: '20px', height: '40px', backgroundColor: 'yellow', margin: '0 2px', animation: 'line-wave 1.5s infinite ease-in-out', animationDelay: '0.8s' }}></div>
      </div>
    }
    if(user){
        return children 
    }
   return <Navigate state={location?.pathname} to={'/login'}/>
};

export default PrivateRoute;