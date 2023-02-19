import { UserData } from "../utils/types";

/**
 * Creates new user in db
 * @param userData object with user information
 * @returns JSON object with response
 */

export default async function newUser(
  userData: UserData
): Promise<object | string> {
  try {
    const response = await fetch("http://127.0.0.1:5000/create_account", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    const data = await response.json();

    if (data === "success") {
      return data;
    } else {
      return "Could not create user";
    }
  } catch (error) {
    throw error;
  }
}
