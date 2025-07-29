import {
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaTools,
  FaEye,
  FaChalkboardTeacher,
} from "react-icons/fa";
import services from "../data/services.json";
import ServiceItem from "../components/ServiceItem";

const iconMap = {
  FaCloud,
  FaShieldAlt,
  FaCogs,
  FaTools,
  FaEye,
  FaChalkboardTeacher,
};

export default function Services() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <ServiceItem
              key={service.title}
              icon={Icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </div>
  );
}
