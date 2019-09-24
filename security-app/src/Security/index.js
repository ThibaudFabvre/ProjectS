import React from 'react';

import Header from './Header';
import List from './List';
import payload from 'src/payload.json';

const Security = () => (
    <>
        <Header content={'Security App'} />
        <List categories={payload} />
    </>
);

export default Security;
