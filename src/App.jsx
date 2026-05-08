import React from 'react'
// Change this in Heo.jsx
import "./App.scss";
import Heo from './pages/Heo';

import Aboutme from './pages/Aboutme';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Certificate from './pages/Certificate';

const App = () => {
  return (
   <main>
<Heo/>
<Aboutme/>
<Skill/>
<Project/>
<Certificate/>
   </main>
  )
}

export default App
