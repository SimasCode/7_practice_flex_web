import Container from '../UI/container/Container';
import Section from '../UI/section/Section';
import SectionTitle from '../UI/sectionTitle/SectionTitle';
import GainCardsList from './GainMoreList';

const sectionData = {
  sectionTitle: {
    pill: 'Feature',
    title: 'Gain more insight into how people use your',
    subtitle:
      'With our integrated CRM, project management, collaboration and invoicing capabilities, you can manage every aspect of your business in one secure platform.',
  },
  gainCards: [
    {
      id: 1,
      icon: 'bi-envelope',
      title: 'Measure your performance',
      descr:
        'Stay connected with your team and make quick decisions wherever you are.',
    },
    {
      id: 2,
      icon: 'bi-graph-up',
      title: 'Custom analytics',
      descr:
        'Get a complete sales dashboard in the cloud. See activity, revenue and social metrics all in one place.',
    },
    {
      id: 3,
      icon: 'bi-people',
      title: 'Team Management',
      descr:
        'Our calendar lets you know what is happening with customer and projects so you.',
    },
    {
      id: 4,
      icon: 'bi-pen',
      title: 'Build your website',
      descr:
        'A tool that lets you build a dream website even if you know nothing about web design or programming.',
    },
    {
      id: 5,
      icon: 'bi-grid',
      title: 'Connect multiple apps',
      descr:
        'The first business platform to bring together all of your products from one place.',
    },
    {
      id: 6,
      icon: 'bi-gear',
      title: 'Easy setup',
      descr:
        'End to End Business Platform, Sales Management, Marketing Automation, Help Desk.',
    },
  ],
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
        <GainCardsList item={sectionData.gainCards} />
      </Container>
    </Section>
  );
}

export default GainMore;
