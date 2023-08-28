import React, { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom";
import { Http } from "../Http";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


export const Login = ()=>{
    const [show , setshow] = useState(true)
    const [logindata, setlogindata] = useState({})
    const [registerdata, setRegisterdata] = useState({})
    const navigate = useNavigate()

    const handlegoto = ()=>{
        show ? setshow(false): setshow(true)
    }

    const handlelogindata = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setlogindata(logindata=>({...logindata, [name]: value}))

    }

    const handleLoginUser = (e)=>{
        e.preventDefault();
        console.log("done user login", logindata)
       

        Http.post("/api/user/login",{
            email: logindata.email,
            password : logindata.password

        }).then((res)=>{
            localStorage.setItem("Token", res.data.accessToken)
            navigate("/home")
            

        }).catch((err)=>{
            alert(err.response.data.message)
           
          

        })
    }






    const handleRegisterdata = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setRegisterdata(registerdata=>({...registerdata, [name]: value}))

    }

    const handleRegisterUser = (e)=>{
        e.preventDefault();
        console.log("done user register", registerdata)

        Http.post("/api/user/register",{
            name:registerdata.name,
            email: registerdata.email,
            password : registerdata.password

        }).then((res)=>{
            setshow(true)
            

        }).catch((err)=>{
            alert(err.response.data.message)
           
          

        })

    }



    return(
        <>
        {
            show ? (
                <>
                <form className="Loginform" onSubmit={handleLoginUser}>
                    <label>Login Form</label>
                    <input placeholder="Arjun"  name="email" value={logindata.email}  onChange={handlelogindata}/>
                    <input placeholder="password" name="password" value={logindata.password}  onChange={handlelogindata}/>
                    <button>Login</button>
                    <button onClick={handlegoto}>Click to register</button>
                </form>
                </>
            ):(
                <>
                <form className="Loginform" onSubmit={handleRegisterUser}>
                    <label>Register Form</label>
                    <input placeholder="Arjun" name="name" value={registerdata.name}  onChange={handleRegisterdata}/>
                    <input placeholder="arjun@gmail.com" name="email" value={registerdata.email}  onChange={handleRegisterdata}/>
                    <input placeholder="Password" name="password" value={registerdata.password}  onChange={handleRegisterdata}/>
                    <button>Register</button>
                    <button onClick={handlegoto}>Click to login</button>
                </form>
                
                
                </>
            )
        }
        
        
        </>
    )
}