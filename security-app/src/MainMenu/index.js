import React from 'react';
import { StyledNavSwitch, StyledAppButton } from './MainMenu.styled.js';
import { Link } from 'react-router-dom';
import { hide, positionInCircle } from 'src/utils';
import uuidv4 from 'uuidv4';
import { MdSecurity, MdHome } from 'react-icons/md';
import { GoGraph, GoBeaker, GoHome, GoPencil } from 'react-icons/go';
import { FiPackage } from 'react-icons/fi';

const apps = [
    { name: 'security', logo: <MdSecurity /> },
    { name: 'management', logo: <GoGraph /> },
    { name: 'research', logo: <GoBeaker /> },
    { name: 'storage', logo: <FiPackage /> },
    { name: 'daily', logo: <GoHome /> },
    { name: 'creations', logo: <GoPencil /> },
];
const MainMenu = () => (
    <>
        <StyledNavSwitch
            onClick={(evt) => {
                hide(evt, apps);
                positionInCircle();
            }}
        >
            <MdHome />
            {/** Renders the links */}
            {apps.map((app) => {
                return (
                    <StyledAppButton key={`${app.name + uuidv4}`} className="hide" id={app.name}>
                        <Link to={`/${app.name}`}>{app.logo}</Link>
                    </StyledAppButton>
                );
            })}
        </StyledNavSwitch>
    </>
);

export default MainMenu;
