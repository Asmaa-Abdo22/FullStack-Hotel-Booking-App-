import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Hotels from "./Pages/Hotels/Hotels";
import Experience from "./Pages/Experience/Experience";
import About from "./Pages/About/About";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "rooms", element: <Hotels /> },
        { path: "experience", element: <Experience /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
