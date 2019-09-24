import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainMenu from './MainMenu';

import Security from './Security';

import Management from './Management';

import Research from './Research';

import Storage from './Storage';

import Daily from './Daily';
import Music from './Daily/Music';

import Creations from './Creations';

const App = () => (
    <>
        {/** Renders the routes */}
        <Switch>
            <Route exact path="/" component={MainMenu} />
            <Route path="/security" component={Security} />
            <Route path="/management" component={Management} />
            <Route path="/research" component={Research} />
            <Route path="/storage" component={Storage} />
            {/**Daily Section */}
            <Route path="/daily" component={Daily} />
            <Route path="/music" component={Music} />
            <Route path="/creations" component={Creations} />
        </Switch>
    </>
);

export default App;
