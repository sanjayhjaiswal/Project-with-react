import React, {useState,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import Registrationheader from './Registrationheader';

function RegistrationFormTest() {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const history = useNavigate();
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "firstName"){
            setFirstName(value);
        }
        if(id === "lastName"){
            setLastName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    const firstName1 = useRef(null);
    const lastName1 = useRef(null);
    const email1 = useRef(null);
    const password1 = useRef(null);
    const confirmPassword1 = useRef(null);

    const handleSubmit  = (e) => {
        console.log(firstName,lastName,email,password,confirmPassword);
        if(firstName===null)
        {
            alert("Please Enter First name"); 
            firstName1.current.focus();   
            return;
        }

        if(lastName===null)
        {
            alert("Please Enter Last name"); 
            lastName1.current.focus();   
            return;
        }

        if(email===null)
        {
            alert("Please Enter Email"); 
            email1.current.focus();   
            return;
        }

        if (!isValidEmail(email)) 
        {
            alert('Email is invalid');
            email1.current.focus(); 
            return;
        }             

        if(password===null)
        {
            alert("Please Enter Password"); 
            password1.current.focus();   
            return;
        }        

        if(confirmPassword===null)
        {
            alert("Please Enter Confirm Password"); 
            confirmPassword1.current.focus();   
            return;
        }

        if(password!=confirmPassword)
        {
            alert("Password & Confirm Password Not match"); 
            confirmPassword1.current.focus();   
            return;
        }
        
        history("/Response", { state: { firstName: firstName, lastName:lastName, email:email }})
    }
    return(    
        <div className="form">
        <div className="form-body">
            <Registrationheader/>
            <div className="username">
                <label className="form__label" for="firstName">First Name </label>
                <input className="form__input" ref={firstName1} type="text" value={firstName} onChange = {(e) => handleInputChange(e)} id="firstName" placeholder="First Name"/>
            </div>
            <div className="lastname">
                <label className="form__label" for="lastName">Last Name </label>
                <input  type="text" name="lastName" ref={lastName1} id="lastName" value={lastName}  className="form__input" onChange = {(e) => handleInputChange(e)} placeholder="LastName"/>
            </div>
            <div className="email">
                <label className="form__label" for="email">Email </label>
                <input  type="email" ref={email1} id="email" className="form__input" value={email} onChange = {(e) => handleInputChange(e)} placeholder="Email"/>
            </div>
            <div className="password">
                <label className="form__label" for="password">Password </label>
                <input className="form__input" ref={password1} type="password"  id="password" value={password} onChange = {(e) => handleInputChange(e)} placeholder="Password"/>
            </div>
            <div className="confirm-password">
                <label className="form__label" for="confirmPassword">Confirm Password </label>
                <input className="form__input" ref={confirmPassword1} type="password" id="confirmPassword" value={confirmPassword} onChange = {(e) => handleInputChange(e)} placeholder="Confirm Password"/>
            </div>
        </div>
        <div class="footer">
            <button onClick={()=>handleSubmit()} type="submit" class="btn">Register</button>
        </div>
    </div>   
    )       
}
export default RegistrationFormTest;