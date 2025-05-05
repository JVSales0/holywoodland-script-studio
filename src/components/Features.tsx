
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "Roteiros",
    description: "Crie, compartilhe e receba feedback sobre seus roteiros. Plataforma colaborativa com ferramentas de formatação profissional.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
      </svg>
    ),
    link: "/roteiros"
  },
  {
    title: "Elenco",
    description: "Cadastre personagens, encontre atores ideais e faça o matching perfeito para seu projeto com nossa base de dados visual.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    link: "/elenco"
  },
  {
    title: "Blog",
    description: "Artigos sobre escrita criativa, direção de cinema e tendências da indústria. Aprenda com especialistas e compartilhe conhecimento.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
        <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
      </svg>
    ),
    link: "/blog"
  },
  {
    title: "Comunidade",
    description: "Conecte-se com roteiristas, diretores e produtores. Crie parcerias e transforme suas ideias em produções reais.",
    icon: (
      <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
      </svg>
    ),
    link: "/contato"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-hollywood-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-hollywood-gold">
            Descubra o Holywoodland
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Nossa plataforma reúne tudo que você precisa para dar vida às suas histórias,
            desde a criação do roteiro até a escalação do elenco perfeito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <a 
              href={feature.link}
              key={index}
              className="group"
            >
              <Card className="bg-muted/30 border-hollywood-gold/20 backdrop-blur-sm h-full transition-all duration-300 hover:border-hollywood-gold/50 hover:bg-muted/40 spotlight">
                <CardHeader className="pb-2">
                  <div className="text-hollywood-gold mb-4 transition-colors duration-300 group-hover:text-hollywood-gold">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-hollywood-gold text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-white/70 group-hover:text-white/90 transition-colors duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
