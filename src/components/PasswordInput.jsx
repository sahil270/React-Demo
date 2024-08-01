import { useState, useCallback, useEffect, useRef } from "react";

const copyPasswordToClipboard = () => {};

const PasswordInput = () => {
  const [length, setLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let data = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz${
      numbersAllowed ? "0123456789" : ""
    }${charsAllowed ? "!@#$%^&*-_+=[]{}~`S" : ""}`;

    for (let index = 0; index < length; index++) {
      pass += data.charAt(Math.floor(Math.random() * data.length + 1));
    }

    setPassword(pass);
  }, [length, numbersAllowed, charsAllowed, setPassword]);

  // useRef Hook for Copy password to clipboard
  const passRef = useRef(null);
  const copyPasswordToClipboard = useCallback(() => {
    console.log(typeof passRef, passRef);
    passRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charsAllowed, passwordGenerator]);
  return (
    <div className='w-full max-w-lg shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 self-center'>
      <h3 className='text-center text-4xl my-4 text-white'>
        Password Genterator
      </h3>
      <div className='flex shadow rounded-lg overflow-hidden my-4'>
        <input
          type='text'
          value={password}
          className='outline-none py-1 px-3 bg-white w-[100%] text-black'
          placeholder='password'
          ref={passRef}
          readOnly
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
        >
          Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2 flex-wrap'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: ({length})</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numbersAllowed}
            id='numberInput'
            className='cursor-pointer'
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          />
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={numbersAllowed}
            id='numberInput'
            className='cursor-pointer'
            onChange={() => {
              setCharsAllowed((prev) => !prev);
            }}
          />
          <label>Special Characters</label>
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
