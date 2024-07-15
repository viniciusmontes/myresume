import { Dispatch } from 'react';
import { BiMoon, BiSun } from 'react-icons/bi';

import { SidebarStyled } from '../../components/Sidebar/style';

type Props = {
  isLightTheme: boolean;
  setIsLightTheme: Dispatch<React.SetStateAction<boolean>>;
};

export default function Sidebar({ isLightTheme, setIsLightTheme }: Props) {
  return (
    <SidebarStyled>
      <nav className="sidebar-container">
        <ul>
          <li>
            {isLightTheme ? (
            <BiMoon size={24} onClick={() => setIsLightTheme(!isLightTheme)} />
          ) : (
            <BiSun size={24} onClick={() => setIsLightTheme(!isLightTheme)} />
          )}
          </li>
        </ul>
      </nav>
    </SidebarStyled>
  );
}
