import { createBroswerRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Home from "./pages/home.jsx";
import Work from "./pages/work.jsx";

const router = createBroswerRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/work", element: <Work /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
