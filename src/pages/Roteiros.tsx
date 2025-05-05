
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Film, Plus, Search } from "lucide-react";

// Mock data for screenplays
const screenplays = [
  {
    id: 1,
    title: "A Última Cena",
    author: "Mariana Sousa",
    genre: "Drama",
    likes: 127,
    comments: 42,
    coverImage: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Uma diretora de fotografia retorna à sua cidade natal para filmar seu último projeto, confrontando memórias e segredos há muito enterrados."
  },
  {
    id: 2,
    title: "Além do Horizonte",
    author: "Rafael Mendes",
    genre: "Ficção Científica",
    likes: 89,
    comments: 36,
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
    excerpt: "Em uma estação espacial isolada, a tripulação descobre sinais de uma civilização desconhecida além do nosso sistema solar."
  },
  {
    id: 3,
    title: "Sombras da Cidade",
    author: "Carlos Duarte",
    genre: "Suspense",
    likes: 215,
    comments: 58,
    coverImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Um detetive aposentado é forçado a retornar ao trabalho quando uma série de crimes começa a replicar casos que ele nunca conseguiu resolver."
  },
  {
    id: 4,
    title: "O Eco das Montanhas",
    author: "Isabel Freitas",
    genre: "Aventura",
    likes: 156,
    comments: 29,
    coverImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop",
    excerpt: "Dois irmãos distantes embarcam em uma jornada pelas montanhas em busca de uma planta rara que pode salvar a vida de seu pai."
  },
  {
    id: 5,
    title: "Vozes do Passado",
    author: "Luiz Gomes",
    genre: "Drama Histórico",
    likes: 178,
    comments: 47,
    coverImage: "https://images.unsplash.com/photo-1591127069900-898bc58155a4?q=80&w=2071&auto=format&fit=crop",
    excerpt: "Durante a restauração de um antigo teatro, uma jovem arquiteta começa a ouvir vozes e testemunhar eventos do passado do local."
  },
  {
    id: 6,
    title: "Contato Zero",
    author: "Ana Castro",
    genre: "Terror",
    likes: 203,
    comments: 61,
    coverImage: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop",
    excerpt: "Após um apagão global de comunicações, os sobreviventes de uma pequena cidade começam a manifestar comportamentos estranhos e violentos."
  }
];

const Roteiros = () => {
  return (
    <div className="min-h-screen bg-hollywood-black text-white film-grain">
      <Navbar />
      
      <div className="vignette">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-hollywood-gold">Roteiros</span> em destaque
                </h1>
                <p className="text-xl text-white/80 max-w-2xl">
                  Explore histórias originais, adaptações e fanfilms criados pela comunidade Hollywoodland.
                </p>
              </div>
              
              <Button className="mt-6 md:mt-0 bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black flex items-center space-x-2">
                <Plus size={18} />
                <span>Novo roteiro</span>
              </Button>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 mb-10 flex flex-col sm:flex-row items-center">
              <div className="relative flex-grow mb-4 sm:mb-0 w-full sm:w-auto">
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
                <input
                  type="text"
                  placeholder="Buscar roteiros por título, autor ou gênero..."
                  className="w-full pl-10 bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hollywood-gold/50"
                />
              </div>
              
              <div className="flex items-center space-x-2 ml-0 sm:ml-4 w-full sm:w-auto">
                <select className="bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-hollywood-gold/50">
                  <option value="">Todos os gêneros</option>
                  <option value="drama">Drama</option>
                  <option value="comedy">Comédia</option>
                  <option value="scifi">Ficção Científica</option>
                  <option value="thriller">Suspense</option>
                  <option value="horror">Terror</option>
                  <option value="adventure">Aventura</option>
                </select>
                
                <select className="bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-hollywood-gold/50">
                  <option value="newest">Mais recentes</option>
                  <option value="popular">Mais populares</option>
                  <option value="comments">Mais comentados</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {screenplays.map((screenplay) => (
                <div 
                  key={screenplay.id} 
                  className="relative rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 film-strip group"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-hollywood-black via-transparent to-transparent z-10"></div>
                  
                  <img 
                    src={screenplay.coverImage} 
                    alt={screenplay.title} 
                    className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-hollywood-gold/90 text-hollywood-black text-xs font-semibold px-2.5 py-1 rounded">
                      {screenplay.genre}
                    </span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-hollywood-gold transition-colors">
                      {screenplay.title}
                    </h3>
                    <p className="text-white/80 mb-3">por {screenplay.author}</p>
                    
                    <p className="text-white/70 mb-4 line-clamp-2">
                      {screenplay.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-white/70 text-sm">
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                          </svg>
                          {screenplay.likes}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                          </svg>
                          {screenplay.comments}
                        </div>
                      </div>
                      
                      <Button size="sm" className="bg-white/10 hover:bg-white/20 text-white text-xs">
                        <Film className="mr-1 h-4 w-4" />
                        Ver roteiro
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Carregar mais roteiros
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Roteiros;
