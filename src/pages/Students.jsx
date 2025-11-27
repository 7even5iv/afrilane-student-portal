import { useState } from 'react';
import StudentCard from '../components/StudentCard';
import QRModal from '../components/QRModal';

// Données fictives
const MOCK_STUDENTS = [
  { id: 1, nom: "Kamdem Paul", filiere: "Dev Web", matricule: "AF-24-001" },
  { id: 2, nom: "Eboa Sarah", filiere: "Réseaux", matricule: "AF-24-002" },
  { id: 3, nom: "Mveng Thomas", filiere: "Data Science", matricule: "AF-24-003" },
  { id: 4, nom: "Nguindjel Marie", filiere: "Cyber Security", matricule: "AF-24-004" },
];

export default function Students() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Gestion des Étudiants</h1>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
          {MOCK_STUDENTS.length} inscrits
        </span>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-100">
        {MOCK_STUDENTS.map(student => (
          <StudentCard 
            key={student.id} 
            student={student} 
            onViewBadge={setSelectedStudent} // On passe la fonction au composant enfant
          />
        ))}
      </div>

      {/* Si un étudiant est sélectionné, on affiche la Modale */}
      {selectedStudent && (
        <QRModal 
          student={selectedStudent} 
          onClose={() => setSelectedStudent(null)} 
        />
      )}
    </div>
  );
}