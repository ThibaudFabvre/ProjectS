import React, { useState } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { TiThList } from 'react-icons/ti';
import Uploads from './Uploads';
import LibraryElement from './LibraryElement';
import { StyledButton, StyledTracksManager, StyledList, StyledArrowElement, StyledNoList } from './library.styled';
import { IoIosArrowDropdown, IoIosArrowDropup } from 'react-icons/io';
import uuidv4 from 'uuidv4';

const Library = ({ tracksList }) => {
    const [displayList, setListDisplay] = useState(false);

    const renderList = () => tracksList.map((track, index) => <LibraryElement key={index + uuidv4} index={index} track={track} />);
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

export default compose(connect(mapStateToProps)(Library));
