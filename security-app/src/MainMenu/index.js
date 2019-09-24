import React from 'react';
import { StyledNavSwitch, StyledAppButton } from './MainMenu.styled.js';
import { Link } from 'react-router-dom';
import { hide, positionInCircle } from 'src/utils';
import uuidv4 from 'uuidv4';

const apps = ['Security', 'Management', 'Research', 'Storage', 'Daily', 'Creations'];
const MainMenu = () => (
    <>
        <StyledNavSwitch
            onClick={(evt) => {
                hide(evt, apps);
                positionInCircle();
            }}
        >
            {'>> Click <<'}
            {/** Renders the links */}
            {apps.map((app) => (
                <StyledAppButton key={`${app + uuidv4}`} className="hide" id={app.toLowerCase()}>
                    <Link to={`/${app.toLowerCase()}`}>{app}</Link>
                </StyledAppButton>
            ))}
        </StyledNavSwitch>
    </>
);

export default MainMenu;
