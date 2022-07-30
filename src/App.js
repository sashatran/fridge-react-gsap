import './styles/App.scss';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Produce from './components/Produce';
import { useEffect } from 'react';
//router

function App() {

  useEffect(() => {
    const handleScroll = () => {
    let header = document.querySelector('.header');
      const scroll = document.documentElement.scrollTop; 
      if(scroll === 0) {
        header.style.boxShadow = "";
      } else {
        header.style.boxShadow = "1px 1px 1px #777";
      }
    }
      window.addEventListener('scroll', handleScroll); 
    return () => {
      window.removeEventListener('scroll', handleScroll); 
    }
  })

  return (
    <div className="App">
      <Header /> 
      <Hero />
      <About />
      <Produce />
      <p className="footer">
      Illustration by <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a> from <a href="https://icons8.com/illustrations">Ouch!</a>
      </p>
    </div>
  );
}

export default App;
