// src/pages/Login.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, Loader2 } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation connexion
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 1500);
  };

  return (
    // CONTENEUR PRINCIPAL (Prend tout l'écran)
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden">
      
      {/* --- 1. L'IMAGE DE FOND (Background) --- */}
      <div className="absolute inset-0 z-0">
        {/* L'image (Serveurs / Réseau) */}
        <img 
          src="/bg-login.jpg" 
          alt="Background Servers" 
          className="w-full h-full object-cover"
        />
        {/* Le Voile Bleu (Overlay) pour rendre le texte lisible */}
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply"></div>
      </div>

      {/* --- 2. LE CONTENU (Formulaire) --- */}
      {/* z-10 permet de passer au-dessus de l'image */}
      <div className="relative z-10 w-full max-w-md">
        
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-500 backdrop-blur-sm">
          
          {/* En-tête */}
          <div className="bg-blue-600 p-8 text-center relative overflow-hidden">
             {/* Petit effet déco */}
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-5 rounded-full scale-150 translate-y-10"></div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-4">
                <img 
                  src="/logo.png" 
                  alt="Logo Afrilane" 
                  className="h-20 w-auto bg-white rounded-lg p-2 shadow-lg object-contain"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
              </div>
              <h1 className="text-3xl font-bold text-white tracking-wide">AFRILANE</h1>
              <p className="text-blue-100 mt-2 text-sm font-medium uppercase tracking-wider">Portail de Gestion Académique</p>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Identifiant</label>
              <div className="relative">
                <User className="absolute left-3 top-3 text-gray-400" size={20} />
                <input 
                  type="text" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@afrilane.com" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 focus:bg-white"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••" 
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition bg-gray-50 focus:bg-white"
                  required 
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <>Se connecter <ArrowRight size={20} /></>}
            </button>

            <div className="text-center mt-6 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">Accès sécurisé réservé au personnel.</p>
            </div>
          </form>
        </div>
        
        {/* Footer en bas de page (Copyright) */}
        <p className="text-center text-blue-100/60 text-xs mt-8">
          © 2025 Afrilane Network Expert - Tous droits réservés.
        </p>

      </div>
    </div>
  );
}