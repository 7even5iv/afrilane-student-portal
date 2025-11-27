// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulation d'une connexion sécurisée (délai de 1.5 secondes)
    setTimeout(() => {
      // Ici on pourrait vérifier un vrai mot de passe
      setIsLoading(false);
      navigate('/app'); // Redirection vers le tableau de bord
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        
        {/* En-tête */}
        <div className="bg-blue-600 p-8 text-center">
          <h1 className="text-3xl font-bold text-white tracking-wide">AFRILANE</h1>
          <p className="text-blue-100 mt-2 text-sm">Portail de Gestion Académique</p>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identifiant / Matricule</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="admin@afrilane.com" 
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required 
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                required 
              />
            </div>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" /> Connexion...
              </>
            ) : (
              <>
                Se connecter <ArrowRight size={20} />
              </>
            )}
          </button>

          <p className="text-center text-xs text-gray-400 mt-4">
            Accès réservé au personnel administratif d'Afrilane.
          </p>
        </form>
      </div>
    </div>
  );
}