import { Link, Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts.js";
import Examples from "./components/Examples/Examples.js";
import Home from "./components/Home/Home.js";

import React from 'react'

const App = () => {
  return (
    <div>
      adsfadfa
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Haqqında</Link>
          </li>
          <li>
            <Link to="/contacts">Əlaqə məlumatları</Link>
          </li>
          <li>
            <Link to="/examples">İş nümunələri</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contacts" element={<Contacts/>}/>
          <Route path="examples" element={<Examples/>}/>
        </Routes>
    </div>
  );
}

export default App
