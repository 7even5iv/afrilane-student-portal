// src/pages/Dashboard.jsx
import { Users, GraduationCap, Award, TrendingUp, Activity, Server, Clock } from 'lucide-react';

export default function Dashboard() {
  const today = new Date().toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* En-tête avec LOGO (Modifié) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4 md:border-0 md:pb-0">
        
        <div className="flex items-center gap-4">
          {/* LE LOGO EST ICI : Visible surtout pour rappeler la marque */}
          <img 
            src="/logo.png" 
            alt="Logo Afrilane" 
            className="h-12 w-12 object-contain bg-white rounded-lg shadow-sm p-1"
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Tableau de Bord</h1>
            <p className="text-gray-500 capitalize text-sm">{today}</p>
          </div>
        </div>

        {/* Badge Statut Système */}
        <div className="flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium w-fit">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
          Système en ligne
        </div>
      </div>

      {/* --- SECTION 1 : Les Statistiques --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Étudiants</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">124</h3>
              <div className="flex items-center gap-1 text-green-600 text-xs mt-2 bg-green-50 w-fit px-2 py-1 rounded">
                <TrendingUp size={14} /> +12% ce mois
              </div>
            </div>
            <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
              <Users size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Formations Actives</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">8</h3>
              <div className="flex items-center gap-1 text-gray-500 text-xs mt-2">
                Dont 3 en Bootcamp
              </div>
            </div>
            <div className="p-3 bg-indigo-100 text-indigo-600 rounded-lg">
              <GraduationCap size={24} />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">Certifiés (2025)</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-2">45</h3>
              <div className="flex items-center gap-1 text-orange-600 text-xs mt-2 bg-orange-50 w-fit px-2 py-1 rounded">
                <Award size={14} /> Taux réussite 94%
              </div>
            </div>
            <div className="p-3 bg-orange-100 text-orange-600 rounded-lg">
              <Award size={24} />
            </div>
          </div>
        </div>
      </div>

      {/* --- SECTION 2 & 3 : Inscriptions et Serveurs --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Liste des inscriptions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex justify-between items-center">
            <h3 className="font-bold text-gray-800">Dernières Inscriptions</h3>
            <button className="text-sm text-blue-600 hover:underline">Voir tout</button>
          </div>
          <div className="divide-y divide-gray-50">
            <div className="p-4 flex items-center gap-4 hover:bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">JD</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">Jean Dupont</p>
                <p className="text-xs text-gray-500">Génie Logiciel • Inscription validée</p>
              </div>
              <span className="text-xs text-gray-400">il y a 2h</span>
            </div>
            <div className="p-4 flex items-center gap-4 hover:bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xs">AM</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">Alice Mbarga</p>
                <p className="text-xs text-gray-500">Réseaux Cisco • En attente</p>
              </div>
              <span className="text-xs text-gray-400">il y a 5h</span>
            </div>
            <div className="p-4 flex items-center gap-4 hover:bg-gray-50">
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">PT</div>
              <div className="flex-1">
                <p className="text-sm font-bold text-gray-800">Paul Tagne</p>
                <p className="text-xs text-gray-500">Data Science • Inscription validée</p>
              </div>
              <span className="text-xs text-gray-400">Hier</span>
            </div>
          </div>
        </div>

        {/* État Infrastructure */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
              <Activity size={18} className="text-blue-600" /> 
              Infrastructure Centre
            </h3>
          </div>
          <div className="p-5 space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center gap-2 text-gray-600"><Server size={14}/> Serveur Web (Vercel)</span>
                <span className="text-green-600 font-medium">Opérationnel</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center gap-2 text-gray-600"><Server size={14}/> Base de Données</span>
                <span className="text-green-600 font-medium">Opérationnel</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="flex items-center gap-2 text-gray-600"><Server size={14}/> Labo Cisco (VPN)</span>
                <span className="text-orange-500 font-medium">Maintenance</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-orange-400 h-2 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="pt-4 mt-2 border-t border-gray-50 flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1"><Clock size={12}/> Dernière synchro : il y a 3 min</span>
              <span>Biteng, Yaoundé</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}