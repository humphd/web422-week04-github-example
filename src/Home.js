import { Link } from 'react-router-dom';
// We use various components from React Bootstrap, see:
// https://react-bootstrap.github.io/components/alerts/
import { Container } from 'react-bootstrap'

import Navigation from './Navigation';

export default function Home() {
  return (
    <Container>
      <Navigation />

      <ul>
        <li><Link to="/users/sictweb">Seneca Web Programming</Link></li>
        <li><Link to="/users/Seneca-CDOT">Seneca Centre for Development of Open Technology</Link></li>
        <li><Link to="/users/humphd">David Humphrey</Link></li>
      </ul>
    </Container>
  );
}