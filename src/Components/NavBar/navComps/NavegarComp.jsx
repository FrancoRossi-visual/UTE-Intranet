import { useState } from 'react';
import RibbonSettingsDropdown from './RibbonSettingsDropdown';
import './ribbonDropdown.css';
import './Ribbon.css';

export default function NavegarComp({ currentSite, usuario }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div className='lowerNavBar'>
      <div>
        <img className='logo' src='src\assets\ute-logo.svg' alt='logo de UTE' />
        <h1>{currentSite}</h1>
      </div>

      <ul>
        <li>
          <img src='src\assets\navIcons\icnLaEmpresa.svg' alt='' />
        </li>
        <li>
          <img src='src\assets\navIcons\icnUTEenInternet.svg' alt='' />
        </li>
        <li>
          <img src='src\assets\navIcons\icnMapa.svg' alt='' />
        </li>
        <li>
          <span onClick={handleToggle}>
            {usuario}{' '}
            <img className='icn-small' src='src\assets\dropArrow.svg' />
          </span>
          {isOpen && (
            <RibbonSettingsDropdown
              onClose={handleToggle}
              id={'lowerNavBarDropdown'}>
              <li>Acerca de mi</li>
              <li>Cerrar sesión</li>
              <hr />
              <li>Personalizar esta página</li>
            </RibbonSettingsDropdown>
          )}
        </li>
      </ul>
    </div>
  );
}
