import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const items = [
    {
      title: "Jornal Nacional",
      description: "Edição do dia 20/05/2025",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=HTtYGnpbfis"
    },
    {
      title: "Fantástico",
      description: "Programa completo - 19/05/2025",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=XxXyYzZz123"
    },
    {
      title: "Plantão da Globo",
      description: "Últimas notícias ao vivo",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=News456"
    },
    {
      title: "Café com Jornal",
      description: "Resumo das principais manchetes",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=Morning123"
    },
    {
      title: "Bom Dia Brasil",
      description: "Jornal da manhã - 21/05/2025",
      category: "Notícias",
      url: "https://www.youtube.com/watch?v=BD2025"
    },
    {
      title: "Anitta - Envolver",
      description: "Clipe oficial",
      category: "Música",
      url: "https://www.youtube.com/watch?v=hFCv2KmU2QE"
    },
    {
      title: "Ludmilla - Socadona",
      description: "Performance ao vivo",
      category: "Música",
      url: "https://www.youtube.com/watch?v=socadona123"
    },
    {
      title: "Marília Mendonça - Infiel",
      description: "Ao vivo em Goiânia",
      category: "Música",
      url: "https://www.youtube.com/watch?v=infiel"
    },
    {
      title: "Luísa Sonza - Penhasco",
      description: "Versão acústica",
      category: "Música",
      url: "https://www.youtube.com/watch?v=penhasco"
    },
    {
      title: "Jorge & Mateus - Sosseguei",
      description: "Show completo",
      category: "Música",
      url: "https://www.youtube.com/watch?v=sosseguei"
    },
    {
      title: "MC Kevin o Chris - Tipo Gin",
      description: "Clipe oficial",
      category: "Música",
      url: "https://www.youtube.com/watch?v=tipogin"
    },
    {
      title: "Projota - Mulher",
      description: "Lyric video",
      category: "Música",
      url: "https://www.youtube.com/watch?v=mulher"
    },
    {
      title: "Racionais MC’s - Negro Drama",
      description: "Ao vivo no Theatro Municipal",
      category: "Música",
      url: "https://www.youtube.com/watch?v=negrodrama"
    },
    {
      title: "O Mundo Segundo os Brasileiros",
      description: "Episódio em Tóquio",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=tokyoepisode"
    },
    {
      title: "Terra: O Poder do Planeta",
      description: "Documentário completo dublado",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=terra01"
    },
    {
      title: "Oceano: Um Planeta Azul",
      description: "BBC Earth Brasil",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=oceano"
    },
    {
      title: "A História do Brasil",
      description: "Série educativa completa",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=historiadobrasil"
    },
    {
      title: "Brasil: Uma História Inacreditável",
      description: "Narrado por Drauzio Varella",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=brasilinacreditavel"
    },
    {
      title: "O Código das Cidades",
      description: "Como o urbanismo molda nossas vidas",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=codigocidades"
    },
    {
      title: "Cidades Fantasmas",
      description: "Exploração urbana no Brasil",
      category: "Documentário",
      url: "https://www.youtube.com/watch?v=cidadesfantasmas"
    }
  ];

  for (const item of items) {
    await prisma.item.create({ data: item });
  }

  console.log("✅ Itens criados com sucesso!");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());