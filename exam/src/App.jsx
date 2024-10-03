import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppartementsList from './components/AppartementsList';
import AppartementDetail from './components/AppartementDetail';

function App() {
  return (
     <div> <Route path="/" element={<AppartementsList />} />
     <Route path="/appartement/:id" element={<AppartementDetail />} />
     </div>
       
  );
}

export default App;