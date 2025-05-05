
import { Button } from "@/components/ui/button";

// Mock character and actor data
const castingSample = {
  character: {
    name: "Elena Monteiro",
    age: "30-35",
    description: "Ambiciosa diretora de fotografia com um passado misterioso.",
    traits: ["determinada", "criativa", "reservada"]
  },
  potentialActors: [
    {
      id: 1,
      name: "Sofia Mendes",
      photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop",
      match: "93%",
      projects: ["Cidade Invisível", "A Noite Estrelada"]
    },
    {
      id: 2,
      name: "Laura Costa",
      photo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
      match: "87%",
      projects: ["Ventos do Sul", "Sob a Luz da Lua"]
    },
    {
      id: 3,
      name: "Carolina Torres",
      photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1888&auto=format&fit=crop",
      match: "79%",
      projects: ["Entre Mundos", "O Último Verão"]
    }
  ]
};

const CastingSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-hollywood-black/95 to-hollywood-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              <span className="text-hollywood-red">Elenco</span> perfeito para sua história
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              Crie perfis de personagens detalhados e encontre os atores ideais para seus papéis.
            </p>
          </div>
          <Button className="mt-4 lg:mt-0 bg-hollywood-red hover:bg-hollywood-red/90 text-white">
            Criar novo personagem
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Character Profile */}
          <div className="col-span-1 bg-muted/30 backdrop-blur-sm border border-hollywood-red/20 rounded-lg p-6 hover:border-hollywood-red/40 transition-all duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Personagem</h3>
              <span className="bg-hollywood-red/20 text-hollywood-red text-xs px-2.5 py-1 rounded">
                Protagonista
              </span>
            </div>
            
            <h4 className="text-2xl font-bold text-hollywood-red mb-2">{castingSample.character.name}</h4>
            <p className="text-white/80 mb-1">Idade: {castingSample.character.age}</p>
            <p className="text-white/80 mb-4">{castingSample.character.description}</p>
            
            <div className="mb-4">
              <h5 className="text-sm uppercase text-white/60 mb-2">Características</h5>
              <div className="flex flex-wrap gap-2">
                {castingSample.character.traits.map((trait, index) => (
                  <span 
                    key={index}
                    className="bg-hollywood-red/10 text-white/90 text-xs px-2.5 py-1 rounded-full"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </div>
            
            <Button variant="outline" className="w-full border-hollywood-red/50 text-hollywood-red hover:bg-hollywood-red/10">
              Editar perfil
            </Button>
          </div>

          {/* Matching Actors */}
          <div className="col-span-1 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {castingSample.potentialActors.map((actor) => (
              <div
                key={actor.id}
                className="bg-muted/30 backdrop-blur-sm border border-hollywood-gold/20 rounded-lg overflow-hidden transition-all duration-300 hover:border-hollywood-gold/50 group"
              >
                <div className="relative">
                  <img 
                    src={actor.photo} 
                    alt={actor.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-0 right-0 m-3">
                    <div className="bg-hollywood-gold/90 text-hollywood-black text-xs font-bold px-2.5 py-1 rounded-full">
                      Match: {actor.match}
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-semibold text-white group-hover:text-hollywood-gold transition-colors">
                    {actor.name}
                  </h4>
                  
                  <div className="mt-2">
                    <h5 className="text-xs uppercase text-white/50 mb-1">Projetos anteriores</h5>
                    <div className="flex flex-wrap gap-1">
                      {actor.projects.map((project, index) => (
                        <span 
                          key={index}
                          className="text-white/80 text-xs"
                        >
                          {project}{index < actor.projects.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs border-white/20 text-white/80 hover:bg-white/5">
                      Perfil completo
                    </Button>
                    <Button size="sm" className="flex-1 text-xs bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black">
                      Escolher
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-white/70 mb-6 max-w-3xl mx-auto">
            Nossa tecnologia de matching analisa mais de 50 características para encontrar 
            o ator perfeito para cada papel, baseado no perfil do personagem que você criar.
          </p>
          <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20">
            Explorar banco de talentos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CastingSection;
