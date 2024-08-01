import React from 'react';

import { Titles, ButtonsTexts } from 'constants';

import { ButtonGroup, H4, RemoveButton, RemoveContainer } from './styles';


const RemovePopup = ({
    handleYesClick,
    handleNoClick
}) => (
    <RemoveContainer>
        <H4>{Titles.removeImage}</H4>
        <ButtonGroup>
            <RemoveButton onClick={handleYesClick}>{ButtonsTexts.yes}</RemoveButton>
            <RemoveButton onClick={handleNoClick}>{ButtonsTexts.no}</RemoveButton>
        </ButtonGroup>
    </RemoveContainer>
);

export default RemovePopup;