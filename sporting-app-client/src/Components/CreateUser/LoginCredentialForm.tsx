import Form from "react-bootstrap/Form";
import InputComponent from "../Shared/InputComponent";
import { ReactChangeEventType } from "../../utils/types";
import { useState } from "react";
import { elementData } from "../../utils/types";

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

const LoginCredentialForm = () => {
  const [logginCred, setLoginCred] = useState(defaultValue);

  function validPassword(name: string, password: string) {
    if (password === logginCred.password) {
      // we will enable button
    } else {
      //return message under input too inform password do not match
    }
  }

  function updateUserInfo(event: ReactChangeEventType) {
    const { id: name, value } = event.currentTarget;

    if (name === "password2") {
      validPassword(name, value);
    } else {
      setLoginCred((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  }
  return (
    <Form>
      <Form.Group className="mb-3">
        <InputComponent
          inputInfo={{
            label: "User Name",
            type: "text",
            id: "userId",
            placeholder: "username",
          }}
          onChange={updateUserInfo}
        />
        <InputComponent
          inputInfo={{
            label: "Password",
            type: "password",
            id: "password",
            placeholder: "password",
          }}
          onChange={updateUserInfo}
        />
        <InputComponent
          inputInfo={{
            label: "Confirm Password",
            type: "password",
            id: "password2",
            placeholder: "Retype password",
          }}
          onChange={updateUserInfo}
        />
      </Form.Group>
    </Form>
  );
};

export default LoginCredentialForm;
