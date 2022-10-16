// import * as dotenv from "dotenv";
// dotenv.config();

// require("dotenv").config();

const send_request = async (user_data) => {
  try {
    const response = await fetch(`${"http://127.0.0.1:5000/login"}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user_data),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export default send_request;
