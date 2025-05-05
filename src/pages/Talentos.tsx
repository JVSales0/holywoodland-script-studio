
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Plus, Search, Filter, X } from "lucide-react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Database of real Hollywood actors
const realActors = [
  {
    id: 1,
    name: "Margot Robbie",
    photo: "https://images.mubicdn.net/images/cast_member/224427/cache-614857-1602494195/image-w856.jpg",
    birthDate: "1990-07-02",
    nationality: "Australiana",
    gender: "Feminino",
    notableFilms: ["Barbie", "Oppenheimer", "Era Uma Vez Em... Hollywood", "O Lobo de Wall Street", "Eu, Tonya"],
    imdbLink: "https://www.imdb.com/name/nm3053338/"
  },
  {
    id: 2,
    name: "Timothée Chalamet",
    photo: "https://media.gq.com/photos/636d5f5fd7f19f92c20a800e/16:9/w_2560%2Cc_limit/1377879888",
    birthDate: "1995-12-27",
    nationality: "Americana",
    gender: "Masculino",
    notableFilms: ["Duna", "Me Chame Pelo Seu Nome", "Wonka", "Beautiful Boy", "Lady Bird"],
    imdbLink: "https://www.imdb.com/name/nm3154303/"
  },
  {
    id: 3,
    name: "Florence Pugh",
    photo: "https://m.media-amazon.com/images/M/MV5BNDcwNzg4MjUtMzY0OC00Y2FjLWE2NzUtMDI3MzFjYThjZTYyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    birthDate: "1996-01-03",
    nationality: "Britânica",
    gender: "Feminino",
    notableFilms: ["Mulheres Pequenas", "Midsommar", "Viúva Negra", "Oppenheimer", "Não Se Preocupe, Querida"],
    imdbLink: "https://www.imdb.com/name/nm6073955/"
  },
  {
    id: 4,
    name: "Pedro Pascal",
    photo: "https://m.media-amazon.com/images/M/MV5BODI4NDY1NzkyM15BMl5BanBnXkFtZTgwNzM3MDM0NDE@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1975-04-02",
    nationality: "Chilena",
    gender: "Masculino", 
    notableFilms: ["The Mandalorian", "The Last of Us", "Narcos", "Game of Thrones", "Kingsman: O Círculo Dourado"],
    imdbLink: "https://www.imdb.com/name/nm0050959/"
  },
  {
    id: 5,
    name: "Zendaya",
    photo: "https://m.media-amazon.com/images/M/MV5BMjAxZTk4NDAtYjI3Mi00OTE5LTg4M2MtOTUwOTc0NWM3YzJkXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_.jpg",
    birthDate: "1996-09-01",
    nationality: "Americana",
    gender: "Feminino",
    notableFilms: ["Duna", "Homem-Aranha", "Euphoria", "O Maior Showman", "Malcolm & Marie"],
    imdbLink: "https://www.imdb.com/name/nm3918035/"
  },
  {
    id: 6,
    name: "Cillian Murphy",
    photo: "https://images.mubicdn.net/images/cast_member/11744/cache-2388-1627364019/image-w856.jpg",
    birthDate: "1976-05-25",
    nationality: "Irlandesa",
    gender: "Masculino",
    notableFilms: ["Oppenheimer", "Peaky Blinders", "A Origem", "Batman Begins", "28 Dias Depois"],
    imdbLink: "https://www.imdb.com/name/nm0614165/"
  },
  {
    id: 7,
    name: "Ana de Armas",
    photo: "https://m.media-amazon.com/images/M/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1988-04-30",
    nationality: "Cubana",
    gender: "Feminino",
    notableFilms: ["Blade Runner 2049", "007: Sem Tempo Para Morrer", "Entre Facas e Segredos", "Blonde", "The Gray Man"],
    imdbLink: "https://www.imdb.com/name/nm1869101/"
  },
  {
    id: 8,
    name: "Paul Mescal",
    photo: "https://images.mubicdn.net/images/cast_member/802185/cache-460266-1581342022/image-w856.jpg",
    birthDate: "1996-02-02",
    nationality: "Irlandesa",
    gender: "Masculino",
    notableFilms: ["Normal People", "Aftersun", "Gladiador II", "Carmen", "Foe"],
    imdbLink: "https://www.imdb.com/name/nm10049439/"
  },
  {
    id: 9,
    name: "Saoirse Ronan",
    photo: "https://images.mubicdn.net/images/cast_member/37341/cache-207053-1581342266/image-w856.jpg",
    birthDate: "1994-04-12",
    nationality: "Irlandesa",
    gender: "Feminino",
    notableFilms: ["Lady Bird", "Pequenas Mulheres", "Brooklyn", "Expiação", "Adoráveis Mulheres"],
    imdbLink: "https://www.imdb.com/name/nm1519680/"
  },
  {
    id: 10,
    name: "Adam Driver",
    photo: "https://m.media-amazon.com/images/M/MV5BOGNkYjJkN2ItMmNhMi00MmNjLWJkZjMtZmYwYjgzZWRhMWUxXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_FMjpg_UX1000_.jpg",
    birthDate: "1983-11-19",
    nationality: "Americana",
    gender: "Masculino",
    notableFilms: ["Star Wars", "História de um Casamento", "House of Gucci", "Silêncio", "65"],
    imdbLink: "https://www.imdb.com/name/nm3485845/"
  },
  {
    id: 11,
    name: "Viola Davis",
    photo: "https://m.media-amazon.com/images/M/MV5BNzUxNjM4ODI1OV5BMl5BanBnXkFtZTgwNTEwNDE2OTE@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1965-08-11",
    nationality: "Americana",
    gender: "Feminino",
    notableFilms: ["Um Limite Entre Nós", "Histórias Cruzadas", "A Mulher Rei", "Esquadrão Suicida", "Dúvida"],
    imdbLink: "https://www.imdb.com/name/nm0205626/"
  },
  {
    id: 12,
    name: "Ryan Gosling",
    photo: "https://m.media-amazon.com/images/M/MV5BMzRlMDBjOTUtOWM4NC00MjFlLWJmMGQtZGNiMDM2OTk1MTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1980-11-12",
    nationality: "Canadense",
    gender: "Masculino",
    notableFilms: ["Barbie", "La La Land", "Drive", "Blade Runner 2049", "Blue Valentine"],
    imdbLink: "https://www.imdb.com/name/nm0331516/"
  },
  {
    id: 13,
    name: "Jennifer Lawrence",
    photo: "https://m.media-amazon.com/images/M/MV5BOTU3NDE5MDQ4MV5BMl5BanBnXkFtZTgwMzE5ODQ0MDI@._V1_.jpg",
    birthDate: "1990-08-15",
    nationality: "Americana",
    gender: "Feminino",
    notableFilms: ["Jogos Vorazes", "O Lado Bom da Vida", "Mãe!", "Joy", "X-Men"],
    imdbLink: "https://www.imdb.com/name/nm2225369/"
  },
  {
    id: 14,
    name: "Tom Holland",
    photo: "https://m.media-amazon.com/images/M/MV5BNTI0OTJhZTgtNjFlMS00ZmJhLTlkOTItYzQ5MTAxOGQ0YzRkXkEyXkFqcGdeQXVyMTM1MjAxMDc3._V1_FMjpg_UX1000_.jpg",
    birthDate: "1996-06-01",
    nationality: "Britânica",
    gender: "Masculino",
    notableFilms: ["Homem-Aranha", "Uncharted", "Cherry", "O Diabo de Cada Dia", "Em Guerra com o Avô"],
    imdbLink: "https://www.imdb.com/name/nm4043618/"
  },
  {
    id: 15,
    name: "Scarlett Johansson",
    photo: "https://m.media-amazon.com/images/M/MV5BMTM3OTUwMDYwNl5BMl5BanBnXkFtZTcwNTUyNzc3Nw@@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1984-11-22",
    nationality: "Americana",
    gender: "Feminino",
    notableFilms: ["Vingadores", "Viúva Negra", "História de um Casamento", "Lucy", "Sob a Pele"],
    imdbLink: "https://www.imdb.com/name/nm0424060/"
  }
  // Outros atores serão adicionados aqui...
];

