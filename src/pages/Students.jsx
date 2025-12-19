import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import des animations
import StudentCard from '../components/StudentCard';
import QRModal from '../components/QRModal';
import AddStudentModal from '../components/AddStudentModal';
import { Search, Filter, UserPlus } from 'lucide-react';

// Données par défaut (si c'est la première visite)
const INITIAL_STUDENTS = [
  { id: 1, nom: "Ngoumou Loic", filiere: "Dev Web", matricule: "AF-24-001", status: "En règle", color: "bg-blue-100 text-blue-700" },
  { id: 2, nom: "Kamnde Bruno", filiere: "MRI", matricule: "AF-24-002", status: "En règle", color: "bg-purple-100 text-purple-700" },
  { id: 3, nom: "Mimok Stéphane", filiere: "MRI", matricule: "AF-24-003", status: "En attente", color: "bg-green-100 text-green-700" },
  { id: 4, nom: "Ghave Maeva", filiere: "Comptabilité", matricule: "AF-24-004", status: "En règle", color: "bg-orange-100 text-orange-700" },
  { id: 5, nom: "Lally Warren", filiere: "Dev Web", matricule: "AF-24-005", status: "En attente", color: "bg-pink-100 text-pink-700" },
];

export default function Students() {
  const [students, setStudents] = useState(INITIAL_STUDENTS);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // 1. CHARGEMENT : Au lancement, on essaie de lire le LocalStorage
  useEffect(() => {
    const saved = localStorage.getItem('afrilane_students');
    if (saved) {
      setStudents(JSON.parse(saved));
    }
  }, []);

  // 2. SAUVEGARDE : Quand on ajoute un étudiant
  const handleAddStudent = (newStudent) => {
    const updatedList = [newStudent, ...students];
    setStudents(updatedList);
    localStorage.setItem('afrilane_students', JSON.stringify(updatedList));
  };

  // Filtrage
  const filteredStudents = students.filter(s => 
    s.nom.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.matricule.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="space-y-6"
    >
      
      {/* --- EN-TÊTE AVEC LOGO (Visible sur Mobile) --- */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-4 md:border-0 md:pb-0">
        <div className="flex items-center gap-4">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="h-12 w-12 object-contain bg-white rounded-xl shadow-sm p-1"
            onError={(e) => { e.target.style.display = 'none'; }} 
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Gestion des Étudiants</h1>
            <p className="text-gray-500 text-sm">Promotion 2025-2026</p>
          </div>
        </div>
        
        {/* BOUTON NOUVEAU */}
        <motion.button 
          whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
          onClick={() => setIsAddModalOpen(true)}
          className="bg-blue-900 text-white px-4 py-2.5 rounded-lg flex items-center gap-2 hover:bg-blue-800 transition shadow-lg shadow-blue-900/20"
        >
          <UserPlus size={18} />
          <span>Nouveau</span>
        </motion.button>
      </div>

      {/* --- BARRE D'OUTILS --- */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 justify-between items-center">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Rechercher par nom ou matricule..." 
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 focus:bg-white transition"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-200 rounded-lg hover:bg-gray-50 text-gray-700 text-sm font-medium transition">
            <Filter size={18} /> <span className="hidden md:inline">Filtres</span>
          </button>
        </div>
      </div>

      {/* --- LISTE AVEC ANIMATIONS --- */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="hidden md:flex justify-between items-center px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          <div>Étudiant & Filière</div>
          <div>Statut & Action</div>
        </div>
        
        {/* Container animé */}
        <motion.div layout className="divide-y divide-gray-50">
          <AnimatePresence mode='popLayout'>
            {filteredStudents.length > 0 ? (
              filteredStudents.map(student => (
                <motion.div
                  layout
                  key={student.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                >
                  <StudentCard 
                    student={student} 
                    onViewBadge={setSelectedStudent} 
                  />
                </motion.div>
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="p-8 text-center text-gray-500"
              >
                <p>Aucun étudiant trouvé.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* --- MODALES --- */}
      
      {/* 1. Modale QR Code */}
      <AnimatePresence>
        {selectedStudent && (
          <QRModal 
            student={selectedStudent} 
            onClose={() => setSelectedStudent(null)} 
          />
        )}
      </AnimatePresence>

      {/* 2. Modale Ajout Étudiant */}
      {isAddModalOpen && (
        <AddStudentModal 
          onClose={() => setIsAddModalOpen(false)} 
          onSave={handleAddStudent} 
        />
      )}
    </motion.div>
  );
}