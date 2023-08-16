import Cta from './components/CTA/Cta';
import Companies from './components/companies/Companies';
import GainMore from './components/gainMore/GainMore';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import './style/reset.css';
import './style/App.css';

export default function App() {
  return (
    <div className='main-container'>
      <NavBar />
      <Hero />
      <Companies />
      <GainMore />
      <Cta />
    </div>
  );
}