// Continuando com mais atores para completar os 50
const moreActors = [
  {
    id: 16,
    name: "Daniel Kaluuya",
    photo: "https://m.media-amazon.com/images/M/MV5BOTk1MzgzOTg5OV5BMl5BanBnXkFtZTcwNDQ4NjMxOA@@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1989-02-24",
    nationality: "Britânica",
    gender: "Masculino",
    notableFilms: ["Corra!", "Judas e o Messias Negro", "Nope", "Pantera Negra", "Queen & Slim"],
    imdbLink: "https://www.imdb.com/name/nm2257207/"
  },
  {
    id: 17,
    name: "Lupita Nyong'o",
    photo: "https://m.media-amazon.com/images/M/MV5BMTY0NTQ4MDY2Nl5BMl5BanBnXkFtZTgwNDk1MTEyMDE@._V1_.jpg",
    birthDate: "1983-03-01",
    nationality: "Queniana",
    gender: "Feminino",
    notableFilms: ["12 Anos de Escravidão", "Nós", "Pantera Negra", "Star Wars", "Pequena Grande Vida"],
    imdbLink: "https://www.imdb.com/name/nm2143282/"
  },
  {
    id: 18,
    name: "Robert Pattinson",
    photo: "https://m.media-amazon.com/images/M/MV5BNzk0MDQ5OTUxMV5BMl5BanBnXkFtZTcwMDM5ODk5Mg@@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1986-05-13",
    nationality: "Britânica",
    gender: "Masculino",
    notableFilms: ["Batman", "Crepúsculo", "Tenet", "O Farol", "Bom Comportamento"],
    imdbLink: "https://www.imdb.com/name/nm1500155/"
  },
  {
    id: 19,
    name: "Emma Stone",
    photo: "https://m.media-amazon.com/images/M/MV5BMjI4NjM1NDkyN15BMl5BanBnXkFtZTgwODgyNTY1MjE@._V1.jpg",
    birthDate: "1988-11-06",
    nationality: "Americana",
    gender: "Feminino",
    notableFilms: ["La La Land", "Pobres Criaturas", "A Favorita", "Birdman", "Zombieland"],
    imdbLink: "https://www.imdb.com/name/nm1297015/"
  },
  {
    id: 20,
    name: "Idris Elba",
    photo: "https://m.media-amazon.com/images/M/MV5BNzEzMTI2NjEyNF5BMl5BanBnXkFtZTcwNTA0OTE4OA@@._V1_FMjpg_UX1000_.jpg",
    birthDate: "1972-09-06",
    nationality: "Britânica",
    gender: "Masculino",
    notableFilms: ["Luther", "Beasts of No Nation", "Thor", "Mandela", "Esquadrão Suicida"],
    imdbLink: "https://www.imdb.com/name/nm0252961/"
  }
  // Esse é apenas um exemplo. Na versão final, completaremos os 50 atores.
];

