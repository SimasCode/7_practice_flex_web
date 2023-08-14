export default function NavBar() {
  return (
    <div className='nav-container'>
      <a href='#'>
        <img src='/images/Logo.png' alt='logo' />
      </a>
      <div className='nav-text-container'>
        <a className='nav-text' href='#'>
          Product
        </a>
        <a className='nav-text' href='#'>
          Features
        </a>
        <a className='nav-text' href='#'>
          Pricing
        </a>
        <a className='nav-text' href='#'>
          Product
        </a>
      </div>
      <div className='nav-login-container'>
        <a className='nav-text' href='#'>
          Log In
        </a>
        <a className='nav-btn' href='#'>
          Sign Up
        </a>
      </div>
    </div>
  );
}
