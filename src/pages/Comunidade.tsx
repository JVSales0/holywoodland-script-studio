
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { MessageSquare, ThumbsUp, Share2, Calendar, Users, Film } from "lucide-react";

// Mock data for community posts
const communityPosts = [
  {
    id: 1,
    author: {
      name: "Mariana Costa",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      role: "Roteirista"
    },
    content: "Acabei de finalizar o primeiro rascunho do meu novo roteiro 'Memórias de Outono'. Alguém se interessa em dar feedback antes de eu submeter para produção?",
    timestamp: "Há 2 horas",
    likes: 24,
    comments: 8,
    tags: ["feedback", "roteiro", "drama"]
  },
  {
    id: 2,
    author: {
      name: "Ricardo Almeida",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop",
      role: "Diretor"
    },
    content: "Estou procurando um ator entre 40-50 anos para um papel de pai em um curta-metragem que vou dirigir no próximo mês. Filmagens em São Paulo, 3 dias. Alguém interessado ou pode indicar alguém?",
    timestamp: "Há 5 horas",
    likes: 15,
    comments: 12,
    tags: ["casting", "curta-metragem", "São Paulo"]
  },
  {
    id: 3,
    author: {
      name: "Julia Mendonça",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
      role: "Atriz/Produtora"
    },
    content: "Queria compartilhar com vocês que nosso projeto 'Além das Sombras' foi selecionado para o Festival de Cinema Independente! Obrigada a todos que colaboraram e deram feedback aqui na plataforma! 🎬🎉",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2069&auto=format&fit=crop",
    timestamp: "Há 1 dia",
    likes: 89,
    comments: 27,
    tags: ["festival", "celebração", "filme independente"]
  }
];

// Mock data for upcoming events
const upcomingEvents = [
  {
    id: 1,
    title: "Workshop de Roteiro",
    date: "15 maio, 2025",
    time: "19:00 - 21:00",
    location: "Online (Zoom)",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop",
    attendees: 56
  },
  {
    id: 2,
    title: "Q&A com Diretores",
    date: "20 maio, 2025",
    time: "20:00 - 21:30",
    location: "Online (YouTube Live)",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
    attendees: 124
  },
  {
    id: 3,
    title: "Encontro Presencial SP",
    date: "28 maio, 2025",
    time: "18:30 - 22:00",
    location: "Cinemateca Brasileira, São Paulo",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    attendees: 43
  }
];

