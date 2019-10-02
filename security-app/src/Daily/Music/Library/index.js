import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TiThList } from 'react-icons/ti';
import Uploads from './Uploads';
import {
    StyledButton,
    StyledTracksManager,
    StyledList,
    StyledListElement,
    StyledElementDetail,
    StyledArrowElement,
    StyledNoList,
} from './library.styled';
import { FaTrashAlt } from 'react-icons/fa';
import { IoIosArrowDropdown, IoIosArrowDropup, IoIosPlayCircle } from 'react-icons/io';

const Library = ({ tracksList, removeTrack }) => {
    const [displayList, setListDisplay] = useState(false);

    const renderList = () =>
        tracksList.map((track, index) => (
            <StyledListElement>
                <StyledElementDetail>{track.name}</StyledElementDetail>
                <StyledElementDetail>{track.duration}</StyledElementDetail>
                <IoIosPlayCircle />
                <FaTrashAlt onClick={() => removeTrack(index)} />
            </StyledListElement>
        ));

    return (
        <>
            <StyledButton onClick={() => setListDisplay(!displayList)}>
                <TiThList />
            </StyledButton>
            {displayList && (
                <StyledTracksManager>
                    <Uploads />
                    <StyledList>
                        <StyledArrowElement>
                            <IoIosArrowDropup />
                        </StyledArrowElement>
                        {tracksList[0] ? renderList() : <StyledNoList>No music in store</StyledNoList>}
                        <StyledArrowElement>
                            <IoIosArrowDropdown />
                        </StyledArrowElement>
                    </StyledList>
                </StyledTracksManager>
            )}
        </>
    );
};

const mapStateToProps = ({ musicModal: { tracksList } }) => ({
    tracksList,
});

const mapDispatchToProps = ({ musicModal: { removeTrack } }) => ({
    removeTrack,
});

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps,
    )(Library),
);
