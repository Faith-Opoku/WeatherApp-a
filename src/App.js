import React, { useState } from 'react';
import './App.css';
import "weather-icons/css/weather-icons.css";

import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from './app_component/weather.component';

   function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleEmailInput(event) {
    setEmail(event.target.value)
  
  }

  function handlePasswordInput(event) {
    setPassword(event.target.value)
  }

  function handleLogin(event) {
    event.preventDefault();
  }
     return (
       <div className="App">
         <form>
           <label>Email</label>
           <input type="email" value={email} onChange={handleEmailInput} />

           <label>Password</label>
           <input type="password" value={password} onChange={handlePasswordInput} />

           <button onclick={handleLogin}>Login</button>
         </form>
        <Weather />
        <main>
          <div className="search-box display-0">
            <input type="text" className="search-bar"
            placeholder="Search.....">

              

            </input>
          </div>
        </main>

   
    </div>





  );
}

export default App;