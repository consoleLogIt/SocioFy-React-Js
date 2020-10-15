import React, { Component } from 'react';

class Login extends Component {
    constructor(props){
        super(props);
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();
        this.state = {
            email:'',
            password:''
        }
    }
    handleFormSubmit = () => {
        // console.log("this.emailRef",this.emailInputRef);
        // console.log("this.passRef",this.passwordInputRef);
        console.log(this.state);

    }
    handleEmailChange = (e) => {
        this.setState({
            email:e.target.value
        })
    }
    handlePasswordChange = (e) => {
        this.setState({
            password:e.target.value
        })
    }
    render() {
        return (
            <div>
                    <form className="login-form">
               <span className = "login-signup-header">Log In</span>
               <div className= "field">
                   <input type = "email" placeholder = "Email" required onChange = {this.handleEmailChange}/>
                   </div>
                   <div className="field">
                   <input type = "password" placeholder = "Password" required onChange = {this.handlePasswordChange} />
                   </div>
                   <div className="field">
                       <button onClick = {this.handleFormSubmit}>Log In</button>
                   </div>

               </form>   
            </div>
        );
    }
}

export default Login;