// We need the useParams() hook to get the username from the URL.
import { useParams } from 'react-router-dom';
// We use various components from React Bootstrap, see:
// https://react-bootstrap.github.io/components/alerts/
import { Container, Table, Spinner } from 'react-bootstrap'
// We're using useSWR to simplify data fetching, see:
// https://swr.vercel.app/getting-started
import useSWR from 'swr';

import Navigation from './Navigation';

export default function Repos() {
  // Hook to get the username from the URL via the BrowserRouter
  const { username } = useParams();
  // Hook to download the data from the GitHub API
  const url = `https://api.github.com/users/${username}/repos?per_page=100`;
  const { data: repos, error } = useSWR(url);

  if(error) {
    return <h1>Error...</h1>
  }

  if(!repos) {
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
        <Table striped bordered>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Language</th>
            </tr>            
          </thead>
          <tbody>
            {
              repos.map(repo =>
                <tr key={repo.id}>
                  <td><a href={repo.html_url}>{repo.name}</a></td>
                  <td>{repo.description}</td>
                  <td>{repo.language}</td>
                </tr>
              )
            }
          </tbody>
        </Table>
      </Container>
    </Container>
  );
}
