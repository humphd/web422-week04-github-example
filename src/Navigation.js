// We need the Link component to move between pages in our router.
// Notice that below we tell React Bootstrap to use this Link component
// vs a normal <a> via the as={Link} prop.
import { Link } from 'react-router-dom';
// We use various components from React Bootstrap, see:
// https://react-bootstrap.github.io/components/alerts/
import { Nav } from 'react-bootstrap'

// A reusable navigation panel to show across the top of pages
export default function Navigation() {
  return (
    <Nav className="my-5">
      <Nav.Item>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
      </Nav.Item>
    </Nav>      
  );
}
