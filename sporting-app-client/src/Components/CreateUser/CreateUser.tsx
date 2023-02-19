import Card from "../../UI/Card";
import CreateUserForm from "./CreateUserForm";
import newUser from "../../apis/newUserApi";
import { UserData } from "../../utils/types";
import { useState } from "react";
import UserCreatedPage from "./UserCreatedPage";

const CreateUser = () => {
  const [userWasCreated, setUserWasCreated] = useState(false);

  async function postUserInfoRequest(request: UserData): Promise<void> {
    let response = await newUser(request);

    if (response === "success") {
      setUserWasCreated(true);
    }
  }
  function formPage() {
    return (
      <div>
        <h1>Create Account</h1>
        <CreateUserForm postRequest={postUserInfoRequest} />
      </div>
    );
  }

  return <Card>{!userWasCreated ? formPage() : <UserCreatedPage />}</Card>;
};

export default CreateUser;
