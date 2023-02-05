import { useState } from "react";
import verifyUser from "../../apis/verifyUserApi";
import Card from "../../UI/Card";
import { UserData, ReactChangeEventType } from "../../utils/types";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (event: ReactChangeEventType) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event: ReactChangeEventType) => {
    setPassword(event.target.value);
  };

  async function verify(): Promise<void> {
    const userInformation: UserData = {
      userName: userName,
      password: password,
    };
    const request = await verifyUser(userInformation.userName);
    // return "";
  }

  return (
    <Card>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={userName}
          onChange={userNameHandler}
          placeholder="Username"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          value={password}
          onChange={passwordHandler}
          placeholder="Password"
        />
      </div>
      <div>
        <button onClick={verify}>Login</button>
      </div>
    </Card>
  );
};

export default LoginPage;
