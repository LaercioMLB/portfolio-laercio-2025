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
        Com mais de 4 anos na área de Infraestrutura de T.I, consegui consolidar
        meus conhecimentos em redes e segurança, trazendo para o universo cloud,
        aonde tenho sólida experiência em cotação de valores para AWS cloud,
        gerenciamento de infraestrutura e operações cloud, junto com a segurança
        para garantir uma solida defesa como Blue Team, implementando
        ferramentas e analisando insights para segurança da organização.
        Utilizando IaC, conseguindo subir em questão de minutos toda uma
        infraestrutura nova para o projeto! Tudo isso unindo junto com a minha
        experiência com a cultura DevOps, onde além de subir uma infraestrutura
        automatizada, faço toda parte de automação de deploy do sistema e sua
        observabilidade para garantir mais segurança.
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
