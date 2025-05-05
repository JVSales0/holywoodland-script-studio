
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-hollywood-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-20 flex flex-col items-center justify-center">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">
            <span className="text-hollywood-gold">4</span>
            <span className="text-hollywood-red">0</span>
            <span className="text-hollywood-gold">4</span>
          </h1>
          <p className="text-2xl text-white/70 mb-8">
            Esta cena não existe no nosso roteiro...
          </p>
          <p className="text-lg text-white/50 mb-10">
            A página que você está procurando foi movida, excluída ou nunca existiu.
          </p>
          <Button asChild className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black text-lg py-6 px-8">
            <a href="/">Voltar ao início</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
