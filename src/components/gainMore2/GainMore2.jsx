import Section from '../UI/section/Section';
import SectionTitle from '../UI/sectionTitle/SectionTitle';
import GainMore2List from './GainMore2List';
import Container from '../UI/container/Container';
import css from './gainMore2.module.css';

export default function GainMore2() {
  return (
    <Section>
      <Container className={css.margin}>
        <SectionTitle
          className={css.text}
          pill='features'
          title='Gain more insight into how people use your'
          subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
        />

        <div className={css.grid}>
          <GainMore2List />
          <img src='/images/gainMore2.jpg' alt='section-image' />
        </div>
      </Container>
    </Section>
  );
}
