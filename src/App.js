




import React, { useState } from 'react';
import FieldTemplateSearch from './Components/Left';
import Rightform from './Components/Right/Right';
import NavBar from './Components/Nav/Nav';

function App() {

  return (
    
      <div>
        <div style={{ display: 'flex', height: '490px', marginTop: '5%' }}>
          <div style={{ position: 'fixed', width: '50%' }}>
            <FieldTemplateSearch />
          </div>
          <div style={{ marginLeft: '50%', width: '100%', overflow: 'scroll' }}>
            <Rightform />
          </div>
        </div>
        <NavBar/>
      </div>
 
  );
}

export default App;


