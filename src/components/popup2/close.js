import React from 'react';
import { CgClose } from 'react-icons/cg';
import colors from 'themes/colors';

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
