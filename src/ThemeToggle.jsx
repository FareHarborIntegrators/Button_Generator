import { useDarkMode } from "./Hooks/useDarkMode";
import { SunIcon } from "./Icons/SunIcon";
import { MoonIcon } from "./Icons/MoonIcon";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle dark mode"
      className="relative inline-flex h-6 w-12 items-center rounded-full bg-gray-300 dark:bg-gray-700 transition-colors duration-300 focus:outline-none"
    >
      {/* Knob */}
      <span
        className={`absolute left-1 top-1 h-4 w-4 rounded-full bg-white transform transition-transform duration-300 ${
          isDark ? "translate-x-6" : ""
        }`}
      />

      {/* Sun (light) */}
      <span
        className={`absolute left-1.5 transition-opacity duration-300 ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      >
        <SunIcon className="h-3.5 w-3.5 text-yellow-500" />
      </span>

      {/* Moon (dark) */}
      <span
        className={`absolute right-1.5 transition-opacity duration-300 ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      >
        <MoonIcon className="h-3.5 w-3.5 text-blue-400" />
      </span>
    </button>
  );
};
