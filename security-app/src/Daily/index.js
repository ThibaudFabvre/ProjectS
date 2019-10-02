import React from 'react';
import { Link } from 'react-router-dom';
import uuidv4 from 'uuidv4';

import { Button } from 'src/components/atoms';

const apps = ['News', 'Music'];
const Daily = () => (
    <>
        {apps.map((app) => (
            <section>
                <Link to={`/${app.toLowerCase()}`}>
                    <Button key={`${app + uuidv4}`}>{app}</Button>
                </Link>
            </section>
        ))}
    </>
);

export default Daily;
