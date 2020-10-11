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
    
<div>

    {loggedIn === true ? (<div><Weather /></div>) :(<div><form>
           <label>Email</label>
           <input type="email" value={email} onChange={handleEmailInput} />

           <label>Password</label>
           <input type="password" value={password} onChange={handlePasswordInput} />

           <button onClick={handleLogin}>Login</button>
         </form></div>)}

</div>
    )
}

export default Login;