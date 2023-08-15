import Section from '../UI/section/Section';
export default function Hero() {
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
          <div className='hero-input-container'>
            <input
              className='hero-input'
              type='text'
              placeholder='Enter your work email'
            />
            <button className='hero-btn'>Get early access</button>
          </div>
          <p className='hero-trial'>
            Start your free 14-day trial today, no credit card required.
          </p>
        </div>
      </div>
    </Section>
  );
}
