import React, { useState } from 'react';
import './FlagDropdownButton.css';

interface Flag {
  image: string;
  language: string;
}

interface FlagDropdownButtonProps {
  flags: Flag[];
  selectedFlag: string;
  setSelectedFlag: (flag: string) => void; // Função para definir a bandeira selecionada
  changeLanguage: (language: string) => void; // Função para mudar o idioma
}

const FlagDropdownButton: React.FC<FlagDropdownButtonProps> = ({ flags, selectedFlag, setSelectedFlag, changeLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownItemClick = (flag: Flag) => {
    setSelectedFlag(flag.image); // Define a bandeira selecionada como a bandeira clicada
    changeLanguage(flag.language); // Muda o idioma de acordo com a bandeira clicada
    setIsOpen(false); // Fecha o dropdown após selecionar uma bandeira
  };

  return (
    <div className="flag-dropdown">
      <img src={selectedFlag} alt="Selected Flag" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div className="flag-dropdown-options">
          {flags.map((flag, index) => (
            <img
              key={index}
              src={flag.image}
              alt={`Flag ${index}`}
              onClick={() => handleDropdownItemClick(flag)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FlagDropdownButton;
