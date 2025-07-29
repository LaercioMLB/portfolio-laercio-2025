import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const contactItems = [
    {
      icon: <MdEmail className="text-4xl " />,
      title: "E-mail",
      subtitle: "Tem alguma dúvida?",
      detail: "contato@laercio.me",
      link: "mailto:contato@laercio.me",
    },
    {
      icon: <FaWhatsapp className="text-4xl " />,
      title: "Whatsapp",
      subtitle: "Você pode chamar a qualquer hora.",
      detail: "+55 45 9859-2126",
      link: "https://wa.me/554598592126?text=Olá%20Laercio,%20gostaria%20de%20falar%20com%20você!",
    },
  ];
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold ml-3">Como prefere falar comigo?</h1>
      <div className="relative flex flex-col mt-10">
        {contactItems.map((item, idx) => (
          <div key={idx} className="relative flex items-start pb-12">
            {/* Linha vertical */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />

            {/* Ponto */}
            <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-gray-700 mt-13 ml-[10px]" />

            {/* Conteúdo */}
            <div key={idx} className="flex flex-col space-y-2  ml-6">
              {item.icon}
              <h3 className="text-lg font-semibold ">{item.title}</h3>
              <p className="text-sm text-gray-300">{item.subtitle}</p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold hover:underline"
              >
                {item.detail}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
