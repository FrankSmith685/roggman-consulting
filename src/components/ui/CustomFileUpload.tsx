// components/CustomFileUpload.tsx
import { useAppState } from '@/hooks/useAppState';
import { useRef, useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';

interface CustomFileUploadProps {
  onFileSelect: (file: File | null) => void;
  fileName?: string;
  error?: string;
}

export default function CustomFileUpload({ onFileSelect, fileName, error }: CustomFileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const { lenguaje } = useAppState();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0] || null;
    onFileSelect(file);
    setIsDragOver(false);
  };

  const translations = {
    es: {
      instruction: 'Arrastre su currículum aquí o haga clic para seleccionar un archivo',
      note: '(Solo archivos PDF o Word)',
    },
    de: {
      instruction: 'Ziehen Sie Ihren Lebenslauf hierher oder klicken Sie, um eine Datei auszuwählen',
      note: '(Nur PDF- oder Word-Dateien)',
    },
    en: {
      instruction: 'Drag your resume here or click to select a file',
      note: '(Only PDF or Word files)',
    },
  };

  const t = translations[lenguaje as 'es' | 'de' | 'en'] || translations.en;

  return (
    <div
      className={`border-2 border-dashed rounded-xl p-6 text-center transition-colors duration-300 ${
        isDragOver ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300'
      }`}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragOver(true);
      }}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
    >
      <input
        ref={inputRef}
        type="file"
        accept=".pdf,.doc,.docx"
        className="hidden"
        onChange={handleFileChange}
      />
      <FaCloudUploadAlt className="text-4xl mx-auto mb-2 text-indigo-600" />
      <p className="text-sm text-gray-700 font-medium">{t.instruction}</p>
      <p className="text-xs text-gray-500 mt-1">{t.note}</p>
      {fileName && <p className="text-sm mt-2 text-indigo-700 font-semibold">{fileName}</p>}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
