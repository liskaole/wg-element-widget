import React from 'react';
import { render, screen } from '@testing-library/react';
import CloseIcon from '.';

describe('Col component', () => {
    test('Match snapshot', () => {
        render(<CloseIcon />);
        expect(screen).toMatchSnapshot();
    })
    
    test('Passed style', () => {
        const STYLE = {color: 'red'}
        render(<CloseIcon style={STYLE} />);

        const icon = screen.getByTestId('close-icon');
        expect(icon).toHaveStyle(STYLE);
    });
})