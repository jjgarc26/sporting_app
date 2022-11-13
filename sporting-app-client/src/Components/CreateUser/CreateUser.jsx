import Card from "../../UI/Card";
import newUser from "../../apis/databaseApi";

const CreateUser = () => {
  return (
    <Card>
      <h1>Create Account</h1>
      <h3>Basic Information</h3>
      <form>
        <label>First name</label>
        <input type="text" id="fname" placeholder="joe" />
        <label>Middle name</label>
        <input type="text" id="fname" placeholder="" />
        <label>Last Name</label>
        <input type="text" id="lname" placeholder="doe" />
        <br />
        <label>Email</label>
        <input type="email" id="email" placeholder="example@email.com" />
        <br />
        <label>Phone</label>
        <input type="number" id="phone" placeholder="888-888-8888" />
        <br />
        <label>Gender</label>
        <input type="text" id="gender" placeholder="male" />
        <br />
        <button>Continue</button>
      </form>
      <h3>Create username and password</h3>
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
      </form>
      <label>Create Account</label>
    </Card>
  );
};

export default CreateUser;
