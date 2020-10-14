import React from 'react';

function Register(props) {
    return (
        <div>
           <form className="login-form">
               <span className = "login-signup-header">Registration</span>
               <div className= "field">
                   <input type = "email" placeholder = "Email" required />
                   </div>
                   <div className="field">
                   <input type = "password" placeholder = "Password" required />
                   </div>
                   <div className="field">
                   <input type = "password" placeholder = "Confirm password" required />
                   </div>
                   <div className="field">
                       <button>Log In</button>
                   </div>

               </form> 
        </div>
    );
}

export default Register;