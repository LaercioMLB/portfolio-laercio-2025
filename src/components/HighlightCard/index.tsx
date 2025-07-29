import celebrateIcon from "../../assets/celebrate.png";
import likeIcon from "../../assets/like.png";

type HighlightCardProps = {
  image: string;
  content: string;
  likes: number;
  url: string;
};

export default function HighlightCard({
  image,
  content,
  likes,
  url,
}: HighlightCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow mb-6 max-w-lg mt-6 transition-transform duration-300 ease-in-out hover:scale-105">
        <p className="text-gray-700 px-2 pt-3 text-xs">Publicação</p>
        <p className="text-gray-700 px-2 py-3 min-h-24">{content}</p>
        <img src={image} alt={"image"} className="w-full h-80 mb-3" />
        <div className="flex items-center space-x-2 px-2 pb-3">
          <img src={likeIcon} alt="Like" className="w-4 h-4" />
          <img
            src={celebrateIcon}
            alt="Celebrate"
            className="w-4 h-4 ml-[-12px]"
          />
          <span className=" text-gray-600 font-semibold">{likes}</span>
        </div>
      </div>
    </a>
  );
}