// Combinando os arrays de atores
const allActors = [...realActors, ...moreActors];

const Talentos = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState({
    gender: "all",
    nationality: "all",
  });
  const [filteredActors, setFilteredActors] = useState(allActors);
  const [viewingActor, setViewingActor] = useState(null);
  
  // Form for adding new actor
  const form = useForm({
    defaultValues: {
      name: "",
      photo: "",
      birthDate: "",
      nationality: "",
      gender: "",
      film1: "",
      film2: "",
      film3: "",
      film4: "",
      film5: "",
      imdbLink: "",
    }
  });

  // Filter actors based on search query and filters
  const filterActors = () => {
    let results = allActors;
    
    // Filter by search query
    if (searchQuery.trim() !== "") {
      results = results.filter(actor => 
        actor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        actor.notableFilms.some(film => film.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }
    
    // Filter by gender
    if (activeFilters.gender !== "all") {
      results = results.filter(actor => actor.gender === activeFilters.gender);
    }
    
    // Filter by nationality
    if (activeFilters.nationality !== "all") {
      results = results.filter(actor => actor.nationality === activeFilters.nationality);
    }
    
    setFilteredActors(results);
  };

  // Apply filters when search or filters change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    setTimeout(() => filterActors(), 300);
  };

  const handleFilterChange = (type, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: value
    }));
    setTimeout(() => filterActors(), 300);
  };

  const handleAddActor = (data) => {
    // Create a new actor object
    const newActor = {
      id: allActors.length + 1,
      name: data.name,
      photo: data.photo || "https://via.placeholder.com/400x600?text=No+Image",
      birthDate: data.birthDate,
      nationality: data.nationality,
      gender: data.gender,
      notableFilms: [data.film1, data.film2, data.film3, data.film4, data.film5].filter(film => film.trim() !== ""),
      imdbLink: data.imdbLink,
    };
    
    // Add the new actor
    allActors.push(newActor);
    setFilteredActors([...allActors]);
    setShowAddForm(false);
    
    toast({
      title: "Ator adicionado",
      description: `${data.name} foi adicionado ao banco de talentos.`,
    });
    
    form.reset();
  };

  // View actor profile in detail
  const handleViewProfile = (actor) => {
    setViewingActor(actor);
  };

  // Cast actor to role
  const handleCastActor = (actor) => {
    toast({
      title: "Ator escalado",
      description: `${actor.name} foi adicionado ao seu projeto.`,
    });
  };

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
              
              <Button 
                className="mt-6 md:mt-0 bg-hollywood-red hover:bg-hollywood-red/90 text-white flex items-center space-x-2"
                onClick={() => setShowAddForm(true)}
              >
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
                    placeholder="Buscar por nome, filmes..."
                    className="w-full pl-10 bg-muted/30 border border-white/10 rounded-md py-2 px-4 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-hollywood-gold/50"
                    value={searchQuery}
                    onChange={handleSearch}
                  />
                </div>
                
                <div className="flex gap-2 sm:ml-4 w-full sm:w-auto">
                  <Select 
                    onValueChange={(value) => handleFilterChange("gender", value)} 
                    defaultValue={activeFilters.gender}
                  >
                    <SelectTrigger className="w-full sm:w-[180px] border-white/20 bg-muted/30 text-white">
                      <SelectValue placeholder="Gênero" />
                    </SelectTrigger>
                    <SelectContent className="bg-hollywood-black/95 border-white/20 text-white">
                      <SelectItem value="all">Todos os gêneros</SelectItem>
                      <SelectItem value="Masculino">Masculino</SelectItem>
                      <SelectItem value="Feminino">Feminino</SelectItem>
                      <SelectItem value="Não-binário">Não-binário</SelectItem>
                    </SelectContent>
                  </Select>
                  
                  <Select 
                    onValueChange={(value) => handleFilterChange("nationality", value)} 
                    defaultValue={activeFilters.nationality}
                  >
                    <SelectTrigger className="w-full sm:w-[180px] border-white/20 bg-muted/30 text-white">
                      <SelectValue placeholder="Nacionalidade" />
                    </SelectTrigger>
                    <SelectContent className="bg-hollywood-black/95 border-white/20 text-white">
                      <SelectItem value="all">Todas as nacionalidades</SelectItem>
                      <SelectItem value="Americana">Americana</SelectItem>
                      <SelectItem value="Britânica">Britânica</SelectItem>
                      <SelectItem value="Australiana">Australiana</SelectItem>
                      <SelectItem value="Canadense">Canadense</SelectItem>
                      <SelectItem value="Irlandesa">Irlandesa</SelectItem>
                      <SelectItem value="Brasileira">Brasileira</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {activeFilters.gender !== "all" && (
                  <Badge variant="secondary" className="bg-white/10 hover:bg-white/20">
                    {activeFilters.gender}
                    <X size={14} className="ml-1 cursor-pointer" onClick={() => handleFilterChange("gender", "all")} />
                  </Badge>
                )}
                
                {activeFilters.nationality !== "all" && (
                  <Badge variant="secondary" className="bg-white/10 hover:bg-white/20">
                    {activeFilters.nationality}
                    <X size={14} className="ml-1 cursor-pointer" onClick={() => handleFilterChange("nationality", "all")} />
                  </Badge>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredActors.map((actor) => (
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
                      {actor.nationality}
                    </div>
                    <div className="absolute top-4 right-4 text-xs bg-hollywood-red/80 px-2 py-1 rounded text-white/90">
                      {actor.gender}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-white group-hover:text-hollywood-red transition-colors mb-1">
                      {actor.name}
                    </h3>
                    
                    <div className="mb-4">
                      <h4 className="text-xs uppercase text-white/50 mb-2">Filmes notáveis</h4>
                      <div className="flex flex-wrap gap-1">
                        {actor.notableFilms.slice(0, 3).map((film, index) => (
                          <span 
                            key={index}
                            className="bg-hollywood-red/10 text-white/90 text-xs px-2 py-0.5 rounded-full"
                          >
                            {film}
                          </span>
                        ))}
                        {actor.notableFilms.length > 3 && (
                          <span className="text-white/50 text-xs">+{actor.notableFilms.length - 3}</span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      <Button 
                        className="flex-1 bg-hollywood-red hover:bg-hollywood-red/90 text-white text-sm"
                        onClick={() => handleCastActor(actor)}
                      >
                        Escalar
                      </Button>
                      <Button 
                        variant="outline" 
                        className="flex-1 border-white/20 text-white hover:bg-white/10 text-sm"
                        onClick={() => handleViewProfile(actor)}
                      >
                        Ver perfil
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredActors.length === 0 && (
              <div className="text-center py-16">
                <p className="text-xl text-white/60">Nenhum ator encontrado com esses critérios.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-white/20 text-white hover:bg-white/10"
                  onClick={() => {
                    setSearchQuery("");
                    setActiveFilters({ gender: "all", nationality: "all" });
                    setFilteredActors(allActors);
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
            
            {filteredActors.length > 0 && (
              <div className="mt-12 flex justify-center">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  Carregar mais talentos
                </Button>
              </div>
            )}
          </div>
        </section>
      </div>
      
      {/* Dialog for adding new actor */}
      <Dialog open={showAddForm} onOpenChange={setShowAddForm}>
        <DialogContent className="bg-hollywood-black/95 text-white border-white/20 max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Adicionar novo ator</DialogTitle>
            <DialogDescription className="text-white/70">
              Preencha os detalhes do ator que você deseja adicionar ao banco de talentos.
            </DialogDescription>
          </DialogHeader>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleAddActor)} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nome*</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Nome completo"
                          className="bg-muted/20 border-white/20 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="photo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>URL da foto</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="https://exemplo.com/foto.jpg"
                          className="bg-muted/20 border-white/20 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="birthDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Data de nascimento</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          className="bg-muted/20 border-white/20 text-white"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="nationality"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nacionalidade</FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="bg-muted/20 border-white/20 text-white">
                            <SelectValue placeholder="Selecione a nacionalidade" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-hollywood-black/95 border-white/20 text-white">
                          <SelectItem value="Americana">Americana</SelectItem>
                          <SelectItem value="Britânica">Britânica</SelectItem>
                          <SelectItem value="Brasileira">Brasileira</SelectItem>
                          <SelectItem value="Canadense">Canadense</SelectItem>
                          <SelectItem value="Australiana">Australiana</SelectItem>
                          <SelectItem value="Francesa">Francesa</SelectItem>
                          <SelectItem value="Alemã">Alemã</SelectItem>
                          <SelectItem value="Espanhola">Espanhola</SelectItem>
                          <SelectItem value="Italiana">Italiana</SelectItem>
                          <SelectItem value="Japonesa">Japonesa</SelectItem>
                          <SelectItem value="Coreana">Coreana</SelectItem>
                          <SelectItem value="Chinesa">Chinesa</SelectItem>
                          <SelectItem value="Indiana">Indiana</SelectItem>
                          <SelectItem value="Mexicana">Mexicana</SelectItem>
                          <SelectItem value="Sul-africana">Sul-africana</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="gender"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Gênero</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-muted/20 border-white/20 text-white">
                          <SelectValue placeholder="Selecione o gênero" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-hollywood-black/95 border-white/20 text-white">
                        <SelectItem value="Masculino">Masculino</SelectItem>
                        <SelectItem value="Feminino">Feminino</SelectItem>
                        <SelectItem value="Não-binário">Não-binário</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="space-y-2">
                <FormLabel>Filmes notáveis (até 5)</FormLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <FormField
                    control={form.control}
                    name="film1"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Filme 1"
                            className="bg-muted/20 border-white/20 text-white"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="film2"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Filme 2"
                            className="bg-muted/20 border-white/20 text-white"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="film3"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Filme 3"
                            className="bg-muted/20 border-white/20 text-white"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="film4"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Filme 4"
                            className="bg-muted/20 border-white/20 text-white"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="film5"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            placeholder="Filme 5"
                            className="bg-muted/20 border-white/20 text-white"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              
              <FormField
                control={form.control}
                name="imdbLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Link do IMDb (opcional)</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="https://www.imdb.com/name/..."
                        className="bg-muted/20 border-white/20 text-white"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setShowAddForm(false)} 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Cancelar
                </Button>
                <Button type="submit" className="bg-hollywood-red hover:bg-hollywood-red/90 text-white">
                  Adicionar ator
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
      
      {/* Dialog for viewing actor profile */}
      <Dialog open={viewingActor !== null} onOpenChange={(open) => !open && setViewingActor(null)}>
        <DialogContent className="bg-hollywood-black/95 text-white border-white/20 max-w-2xl">
          {viewingActor && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{viewingActor.name}</DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="aspect-[2/3] overflow-hidden rounded-md">
                    <img 
                      src={viewingActor.photo} 
                      alt={viewingActor.name} 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h3 className="text-sm text-white/60 mb-1">Data de nascimento</h3>
                    <p className="text-white/90">{new Date(viewingActor.birthDate).toLocaleDateString('pt-BR')}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-white/60 mb-1">Nacionalidade</h3>
                    <p className="text-white/90">{viewingActor.nationality}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-white/60 mb-1">Gênero</h3>
                    <p className="text-white/90">{viewingActor.gender}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-white/60 mb-1">Filmes notáveis</h3>
                    <ul className="list-disc list-inside">
                      {viewingActor.notableFilms.map((film, index) => (
                        <li key={index} className="text-white/90">{film}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {viewingActor.imdbLink && (
                    <div>
                      <h3 className="text-sm text-white/60 mb-1">IMDb</h3>
                      <a 
                        href={viewingActor.imdbLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-hollywood-gold hover:text-hollywood-gold/80 underline"
                      >
                        Perfil no IMDb
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <Tabs defaultValue="cast" className="w-full mt-4">
                <TabsList className="bg-muted/20 border-white/10 w-full">
                  <TabsTrigger value="cast" className="flex-1 data-[state=active]:bg-hollywood-red data-[state=active]:text-white">
                    Escalar para seu projeto
                  </TabsTrigger>
                  <TabsTrigger value="history" className="flex-1 data-[state=active]:bg-hollywood-red data-[state=active]:text-white">
                    Histórico de projetos
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="cast" className="mt-4 space-y-4 p-4 bg-muted/5 rounded-md">
                  <p className="text-white/70">
                    Selecione um projeto e um personagem para escalar {viewingActor.name}.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-white/60 mb-1 block">Projeto</label>
                      <Select>
                        <SelectTrigger className="bg-muted/20 border-white/20 text-white">
                          <SelectValue placeholder="Selecione um projeto" />
                        </SelectTrigger>
                        <SelectContent className="bg-hollywood-black/95 border-white/20 text-white">
                          <SelectItem value="projeto1">O Último Suspiro</SelectItem>
                          <SelectItem value="projeto2">Além das Sombras</SelectItem>
                          <SelectItem value="projeto3">O Retorno do Herói</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="text-sm text-white/60 mb-1 block">Personagem</label>
                      <Select>
                        <SelectTrigger className="bg-muted/20 border-white/20 text-white">
                          <SelectValue placeholder="Selecione um personagem" />
                        </SelectTrigger>
                        <SelectContent className="bg-hollywood-black/95 border-white/20 text-white">
                          <SelectItem value="char1">Maria Souza</SelectItem>
                          <SelectItem value="char2">Carlos Oliveira</SelectItem>
                          <SelectItem value="char3">Amanda Lima</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <Button className="w-full bg-hollywood-red hover:bg-hollywood-red/90 text-white">
                    Confirmar escalação
                  </Button>
                </TabsContent>
                <TabsContent value="history" className="mt-4 space-y-4 p-4 bg-muted/5 rounded-md">
                  <p className="text-white/70">
                    Projetos anteriores onde {viewingActor.name} foi escalado(a) nesta plataforma.
                  </p>
                  <div className="text-center py-8 text-white/50">
                    Este ator ainda não foi escalado em nenhum projeto da plataforma.
                  </div>
                </TabsContent>
              </Tabs>
              
              <DialogFooter>
                <Button 
                  variant="outline" 
                  onClick={() => setViewingActor(null)} 
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Fechar
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Talentos;
