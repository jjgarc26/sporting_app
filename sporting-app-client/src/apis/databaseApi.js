// import * as dotenv from "dotenv";
// dotenv.config();

// require("dotenv").config();

const verifyUser = async (user_data) => {
  try {
    const response = await fetch(`http://127.0.0.1:5000/login/${user_data}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data == "user is not verified") {
      return "error has occured";
    } else {
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const newUser = async (user_data) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/create_account", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    });
    const data = await response.json();

    if (data == "success") {
      return data;
    } else {
      return "Could not create user";
    }
  } catch (error) {
    console.error(error);
  }
};
export default { verifyUser, newUser };
