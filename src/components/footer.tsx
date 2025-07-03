export default function Footer() {
  return (
    <footer className="bg-secondary dark:text-white text-black  py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Lucas. Todos os direitos reservados.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-300 transition-colors">
            Política de Privacidade
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
}
