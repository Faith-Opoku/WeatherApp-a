import React, { useState } from 'react';

function Signup () {

    const [fullname, setFullName] = useState('');
    const [dateofbirth, setDateofbirth] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');



    return (
       <div>

<div className="card-body signup-page">
                <h3>Sign Up </h3>
            <form>
                <div className="form-group">
                    <label for="exampleInputfullname1">Full Name</label>
                    <input type="text" className="form-control" id="exampleInputfullname1" aria-describedby="fullnameHelp" value={fullname} 
                    />
                </div>

                <div className="form-group">
                    <label for="exampleInputDateofbirth1">Date of Birth</label>
                    <input type="date" className="form-control" id="exampleInputdateofbirth1" value={dateofbirth} 
                    />   
                </div>

                
                <div className="form-group">
                    <label for="exampleInputEmail">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" value={email} 
                     />
                </div>

                
                <div className="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={password} 
                     />
                </div>

                 
                <div className="form-group">
                    <label for="exampleInputPassword1">Confirm Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" value={confirmpassword} 
                      />
                </div>


                <button type="submit" className="btn btn-secondary btn-block">Sign Up</button>
            
                <p className="mt-3">
                    Already have an account? <a href="https://google.com">
                    Login here</a>
                </p>
            </form>

            </div>
          

        </div>
    );
}

export default Signup;
