import { Eye } from 'lucide-react';

export default function StudentCard({ student, onViewBadge }) {
  return (
    <div className="flex justify-between items-center p-4 border-b hover:bg-gray-50 transition-colors bg-white first:rounded-t-lg last:rounded-b-lg">
      <div className="overflow-hidden mr-3"> {/* mr-3 évite que le texte colle au bouton */}
        <p className="font-bold text-gray-800 truncate">{student.nom}</p>
        <p className="text-gray-500 text-xs truncate">{student.filiere}</p>
        <p className="text-blue-600 text-[10px] font-mono mt-1">{student.matricule}</p>
      </div>
      
      <button 
        onClick={() => onViewBadge(student)}
        className="bg-blue-600 text-white p-2 md:px-4 md:py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 active:scale-95 transition shadow-sm"
      >
        <Eye size={18} /> 
        {/* Le texte "Voir Badge" disparait sur petit écran (hidden) et apparait sur moyen (md:block) */}
        <span className="hidden md:block">Voir Badge</span>
      </button>
    </div>
  );
}