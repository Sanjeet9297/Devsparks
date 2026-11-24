"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  if (typeof window === "undefined") return "dark";
  return document.documentElement.classList.contains("light") ? "light" : "dark";
}

function getServerSnapshot() {
  return "dark";
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = () => {
    const isLight = document.documentElement.classList.toggle("light");
    document.body.classList.toggle("light", isLight);
    if (isLight) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("devsparks-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("devsparks-theme", "dark");
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="relative p-2 rounded-xl border transition-all duration-300 flex items-center justify-center cursor-pointer group bg-white/[0.05] border-white/[0.12] hover:bg-white/[0.1] hover:border-[#53f5dc]/50 text-[#f5f7ff] shadow-sm hover:shadow-[0_0_15px_rgba(83,245,220,0.2)]"
    >
      {theme === "dark" ? (
        <Sun className="w-4 h-4 text-[#53f5dc] transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-[#7886ff] transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
}
