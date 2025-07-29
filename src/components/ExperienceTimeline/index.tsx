type Experience = {
  role: string;
  company: string;
  period: string;
  duration: string;
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
              ({exp.period} · {exp.duration})
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceTimeline;
