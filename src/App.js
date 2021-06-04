import { 
  Button,
  ButtonGroup,
  Container } from "react-bootstrap";
import './App.css';

function App() {
  return (
    <Container>
      <ButtonGroup aria-label="Basic example">
        <Button variant="secondary">0</Button>
        <Button variant="secondary">1</Button>
        <Button variant="secondary">2</Button>
        <Button variant="secondary">3</Button>
      </ButtonGroup>
    </Container>
  );
}

export default App;
