import { useEffect } from "react";
import { useState } from "react";

let defaultValue = {
  first_name: "",
  middle_name: "",
  last_name: "",
  gender: "",
  email: "",
  date_of_birth: "",
  user_id: "",
  password: "",
};

const CreateUserForm = () => {
  const [userInfo, setUserInfo] = useState(defaultValue);
  const userInfoHandler = (event) => {
    const { id: name, value } = event.currentTarget;
    setUserInfo((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    // Use to check if changes are applied
    console.log(userInfo);
  }, [userInfo]);

  let basicInfoForm = () => {
    <form>
      <label>First name</label>
      <input
        type="text"
        id="first_name"
        placeholder="joe"
        onChange={userInfoHandler}
      />
      <label>Middle name</label>
      <input
        type="text"
        id="middle_name"
        placeholder="deer"
        onChange={userInfoHandler}
      />
      <label>Last Name</label>
      <input
        type="text"
        id="last_name"
        placeholder="doe"
        onChange={userInfoHandler}
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        id="email"
        placeholder="example@email.com"
        onChange={userInfoHandler}
      />
      <br />
      <label>Phone</label>
      <input
        type="number"
        id="phone"
        placeholder="888-888-8888"
        onChange={userInfoHandler}
      />
      <br />
      <label>Gender</label>
      <input
        type="text"
        id="gender"
        placeholder="male"
        onChange={userInfoHandler}
      />
      <br />
      <button>Continue</button>
    </form>;
  };

  let userLogginForm = () => {
    <form>
      <label>User Name</label>
      <input type="text" id="user_id" placeholder="username" />
      <br />
      <label>Password</label>
      <input type="password" id="user_id" placeholder="password" />
      <label>Confirm password</label>
      <input type="password" id="password" placeholder="password" />
      <br />
      <button>Submit</button>
    </form>;
  };

  return (
    <div>
      {basicInfoForm}
      {userLogginForm}
    </div>
  );
};
export default CreateUserForm;
