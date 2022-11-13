import Card from "../../UI/Card";
import CreateUserForm from "./CreateUserForm";
import newUser from "../../apis/databaseApi";

const CreateUser = () => {
  return (
    <Card>
      <h1>Create Account</h1>
      <h3>Basic Information</h3>
      <CreateUserForm />

      <h3>Create username and password</h3>

      <label>Create Account</label>
    </Card>
  );
};

export default CreateUser;