const Comunidade = () => {
  return (
    <div className="min-h-screen bg-hollywood-black text-white film-grain">
      <Navbar />
      
      <div className="vignette">
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="text-hollywood-gold">Comunidade</span> Hollywoodland
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto">
                Conecte-se com outros criadores, compartilhe ideias e participe de eventos exclusivos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Feed principal */}
              <div className="lg:col-span-2 space-y-6">
                {/* Input para postar */}
                <div className="bg-muted/20 rounded-lg border border-white/10 p-4">
                  <div className="flex items-start space-x-4">
                    <img 
                      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" 
                      alt="Avatar do usuário" 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-grow">
                      <textarea 
                        placeholder="Compartilhe ideias, projetos ou faça perguntas para a comunidade..." 
                        className="w-full bg-muted/30 border border-white/10 rounded-lg p-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hollywood-gold/50 resize-none min-h-[100px]"
                      ></textarea>
                      
                      <div className="flex justify-between items-center mt-3">
                        <div className="flex items-center space-x-3">
                          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 text-sm">
                            <Film className="mr-2 h-4 w-4" />
                            Projeto
                          </Button>
                          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 text-sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Evento
                          </Button>
                          <Button variant="ghost" className="text-white/70 hover:text-white hover:bg-white/10 text-sm">
                            <Users className="mr-2 h-4 w-4" />
                            Marcar
                          </Button>
                        </div>
                        
                        <Button className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black">
                          Publicar
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Posts */}
                {communityPosts.map((post) => (
                  <div 
                    key={post.id} 
                    className="bg-muted/20 rounded-lg border border-white/10 p-6"
                  >
                    <div className="flex items-start space-x-4">
                      <img 
                        src={post.author.avatar} 
                        alt={post.author.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      
                      <div className="flex-grow">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="font-semibold text-white">{post.author.name}</h3>
                            <p className="text-white/60 text-sm">{post.author.role} • {post.timestamp}</p>
                          </div>
                          
                          <Button variant="ghost" size="sm" className="text-white/60 hover:text-white">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="8" cy="4" r="1" fill="currentColor" />
                              <circle cx="8" cy="8" r="1" fill="currentColor" />
                              <circle cx="8" cy="12" r="1" fill="currentColor" />
                            </svg>
                          </Button>
                        </div>
                        
                        <div className="mt-3">
                          <p className="text-white/90 whitespace-pre-line">{post.content}</p>
                          
                          {post.image && (
                            <div className="mt-4">
                              <img 
                                src={post.image} 
                                alt="Post image" 
                                className="rounded-lg w-full h-auto max-h-96 object-cover"
                              />
                            </div>
                          )}
                          
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-4">
                              {post.tags.map((tag) => (
                                <span 
                                  key={tag} 
                                  className="bg-white/10 hover:bg-white/20 text-white/80 text-xs px-3 py-1 rounded-full cursor-pointer transition-colors"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                          
                          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
                            <div className="flex items-center space-x-6">
                              <Button variant="ghost" size="sm" className="text-white/70 hover:text-hollywood-gold hover:bg-transparent">
                                <ThumbsUp className="mr-1.5 h-4 w-4" />
                                {post.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="text-white/70 hover:text-hollywood-gold hover:bg-transparent">
                                <MessageSquare className="mr-1.5 h-4 w-4" />
                                {post.comments}
                              </Button>
                            </div>
                            
                            <Button variant="ghost" size="sm" className="text-white/70 hover:text-hollywood-gold hover:bg-transparent">
                              <Share2 className="mr-1.5 h-4 w-4" />
                              Compartilhar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="flex justify-center">
                  <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                    Carregar mais publicações
                  </Button>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Eventos */}
                <div className="bg-muted/20 rounded-lg border border-white/10 p-5">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-hollywood-gold" />
                    Próximos Eventos
                  </h2>
                  
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div 
                        key={event.id} 
                        className="flex space-x-3 pb-4 border-b border-white/10 last:border-0"
                      >
                        <img 
                          src={event.image} 
                          alt={event.title} 
                          className="w-16 h-16 rounded object-cover"
                        />
                        
                        <div>
                          <h3 className="font-semibold text-white">{event.title}</h3>
                          <p className="text-white/70 text-sm">{event.date} • {event.time}</p>
                          <p className="text-white/60 text-xs">{event.location}</p>
                          <div className="mt-1 text-xs text-white/60">{event.attendees} participantes</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4 border-white/20 text-white hover:bg-white/10">
                    Ver todos os eventos
                  </Button>
                </div>
                
                {/* Tags populares */}
                <div className="bg-muted/20 rounded-lg border border-white/10 p-5">
                  <h2 className="text-xl font-bold mb-4">Tags Populares</h2>
                  
                  <div className="flex flex-wrap gap-2">
                    {["roteiro", "direção", "produção", "atuação", "casting", "filmagem", "curta-metragem", "cinema independente", "workshop", "feedback", "colaboração", "tecnologia"].map((tag) => (
                      <span 
                        key={tag} 
                        className="bg-white/10 hover:bg-white/20 text-white/80 text-xs px-3 py-1 rounded-full cursor-pointer transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Sugestões de conexões */}
                <div className="bg-muted/20 rounded-lg border border-white/10 p-5">
                  <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-hollywood-gold" />
                    Sugestões para Conectar
                  </h2>
                  
                  <div className="space-y-4">
                    {[
                      {name: "Roberto Alves", role: "Diretor", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop"},
                      {name: "Ana Ferreira", role: "Roteirista", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"},
                      {name: "Paulo Santos", role: "Produtor", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop"}
                    ].map((person, index) => (
                      <div 
                        key={index} 
                        className="flex items-center justify-between pb-4 border-b border-white/10 last:border-0 last:pb-0"
                      >
                        <div className="flex items-center space-x-3">
                          <img 
                            src={person.avatar} 
                            alt={person.name} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h3 className="font-semibold text-white">{person.name}</h3>
                            <p className="text-white/60 text-sm">{person.role}</p>
                          </div>
                        </div>
                        
                        <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                          Conectar
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Comunidade;
