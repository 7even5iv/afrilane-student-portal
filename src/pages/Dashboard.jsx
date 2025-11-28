import { Users, GraduationCap, Award, TrendingUp, Activity, Server, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

  // Configuration de l'animation en cascade
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 } // Délai entre chaque enfant
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={container} initial="hidden" animate="show"
      className="space-y-6"
    >
      
      {/* En-tête */}
      <motion.div variants={item} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4 md:border-0 md:pb-0">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Logo" className="h-12 w-12 object-contain bg-white rounded-xl shadow-sm p-1" onError={(e) => { e.target.style.display = 'none'; }} />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Tableau de Bord</h1>
            <p className="text-gray-500 capitalize text-sm">{today}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium border border-emerald-100">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          Système opérationnel
        </div>
      </motion.div>

      {/* --- STATS --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "Total Étudiants", val: "124", sub: "+12% ce mois", icon: Users, col: "text-blue-600", bg: "bg-blue-50" },
          { title: "Formations Actives", val: "8", sub: "3 en Bootcamp", icon: GraduationCap, col: "text-indigo-600", bg: "bg-indigo-50" },
          { title: "Certifiés (2025)", val: "45", sub: "Taux réussite 94%", icon: Award, col: "text-orange-600", bg: "bg-orange-50" }
        ].map((stat, i) => (
          <motion.div 
            key={i} variants={item} whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all cursor-default"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <h3 className="text-3xl font-bold text-gray-900 mt-2">{stat.val}</h3>
                <div className="flex items-center gap-1 text-xs mt-2 font-medium text-gray-600">
                  <TrendingUp size={14} className="text-green-500"/> {stat.sub}
                </div>
              </div>
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.col}`}>
                <stat.icon size={24} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- SECTIONS INFÉRIEURES --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Liste Inscriptions */}
        <motion.div variants={item} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Dernières Inscriptions</h3>
            <button className="text-sm text-blue-600 hover:underline">Voir tout</button>
          </div>
          <div className="divide-y divide-gray-50">
            {[{n:"Jean Dupont", f:"Génie Logiciel", t:"2h"}, {n:"Alice Mbarga", f:"Réseaux Cisco", t:"5h"}, {n:"Paul Tagne", f:"Data Science", t:"Hier"}].map((u, i) => (
              <div key={i} className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${i===0?'bg-blue-100 text-blue-600':i===1?'bg-purple-100 text-purple-600':'bg-green-100 text-green-600'}`}>
                  {u.n.split(' ').map(n=>n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-gray-800">{u.n}</p>
                  <p className="text-xs text-gray-500">{u.f}</p>
                </div>
                <span className="text-xs text-gray-400">{u.t}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure */}
        <motion.div variants={item} className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Activity size={18} className="text-blue-600" /> Infrastructure
            </h3>
          </div>
          <div className="p-5 space-y-6">
            {[
              {n:"Serveur Web", s:"Opérationnel", p:98, c:"bg-green-500"},
              {n:"Base de Données", s:"Charge Moyenne", p:45, c:"bg-blue-500"},
              {n:"Labo Cisco (VPN)", s:"Maintenance", p:100, c:"bg-orange-400"}
            ].map((s, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="flex items-center gap-2 text-gray-600 font-medium"><Server size={14}/> {s.n}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${s.s==='Opérationnel'?'bg-green-100 text-green-700':'bg-gray-100 text-gray-600'}`}>{s.s}</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }} animate={{ width: `${s.p}%` }} transition={{ duration: 1, delay: 0.5 + (i*0.2) }}
                    className={`h-2 rounded-full ${s.c}`} 
                  ></motion.div>
                </div>
              </div>
            ))}
            <div className="pt-2 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock size={12}/> MAJ: Temps réel</span>
              <span>Biteng, Yaoundé</span>
            </div>
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}