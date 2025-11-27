// src/components/Layout.jsx
import { Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut } from 'lucide-react';

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 text-2xl font-bold">
          AFRILANE <span className="text-blue-400">Education</span>
        </div>

        {/* Menu Principal */}
        <nav className="flex-1 px-4 space-y-2">
          {/* Note le changement ici : to="/app" */}
          <Link to="/app" className="flex items-center gap-3 p-3 hover:bg-blue-800 rounded transition-colors">
            <LayoutDashboard size={20} /> Tableau de bord
          </Link>
          
          {/* Note le changement ici : to="/app/students" */}
          <Link to="/app/students" className="flex items-center gap-3 p-3 hover:bg-blue-800 rounded transition-colors">
            <Users size={20} /> Étudiants
          </Link>
        </nav>

        {/* Bouton Déconnexion (Ajouté en bas) */}
        <div className="p-4 border-t border-blue-800 mt-auto">
          <Link to="/" className="flex items-center gap-3 p-3 text-blue-200 hover:text-white hover:bg-red-600/20 rounded transition-colors">
            <LogOut size={20} /> Déconnexion
          </Link>
        </div>
      </aside>

      {/* Contenu Principal */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet /> {/* C'est ici que s'affichent les pages Dashboard ou Students */}
      </main>
    </div>
  );
}