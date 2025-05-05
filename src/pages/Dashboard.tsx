
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Plus, Film, Users, Star, Edit, Calendar, Bookmark, Settings, Bell, Eye } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-hollywood-black text-white film-grain">
      <Navbar />
      
      <div className="vignette">
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2080&auto=format&fit=crop" 
                    alt="Avatar do usuário" 
                    className="w-16 h-16 rounded-full object-cover border-2 border-hollywood-gold"
                  />
                  <button className="absolute bottom-0 right-0 bg-hollywood-gold rounded-full p-1">
                    <Edit className="h-3 w-3 text-hollywood-black" />
                  </button>
                </div>
                
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">Bem-vindo, Miguel!</h1>
                  <p className="text-white/70">Roteirista | Diretor | São Paulo</p>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0 flex items-center space-x-3">
                <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                  <Bell className="mr-2 h-4 w-4" />
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-hollywood-red opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-hollywood-red"></span>
                  </span>
                </Button>
                <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                  <Settings className="mr-2 h-4 w-4" />
                  Configurações
                </Button>
                <Button size="sm" className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black">
                  <Plus className="mr-2 h-4 w-4" />
                  Novo Projeto
                </Button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-muted/20 rounded-lg border border-white/10 p-4 mb-6">
                  <nav className="space-y-1">
                    <a href="#" className="flex items-center space-x-3 text-white p-3 rounded-md bg-white/10">
                      <Film className="h-5 w-5 text-hollywood-gold" />
                      <span>Meus Projetos</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-white/70 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <Users className="h-5 w-5" />
                      <span>Meu Elenco</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-white/70 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <Star className="h-5 w-5" />
                      <span>Favoritos</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-white/70 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <Calendar className="h-5 w-5" />
                      <span>Eventos</span>
                    </a>
                    <a href="#" className="flex items-center space-x-3 text-white/70 p-3 rounded-md hover:bg-white/10 transition-colors">
                      <Bookmark className="h-5 w-5" />
                      <span>Salvos</span>
                    </a>
                  </nav>
                </div>
                
                <div className="bg-muted/20 rounded-lg border border-white/10 p-4">
                  <h3 className="text-lg font-semibold mb-3">Estatísticas</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Projetos</span>
                      <span className="text-white font-medium">8</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Roteiros</span>
                      <span className="text-white font-medium">12</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Personagens</span>
                      <span className="text-white font-medium">27</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Elenco</span>
                      <span className="text-white font-medium">18</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Visualizações</span>
                      <span className="text-white font-medium">345</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Curtidas</span>
                      <span className="text-white font-medium">86</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Main content */}
              <div className="lg:col-span-3 space-y-6">
                {/* Projects */}
                <div className="bg-muted/20 rounded-lg border border-white/10 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold">Meus Projetos</h2>
                    <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
                      Ver todos
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      {
                        title: "O Último Suspiro",
                        poster: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
                        progress: 85,
                        type: "Original"
                      },
                      {
                        title: "Além do Horizonte",
                        poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
                        progress: 60,
                        type: "Adaptação"
                      },
                      {
                        title: "Novo Projeto",
                        poster: null,
                        progress: 0,
                        type: "Criar"
                      }
                    ].map((project, index) => (
                      <div 
                        key={index} 
                        className={`rounded-lg overflow-hidden border ${
                          project.poster ? 'border-white/10 hover:border-hollywood-gold/50' : 'border-dashed border-white/30'
                        } transition-all duration-300 hover:-translate-y-1 ${project.poster ? '' : 'flex items-center justify-center'}`}
                      >
                        {project.poster ? (
                          <>
                            <div className="relative h-40">
                              <img 
                                src={project.poster} 
                                alt={project.title} 
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-hollywood-black to-transparent"></div>
                              <div className="absolute top-2 right-2 bg-hollywood-black/80 text-xs text-white/90 px-2 py-1 rounded">
                                {project.type}
                              </div>
                            </div>
                            <div className="p-3">
                              <h3 className="font-semibold mb-1">{project.title}</h3>
                              <div className="w-full bg-white/10 rounded-full h-1.5 mb-2">
                                <div className="bg-hollywood-gold h-1.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
                              </div>
                              <div className="flex justify-between text-xs">
                                <span className="text-white/70">Progresso</span>
                                <span className="text-white/90">{project.progress}%</span>
                              </div>
                            </div>
                          </>
                        ) : (
                          <div className="p-10 text-center">
                            <Plus className="h-10 w-10 text-white/40 mx-auto mb-2" />
                            <p className="text-white/60">Novo Projeto</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Recent Activity */}
                <div className="bg-muted/20 rounded-lg border border-white/10 p-6">
                  <h2 className="text-xl font-bold mb-5">Atividade Recente</h2>
                  
                  <div className="space-y-4">
                    {[
                      {
                        action: "editou o roteiro",
                        project: "O Último Suspiro",
                        time: "Há 2 horas",
                        icon: <Edit className="h-4 w-4 text-white" />
                      },
                      {
                        action: "adicionou um personagem em",
                        project: "Além do Horizonte",
                        time: "Há 1 dia",
                        icon: <Users className="h-4 w-4 text-white" />
                      },
                      {
                        action: "escalou Sofia Mendes como 'Elena' em",
                        project: "O Último Suspiro",
                        time: "Há 2 dias",
                        icon: <Star className="h-4 w-4 text-white" />
                      },
                      {
                        action: "recebeu 5 curtidas em",
                        project: "Além do Horizonte",
                        time: "Há 3 dias",
                        icon: <Eye className="h-4 w-4 text-white" />
                      }
                    ].map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3 pb-4 border-b border-white/10 last:border-0 last:pb-0">
                        <div className="bg-white/10 rounded-full p-2">
                          {activity.icon}
                        </div>
                        
                        <div>
                          <p className="text-white/90">
                            Você {activity.action} <span className="text-hollywood-gold">{activity.project}</span>
                          </p>
                          <p className="text-white/60 text-sm">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Feedback & Reviews */}
                <div className="bg-muted/20 rounded-lg border border-white/10 p-6">
                  <div className="flex justify-between items-center mb-5">
                    <h2 className="text-xl font-bold">Feedbacks Recebidos</h2>
                    <Button variant="ghost" size="sm" className="text-white/70 hover:text-white hover:bg-white/10">
                      Ver todos
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      {
                        user: "Carolina Torres",
                        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
                        project: "O Último Suspiro",
                        comment: "Adorei a construção do personagem principal! A cena do confronto final ficou especialmente impressionante.",
                        rating: 5,
                        time: "Há 1 dia"
                      },
                      {
                        user: "Ricardo Duarte",
                        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1974&auto=format&fit=crop",
                        project: "Além do Horizonte",
                        comment: "Conceito interessante, mas acho que o segundo ato precisa de mais desenvolvimento. Podemos conversar sobre isso?",
                        rating: 3,
                        time: "Há 4 dias"
                      }
                    ].map((feedback, index) => (
                      <div key={index} className="bg-white/5 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <img 
                              src={feedback.avatar} 
                              alt={feedback.user} 
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                              <h4 className="font-semibold">{feedback.user}</h4>
                              <p className="text-white/60 text-sm">sobre <span className="text-hollywood-gold">{feedback.project}</span></p>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i}
                                className={`h-4 w-4 ${i < feedback.rating ? 'text-hollywood-gold' : 'text-white/20'}`} 
                                fill={i < feedback.rating ? 'currentColor' : 'none'}
                              />
                            ))}
                          </div>
                        </div>
                        
                        <p className="text-white/80">{feedback.comment}</p>
                        
                        <div className="flex justify-between items-center mt-3">
                          <span className="text-white/50 text-sm">{feedback.time}</span>
                          <Button variant="ghost" size="sm" className="text-white/70 hover:text-hollywood-gold hover:bg-transparent">
                            Responder
                          </Button>
                        </div>
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

export default Dashboard;
