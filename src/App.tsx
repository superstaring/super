import React from 'react';
import './App.css';
import PointContent from './components/PointContent';
import PointContainer from './components/UsePointHook';

const App: React.FC = () => {
  return (
    <PointContainer.Provider>
    <div className="App">
     <PointContent />
    </div>
    </PointContainer.Provider>
  );
}

export default App;
