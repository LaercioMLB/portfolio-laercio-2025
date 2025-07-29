import type { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  description: string;
};

const ServiceItem = ({ icon: Icon, title, description }: Props) => {
  return (
    <div className="flex flex-col items-start space-y-2 max-w-xs mb-6">
      <div className="bg-black p-2 rounded">
        <Icon className="text-white w-5 h-5" />
      </div>
      <h4 className="font-bold">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default ServiceItem;
