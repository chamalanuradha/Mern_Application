import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './component/navbar';
import HomeComponent from './component/home';
import CreatepostComponent from './component/createpost';
import UpdatepostComponent from './component/updatepost';
import PostDetailsComponent from './component/postdetails';

// import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/createpost" element={<CreatepostComponent />} />
          <Route path="/updatepost/:id" element={<UpdatepostComponent />} />
          <Route path="/postdetails/:id" element={<PostDetailsComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
