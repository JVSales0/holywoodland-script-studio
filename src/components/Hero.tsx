
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-pattern">
      <div className="absolute inset-0 bg-hollywood-black/70 z-10"></div>
      <div className="container mx-auto px-4 md:px-6 z-20 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white animate-fade-in">
          <span className="text-hollywood-gold">Hollywood</span>
          <span className="text-hollywood-red">land</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in opacity-0 delay-200">
          Onde histórias ganham rosto e voz. A plataforma definitiva para criadores e produtores de cinema.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in opacity-0 delay-300">
          <Button className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black text-lg py-6 px-8">
            Para criadores
          </Button>
          <Button variant="outline" className="border-hollywood-gold text-hollywood-gold hover:bg-hollywood-gold/10 text-lg py-6 px-8">
            Para produtores
          </Button>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 mx-auto text-center z-20 animate-fade-in opacity-0 delay-500">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">
            <span className="block mb-2">Descubra mais</span>
            <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
      
      <div className="absolute -bottom-10 left-0 w-full h-20 bg-gradient-to-t from-hollywood-black to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
