import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { StyledInput, StyledLabel } from './uploads.styled';
import { IoIosAddCircleOutline } from 'react-icons/io';

const Uploads = ({ addTrack }) => {
    const addTrackToList = (event) => {
        const file = event.target.files[0];
        const filePath = window.URL.createObjectURL(file);
        const { name } = file;
        const payload = { name, filePath };
        addTrack(payload);
        event.target.value = null;
    };
    return (
        <>
            <StyledInput id="file-input" type="file" onChange={addTrackToList} />
            <StyledLabel for="file-input">
                <IoIosAddCircleOutline />
            </StyledLabel>
        </>
    );
};

const mapDispatchToProps = ({ musicModal: { addTrack } }) => ({
    addTrack,
});

export default compose(
    connect(
        null,
        mapDispatchToProps,
    ),
)(Uploads);
