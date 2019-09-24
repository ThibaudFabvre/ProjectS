import React from 'react';
import { StyledInput } from './uploads.styled';

const addTrack = (event) => {
    const file = event.target.files[0];
    const filePath = window.URL.createObjectURL(file);
    const { name } = file;
    addToTracksList(name, filePath);
    event.target.value = null;
};
const Uploads = () => (
    <>
        <StyledInput id="file-input" type="file" onChange={addTrack} />
    </>
);

export default Uploads;
