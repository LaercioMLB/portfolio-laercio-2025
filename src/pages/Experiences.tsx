import ExperienceTimeline from "../components/ExperienceTimeline";
import experiences from "../data/experiences.json";
import academicBackground from "../data/academicBackground.json";

export default function Experiences() {
  return (
    <div className="mb-10">
      <h1 className="text-1xl font-bold mb-4">Experiência</h1>
      <ExperienceTimeline experiences={experiences} />
      <h1 className="text-1xl font-bold mb-4 mt-12">Formação acadêmica</h1>
      <ExperienceTimeline experiences={academicBackground} />
    </div>
  );
}
