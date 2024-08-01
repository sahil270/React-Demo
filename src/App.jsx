import "./App.css";
import {
  Card,
  CurrencyConverter,
  NavBar,
  PasswordInput,
} from "./components/Card.jsx";
import quotes from "./db/quotes.js";

const App = () => {
  return (
    <>
      {/* <h1 className='bg-green-400 rounded-xl p-4 mb-4 text-black'>
        Hello React + Vite + Tailwind
      </h1> */}
      <NavBar />
      <Card quotes={quotes} />
      <PasswordInput />
      <CurrencyConverter />
    </>
  );
};

export default App;
