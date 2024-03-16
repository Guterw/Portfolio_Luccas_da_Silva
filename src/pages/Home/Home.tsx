import { useState } from 'react';
import './Home.css';
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import gridButtonSvg from '../../assets/gridButton.svg';
import { initReactI18next, useTranslation } from 'react-i18next'; // Apenas importe o useTranslation
import i18n from '../../../config/i18n'; 
import FlagDropdownButton from '../../components/FlagDropdownButton/FlagDropdownButton';

import USAFlagSvg from '../../assets/Flags/USAFlag.svg';
import BrazilianFlagSvg from '../../assets/Flags/BrazilianFlag.svg';
import FrenchFlagSvg from '../../assets/Flags/FrenchFlag.svg';
import ItalianFlagSvg from '../../assets/Flags/ItalianFlag.svg';
import SpanishFlagSvg from '../../assets/Flags/SpanishFlag.svg';


i18n.use(initReactI18next);

export default function App() {
  const { t } = useTranslation();
  const [selectedFlag, setSelectedFlag] = useState(USAFlagSvg); // Estado para armazenar a bandeira selecionada

  const handleDropdownItemClick = (item: string) => {
    console.log(`Clicked on ${item}`);
  };

  const flags = [
    { image: USAFlagSvg, language: 'en' },  
    { image: BrazilianFlagSvg, language: 'pt' },
    { image: SpanishFlagSvg, language: 'es' },
    { image: ItalianFlagSvg, language: 'it' },
    { image: FrenchFlagSvg, language: 'fr' },
  ];

  return (
    <body>
      <div className="background-image"></div>
      <div className="container">
        <header>
          <FlagDropdownButton 
            flags={flags} 
            selectedFlag={selectedFlag} 
            setSelectedFlag={setSelectedFlag} 
            changeLanguage={i18n.changeLanguage} 
          />
          <h3>{t('welcome')}</h3>
          <DropdownButton 
            image={gridButtonSvg} 
            direction='left'
            items={['Item 1', 'Item 2', 'Item 3']} 
            onItemClick={handleDropdownItemClick} 
          />
        </header>
        <div className="body-content">
          <button>Botão 1</button>
          <button>Botão 2</button>
        </div>
        <footer>
          <button>Download</button>
          <div className="footer-buttons">
            <button>Botão 1</button>
            <button>Botão 2</button>
            <button>Botão 3</button>
            <button>Botão 4</button>
          </div>
          <span className='footer-text'>Website and Design made by myself</span>
        </footer>
      </div>
    </body>
  );
}
