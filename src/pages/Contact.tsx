import { MdEmail, MdPhone } from "react-icons/md";

export default function Contact() {
  const contactItems = [
    {
      icon: <MdEmail className="text-4xl " />,
      title: "E-mail",
      subtitle: "Tem alguma dúvida?",
      detail: "contato@laercio.me",
    },
    {
      icon: <MdPhone className="text-4xl " />,
      title: "Telefone",
      subtitle: "Você pode ligar a qualquer hora.",
      detail: "+55 45 9859-2126",
    },
  ];
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold ml-3">Como prefere falar comigo?</h1>
      {/* <div className="flex flex-col">
        {contactItems.map((item, idx) => (
          <div key={idx} className="flex flex-col space-y-2  m-10">
            {item.icon}
            <h3 className="text-lg font-semibold ">{item.title}</h3>
            <p className="text-sm text-gray-300">{item.subtitle}</p>
            <p className="text-sm font-semibold">{item.detail}</p>
          </div>
        ))}
      </div> */}

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
              <p className="text-sm font-semibold">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
