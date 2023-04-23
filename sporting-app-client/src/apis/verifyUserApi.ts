// import * as dotenv from "dotenv";
// dotenv.config();

//require("dotenv").config();

/**
 * fetches user username and verifies
 * that user exist in DB
 * @param user_data username of user
 * @returns JSON object containing response detail
 */

export default async function verifyUser(
  user_data: string
): Promise<object | string> {
  try {
    const response = await fetch(`http://127.0.0.1:5000/login/${user_data}`, {
      method: "GET",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data === "user is not verified") {
      return "error has occured";
    } else {
      return data;
    }
  } catch (error) {
    throw error;
  }
}
