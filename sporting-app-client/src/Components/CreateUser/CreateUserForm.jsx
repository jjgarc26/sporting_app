import { useEffect } from "react";
import { useState } from "react";

let defaultValue = {
  firstName: "",
  middleName: "",
  lastName: "",
  gender: "",
  email: "",
  dateOfBirth: "",
  userId: "",
  password: "",
};

const CreateUserForm = (props) => {
  const [userInfo, setUserInfo] = useState(defaultValue);
  const [logginForm, setLogginForm] = useState(false);

  const userInfoHandler = (event) => {
    const { id: name, value } = event.currentTarget;
    switch (name) {
      case "confirmPassword":
        return value === userInfo.password
          ? console.log("does match")
          : console.log("does not match");
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
      default:
        setUserInfo((prevState) => {
          return {
            ...prevState,
            [name]: value,
          };
        });
    }
  };

  function formSection(labelName, type, id, placeholder) {
    return (
      <div>
        <label>{labelName}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={userInfoHandler}
        />
      </div>
    );
  }

  useEffect(() => {
    // Use to check if changes are applied
    console.log(userInfo);
  }, [userInfo]);

  function userInformationForm() {
    return (
      <form>
        {formSection("First Name", "text", "first_name", "joe")}
        <br />
        {formSection("Middle Name", "text", "middle_name", "deer")}
        <br />
        {formSection("Last Name", "text", "last_name", "doe")}
        <br />
        {formSection("Email", "email", "email", "example@email.com")}
        <br />
        {formSection("Phone", "number", "phone", "888-888-8888")}
        <br />
        {formSection("Gender", "text", "gender", "male")}
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
        {formSection("User Name", "text", "userId", "username")}
        <br />
        {formSection("Password", "password", "password", "password")}
        <br />
        {formSection(
          "Confirm Password",
          "password",
          "confirmPassword",
          "password"
        )}
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
