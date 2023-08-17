import Container from '../UI/container/Container';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/sectionTitle/SectionTitle';
import css from './believe.module.css';

export default function Believe() {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill='number'
          title='We believe in the power of data'
          subtitle=' Flex is the only business platform that lets you run your business on one platform, seamlessly across all digital channels.'
        />
        <div className={css.flex}>
          <div>
            <h2 className={css.title}>235.000</h2>
            <p className={css.text}>Projects completed</p>
          </div>
          <div>
            <h2 className={css.title}>$10m</h2>
            <p className={css.text}>APR</p>
          </div>
          <div>
            <h2 className={css.title}>+50.000</h2>
            <p className={css.text}>APHours Saved Annually</p>
          </div>
          <div>
            <h2 className={css.title}>3.500</h2>
            <p className={css.text}>Unique Users</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
