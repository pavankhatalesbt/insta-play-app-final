import React,{useEffect,useState} from 'react'
import { useNavigate } from "react-router-dom";
import Loginform from '../../Component/LoginForm/Loginform'

const Loginpagee = () => {
    const navigate = useNavigate('')

      useEffect(() => {
        localStorage.removeItem("token")
        navigate("/")
        }, [])
    
  return (
    <div>
        <Loginform/>
    </div>
  )
}

export default Loginpagee