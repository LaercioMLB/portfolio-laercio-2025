import { useState } from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/profile.jpeg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const tabs = [
  { path: "/", label: "Sobre" },
  { path: "/experiences", label: "Experiência" },
  // { path: "/certifications", label: "Certificações" },
  { path: "/services", label: "Serviços" },
  { path: "/contact", label: "Contato" },
];

export default function TabMenu() {
  return (
    <div className="mb-12 flex flex-col items-center sm:items-start w-full">
      <img
        src={profileImg}
        alt="Profile"
        className="w-20 h-20 rounded-full mr-4 mt-12 sm:mt-0"
      />
      <p className="mt-3 text-2xl text-center font-light ">
        Laércio Bubiak da Cruz
      </p>
      <p className="text-[#5C5C5C] text-center text-base italic font-semibold mb-5">
        Arquiteto de Soluções Cloud
      </p>
      <div className="flex items-center space-x-4 mt-2 mb-2">
        <a
          href="https://www.linkedin.com/in/laercio-bubiak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-7 h-7 text-black" />
        </a>
        <a
          href="https://github.com/LaercioMLB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-7 h-7 text-black" />
        </a>
        <a
          href="https://labub.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaMedium className="w-7 h-7 text-black" />
        </a>
      </div>
      <hr className="my-8 border-gray-300 w-full" />
      {/* Navegação responsiva - Drawer fullscreen em mobile */}
      {/* Navegação fixa no rodapé para mobile, topo para desktop */}
      <nav
        className="
          fixed bottom-0 left-0 w-full bg-white flex sm:static sm:bg-transparent sm:w-full sm:h-auto sm:pt-0 sm:inset-auto sm:flex-row sm:justify-start sm:gap-4 sm:mb-0 sm:transition-none sm:translate-x-0 sm:pointer-events-auto
          flex-row justify-around items-center py-4 border-t border-gray-200 z-50
          sm:py-0 sm:border-t-0
        "
      >
        {tabs.map((tab) => (
          <NavLink
            key={tab.path}
            to={tab.path}
            end
            className={({ isActive }) =>
              isActive
                ? "bg-black text-white rounded px-2 py-1 font-bold text-sm sm:text-base"
                : "text-black hover:bg-gray-100 rounded px-2 py-1 font-bold text-sm sm:text-base"
            }
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
