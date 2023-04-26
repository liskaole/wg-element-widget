import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import NumberFilter, { FILTERS, FILTER_LABEL } from '.';

describe('NumberFilter component', () => {
    test('Match snapshot', () => {
        render(<NumberFilter />);
        expect(screen).toMatchSnapshot();
    })

    test('Render child', () => {
        render(<NumberFilter />);

        const text = screen.getByText(FILTER_LABEL);
        expect(text).toBeInTheDocument();
    });

    test('Select Changing Value', () => {
        render(<NumberFilter />);

        const select = screen.getByTestId('number-filter-select') as HTMLSelectElement
        fireEvent.change(select, {target: {value: '100'}});
        expect(select.value).toBe('100')
    });
})
