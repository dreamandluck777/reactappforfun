import React from "react";
import { NavLink } from "react-router-dom";
import { translationsForLi } from '../text/text'; 



interface NavigationProps {
  currentLang: 'ru' | 'az' | 'en'; 
}

const Navigation: React.FC<NavigationProps> = ({ currentLang }) => {  
  const menuItems = translationsForLi[currentLang];

  return (
    <nav>
      <ul>
        {menuItems.map((elem) => (
          <li key={elem.id}>
            <NavLink
              to={elem.path || '#'}
              className={({ isActive }) => isActive ? 'linkActive' : 'linkStyle'}
            >
              {elem.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
