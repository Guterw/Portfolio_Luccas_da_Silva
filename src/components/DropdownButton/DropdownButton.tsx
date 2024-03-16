import React, { useState } from 'react';
import './DropdownButton.css';

interface Props {
    image: string;
    items: string[];
    onItemClick: (item: string) => void;
    direction?: 'left' | 'right'; // Nova propriedade para determinar a direção do dropdown
}

const DropdownButton: React.FC<Props> = ({ image, items, onItemClick, direction = 'right' }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleDropdownItemClick = (item: string) => {
        onItemClick(item);
        setDropdownVisible(false); // Fechar o dropdown após clicar em um item
    };

    const dropdownClassName = `dropdown-content ${direction}`;

    return (
        <div className="dropdown" style={{ position: 'relative', display: 'inline-block' }}>
            <img src={image} alt="Dropdown Button" onClick={handleDropdownClick} />
            <div className={dropdownClassName}>
                {items.map((item, index) => (
                    <button key={index} onClick={() => handleDropdownItemClick(item)}>{item}</button>
                ))}
            </div>
        </div>
    );
};

export default DropdownButton;
