import { useState } from 'react';
import { X, Save, User, GraduationCap, Hash } from 'lucide-react';

export default function AddStudentModal({ onClose, onSave }) {
  const [formData, setFormData] = useState({
    nom: "",
    filiere: "Dev Web", // Valeur par défaut
    matricule: "",
    status: "En règle"
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Création de l'objet étudiant
    const newStudent = {
      id: Date.now(), // ID unique basé sur l'heure
      ...formData,
      color: "bg-blue-100 text-blue-700" // Couleur par défaut
    };
    onSave(newStudent);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden">
        
        {/* En-tête */}
        <div className="bg-blue-900 p-4 flex justify-between items-center text-white">
          <h2 className="font-bold text-lg">Nouvel Étudiant</h2>
          <button onClick={onClose} className="hover:bg-blue-800 p-1 rounded transition">
            <X size={20} />
          </button>
        </div>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          
          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                required
                type="text" 
                placeholder="Ex: Jean Dupont"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                value={formData.nom}
                onChange={(e) => setFormData({...formData, nom: e.target.value})}
              />
            </div>
          </div>

          {/* Matricule */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Matricule</label>
            <div className="relative">
              <Hash className="absolute left-3 top-3 text-gray-400" size={18} />
              <input 
                required
                type="text" 
                placeholder="Ex: AF-2025-001"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none uppercase"
                value={formData.matricule}
                onChange={(e) => setFormData({...formData, matricule: e.target.value})}
              />
            </div>
          </div>

          {/* Filière */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Filière</label>
            <div className="relative">
              <GraduationCap className="absolute left-3 top-3 text-gray-400" size={18} />
              <select 
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                value={formData.filiere}
                onChange={(e) => setFormData({...formData, filiere: e.target.value})}
              >
                <option value="Dev Web">Développement Web</option>
                <option value="Réseaux & Sécurité">Réseaux & Sécurité</option>
                <option value="Data Science">Data Science</option>
                <option value="Gestion de Projet">Gestion de Projet</option>
              </select>
            </div>
          </div>

          {/* Boutons */}
          <div className="flex justify-end gap-3 mt-6">
            <button 
              type="button" 
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition"
            >
              Annuler
            </button>
            <button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition"
            >
              <Save size={18} /> Enregistrer
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}