import {
  Card,
  Navbar,
  CurrencyConverter,
  PasswordInput,
  TodoMain,
} from "./components";
import Layout from "./Layout";

export default [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Card />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/password-generator",
        element: <PasswordInput />,
      },
      {
        path: "/currency-converter",
        element: <CurrencyConverter />,
      },
      {
        path: "/task-tracker",
        element: <TodoMain />,
      },
    ],
  },
];

/* <Route path='/' element={<App />}>
  <Route path='' element={<Card quotes={quotes} />} />
  <Route path='/navbar' element={<Navbar />} />
  <Route path='/password-generator' element={<PasswordInput />} />
  <Route path='/currency-converter' element={<CurrencyConverter />} />
</Route>; */
