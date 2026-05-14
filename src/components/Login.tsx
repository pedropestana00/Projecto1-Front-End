import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
// @ts-ignore: no declaration file for firebase config
import { auth } from '../config/firebase';
import { useState } from 'react';

// import { App } from '../App';
import { useNavigate } from 'react-router-dom';
function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin=async(e:React.FormEvent)=>{
        e.preventDefault();

        try{
            await signInWithEmailAndPassword(auth, email, password );
            console.log("User Logged In Sucssufuly");
            navigate("/content");
        }
        catch (error){
            console.log("Error logging in:", error);
        }
    }
  return (

    <div className= 'login-wrapper'>
        <div className="login-card">
            <h2 className="mb-4">Welcome</h2>
            <form onSubmit={handleLogin} className="d-flex flex-column gap-3">
                <div className="text-start">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        onChange={(event)=>{setEmail(event.target.value)}} 
                        value={email}   
                        placeholder="Email:exemplo@domain.com"
                    />
                </div>
                <div className="text-start">
                    <label className="form-label">Password</label>  
                    <input 
                        type="password" 
                        onChange={(event)=>{setPassword(event.target.value)}} 
                        value={password}  
                        placeholder="your password" 
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-3 py-2">
                    Loggin
                </button> 
            </form>
        </div>
    </div>
  )
}

export default Login;
