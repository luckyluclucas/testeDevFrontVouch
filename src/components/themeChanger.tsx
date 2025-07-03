"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { WiMoonAltWaningCrescent3 } from "react-icons/wi";

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div>
      <button
        className="hover:cursor-pointer"
        onClick={() =>
          theme == "light" ? setTheme("dark") : setTheme("light")
        }
      >
        {theme === "light" ? (
          <WiMoonAltWaningCrescent3 size={28} />
        ) : (
          <IoSunnyOutline size={28} />
        )}
      </button>
    </div>
  );
}
