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

  const userInfoHandler = (event: ReactChangeEventType) => {
    const { id: name, value } = event.currentTarget;
    switch (name) {
      case "confirmPassword":
        value === userInfo.password
          ? console.log("does match")
          : console.log("does not match");
        break;
      case "password":
        value === userInfo.password
          ? console.log("does match")
          : console.log("does not match");
        setUserInfo((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
        break;
      default:
        setUserInfo((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
    }
  };

  useEffect(() => {
    // Use to check if changes are applied
    console.log(userInfo);
  }, [userInfo]);

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

  function userInformationForm() {
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
            onChange={userInfoHandler}
          />
          <br />
          <InputComponent
            inputInfo={{
              label: "Last Name",
              type: "text",
              id: "lastName",
              placeholder: "Doe",
            }}
            onChange={userInfoHandler}
          />
          <br />
          <InputComponent
            inputInfo={{
              label: "Email",
              type: "email",
              id: "email",
              placeholder: "example@email.com",
            }}
            onChange={userInfoHandler}
          />
          <br />
          <InputComponent
            inputInfo={{
              label: "Date of Birth",
              type: "date",
              id: "dateOfBirth",
              placeholder: "1999-01-1",
            }}
            onChange={userInfoHandler}
          />
          <br />
          <InputComponent
            inputInfo={{
              label: "Gender",
              type: "text",
              id: "gender",
              placeholder: "male/female",
            }}
            onChange={userInfoHandler}
          />
          <br />
          <Button onClick={verifyUserInfoHandler}>Next</Button>
        </Form.Group>
      </Form>
    );
  }

  function userLogginInformationForm() {
    return (
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputComponent
            inputInfo={{
              label: "UserName",
              type: "text",
              id: "userId",
              placeholder: "username",
            }}
            onChange={userInfoHandler}
          />
          <br />
          <InputComponent
            inputInfo={{
              label: "Password",
              type: "password",
              id: "password",
              placeholder: "password",
            }}
            onChange={userInfoHandler}
          />
          <InputComponent
            inputInfo={{
              label: "Confirm Password",
              type: "password",
              id: "confirmPassword",
              placeholder: "password",
            }}
            onChange={userInfoHandler}
          />
          <br />
          <Button
            onClick={() => {
              props.postRequest(userInfo);
            }}
          >
            Submit
          </Button>
          <Button
            onClick={() => {
              setLogginForm("bass");
            }}
          >
            Back
          </Button>
        </Form.Group>
      </Form>
    );
  }

  return (
    <div>
      {logginForm === "basic"
        ? userInformationForm()
        : userLogginInformationForm()}
    </div>
  );
};
export default CreateUserForm;
