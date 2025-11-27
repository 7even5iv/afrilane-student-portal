// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  
  // États pour les champs (même si on ne vérifie pas encore le mot de passe)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'une connexion sécurisée (délai de 1.5 secondes)
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app'); // Redirection vers le tableau de bord
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* En-tête avec Logo et Titre */}
        <div className="bg-blue-600 p-8 text-center relative overflow-hidden">
          {/* Cercle décoratif en fond */}
          <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 rounded-full scale-150 translate-y-10"></div>
          
          <div className="relative z-10">
            {/* LOGO AFRILANE */}
            <div className="flex justify-center mb-4">
              <img 
                src="/logo.png" 
                alt="Logo Afrilane" 
                className="h-20 w-auto bg-white rounded-lg p-2 shadow-lg object-contain"
                onError={(e) => { e.target.style.display = 'none'; }} // Cache l'image si elle n'existe pas encore
              />
            </div>
            
            <h1 className="text-3xl font-bold text-white tracking-wide">AFRILANE</h1>
            <p className="text-blue-100 mt-2 text-sm font-medium uppercase tracking-wider">Portail de Gestion Académique</p>
          </div>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleLogin} className="p-8 space-y-6">
          
          {/* Champ Identifiant */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Identifiant / Matricule</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@afrilane.com" 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white"
                required 
              />
            </div>
          </div>

          {/* Champ Mot de passe */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50 focus:bg-white"
                required 
              />
            </div>
          </div>

          {/* Bouton de Connexion */}
          <button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin" /> Connexion en cours...
              </>
            ) : (
              <>
                Se connecter <ArrowRight size={20} />
              </>
            )}
          </button>

          {/* Pied de page */}
          <div className="text-center mt-6 pt-4 border-t border-gray-100">
            <p className="text-xs text-gray-400">
              Accès réservé au personnel administratif et technique.
            </p>
            <p className="text-xs text-gray-300 mt-1">Version 1.0.4 - Build 2025</p>
          </div>
        </form>
      </div>
    </div>
  );
}