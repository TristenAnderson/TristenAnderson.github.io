import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Work from './components/Work';
import Contact from './components/Contact';
import Resume from './components/Resume.pdf';

function App() {
  return (
    <main>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/About'component={Home} />
        <Route exact path='/Projects'component={Projects} />
        <Route exact path='/Work' component={Work} />
        <Route exact path='/Resume' component={Resume} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
    </main>
  );
}

export default App;
