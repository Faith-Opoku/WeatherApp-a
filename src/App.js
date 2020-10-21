import React, { useState } from 'react';
import Login from './app_component/Login';
// import Home from  './app_component/Home';
import Weather from './app_component/Weather';
// import Signup from './app_component/Signup';



function App() {
  

  const [userSignIn, setUserSignIn] = useState('');

  return (
    <div className="App">
      <br></br>
      <br></br>
      {!userSignIn && <Login setUserSignIn={setUserSignIn} />}
      {/* {!userSignIn && <Signup setUserSignIn={setUserSignIn} />} */}
      <div className="main">
      {/* {userSignIn && <Home className="main"/>} */}
      {userSignIn && <Weather />
      }
      </div>
  </div>
  );
}

export default App;

