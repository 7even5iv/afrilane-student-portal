import { Eye, MoreHorizontal } from 'lucide-react';

export default function StudentCard({ student, onViewBadge }) {
  // Fonction pour déterminer la couleur du statut
  const getStatusColor = (status) => {
    switch(status) {
      case "En règle": return "bg-green-100 text-green-700 border-green-200";
      case "En attente": return "bg-orange-100 text-orange-700 border-orange-200";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  // Récupérer les initiales (ex: Kamdem Paul -> KP)
  const initials = student.nom.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();

  return (
    <div className="group flex flex-col md:flex-row md:items-center justify-between p-4 border-b border-gray-100 hover:bg-blue-50/50 transition-all bg-white last:border-0">
      
      {/* Partie Gauche : Avatar + Infos */}
      <div className="flex items-center gap-4 mb-3 md:mb-0">
        {/* Avatar avec initiales */}
        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-sm ${student.color || 'bg-blue-100 text-blue-600'}`}>
          {initials}
        </div>
        
        <div>
          <h4 className="font-bold text-gray-800 text-base">{student.nom}</h4>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{student.matricule}</span>
            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span className="font-medium text-gray-700">{student.filiere}</span>
          </div>
        </div>
      </div>

      {/* Partie Droite : Statut + Bouton */}
      <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
        
        {/* Badge de Statut */}
        <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(student.status)}`}>
          {student.status}
        </span>

        {/* Bouton Voir Badge */}
        <button 
          onClick={() => onViewBadge(student)}
          className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:text-blue-600 hover:border-blue-600 px-4 py-2 rounded-lg transition-all shadow-sm active:scale-95"
        >
          <Eye size={18} />
          <span className="text-sm font-medium">Badge</span>
        </button>
      </div>
    </div>
  );
}