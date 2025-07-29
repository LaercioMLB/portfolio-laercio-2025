import { useNavigate } from "react-router-dom";
import confused from "../assets/confused.gif";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-3xl font-bold mb-8">404 - Página não encontrada</h1>
      <img src={confused} alt="Profile" className="h-100 mb-20" />
      <button
        onClick={() => navigate("/")}
        className="bg-black text-white font-bold rounded px-6 py-2 hover:bg-gray-800 transition"
      >
        Voltar para Home
      </button>
    </div>
  );
}
