import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, User, ArrowRight, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Login() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/app');
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-slate-900">
      
      {/* --- FOND ANIMÉ --- */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="/bg-login.jpg" 
          alt="Server Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80 mix-blend-multiply backdrop-blur-[2px]"></div>
      </motion.div>

      {/* --- CONTENU --- */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-700 to-blue-600 p-8 text-center relative overflow-hidden">
             <motion.div 
               initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full border border-white/10 border-dashed"
             />
            
            <div className="relative z-10">
              <motion.img 
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                src="/logo.png" 
                alt="Logo" 
                className="h-20 w-auto mx-auto bg-white rounded-xl p-2 shadow-lg mb-4"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <h1 className="text-3xl font-bold text-white tracking-wide">AFRILANE</h1>
              <p className="text-blue-100 mt-2 text-xs font-bold uppercase tracking-[0.2em]">Portail Académique</p>
            </div>
          </div>

          {/* Formulaire */}
          <form onSubmit={handleLogin} className="p-8 space-y-6">
            <div className="space-y-4">
              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1 group-focus-within:text-blue-600 transition-colors">Identifiant</label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                  <input 
                    type="text" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@afrilane.com" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required 
                  />
                </div>
              </div>

              <div className="group">
                <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1 group-focus-within:text-blue-600 transition-colors">Mot de passe</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={20} />
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••" 
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    required 
                  />
                </div>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              type="submit" 
              disabled={isLoading}
              className="w-full bg-blue-700 hover:bg-blue-600 text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-lg shadow-blue-900/20"
            >
              {isLoading ? <Loader2 className="animate-spin" /> : <>Se connecter <ArrowRight size={20} /></>}
            </motion.button>
          </form>
        </div>
        
        <p className="text-center text-blue-200/60 text-xs mt-8">© 2025 Afriland Network Expert</p>
      </motion.div>
    </div>
  );
}