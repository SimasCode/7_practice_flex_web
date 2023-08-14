import Container from '../UI/container/Container';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/sectionTitle/SectionTitle';

const sectionData = {
  sectionTitle: {
    pill: 'Feature',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
};

function GainMore() {
  return (
    <Section>
      <Container>
        <SectionTitle
          pill={sectionData.sectionTitle.pill}
          title={sectionData.sectionTitle.title}
          subtitle={sectionData.sectionTitle.subtitle}
        />
      </Container>
    </Section>
  );
}

export default GainMore;
