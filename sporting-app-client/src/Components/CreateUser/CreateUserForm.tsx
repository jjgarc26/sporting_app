import { useEffect } from "react";
import { useState } from "react";
import { elementData, ReactChangeEventType } from "../../utils/types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputComponent from "../Shared/InputComponent";

let defaultValue: elementData = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  email: "",
  dateOfBirth: "",
  userId: "",
  password: "",
};

const CreateUserForm = (props: any) => {
  const [userInfo, setUserInfo] = useState(defaultValue);
  const [logginForm, setLogginForm] = useState("basic");

  useEffect(() => {
    // Use to check if changes are applied
    console.log(userInfo);
  }, [userInfo]);

  const updateUserInfo = (event: ReactChangeEventType) => {
    const { id: name, value } = event.currentTarget;

    setUserInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  function verifyUserInfoHandler(e: React.MouseEvent): void {
    if (userInfo["firstName"] === "") {
      alert("Missing first name");
      console.log("Missing first name field");
      e.preventDefault();
    } else if (userInfo["lastName"] === "") {
      console.log("Missing last name field");
      e.preventDefault();
    } else if (userInfo["email"] === "") {
      console.log("Missing email field");
      e.preventDefault();
    } else {
      setLogginForm("loggin");
    }
    console.log(logginForm);
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <InputComponent
          inputInfo={{
            label: "First Name",
            type: "text",
            id: "firstName",
            placeholder: "John",
          }}
          onChange={updateUserInfo}
        />
        <br />
        <InputComponent
          inputInfo={{
            label: "Last Name",
            type: "text",
            id: "lastName",
            placeholder: "Doe",
          }}
          onChange={updateUserInfo}
        />
        <br />
        <InputComponent
          inputInfo={{
            label: "Email",
            type: "email",
            id: "email",
            placeholder: "example@email.com",
          }}
          onChange={updateUserInfo}
        />
        <br />
        <InputComponent
          inputInfo={{
            label: "Date of Birth",
            type: "date",
            id: "dateOfBirth",
            placeholder: "1999-01-1",
          }}
          onChange={updateUserInfo}
        />
        <br />
        <InputComponent
          inputInfo={{
            label: "Gender",
            type: "text",
            id: "gender",
            placeholder: "male/female",
          }}
          onChange={updateUserInfo}
        />
        <br />
        <Button onClick={verifyUserInfoHandler}>Next</Button>
      </Form.Group>
    </Form>
  );
};
export default CreateUserForm;
