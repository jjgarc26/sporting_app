import { Card } from "react-bootstrap";

import { Route, RouterProvider, createRoutesFromElements } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "./Components/Homepage/HomePage";
import RootLayout from "./Components/RootLayout/RootLayout";
import CreateUser from "./Components/CreateUser/CreateUser";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="/create_account" element={<CreateUser />} />
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
