import Section from '../section/Section';
import css from './cta.module.css';

export default function Cta() {
  return (
    <Section>
      <div className={`container ${css.cta}`}>
        <div className='left'>
          <h2 className={css.title}>
            The fastest way from idea to live site. Period.
          </h2>
          <p className={css.text}>
            Flex is a Small SaaS Business. Flex isnt a traditional company.
          </p>
        </div>
        <div className={css.right}>
          {/* <Btn className={css.mr24}>Get started</Btn>
          <Btn secondary>Learn more</Btn> */}
        </div>
      </div>
    </Section>
  );
}
