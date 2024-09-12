import React from 'react';
import { LoadingSpinner } from '../../../src/spinner/LoadingSpinner';

export const LoadingSpinnerDemo = () => {
    return (
        <>
            <LoadingSpinner />
            <LoadingSpinner color="black" background='#89CFF0'/>
            <LoadingSpinner color="#1d70b8" speed="0.5s" message='Loading...'/>
        </>
    )
};