import React from 'react';
import Sidebar from './components/sidebar.js';
import About from './components/about.js';
import Timeline from './components/timeline.js';
import Projects from './components/projects.js';

const App = () => {
  return (
    <div id='colorlib-page'>
      <div id='container-wrap'>
        <Sidebar></Sidebar>
        <div id='colorlib-main'>
          <About></About>
          <Projects></Projects>
          <Timeline></Timeline>
        </div>
      </div>
    </div>
  );
};
export default App;
