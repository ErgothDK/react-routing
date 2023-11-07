import {
  //Route,
  RouterProvider,
  createBrowserRouter,
  //createRoutesFromElements,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Layout from "./pages/Layout";
import Error from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

const DUMMY_PRODUCT = {
  id: Math.random(),
  name: "Soya",
  detail: "Some basic text for detail porpuses",
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "product/:productId",
        element: <ProductDetail {...DUMMY_PRODUCT} />,
      },
    ],
  },
]);

/* const routeDefinitions = createRoutesFromElements(
  <Route>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Products />} />
  </Route>
);
const router = createBrowserRouter(routeDefinitions); */

function App() {
  return <RouterProvider router={router} />;
}

export default App;
