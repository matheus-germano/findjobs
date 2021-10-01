import { useState } from "react";
import { IoIosArrowDropdown, IoIosArrowDropdownCircle } from 'react-icons/io';

import './styles.scss';

export function Dropdown({ items, open, setOpen, setExperience }) {
  const [selectedItem, setSelectedItem] = useState('');

  function toggleOpen() {
    setOpen(!open);
  }

  return(
    <div className="dropdown-wrapper">
      <div className="dropdown-button" onClick={toggleOpen}>
        { selectedItem !== '' ? selectedItem : "Nível de experiência" }
        { open ? <IoIosArrowDropdownCircle /> : <IoIosArrowDropdown /> }
      </div>
      {
        open && (
          <div className="dropdown-content">
            <ul className="dropdown-menu">
              {
                items.map(item => (
                  <li 
                    className="dropdown-item"
                    key={item.id}
                    onClick={() => {
                      setSelectedItem(item.value);
                      setExperience(item.value);
                      setOpen(!open);
                    }}
                    >
                      {item.value}
                    </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </div>
  );
}