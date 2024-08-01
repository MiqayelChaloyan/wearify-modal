import React from 'react';

import { CgClose } from 'react-icons/cg';

import colors from 'themes/colors';


export default function Close({
    onClose
}) {
    return (
        <button style={{ cursor: 'pointer' }} type='button' onClick={onClose}>
            <CgClose size={20} fill={colors.darkBlue} />
        </button>
    );
};
