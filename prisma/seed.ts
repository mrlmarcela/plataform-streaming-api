import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const items = [
    {
      title: "Jornal Nacional",
      description: "Edição do dia 20/05/2025",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=HTtYGnpbfis&t=10s",
    },
    {
      title: "Fantástico",
      description: "Programa completo - 19/05/2025",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=y6ny5C7Ofm8",
    },
    {
      title: "Plantão da Globo",
      description: "Últimas notícias ao vivo",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=9PW9NoYx1cw",
    },
    {
      title: "NOTÍCIAS DA MANHÃ - Gazeta do Povo",
      description: "Aldo Rebelo detalha intimidação de Alexandre de Moraes",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=8hl4y7vJ8SQ",
    },
    {
      title: "JORNAL DA MANHÃ - 21/05/2025",
      description: "Joven Pan News",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=iZoR0_tXax8",
    },
    {
      title: "Globo Rural - 25/05/2025",
      description: "Completo",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=yC7BPj9aIOc",
    },
    {
      title: "Anitta - Envolver",
      description: "Clipe oficial",
      category: "Música",
      url: "https://www.youtube.com/watch?v=hFCjGiawJi4",
    },
    {
      title: "Let Me Love You",
      description: "DJ Snake | Sia, Charlie Puth, Paloma Faith",
      category: "Música",
      url: "https://www.youtube.com/watch?v=Z1MuP27SdjI",
    },
    {
      title: "Marília Mendonça - Infiel",
      description: "Ao vivo em Goiânia",
      category: "Música",
      url: "https://www.youtube.com/watch?v=eCyMh-mZ1B0",
    },
    {
      title: "Luísa Sonza - Penhasco",
      description: "Versão acústica",
      category: "Música",
      url: "https://www.youtube.com/watch?v=o5Sg1dIaHCU",
    },
    {
      title: "Jorge & Mateus - Sosseguei",
      description: "Show completo",
      category: "Música",
      url: "https://www.youtube.com/watch?v=vZcjAmfkemk",
    },
    {
      title: "Ed Sheeran - Perfect",
      description: "Clipe oficial",
      category: "Música",
      url: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    },
    {
      title: "Coldplay - Paradise",
      description: "(Official Video)",
      category: "Música",
      url: "https://www.youtube.com/watch?v=1G4isv_Fylg",
    },
    {
      title: "Hear Me Now (Official Music Video)",
      description: "Alok, Bruno Martini feat. Zeeba",
      category: "Música",
      url: "https://www.youtube.com/watch?v=JVpTp8IHdEg",
    },
    {
      title: "O Mundo Segundo os Brasileiros",
      description: "Episódio em Tóquio",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=HMHcIsKwOhQ",
    },
    {
      title: "Terra: O Poder do Planeta",
      description: "Documentário completo dublado",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=Bv4m9YToYQM",
    },
    {
      title: "OCEANO - Os Segredos Revelados",
      description: "Planet Documentários",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=pelR5ZqLdIg",
    },
    {
      title: "A História do Brasil",
      description: "Série educativa completa",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=q7E4XrfGGnE",
    },
    {
      title: "O BRASIL ANTES DE 1500",
      description: "A história que você nunca aprendeu",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=ZUt_OO_C4Eo",
    },
    {
      title: "Novo urbanismo",
      description: "Reinventando Cidades, Conectando Comunidades, Transformando Vidas!",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=8X0aKhr3vdA",
    },
    {
      title: "Cidades Fantasmas",
      description: "Cidades fantasmas do Brasil que você não imaginava que existiam",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=oEReESiZBSE",
    },
  ];

  for (const item of items) {
    await prisma.item.create({ data: item });
  }

  console.log("✅ Itens criados com sucesso!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
