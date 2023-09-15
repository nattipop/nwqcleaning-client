import { Route, Routes } from 'react-router';
import './App.css';
import Home from './Home';
import Nav from './Nav';
import WhoWeAre from './WhoWeAre';
import WhatToExpect from './WhatToExpect';
import PHC from './PHC';
import Pictures from './Pictures';
import Reviews from './Reviews';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/who-we-are" element={<WhoWeAre/>} />
        <Route path="/what-to-expect" element={<WhatToExpect/>} />
        <Route path="/phc" element={<PHC/>} />
        <Route path="/pictures" element={<Pictures/>} />
        <Route path="/reviews" element={<Reviews/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;