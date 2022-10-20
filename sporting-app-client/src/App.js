import { useState } from "react";

import LoginPage from "./Components/Login/login-page/LoginPage";
import CreateUser from "./Components/CreateUser/CreateUser";

function App() {
  const [screen, setScreen] = useState("welcome");

  const WelcomePage = () => {
    return (
      <div>
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
      </div>
    );
  };

  const pageHandler = () => {
    if (screen === "login") {
      return (
        <div>
          <LoginPage />
        </div>
      );
    } else if (screen === "createUser") {
      return (
        <div>
          <CreateUser />
        </div>
      );
    }
  };

  return <div>{screen === "welcome" ? WelcomePage() : pageHandler()}</div>;
}

export default App;
