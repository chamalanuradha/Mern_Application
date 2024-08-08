import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeComponent from './component/home';
import CreatepostComponent from './component/createpost';
import UpdatepostComponent from './component/updatepost';
import PostDetailsComponent from './component/postdetails';

// import './App.css';
export default class App extends Component {
  render() {
    return(
<Router>
      <div>
        <Routes>
          <Route path="/" exact element={<HomeComponent />} />
          <Route path="/createpost"  element={<CreatepostComponent />}/>
          <Route path="/updatepost/:id"  element={<UpdatepostComponent />}/>
          <Route path= "/postdetails/:id" element={<PostDetailsComponent />}/>

        </Routes>
      </div>
    </Router>
    )
  }
}
