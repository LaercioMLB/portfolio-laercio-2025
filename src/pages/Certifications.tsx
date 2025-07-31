import ExperienceTimeline from "../components/ExperienceTimeline";
import certifications from "../data/certifications.json";

export default function Certifications() {
  return (
    <div className="mb-10">
      <ExperienceTimeline experiences={certifications} />
    </div>
  );
}
