import React,{ useState } from 'react';
import login from "./Login.json";
import Weather from "./Weather";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setlogin] = useState(false);
  
    function handleEmailInput(event) {
      setEmail(event.target.value)
      console.log(email)
    }
  
    function handlePasswordInput(event) {
      setPassword(event.target.value)
    }
  
    function handleLogin(event) {
        if (email=== login.email && password=== login.password) {
        setlogin(true);
        event.preventDefault();

      
        }

        
      
        

        
    }

    return (
    

      
      
      <form>
      
        
        
        
        <div className= "card-body login-page">
          
        
          
        <h2>Sign In</h2>
  <div class="card">
    
    <label for="exampleInputEmail1">Email address</label>
    <input type ={"email"} class="form-control" id={"exampleInputEmail1"} aria-describedby="emailHelp" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  
  <div class="card">
    <label for="exampleInputPassword1">Password</label>
    <input type={"password"} class="form-control" id={"exampleInputPassword1"} />
    <p class= "forgot-pass">Don't have an account? Sign up?</p>

    
  </div>
  
  <button type={"login"} class="btn btn-primary">Login</button>


   </div>
    </form>








      

    );
}

export default Login;