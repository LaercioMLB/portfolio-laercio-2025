import { HiOutlineExternalLink } from "react-icons/hi";

type Experience = {
  role: string;
  company: string;
  period: string;
  duration: string;
  credentialUrl?: string;
};

type Props = {
  experiences: Experience[];
};

const ExperienceTimeline = ({ experiences }: Props) => {
  return (
    <div className="relative flex flex-col">
      {experiences.map((exp, index) => (
        <div key={index} className="relative flex items-start pb-12">
          {/* Linha vertical */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />

          {/* Ponto */}
          <div className="relative z-10 w-3.5 h-3.5 rounded-full bg-gray-700 mt-1 ml-[10px]" />

          {/* Conteúdo */}
          <div className="ml-6">
            <h3 className="font-semibold italic">{exp.role}</h3>
            <p className="text-sm text-gray-800">{exp.company}</p>
            <p className="text-sm text-gray-500">
              ({exp.period}
              {exp.duration && ` · ${exp.duration}`})
            </p>
            {exp.credentialUrl && exp.credentialUrl.trim() !== "" && (
              <a
                href={exp.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-black border border-gray-300 rounded-full px-3 py-1 text-xs mt-1 font-medium hover:bg-gray-100 transition-colors"
              >
                Exibir credencial
                <HiOutlineExternalLink className="w-4 h-4 ml-2" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
