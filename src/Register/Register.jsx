import React from 'react';

const Register = ({ LoginPage,setName,setPassword, setConfirmPassword,createAccount, userName,userPassword,confirmPassword,message}) =>{
    return(
        <div className="register-page">
            <div className="register-Container">
                <input onChange={e=>setName(e.target.value)} value={userName} className="username" placeholder="please set your user name"></input>
                <input onChange={e=>setPassword(e.target.value)} value={userPassword} className="password" type="password" placeholder="please set your password"></input>
                <input onChange={e=>setConfirmedPassword(e.target.value)} value={userComfirmedPassword} className="comfirmedPassword" type="password" placeholder="please comfirm password"></input>
                <button onClick={()=>createAccount(userName,userPassword,userComfirmedPassword)}>Create Account</button>
                <p className="hint">Already registered?<a onClick={ () => LoginPage()} href="#Sign In"> Sign In</a></p>
			<p className="message">{message}</p>
            </div>
        </div>
    )
}

export default Register;