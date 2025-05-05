
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Plus, Search, Filter } from "lucide-react";

// Mock data for actors
const actors = [
  {
    id: 1,
    name: "Sofia Mendes",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
    age: "28-35",
    location: "São Paulo, Brasil",
    skills: ["drama", "comédia", "teatro"],
    projects: ["Cidade Invisível", "A Noite Estrelada"]
  },
  {
    id: 2,
    name: "Laura Costa",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    age: "22-30",
    location: "Rio de Janeiro, Brasil",
    skills: ["ação", "dança", "idiomas"],
    projects: ["Ventos do Sul", "Sob a Luz da Lua"]
  },
  {
    id: 3,
    name: "Carolina Torres",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
    age: "25-35",
    location: "Belo Horizonte, Brasil",
    skills: ["drama", "canto", "improvisação"],
    projects: ["Entre Mundos", "O Último Verão"]
  },
  {
    id: 4,
    name: "Miguel Alves",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    age: "30-40",
    location: "Porto Alegre, Brasil",
    skills: ["ação", "artes marciais", "dublagem"],
    projects: ["O Caçador", "Fronteira"]
  },
  {
    id: 5,
    name: "Ricardo Duarte",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
    age: "35-45",
    location: "Curitiba, Brasil",
    skills: ["drama", "comédia", "direção"],
    projects: ["Cidade dos Sonhos", "Paralelos"]
  },
  {
    id: 6,
    name: "Juliana Rocha",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
    age: "20-28",
    location: "Brasília, Brasil",
    skills: ["drama", "dança", "teatro musical"],
    projects: ["Amanhecer", "Estrela Cadente"]
  },
  {
    id: 7,
    name: "André Santos",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
    age: "25-35",
    location: "Salvador, Brasil",
    skills: ["comédia", "improvisação", "stand-up"],
    projects: ["Riso Solto", "O Último a Sair"]
  },
  {
    id: 8,
    name: "Fernanda Lima",
    photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    age: "28-38",
    location: "Recife, Brasil",
    skills: ["drama", "teatro", "produção"],
    projects: ["Marés", "A Casa Azul"]
  },
  {
    id: 9,
    name: "Pedro Cavalcanti",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
    age: "30-40",
    location: "Fortaleza, Brasil",
    skills: ["ação", "dublagem", "idiomas"],
    projects: ["Fronteira", "Além do Horizonte"]
  }
];

const Talentos = () => {
  return (
    <div className="min-h-screen bg-hollywood-black text-white film-grain">
      <Navbar />
      
      <div className="vignette">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  <span className="text-hollywood-red">Banco de</span> Talentos
                </h1>
                <p className="text-xl text-white/80 max-w-2xl">
                  Encontre o ator perfeito para seu projeto ou adicione novos talentos à nossa base.
                </p>
              </div>
              
              <Button className="mt-6 md:mt-0 bg-hollywood-red hover:bg-hollywood-red/90 text-white flex items-center space-x-2">
                <Plus size={18} />
                <span>Adicionar ator</span>
              </Button>
            </div>
            
            <div className="bg-muted/30 rounded-lg p-4 mb-10">
              <div className="flex flex-col sm:flex-row items-center mb-4">
                <div className="relative flex-grow mb-4 sm:mb-0 w-full sm:w-auto">
                  <Search className="absolute left-3 top-2.5 h-5 w-5 text-white/50" />
                  <input
                    type="text"
                    placeholder="Buscar por nome, habilidades ou projetos..."
                    className="w-full pl-10 bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hollywood-gold/50"
                  />
                </div>
                
                <Button variant="outline" className="sm:ml-4 border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                  <Filter className="mr-2 h-4 w-4" />
                  Filtros avançados
                </Button>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" className="bg-white/10 border-none text-white hover:bg-white/20">
                  Todos
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  Drama
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  Comédia
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  Ação
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  18-25 anos
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  26-35 anos
                </Button>
                <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                  36+ anos
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {actors.map((actor) => (
                <div 
                  key={actor.id}
                  className="bg-muted/20 backdrop-blur-sm border border-white/10 rounded-lg overflow-hidden hover:border-hollywood-red/50 transition-all duration-300 group"
                >
                  <div className="relative">
                    <img 
                      src={actor.photo} 
                      alt={actor.name} 
                      className="w-full h-72 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-hollywood-black to-transparent h-24"></div>
                    <div className="absolute bottom-4 left-4 text-xs bg-hollywood-black/70 px-2 py-1 rounded text-white/90">
                      {actor.age}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white group-hover:text-hollywood-red transition-colors mb-1">
                      {actor.name}
                    </h3>
                    
                    <p className="text-white/70 text-sm mb-3">{actor.location}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-xs uppercase text-white/50 mb-2">Habilidades</h4>
                      <div className="flex flex-wrap gap-1">
                        {actor.skills.map((skill, index) => (
                          <span 
                            key={index}
                            className="bg-hollywood-red/10 text-white/90 text-xs px-2 py-0.5 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-xs uppercase text-white/50 mb-2">Projetos</h4>
                      <p className="text-white/80 text-sm">
                        {actor.projects.join(', ')}
                      </p>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button className="flex-1 bg-hollywood-red hover:bg-hollywood-red/90 text-white text-sm">
                        Escalar
                      </Button>
                      <Button variant="outline" className="flex-1 border-white/20 text-white hover:bg-white/10 text-sm">
                        Ver perfil
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                Carregar mais talentos
              </Button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Talentos;
