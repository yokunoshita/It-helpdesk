import React from "react";
import { Ticket, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onNavigate: (page: string) => void;
  activePage: string;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  hasActiveChat: boolean;
  onResumeChat: () => void;
}

export const SimpleNavbar = ({
  onNavigate,
  activePage,
  isDarkMode,
  toggleDarkMode,
  hasActiveChat,
  onResumeChat,
}: NavbarProps) => {
  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-900 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 grid grid-cols-[auto_1fr_auto] md:grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-4">
        <div 
          className="flex items-center gap-2 cursor-pointer justify-self-start min-w-0" 
          onClick={() => onNavigate("home")}
        >
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200 dark:shadow-blue-900/20">
            <Ticket className="text-white size-5" />
          </div>
          <span className="text-base sm:text-lg lg:text-xl font-bold text-slate-800 dark:text-white tracking-tight truncate">
            HelpDesk IT
          </span>
        </div>

        <div className="hidden md:flex items-center gap-5 lg:gap-8 justify-self-center">
          <button 
            onClick={() => onNavigate("home")}
            className={`text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${activePage === "home" ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`}
          >
            Beranda
          </button>
          <button 
            onClick={() => onNavigate("create")}
            className={`text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${activePage === "create" ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`}
          >
            Lapor Masalah
          </button>
          <button 
            onClick={() => onNavigate("dashboard")}
            className={`text-xs lg:text-sm font-medium transition-colors whitespace-nowrap ${activePage === "dashboard" ? "text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"}`}
          >
            Statistik Layanan
          </button>
          {hasActiveChat && (
            <button
              onClick={onResumeChat}
              className="text-xs lg:text-sm font-semibold text-emerald-600 transition-colors whitespace-nowrap hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
            >
              Lanjut Chat
            </button>
          )}
        </div>

        <div className="flex items-center gap-4 justify-self-end">
          {/* <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-medium text-slate-500 dark:text-slate-400">
            <Info className="size-3.5" />
            <span>Tanpa Login</span>
          </div> */}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-100 dark:border-slate-800"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          
          {/* <button className="p-2 text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300">
            <Search className="size-5" />
          </button> */}
        </div>
      </div>
    </nav>
  );
};
