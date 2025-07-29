import { NavLink } from "react-router-dom";
import profileImg from "../../assets/profile.jpeg";
import linkedinIcon from "../../assets/linkedin.svg";
import githubIcon from "../../assets/github.svg";

const tabs = [
  { path: "/", label: "Sobre" },
  { path: "/experiences", label: "Experiências" },
  { path: "/services", label: "Serviços" },
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
          <img src={linkedinIcon} alt="LinkedIn" className="w-7 h-7" />
        </a>
        <a
          href="https://github.com/LaercioMLB"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="GitHub" className="w-7 h-7" />
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
