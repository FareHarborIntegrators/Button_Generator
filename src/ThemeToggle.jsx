import { useDarkMode } from "./Hooks/useDarkMode";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-200 dark:bg-[#F6F6F6] transition-colors duration-300 focus:outline-none"
    >
      <span
        className={`absolute left-1 top-1 flex justify-center items-center h-4 w-4 rounded-full bg-white dark:bg-[#2B2B2B] transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : ""
        }`}
      >
        <span
        className={`absolute transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      >
        <SunIcon color={'#f7c42c'}/>
      </span>

      <span
        className={`absolute transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        <MoonIcon color={'#ffffff'} />
      </span>

    </span>

      
    </button>
  );
};
