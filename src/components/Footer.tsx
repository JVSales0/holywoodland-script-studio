
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-hollywood-black border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Hollywood<span className="text-hollywood-red">land</span>
            </h3>
            <p className="text-white/70 mb-6">
              A plataforma definitiva para criadores e produtores de cinema, onde histórias ganham rosto e voz.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Twitter" className="text-white/60 hover:text-hollywood-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-white/60 hover:text-hollywood-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 100 10 5 5 0 000-10zm6.5-.25a1.25 1.25 0 10-2.5 0 1.25 1.25 0 002.5 0zM12 9a3 3 0 110 6 3 3 0 010-6z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/60 hover:text-hollywood-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-white/60 hover:text-hollywood-gold transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.543 6.498C22 8.28 22 12 22 12s0 3.72-.457 5.502c-.254.985-.997 1.76-1.938 2.022C17.896 20 12 20 12 20s-5.893 0-7.605-.476c-.945-.266-1.687-1.04-1.938-2.022C2 15.72 2 12 2 12s0-3.72.457-5.502c.254-.985.997-1.76 1.938-2.022C6.107 4 12 4 12 4s5.896 0 7.605.476c.945.266 1.687 1.04 1.938 2.022zM10 15.5l6-3.5-6-3.5v7z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Navegação Rápida</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/70 hover:text-hollywood-gold transition-colors">Página Inicial</a>
              </li>
              <li>
                <a href="/roteiros" className="text-white/70 hover:text-hollywood-gold transition-colors">Roteiros</a>
              </li>
              <li>
                <a href="/elenco" className="text-white/70 hover:text-hollywood-gold transition-colors">Elenco</a>
              </li>
              <li>
                <a href="/blog" className="text-white/70 hover:text-hollywood-gold transition-colors">Blog</a>
              </li>
              <li>
                <a href="/contato" className="text-white/70 hover:text-hollywood-gold transition-colors">Contato</a>
              </li>
              <li>
                <a href="/login" className="text-white/70 hover:text-hollywood-gold transition-colors">Login / Cadastro</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Recursos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-hollywood-gold transition-colors">Templates de Roteiro</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-hollywood-gold transition-colors">Banco de Talentos</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-hollywood-gold transition-colors">Tutoriais</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-hollywood-gold transition-colors">Comunidade</a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-hollywood-gold transition-colors">FAQ</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-white/70 mb-4">
              Cadastre-se para receber novidades, dicas e oportunidades do mundo do cinema.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 rounded-l-lg px-4 py-2 focus:outline-none focus:border-hollywood-gold"
              />
              <button
                type="submit"
                className="bg-hollywood-gold hover:bg-hollywood-gold/90 text-hollywood-black font-medium px-4 rounded-r-lg"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © {currentYear} Holywoodland. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/50 hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white/50 hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
