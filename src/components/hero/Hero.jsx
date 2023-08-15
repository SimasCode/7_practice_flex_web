import { useState } from 'react';
import Section from '../UI/section/Section';

export default function Hero() {
  const [emailValue, setEmailValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  function emailInput(event) {
    setEmailValue(event.target.value);
    console.log('event.target.value ===', event.target.value);
    setErrorMessage('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (emailValue.trim() === '') {
      setErrorMessage('Email is required');
      return;
    }
    setFormSuccess(true);
  }
  return (
    <Section>
      <div className='hero-container'>
        <img
          className='hero-image'
          src='/images/hero-background.png'
          alt='hero-background'
        />
        <div className='hero-text-container'>
          <h1 className='hero-title'>
            A small business is only as good as its tools.{' '}
          </h1>
          <p className='hero-subtitle'>
            We’re different. Flex is the only saas business platform that lets
            you run your business on one platform, seamlessly across all digital
            channels.
          </p>
          {errorMessage !== '' && (
            <p className='hero-subtitle'>{errorMessage}</p>
          )}
          {!formSuccess && (
            <div>
              <form onSubmit={handleSubmit} className='hero-input-container'>
                <input
                  onChange={emailInput}
                  className='hero-input'
                  type='text'
                  placeholder='Enter your work email'
                />
                <button type='submit' className='hero-btn'>
                  Get early access
                </button>
              </form>
              <p className='hero-trial'>
                Start your free 14-day trial today, no credit card required.
              </p>
            </div>
          )}

          {formSuccess && (
            <div className='success'>
              <h2 className='hero-subtitle'>You have logged in succesfuly</h2>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
