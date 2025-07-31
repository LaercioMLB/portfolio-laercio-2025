import CertificationsCards from "../components/CertificationsCards";

import certifications from "../data/certifications.json";

export default function Certifications() {
  return (
    <div className="mb-10">
      <CertificationsCards certifications={certifications} />
    </div>
  );
}
