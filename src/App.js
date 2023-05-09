import React from 'react';
import './App.css';
import Profilephoto from './Profile/Profilephoto';
import Fullname from './Profile/Fullname';
import Adress from './Profile/Adress';


function App() {
  return (
    <div className="App">

      <h1 className='welcome'>Hi Gomycode Colleagues</h1>
      <div className='content'>
        <div className='writing' >
          <Fullname/>
          <Adress/>
        </div>
        <Profilephoto/>
      </div>
    </div>
  );
}

export default App;
