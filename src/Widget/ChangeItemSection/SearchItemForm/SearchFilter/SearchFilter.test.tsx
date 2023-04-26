import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchFilter from '.';

describe('NumberFilter component', () => {
    test('Match snapshot', () => {
        render(<SearchFilter />);
        expect(screen).toMatchSnapshot();
    })

    test('Render child', () => {
        render(<SearchFilter />);

        const text = screen.getByText('Search');
        expect(text).toBeInTheDocument();
    });

    test('Input Changing Value', () => {
        const INPUT_VAL = 'test search value'
        render(<SearchFilter />);

        const input = screen.getByTestId('search-filter-select') as HTMLInputElement
        fireEvent.change(input, {target: {value: INPUT_VAL}});
        expect(input.value).toBe(INPUT_VAL)
    });
})
