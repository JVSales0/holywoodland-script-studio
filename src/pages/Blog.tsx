
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Como escrever diálogos que parecem reais",
    excerpt: "Aprenda técnicas para criar conversas naturais que desenvolvem seus personagens e avançam a trama.",
    author: "Marina Campos",
    date: "3 de maio, 2025",
    category: "Roteiro",
    image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min"
  },
  {
    id: 2,
    title: "Os 5 erros mais comuns de roteiristas iniciantes",
    excerpt: "Descubra os equívocos frequentes que podem prejudicar seu roteiro e como evitá-los desde o início.",
    author: "Carlos Mendonça",
    date: "29 de abril, 2025",
    category: "Dicas",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2069&auto=format&fit=crop",
    readTime: "5 min"
  },
  {
    id: 3,
    title: "A importância da trilha sonora no cinema contemporâneo",
    excerpt: "Uma análise sobre como a música se tornou um personagem essencial nas narrativas cinematográficas.",
    author: "Beatriz Oliveira",
    date: "24 de abril, 2025",
    category: "Produção",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    readTime: "9 min"
  },
  {
    id: 4,
    title: "Como preparar atores para cenas emocionalmente intensas",
    excerpt: "Técnicas para diretores conduzirem seus atores através de momentos dramáticos complexos.",
    author: "Roberto Alves",
    date: "18 de abril, 2025",
    category: "Direção",
    image: "https://images.unsplash.com/photo-1582053628662-c65b0e0b0f7f?q=80&w=2070&auto=format&fit=crop",
    readTime: "8 min"
  },
  {
    id: 5,
    title: "Tendências de cinematografia para 2026",
    excerpt: "Um panorama das inovações técnicas e estéticas que estão transformando a linguagem visual do cinema.",
    author: "Paulo Siqueira",
    date: "12 de abril, 2025",
    category: "Tendências",
    image: "https://images.unsplash.com/photo-1595859703065-2259982784bb?q=80&w=2070&auto=format&fit=crop",
    readTime: "6 min"
  },
  {
    id: 6,
    title: "O processo de escalação: além da aparência física",
    excerpt: "Como encontrar o ator perfeito para um papel vai muito além de simplesmente buscar semelhanças visuais.",
    author: "Gabriela Monteiro",
    date: "5 de abril, 2025",
    category: "Casting",
    image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?q=80&w=2070&auto=format&fit=crop",
    readTime: "7 min"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-hollywood-black text-white film-grain">
      <Navbar />
      
      <div className="vignette">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-hollywood-gold">Blog</span> Hollywoodland
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Dicas, tutoriais e inspiração para roteiristas, diretores e amantes de cinema.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-between items-center mb-10">
              <div className="flex items-center space-x-2 mb-4 sm:mb-0">
                <Button variant="outline" className="bg-muted/30 border-white/10 text-white hover:bg-white/10">
                  Todos
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                  Roteiro
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                  Direção
                </Button>
                <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10">
                  Casting
                </Button>
              </div>
              
              <div className="w-full sm:w-auto">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar artigos..."
                    className="w-full sm:w-60 bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hollywood-gold/50"
                  />
                  <svg className="w-5 h-5 absolute right-3 top-2.5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <div key={post.id} className="group bg-muted/20 rounded-lg overflow-hidden border border-white/10 hover:border-hollywood-gold/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-0 right-0 m-4 bg-hollywood-black/80 text-xs text-white/90 px-2 py-1 rounded">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-white/60 mb-3">
                      <span className="mr-3">{post.date}</span>
                      <span>•</span>
                      <span className="ml-3">{post.readTime} leitura</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-hollywood-gold transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/80 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        Por <span className="text-hollywood-gold">{post.author}</span>
                      </div>
                      
                      <Button variant="ghost" className="text-hollywood-gold hover:text-hollywood-gold hover:bg-hollywood-gold/10">
                        Ler mais
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Carregar mais artigos
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
