//import Card from "./UI/Card";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <Card.Body>
          <Card.Title>
            <h1>Welcome</h1>
          </Card.Title>
          <ButtonGroup className="me-2">
            <Button
              onClick={() => {
                navigate("/login");
              }}
              variant="primary"
            >
              Login
            </Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button
              onClick={() => {
                navigate("/create_account");
              }}
              variant="primary"
            >
              Create Account
            </Button>
          </ButtonGroup>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Homepage;
