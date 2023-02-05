import { UserData } from "../utils/types";

/**
 * Creates new user in db
 * @param user_data object with user information
 * @returns JSON object with response
 */

export default async function newUser(
  user_data: UserData
): Promise<object | string> {
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

    if (data === "success") {
      return data;
    } else {
      return "Could not create user";
    }
  } catch (error) {
    throw error;
    // return `${error}`;
  }
}
