import Card from "../../UI/Card";
import CreateUserForm from "./CreateUserForm";
import newUser from "../../apis/newUserApi";

const CreateUser = () => {
  const postUserInfoRequest = async (request) => {
    let response = await newUser(request);
  };

  return (
    <Card>
      <h1>Create Account</h1>
      <h3>Basic Information</h3>
      <CreateUserForm postRequest={postUserInfoRequest} />

      <h3>Create username and password</h3>

      <label>Create Account</label>
    </Card>
  );
};

export default CreateUser;
