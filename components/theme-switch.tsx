import {useState} from "react";
import {BsSun} from "react-icons/bs";

type Theme = "light" | "dark";

const ThemeSwitch = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {};

  return (
    <button
      className="fixed top-10 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active: scale-105 transition-all"
      onClick={toggleTheme}
    >
      <BsSun />
    </button>
  );
};

export default ThemeSwitch;
