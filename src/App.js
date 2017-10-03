import React, { Component } from 'react';
import Hero from './components/hero.js'
import Projects from './components/projects.js'
import ProjectHeader from './components/project-header.js'
import ProjectFooter from './components/project-footer.js'
import Footer from './components/footer.js'
import Quote from './components/quote.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Quote />
        <ProjectHeader />
        <Projects />
        <ProjectFooter />
        <Footer />
      </div>
    );
  }
}

export default App;
