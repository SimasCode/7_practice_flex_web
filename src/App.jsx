import Cta from './components/CTA/Cta';
import Companies from './components/companies/Companies';
import GainMore from './components/gainMore/GainMore';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import './style/reset.css';
import './style/App.css';
import GainMore2 from './components/gainMore2/GainMore2';

export default function App() {
  return (
    <div className='main-container'>
      <NavBar />
      <Hero />
      <Companies />
      <GainMore />
      <Cta />
      <GainMore2 />
    </div>
  );
}
