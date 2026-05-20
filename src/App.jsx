import React from 'react'
// Change this in Heo.jsx
import "./App.scss";
import Heo from './pages/Heo';

import Aboutme from './pages/Aboutme';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Certificate from './pages/Certificate';
import Contact from './pages/Contact';

const App = () => {
  return (
   <main>
<Heo/>
<Aboutme/>
<Skill/>
<Project/>
<Certificate/>
<Contact/>
   </main>
  )
}

export default App
