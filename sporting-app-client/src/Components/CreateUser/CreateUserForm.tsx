import { useEffect } from "react";
import { useState } from "react";
import { elementData, ReactChangeEventType } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import InputComponent from "../Shared/InputComponent";
import { Card, NavbarBrand } from "react-bootstrap";

// let defaultValue: elementData = {
//   firstName: "",
//   middleName: "",
//   lastName: "",
//   gender: "",
//   email: "",
//   dateOfBirth: "",
//   userId: "",
//   password: "",
// };
let defaultValues: Record<string, Record<string, string | boolean>> = {
  firstName: {
    value: "",
    isInvalid: false,
  },
  middleName: {
    value: "",
    isInvalid: false,
  },
  lastName: {
    value: "",
    isInvalid: false,
  },
  gender: {
    value: "",
    isInvalid: false,
  },
  email: {
    value: "",
    isInvalid: false,
  },
  dateOfBirth: {
    value: "",
    isInvalid: false,
  },
};

const CreateUserForm = (props: any) => {
  const [formInfo, setFormInfo] = useState(defaultValues);
  const navigate = useNavigate();

  useEffect(() => {
    // Use to check if changes are applied
    console.log(formInfo);
  }, [formInfo]);

  const updateUserInfo = (event: ReactChangeEventType) => {
    const { id: name, value } = event.currentTarget;
    let formIsInvalid: boolean = false;

    if (!value && name != "middleName") {
      formIsInvalid = true;
    }
    setFormInfo((prevState) => {
      return {
        ...prevState,
        [name]: {
          value: value,
          isInvalid: formIsInvalid,
        },
      };
    });
  };

  function verifyUserInfoHandler(e: React.MouseEvent): void {
    let isValidUserInformation: boolean = true;

    Object.entries(formInfo).forEach((input) => {
      const inputName = input[0];
      const inputValue = input[1];

      if (!inputValue.value && inputName != "middleName") {
        isValidUserInformation = false;
        alert(`${inputName} is required`);
      }
    });
    if (isValidUserInformation) {
      navigate("/create_account/user_login");
    }
    e.preventDefault();
  }

  return (
    <Container>
      <Card>
        <Card.Title className="text-center">Create Account</Card.Title>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3">
              <InputComponent
                inputInfo={{
                  label: "First Name",
                  type: "text",
                  id: "firstName",
                  placeholder: "John",
                  isInvalid: formInfo.firstName.isInvalid,
                }}
                onChange={updateUserInfo}
              />
              <br />
              <InputComponent
                inputInfo={{
                  label: "Middle Name",
                  type: "text",
                  id: "middleName",
                  placeholder: "David",
                  isInvalid: formInfo.middleName.isInvalid,
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
                  isInvalid: formInfo.lastName.isInvalid,
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
                  isInvalid: formInfo.email.isInvalid,
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
                  isInvalid: formInfo.dateOfBirth.isInvalid,
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
                  isInvalid: formInfo.gender.isInvalid,
                }}
                onChange={updateUserInfo}
              />
              <br />
              <Button onClick={verifyUserInfoHandler}>Next</Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default CreateUserForm;
