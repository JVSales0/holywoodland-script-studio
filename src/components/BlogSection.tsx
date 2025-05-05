
// BlogSection.tsx
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "Como Criar Diálogos Autênticos em seus Roteiros",
    excerpt: "Aprenda técnicas para escrever diálogos naturais e envolventes que façam seus personagens ganharem vida.",
    author: "Isabela Rodrigues",
    date: "14 de abril, 2025",
    category: "Escrita Criativa",
    image: "https://images.unsplash.com/photo-1518057111178-44a106bad149?q=80&w=1964&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Tendências de Cinematografia para 2025",
    excerpt: "Descubra as novas tecnologias e estilos visuais que estão moldando o futuro do cinema independente e comercial.",
    author: "Ricardo Almeida",
    date: "2 de abril, 2025",
    category: "Técnicas",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Do Roteiro para as Telas: A Jornada de uma História",
    excerpt: "O processo completo de transformar um roteiro em filme, desde o desenvolvimento até a pós-produção.",
    author: "Carolina Motta",
    date: "28 de março, 2025",
    category: "Produção",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?q=80&w=2070&auto=format&fit=crop"
  }
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-hollywood-black to-hollywood-black/90">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              <span className="text-stroke">Diário de</span> <span className="text-white">Produção</span>
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              Artigos, tutoriais e insights do mundo do cinema e da produção audiovisual.
            </p>
          </div>
          <Button variant="outline" className="mt-4 lg:mt-0 border-white/30 text-white hover:bg-white/5">
            Todos os artigos
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group">
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div>
                <div className="flex items-center mb-3">
                  <span className="bg-white/10 text-white/80 text-xs px-2.5 py-1 rounded">
                    {post.category}
                  </span>
                  <span className="text-white/50 text-xs ml-2">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-hollywood-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-white/70 mb-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-hollywood-gold/20 flex items-center justify-center text-hollywood-gold">
                    {post.author.charAt(0)}
                  </div>
                  <span className="text-white/60 text-sm ml-2">
                    {post.author}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6 max-w-3xl mx-auto">
            Compartilhe seu conhecimento com a comunidade. Escreva artigos sobre sua experiência 
            no cinema e ajude outros profissionais a evoluírem.
          </p>
          <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
            Quero escrever um artigo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
