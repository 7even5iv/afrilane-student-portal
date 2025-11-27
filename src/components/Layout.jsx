import { Link, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  // Fonction pour savoir si un lien est actif (pour le colorier)
  const isActive = (path) => location.pathname === path ? "bg-blue-800 text-white" : "text-blue-200 hover:bg-blue-800/50";

  return (
    <div className="flex h-screen bg-gray-100 flex-col md:flex-row">
      
      {/* --- SIDEBAR (Visible uniquement sur PC : md:flex) --- */}
      <aside className="hidden md:flex w-64 bg-blue-900 text-white flex-col shadow-xl z-10">
        <div className="p-6 text-2xl font-bold">
          AFRILANE <span className="text-blue-400">Education</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          <Link to="/app" className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive('/app')}`}>
            <LayoutDashboard size={20} /> Tableau de bord
          </Link>
          <Link to="/app/students" className={`flex items-center gap-3 p-3 rounded-lg transition-all ${isActive('/app/students')}`}>
            <Users size={20} /> Étudiants
          </Link>
        </nav>

        <div className="p-4 border-t border-blue-800 mt-auto">
          <Link to="/" className="flex items-center gap-3 p-3 text-red-200 hover:text-white hover:bg-red-900/30 rounded transition-colors">
            <LogOut size={20} /> Déconnexion
          </Link>
        </div>
      </aside>

      {/* --- CONTENU PRINCIPAL --- */}
      <main className="flex-1 p-4 md:p-8 overflow-auto pb-24 md:pb-8"> 
        {/* pb-24 sert à laisser de la place pour la barre du bas sur mobile */}
        <Outlet />
      </main>

      {/* --- BOTTOM BAR (Visible uniquement sur Mobile : md:hidden) --- */}
      <div className="md:hidden fixed bottom-0 w-full bg-blue-900 text-white flex justify-around items-center p-3 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 safe-area-bottom">
        
        <Link to="/app" className={`flex flex-col items-center gap-1 p-2 rounded ${location.pathname === '/app' ? 'text-blue-300' : 'text-gray-400'}`}>
          <LayoutDashboard size={24} />
          <span className="text-[10px]">Accueil</span>
        </Link>

        <div className="w-px h-8 bg-blue-800"></div> {/* Séparateur */}

        <Link to="/app/students" className={`flex flex-col items-center gap-1 p-2 rounded ${location.pathname === '/app/students' ? 'text-blue-300' : 'text-gray-400'}`}>
          <Users size={24} />
          <span className="text-[10px]">Étudiants</span>
        </Link>

        <div className="w-px h-8 bg-blue-800"></div> {/* Séparateur */}

        <Link to="/" className="flex flex-col items-center gap-1 p-2 text-red-300">
          <LogOut size={24} />
          <span className="text-[10px]">Sortir</span>
        </Link>
      </div>

    </div>
  );
}