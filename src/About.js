// We use various components from React Bootstrap, see:
// https://react-bootstrap.github.io/components/alerts/
import { Container } from 'react-bootstrap'

import Navigation from './Navigation';

export default function About() {
  return (
    <Container>
      <Navigation />
      <p>About</p>
    </Container>
  );
}
