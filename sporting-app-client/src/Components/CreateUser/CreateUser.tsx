//import Card from "../../UI/Card";
import { Card } from "react-bootstrap";
import CreateUserForm from "./CreateUserForm";
import newUser from "../../apis/newUserApi";
import { UserData } from "../../utils/types";
import { useState } from "react";
import UserCreatedPage from "./UserCreatedPage";
import Container from "react-bootstrap/esm/Container";

const CreateUser = () => {
  const [userWasCreated, setUserWasCreated] = useState(false);

  async function postUserInfoRequest(request: UserData): Promise<void> {
    let response = await newUser(request);

    if (response === "success") {
      setUserWasCreated(true);
    }
  }
};

export default CreateUser;
