import React from 'react';
import { CgClose } from 'react-icons/cg';
import { colors } from 'constants';

export default function Close({
    className,
    onClose
}) {
    return (
        <>
            <button type='button' className={className} onClick={onClose}>
                <CgClose size={20} fill={colors.darkBlue} />
            </button>
        </>
    );
}
