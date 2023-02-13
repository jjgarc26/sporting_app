import { useState } from "react";

import LoginPage from "./Components/Login/LoginPage";
import CreateUser from "./Components/CreateUser/CreateUser";
import Card from "./UI/Card";

function App() {
  const [screen, setScreen] = useState("welcome");

  const WelcomePage = () => {
    return (
      <Card>
        <div>
          <h1>Welcome</h1>
        </div>
        <div>
          <button
            onClick={() => {
              setScreen("login");
            }}
          >
            Login
          </button>
        </div>
        <div>
          <button
            onClick={() => {
              setScreen("createUser");
            }}
          >
            Create User
          </button>
        </div>
      </Card>
    );
  };

  function pageHandler() {
    const currentPage = screen === "login" ? <LoginPage /> : <CreateUser />;
    return <div>{currentPage}</div>;
  }

  return <div>{screen === "welcome" ? WelcomePage() : pageHandler()}</div>;
}

export default App;
