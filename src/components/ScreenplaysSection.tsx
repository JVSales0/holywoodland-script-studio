
import { Button } from "@/components/ui/button";

// Mock data for screenplay previews
const featuredScreenplays = [
  {
    id: 1,
    title: "A Última Cena",
    author: "Mariana Sousa",
    genre: "Drama",
    likes: 127,
    comments: 42,
    coverImage: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Além do Horizonte",
    author: "Rafael Mendes",
    genre: "Ficção Científica",
    likes: 89,
    comments: 36,
    coverImage: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2025&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Sombras da Cidade",
    author: "Carlos Duarte",
    genre: "Suspense",
    likes: 215,
    comments: 58,
    coverImage: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop",
  },
];

const ScreenplaysSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-hollywood-black to-hollywood-black/95">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
              <span className="text-hollywood-gold">Roteiros</span> em destaque
            </h2>
            <p className="text-lg text-white/70 max-w-2xl">
              Explore os roteiros mais populares da semana. Leia, comente e colabore com os criadores.
            </p>
          </div>
          <Button className="mt-4 lg:mt-0 bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black">
            Ver todos os roteiros
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredScreenplays.map((screenplay) => (
            <div 
              key={screenplay.id} 
              className="group relative rounded-lg overflow-hidden transition-all duration-500 hover:-translate-y-1 film-strip"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-hollywood-black via-transparent to-transparent z-10"></div>
              
              <img 
                src={screenplay.coverImage} 
                alt={screenplay.title} 
                className="w-full h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <div className="flex items-center mb-2">
                  <span className="bg-hollywood-gold/90 text-hollywood-black text-xs font-semibold px-2.5 py-1 rounded">
                    {screenplay.genre}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-hollywood-gold transition-colors">
                  {screenplay.title}
                </h3>
                <p className="text-white/80 mb-3">por {screenplay.author}</p>
                
                <div className="flex items-center text-white/70 text-sm">
                  <div className="flex items-center mr-4">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenplaysSection;
