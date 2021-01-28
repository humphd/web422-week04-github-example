// We need the useParams() hook to get the username from the
// URL, and the Link component to move between pages in our router.
// Notice that below we tell React Bootstrap to use this Link component
// vs a normal <a> via the as={Link} prop.
import { useParams, Link } from 'react-router-dom';
// We use various components from React Bootstrap, see:
// https://react-bootstrap.github.io/components/alerts/
import { Container, Card, Spinner } from 'react-bootstrap'
// We're using useSWR to simplify data fetching, see:
// https://swr.vercel.app/getting-started
import useSWR from 'swr';

import Navigation from './Navigation';

export default function User() {
  // Hook to get the username from the URL via the BrowserRouter
  const { username } = useParams();
  // Hook to download the data from the GitHub API
  const { data: user, error } = useSWR(`https://api.github.com/users/${username}`);

  if(error) {
    return <h1>Error...</h1>;
  }

  if(!user) {
    return (
      <Container>
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container>
      <Navigation />
      
      <Container>
        <Card style={{ width: '400px '}}>
          <Card.Img variant="top" src={user.avatar_url} />
          <Card.Body>
            <Card.Title>
              {user.name} (<a href={user.html_url}>@{user.login}</a>)
            </Card.Title>
            <Card.Text>
              {user.bio}
            </Card.Text>
            <Card.Link as={Link} to={`/users/${username}/repos`}>
              Repositories
            </Card.Link>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}
