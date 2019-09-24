import React from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuidv4';

import { Button } from 'src/components/atoms';

const apps = ['News', 'Music'];
const Daily = () => (
    <>
        {apps.map((app) => (
            <section>
                <Button key={`${app + uuidv4}`}>
                    <Link to={`/${app.toLowerCase()}`}>{app}</Link>
                </Button>
            </section>
        ))}
    </>
);

export default Daily;
