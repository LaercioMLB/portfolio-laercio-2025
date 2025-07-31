import { HiOutlineExternalLink } from "react-icons/hi";

type Certifications = {
  role: string;
  company: string;
  credentialUrl?: string;
  logoUrl?: string;
};

type Props = {
  certifications: Certifications[];
};

const CertificationsCards = ({ certifications }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {certifications.map((exp, index) => (
        <div
          key={index}
          className="bg-white  rounded-lg p-4 flex flex-col justify-between"
        >
          <div>
            {exp.logoUrl && (
              <img
                src={exp.logoUrl}
                alt={exp.company + " logo"}
                className="w-10 h-10 object-contain mb-2 rounded-md"
              />
            )}
            <h3 className="font-bold mb-1">{exp.role}</h3>
          </div>
          {exp.credentialUrl && exp.credentialUrl.trim() !== "" && (
            <a
              href={exp.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black border border-gray-300 rounded-full px-3 py-1 text-xs font-medium hover:bg-gray-100 transition-colors self-start mt-2"
            >
              Exibir credencial
              <HiOutlineExternalLink className="w-4 h-4 ml-2" />
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default CertificationsCards;
