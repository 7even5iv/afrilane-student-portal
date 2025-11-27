import { Eye } from 'lucide-react';

export default function StudentCard({ student, onViewBadge }) {
  return (
    <div className="flex justify-between items-center p-4 border-b hover:bg-gray-50 transition-colors">
      <div>
        <p className="font-bold text-lg text-gray-800">{student.nom}</p>
        <p className="text-gray-500 text-sm">{student.filiere} - {student.matricule}</p>
      </div>
      <button 
        onClick={() => onViewBadge(student)}
        className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
      >
        <Eye size={18} /> Voir Badge
      </button>
    </div>
  );
}