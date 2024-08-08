import React, { Component }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './component/home';

export default class App extends Component {
  render() {
    return(
<Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </Router>
    )
  }
}
