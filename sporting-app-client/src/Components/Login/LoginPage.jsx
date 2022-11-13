import { useState } from "react";
import verifyUser from "../../apis/databaseApi";
import Card from "../../UI/Card";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const verify = async () => {
    const userInformation = {
      userName: userName,
      passWord: password,
    };
    console.log("send request");
    const request = await verifyUser(userInformation.userName);
    console.log(request);
    console.log(password);
    console.log(userName);
  };

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
