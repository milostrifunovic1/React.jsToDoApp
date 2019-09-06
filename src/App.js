import React, { useState } from 'react';
import Theme from './components/Theme';
import './components/darkTheme/Dark.css';
import './components/lightTheme/Light.css';

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <Theme
        isOn={value}
        onColor="#fff"
        handleToggle={() => setValue(!value)}
      />
    </div>
  );
}

export default App;
