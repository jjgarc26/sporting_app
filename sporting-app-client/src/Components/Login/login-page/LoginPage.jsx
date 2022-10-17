import { useState } from "react";
import send_request from "../apis";
const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const verifyUser = async () => {
    const userInformation = {
      userName: userName,
      passWord: password,
    };
    console.log("send request");
    const request = await send_request(userInformation.userName);
    console.log(request);
    console.log(password);
    console.log(userName);
  };

  return (
    <div>
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
        <button onClick={verifyUser}>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;
