import { Card } from "react-bootstrap";

import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage/HomePage";
import RootLayout from "./Components/RootLayout/RootLayout";
import CreateUser from "./Components/CreateUser/CreateUser";
import LoginPage from "./Components/Login/LoginPage";
import CreateUserForm from "./Components/CreateUser/CreateUserForm";
import LoginCredentialForm from "./Components/CreateUser/LoginCredentialForm";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create_account" element={<CreateUserForm />} />
      <Route
        path="/create_account/user_login"
        element={<LoginCredentialForm />}
      />
    </Route>
  )
);

function App() {
  return (
    <Card>
      <RouterProvider router={router} />
    </Card>
  );
}

export default App;
