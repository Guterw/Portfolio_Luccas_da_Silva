import React, { useState } from 'react';
import './DropdownButton.css';

interface Props {
    image: string;
    items: string[];
    onItemClick: (item: string) => void;
    direction?: 'left' | 'right';
    onClick?: () => void; // Torna a prop onClick opcional
}

const DropdownButton: React.FC<Props> = ({ image, items, onItemClick, direction = 'right', onClick }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleDropdownClick = () => {
        setDropdownVisible(!dropdownVisible);
        if (onClick) onClick(); // Chama a função onClick se ela existir
    };

    const handleDropdownItemClick = (item: string) => {
        onItemClick(item);
        setDropdownVisible(false);
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
