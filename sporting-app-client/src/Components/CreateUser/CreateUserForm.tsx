import { useEffect } from "react";
import { useState } from "react";
import { elementData, ReactChangeEventType } from "../../utils/types";
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
  const [logginForm, setLogginForm] = useState(false);

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

  function userInformationForm() {
    return (
      <form>
        <InputComponent
          inputInfo={{
            label: "First Name",
            type: "text",
            id: "first_name",
            placeholder: "John",
          }}
          onChange={userInfoHandler}
        />
        <br />
        <InputComponent
          inputInfo={{
            label: "Last Name",
            type: "text",
            id: "last_name",
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
            label: "Phone",
            type: "number",
            id: "phone",
            placeholder: "888-888-8888",
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
        <button
          onClick={() => {
            setLogginForm(true);
          }}
        >
          Continue
        </button>
      </form>
    );
  }

  function userLogginInformationForm() {
    return (
      <form>
        <InputComponent
          inputInfo={{
            label: "UserName",
            type: "text",
            id: "user_id",
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
        <button
          onClick={() => {
            props.postRequest(userInfo);
          }}
        >
          Submit
        </button>
        <button
          onClick={() => {
            setLogginForm(false);
          }}
        >
          Back
        </button>
      </form>
    );
  }

  return (
    <div>
      {!logginForm ? userInformationForm() : userLogginInformationForm()}
    </div>
  );
};
export default CreateUserForm;
