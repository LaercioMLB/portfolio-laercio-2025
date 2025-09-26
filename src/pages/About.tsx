import HighlightCard from "../components/HighlightCard";
import destaque1 from "../assets/destaque-1.jpeg";
import destaque2 from "../assets/destaque-2.jpeg";

const highlights = [
  {
    image: destaque1,
    content:
      "Finalizando meu primeiro semestre como Docente na Uniamérica, fico muito feliz com...",
    likes: 46,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7348807818948370432/?updateEntityUrn=urn%3Ali%3Afs_feedUpdate%3A%28V2%2Curn%3Ali%3Aactivity%3A7348807818948370432%29",
  },
  {
    image: destaque2,
    content:
      "Com grande satisfação, venho compartilhar a vitória da minha equipe no Hackatour Cataratas, onde ficamos em...",
    likes: 21,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7043719835440025600/",
  },
];

export default function About() {
  return (
    <div>
      <p className="mb-12">
      Sou especialista em Computação em Nuvem, atuando como responsável por arquitetura e operações em nuvem, com sólida experiência em DevOps, integração de sistemas, FinOps e planejamento estratégico de recursos. 
      <br></br>
      <br></br>
      Minha trajetória inclui ampla vivência com servidores em nuvem, sistemas operacionais (principalmente Linux) e recursos de redes, incluindo firewalls, VPNs e práticas de Blue Team, sempre com foco em soluções escaláveis, seguras e de alto desempenho.
      <br></br>
      <br></br>
      Além da atuação corporativa, sou professor de Engenharia de Software, onde compartilho conhecimento e desenvolvo competências de liderança em futuros profissionais da área. Essa experiência acadêmica me permite unir prática de mercado e visão estratégica, contribuindo para a formação de equipes de alta performance e para a evolução tecnológica nas organizações.
      <br></br>
      <br></br>
      Minha carreira é guiada por inovação, eficiência operacional e liderança colaborativa, sempre buscando alavancar resultados através de tecnologias emergentes e boas práticas em computação em nuvem.
      </p>
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
        {highlights.map((highlight, idx) => (
          <HighlightCard
            key={idx}
            image={highlight.image}
            content={highlight.content}
            likes={highlight.likes}
            url={highlight.url}
          />
        ))}
      </div>
    </div>
  );
}
