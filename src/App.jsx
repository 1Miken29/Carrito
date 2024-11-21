import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <form className="flex flex-col items-center gap-4 w-full max-w-[300px]">
        <span className="w-full flex flex-col gap-2">
          <label for="email" className="self-start text-[#58bc82] font-semibold">
            Email
          </label>
          <input type="email" name="email" id="email" className="w-full flex items-center gap-2 bg-[#9c9c9c60] px-3 py-4 rounded-lg border-[none]"/>
        </span>
        <span className="w-full flex flex-col gap-2">
          <label for="password" className="self-start text-[#58bc82] font-semibold">
            Password
          </label>
          <input type="password" name="password" id="password" className="w-full flex items-center gap-2 bg-[#9c9c9c60] px-3 py-4 rounded-lg border-[none]"/>
        </span>
        <span className="no-underline text-[#707070]">
          <a href="#" className="text-[#58bc82]">Forgot password?</a>
        </span>
        <input className="w-full flex items-center gap-2 bg-[#707070] text-[#efefef] cursor-pointer transition-all duration-300 font-semibold text-[0.9rem] px-3 py-4 rounded-[3rem] border-[none] hover:bg-[#58bc82] hover:text-[#707070]" type="submit" value="Log in" />
        <span className="no-underline text-[#707070]">
          Don't have an account? <a href="#" className="text-[#58bc82]">Sign up</a>
        </span>
      </form>
    </>
  );
}

export default App;
