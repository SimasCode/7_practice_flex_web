import Companies from './components/companies/Companies';
import GainMore from './components/gainMore/GainMore';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import './style/App.css';
import './style/reset.css';

export default function App() {
  return (
    <div className='main-container'>
      <NavBar />
      <Hero />
      <Companies />
      <GainMore />
    </div>
  );
}
