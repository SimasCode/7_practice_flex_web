import Section from '../UI/section/Section';
export default function Companies() {
  return (
    <Section>
      <div className='companies-container'>
        <h3 className='companies-title'>
          Join 4,000+ companies already growing
        </h3>
        <div className='companies-image-container'>
          <img src='/images/companies_logo/Logo1.svg' alt='company-logo' />
          <img src='/images/companies_logo/Logo2.svg' alt='company-logo' />
          <img src='/images/companies_logo/Logo3.svg' alt='company-logo' />
          <img src='/images/companies_logo/Logo4.svg' alt='company-logo' />
        </div>
      </div>
    </Section>
  );
}
