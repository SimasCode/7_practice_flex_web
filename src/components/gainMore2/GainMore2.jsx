import Container from '../UI/container/Container';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/sectionTitle/SectionTitle';
import GainMore2List from '../gainMore/GainMoreList';
// import css from './gainMore2.module.css';

export default function GainMore2() {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill='features'
          title='Gain more insight into how people use your'
          subtitle='With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.'
        />
        <div>
          <GainMore2List />
        </div>
      </Container>
    </Section>
  );
}
