import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { StyledInput } from './uploads.styled';

const addTrackToList = (event) => {
    const file = event.target.files[0];
    const filePath = window.URL.createObjectURL(file);
    const { name } = file;
    const payload = { name, filePath };
    addTrack(payload);
    event.target.value = null;
};
const Uploads = ({ addTrack }) => (
    <>
        <StyledInput id="file-input" type="file" onChange={addTrackToList} />
    </>
);

const mapDispatchToProps = ({ musicList: { addTrack } }) => ({
    addTrack,
});

export default compose(connect(mapDispatchToProps))(Uploads);
