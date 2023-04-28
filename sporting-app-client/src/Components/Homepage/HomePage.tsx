import { useState } from "react";

import LoginPage from "../Login/LoginPage";
import CreateUser from "../CreateUser/CreateUser";
//import Card from "./UI/Card";
import { Card } from "react-bootstrap";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";

function Homepage() {
  const [screen, setScreen] = useState("welcome");

  const WelcomePage = () => {
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
                  setScreen("login");
                }}
                variant="primary"
              >
                Login
              </Button>
            </ButtonGroup>
            <ButtonGroup>
              <Button
                onClick={() => {
                  setScreen("createUser");
                }}
                variant="primary"
              >
                Create User
              </Button>
            </ButtonGroup>
          </Card.Body>
        </Card>
      </Container>
    );
  };

  function pageHandler() {
    const currentPage = screen === "login" ? <LoginPage /> : <CreateUser />;
    return <div>{currentPage}</div>;
  }

  return <div>{screen === "welcome" ? WelcomePage() : pageHandler()}</div>;
}

export default Homepage;
