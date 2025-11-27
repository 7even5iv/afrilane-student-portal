// src/components/Layout.jsx
import { Link, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, LogOut } from 'lucide-react'; // Icônes

export default function Layout() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-900 text-white flex flex-col">
        <div className="p-6 text-2xl font-bold">AFRILANE <span className="text-blue-400">Education</span></div>
        <nav className="flex-1 px-4 space-y-2">
          <Link to="/" className="flex items-center gap-3 p-3 hover:bg-blue-800 rounded">
            <LayoutDashboard size={20} /> Tableau de bord
          </Link>
          <Link to="/students" className="flex items-center gap-3 p-3 hover:bg-blue-800 rounded">
            <Users size={20} /> Étudiants
          </Link>
        </nav>
      </aside>

      {/* Contenu Principal */}
      <main className="flex-1 p-8 overflow-auto">
        <Outlet /> {/* C'est ici que s'affichent les pages */}
      </main>
    </div>
  );
}