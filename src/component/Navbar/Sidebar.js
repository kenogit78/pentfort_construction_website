import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarLink,
    SidebarMenu

} from './NavbarStyles';

const Sidebar = ({ toggle, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink  to='work' onClick={toggle}>
                        Work
                    </SidebarLink>
                    <SidebarLink to='resume' onClick={toggle}>
                        Resume
                    </SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>

                </SidebarMenu>
             </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar