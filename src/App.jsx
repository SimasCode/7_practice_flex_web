import Companies from './components/companies/Companies';
import GainMore from './components/gainMore/GainMore';
import NavBar from './components/navbar/NavBar';
import './style/App.css';
import './style/reset.css';

export default function App() {
  return (
    <div className='main-container'>
      <NavBar />
      <Companies />
      <GainMore />
    </div>
  );
}
