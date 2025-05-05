
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVideoLoaded(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className={`transition-opacity duration-1000 ${videoLoaded ? 'opacity-60' : 'opacity-0'}`}>
          <video 
            className="w-full h-full object-cover" 
            autoPlay 
            loop 
            muted 
            playsInline
            onCanPlay={() => setVideoLoaded(true)}
          >
            <source 
              src="https://static.videezy.com/system/resources/previews/000/042/496/original/lights-red-carpet.mp4" 
              type="video/mp4" 
            />
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-hollywood-black/90 via-hollywood-black/70 to-hollywood-black"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 z-20 text-center relative">
        <div className="animate-fade-in">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-white tracking-tighter">
            <span className="text-hollywood-gold drop-shadow-lg">Hollywood</span>
            <span className="text-hollywood-red drop-shadow-lg">land</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-white/90 mb-10 max-w-3xl mx-auto animate-fade-in opacity-0 delay-200">
            Onde histórias ganham rosto e voz
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in opacity-0 delay-300">
            <Button className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black text-xl font-medium py-8 px-10 rounded-md shadow-lg shadow-hollywood-gold/20 transform transition-all duration-300 hover:scale-105">
              Comece seu projeto
            </Button>
            <Button variant="outline" className="border-2 border-hollywood-gold text-hollywood-gold hover:bg-hollywood-gold/10 text-xl font-medium py-8 px-10 rounded-md">
              Conheça a plataforma
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-0 right-0 mx-auto text-center z-20 animate-fade-in opacity-0 delay-500">
          <a href="#features" className="text-white/70 hover:text-white transition-colors">
            <span className="block mb-2">Explore</span>
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
