import { Users, GraduationCap, Award } from 'lucide-react';

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Tableau de Bord</h1>
      
      {/* Les Cartes de Statistiques */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-600">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Total Étudiants</p>
              <h2 className="text-3xl font-bold">124</h2>
            </div>
            <Users size={40} className="text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-600">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Formations Actives</p>
              <h2 className="text-3xl font-bold">8</h2>
            </div>
            <GraduationCap size={40} className="text-green-600" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-orange-500">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-500">Certifiés (2025)</p>
              <h2 className="text-3xl font-bold">45</h2>
            </div>
            <Award size={40} className="text-orange-500" />
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded border border-blue-200">
        <h3 className="font-bold text-blue-800">Bienvenue sur l'Intranet AFRILANE</h3>
        <p className="text-sm text-blue-600">Sélectionnez "Étudiants" dans le menu pour gérer les accès et générer les badges.</p>
      </div>
    </div>
  );
}