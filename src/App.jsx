import "./App.css";
import routes from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter(routes);

// const App = () => {
//   return (
//     <>
//       {/* <h1 className='bg-green-400 rounded-xl p-4 mb-4 text-black'>
//         Hello React + Vite + Tailwind
//       </h1> */}
//       {/* <Navbar />
//       <Card quotes={quotes} />
//       <PasswordInput />
//       <CurrencyConverter /> */}
//       <RouterProvider router={router} />
//     </>
//   );
// };

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
