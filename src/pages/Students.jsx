import { useState } from 'react';
// On supprime l'import qui fait planter le site
// import QRCode from "react-qr-code"; 
import { Eye } from 'lucide-react';

const MOCK_STUDENTS = [
  { id: 1, nom: "Kamdem Paul", filiere: "Dev Web", matricule: "AF-24-001" },
  { id: 2, nom: "Eboa Sarah", filiere: "Réseaux", matricule: "AF-24-002" },
  { id: 3, nom: "Mveng Thomas", filiere: "Data Science", matricule: "AF-24-003" },
];

export default function Students() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  // Fonction pour générer l'URL du QR Code (API gratuite et fiable)
  const getQrUrl = (student) => {
    const data = JSON.stringify({ id: student.id, mat: student.matricule });
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Gestion des Étudiants</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {MOCK_STUDENTS.map(student => (
          <div key={student.id} className="flex justify-between items-center p-4 border-b hover:bg-gray-50">
            <div>
              <p className="font-bold text-lg">{student.nom}</p>
              <p className="text-gray-500 text-sm">{student.filiere} - {student.matricule}</p>
            </div>
            <button 
              onClick={() => setSelectedStudent(student)}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-700 transition"
            >
              <Eye size={18} /> Voir Badge
            </button>
          </div>
        ))}
      </div>

      {/* MODAL QR CODE */}
      {selectedStudent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center relative">
            <button 
              onClick={() => setSelectedStudent(null)} 
              className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-red-500"
            >
              &times;
            </button>
            
            <h2 className="text-xl font-bold mb-2 text-blue-900">CARTE D'ACCÈS</h2>
            <p className="mb-4 text-gray-600 font-semibold">{selectedStudent.nom}</p>
            
            <div className="bg-white p-2 border-2 border-dashed border-gray-300 inline-block mb-4">
              {/* Ici on utilise une simple image, c'est impossible que ça plante */}
              <img 
                src={getQrUrl(selectedStudent)} 
                alt="QR Code étudiant" 
                className="w-40 h-40 object-contain"
              />
            </div>
            
            <p className="text-xs text-gray-400">Ce code est unique et personnel.</p>
            <p className="text-xs text-gray-400 mt-1">© Afrilane Network Expert</p>
          </div>
        </div>
      )}
    </div>
  );
}