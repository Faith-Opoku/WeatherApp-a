import React, { useState } from 'react';

function Login ({ setUserSignIn}) {

    const [username, setUsername] = useState ('');
    const [password, setPassword] = useState ('');
    
    function handleUsername (event) {
        setUsername (event.target.value)
    }

    function handlePassword (event) {
        setPassword (event.target.value)
    }

    function handleSignIn (event) {
        event.preventDefault();

    if (username === 'Faith Opoku' && password === '45678' ) {
        setUserSignIn(true)
    
    }

}


    return (
        <div>
           <div className="card-body login-page">
                <h3>Login </h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputusername1">Username</label>
                    <input type="text" className="form-control" id="exampleInputusername1" aria-describedby="usernameHelp" 
                    value={username} onChange= {handleUsername} />
                </div>

                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                    value={password} onChange={handlePassword} />
            
                </div>
                <button onClick={handleSignIn} className="btn btn-secondary btn-block">Sign In</button>
            
                <p className="mt-3">
                    Don't have an account? <a href="https://google.com">
                    Sign up here</a>
                </p>
            </form>

            </div>
          
        </div>
    );
}

export default Login;

