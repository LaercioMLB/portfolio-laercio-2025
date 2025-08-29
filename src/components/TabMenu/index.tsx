import { useState } from "react";
import { NavLink } from "react-router-dom";
import profileImg from "../../assets/profile.jpeg";
import { FaLinkedin, FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const tabs = [
  { path: "/", label: "Sobre" },
  { path: "/experiences", label: "Experiência" },
  // { path: "/certifications", label: "Certificações" },
  { path: "/services", label: "Serviços" },
  { path: "/contact", label: "Contato" },
];

export default function TabMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mb-12 flex flex-col items-center sm:items-start w-full">
      <img
        src={profileImg}
        alt="Profile"
        className="w-20 h-20 rounded-full mr-4 mt-12 sm:mt-0"
      />
      <p className="mt-3 text-2xl font-light ">Laércio Bubiak da Cruz</p>
      <p className="text-[#5C5C5C] text-base italic font-semibold mb-5">
        Especialista em Operações Cloud
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
      {/* Menu hamburguer para mobile - absolute canto superior esquerdo */}
      <div className="sm:hidden">
        {!menuOpen && (
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            className="p-2 absolute top-4 left-4 z-50 bg-white rounded-full "
            style={{ marginTop: 0 }}
          >
            <FaBars className="w-6 h-6" />
          </button>
        )}
      </div>
      {/* Navegação responsiva - Drawer fullscreen em mobile */}
      <nav
        className={`
          ${
            menuOpen
              ? "fixed inset-0 z-50 bg-white flex flex-col items-center justify-start pt-8 gap-4 w-full h-full transition-transform duration-300 ease-in-out translate-x-0"
              : "fixed inset-0 z-50 bg-white flex flex-col items-center justify-start pt-8 gap-4 w-full h-full transition-transform duration-300 ease-in-out -translate-x-full pointer-events-none"
          }
          sm:static sm:z-auto sm:bg-transparent sm:w-full sm:h-auto sm:pt-0 sm:inset-auto sm:flex sm:flex-row sm:justify-start sm:gap-4 sm:mb-0 sm:transition-none sm:translate-x-0 sm:pointer-events-auto
        `}
      >
        {/* Botão fechar só no mobile */}
        <div className="absolute top-4 right-4 sm:hidden">
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Fechar menu"
            className="p-2"
          >
            <FaTimes className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col items-center gap-4 w-full sm:flex-row sm:gap-4 sm:w-auto">
          {tabs.map((tab) => (
            <NavLink
              key={tab.path}
              to={tab.path}
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-black text-white rounded px-3 py-1 font-bold"
                  : "text-black hover:bg-gray-100 rounded px-3 py-1 font-bold"
              }
              onClick={() => setMenuOpen(false)}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
