// import Card from "../../UI/Card";
import Card from "react-bootstrap/Card";

const UserCreatedPage = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <h1> User has been created!!!</h1>
      <div>
        <label> Return to login page </label>
        <button>Return</button>
      </div>
    </Card>
  );
};

export default UserCreatedPage;
