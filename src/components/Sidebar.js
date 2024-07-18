import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
//import { IconContext } from 'react-icons/lib'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  // color: #6a0dad;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
  overflow-y: auto;

 ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #2c2f33;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #3b3f45;
    border-radius: 6px;
    border: 3px solid #15171c;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
  scrollbar-color: #3b3f45 #2c2f33;
`;
////overflow-y: auto;

const SidebarWrap = styled.div`
  width: 100%;
`;
//////////
/////////



const Sidebar = () => {
    
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
    {/* <IconContext.Provider value={{ color: '#fff'}}> */}
    <Nav>
    <NavIcon to='#'>
      <FaIcons.FaBars onClick={showSidebar} />
    </NavIcon>
  </Nav>
  <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
          <NavIcon to='#'>
      <AiIcons.AiOutlineClose onClick={showSidebar} />
    </NavIcon>
    {SidebarData.map((item, index) => {
return <SubMenu item={item} key={index} />;
    })}
          </SidebarWrap>
        </SidebarNav>
        {/* </IconContext.Provider> */}
  </>
  );
};

export default Sidebar;
