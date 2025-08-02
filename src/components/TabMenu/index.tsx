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
    <div className="mb-12">
      <img
        src={profileImg}
        alt="Profile"
        className="w-20 h-20 rounded-full mr-4"
      />
      <p className="mt-3 text-2xl font-light ">Laércio Bubiak da Cruz</p>
      <p className="text-[#5C5C5C] text-base italic font-semibold mb-5">
        Especialista em Operações de TI
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
      <hr className="my-8 border-gray-300" />
      <nav className="flex space-x-4 ">
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
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
