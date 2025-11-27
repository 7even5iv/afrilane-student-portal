// src/pages/Students.jsx
import { useState } from 'react';
import StudentCard from '../components/StudentCard';
import QRModal from '../components/QRModal';

// Données fictives
const MOCK_STUDENTS = [
  { id: 1, nom: "Kamdem Paul", filiere: "Dev Web", matricule: "AF-24-001" },
  { id: 2, nom: "Eboa Sarah", filiere: "Réseaux", matricule: "AF-24-002" },
  { id: 3, nom: "Mveng Thomas", filiere: "Data Science", matricule: "AF-24-003" },
  { id: 4, nom: "Nguindjel Marie", filiere: "Cyber Security", matricule: "AF-24-004" },
  { id: 5, nom: "Abena Jean", filiere: "Dev Web", matricule: "AF-24-005" },
];

export default function Students() {
  const [selectedStudent, setSelectedStudent] = useState(null);

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-6">
      
      {/* --- EN-TÊTE AVEC LOGO (Identique au Dashboard) --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4 md:border-0 md:pb-0">
        
        <div className="flex items-center gap-4">
          {/* Logo */}
          <img 
            src="/logo.png" 
            alt="Logo Afrilane" 
            className="h-12 w-12 object-contain bg-white rounded-lg shadow-sm p-1"
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gestion des Étudiants</h1>
            <p className="text-gray-500 text-sm">Année académique 2024-2025</p>
          </div>
        </div>

        {/* Badge du nombre d'inscrits */}
        <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-bold w-fit">
          {MOCK_STUDENTS.length} Étudiants inscrits
        </div>
      </div>

      {/* --- LISTE DES ÉTUDIANTS --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        {/* En-tête de la liste (Optionnel, pour faire joli) */}
        <div className="bg-gray-50 p-3 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:flex">
          <div className="w-full pl-4">Nom & Filière</div>
          <div className="pr-12">Action</div>
        </div>

        <div className="divide-y divide-gray-50">
          {MOCK_STUDENTS.map(student => (
            <StudentCard 
              key={student.id} 
              student={student} 
              onViewBadge={setSelectedStudent} 
            />
          ))}
        </div>
      </div>

      {/* --- MODALE QR CODE --- */}
      {selectedStudent && (
        <QRModal 
          student={selectedStudent} 
          onClose={() => setSelectedStudent(null)} 
        />
      )}
    </div>
  );
}