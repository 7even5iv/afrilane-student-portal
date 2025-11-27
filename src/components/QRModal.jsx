import { X } from 'lucide-react';

export default function QRModal({ student, onClose }) {
  // Fonction pour l'URL du QR Code
  const getQrUrl = (student) => {
    const data = JSON.stringify({ id: student.id, mat: student.matricule });
    return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(data)}`;
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white p-6 rounded-xl shadow-2xl max-w-sm w-full text-center relative transform transition-all scale-100">
        
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-gray-100 text-gray-500 transition"
        >
          <X size={24} />
        </button>
        
        <h2 className="text-xl font-bold mb-1 text-blue-900">CARTE D'ACCÈS</h2>
        <p className="mb-6 text-gray-600 font-medium">{student.nom}</p>
        
        <div className="bg-white p-3 border-2 border-dashed border-blue-200 inline-block mb-4 rounded-lg">
          <img 
            src={getQrUrl(student)} 
            alt={`QR Code de ${student.nom}`} 
            className="w-48 h-48 object-contain"
          />
        </div>
        
        <p className="text-xs text-gray-400">Ce code est unique et personnel.</p>
        <p className="text-xs text-gray-400 mt-1">© Afriland Network Expert</p>
      </div>
    </div>
  );
}