
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-hollywood-black/90 to-hollywood-black">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              <span className="text-hollywood-gold">Comunidade</span> & Contato
            </h2>
            <p className="text-lg text-white/70 mb-6">
              Junte-se à nossa comunidade de criadores e transforme suas ideias em realidade. 
              Conecte-se com outros profissionais e expanda sua rede.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-hollywood-gold/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-hollywood-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-hollywood-gold mb-1">Networking Profissional</h3>
                  <p className="text-white/70">
                    Conecte-se com diretores, produtores, roteiristas e atores. Encontre colaboradores 
                    para seus projetos ou oportunidades para trabalhar no cinema.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-hollywood-gold/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-hollywood-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-hollywood-gold mb-1">Suporte Especializado</h3>
                  <p className="text-white/70">
                    Nossa equipe de especialistas está pronta para ajudar com dúvidas sobre a plataforma, 
                    questões técnicas ou orientações sobre o mercado audiovisual.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-hollywood-gold/10 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-hollywood-gold" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-hollywood-gold mb-1">Feedback da Comunidade</h3>
                  <p className="text-white/70">
                    Receba comentários e sugestões sobre seus roteiros de uma comunidade 
                    diversa e experiente. Evolua com críticas construtivas.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-hollywood-black/60 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <h3 className="text-xl font-bold text-white mb-4">Entre em contato</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-white/70 mb-1">
                    Nome
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Seu nome" 
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-hollywood-gold"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-white/70 mb-1">
                    Email
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@email.com" 
                    className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-hollywood-gold"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm text-white/70 mb-1">
                  Assunto
                </label>
                <Input 
                  id="subject" 
                  placeholder="Como podemos ajudar?" 
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-hollywood-gold"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-white/70 mb-1">
                  Mensagem
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Descreva sua mensagem em detalhes..." 
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-hollywood-gold min-h-32"
                />
              </div>
              
              <Button className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black w-full">
                Enviar mensagem
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
