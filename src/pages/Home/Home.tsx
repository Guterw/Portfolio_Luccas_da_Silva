import './Home.css'
import DropdownButton from '../../components/DropdownButton/DropdownButton';
import gridButtonSvg from '../../assets/gridButton.svg';
import USAFlagSvg from '../../assets/Flags/USAFlag.svg'

export default function App() {
  const handleDropdownItemClick = (item: string) => {
    console.log(`Clicked on ${item}`);
};

  return (
    <>
<body>

<div className="background-image"></div>

<div className="container">
    <header>
        <DropdownButton 
        image={USAFlagSvg}
        items={[
          'English',
          'Portuguese'
        ]}
        direction='right'
        onItemClick={handleDropdownItemClick}
        />
        <h3>Welcome to my Portfolio! I'm Luccas, and I'm a Fullstack Developer and UI Designer.</h3>
        <DropdownButton 
        image={gridButtonSvg} 
        direction='left'
        items={[
          'Item 1',
          'Item 2',
          'Item 3'
        ]} 
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

    </>
  )
}
