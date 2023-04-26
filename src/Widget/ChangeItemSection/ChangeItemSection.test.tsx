import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import ChangeItemSection from '.';

describe('ChangeItemSection component', () => {
    test('Match snapshot', () => {
        render(<ChangeItemSection />);
        expect(screen).toMatchSnapshot();
    })

    test('Render child', () => {
        render(<ChangeItemSection />);

        const btn = screen.getByText('Change my choice');
        expect(btn).toBeInTheDocument();
    });

    test('Show and hide form', () => {
        render(<ChangeItemSection />);

        
        const btn = screen.getByRole('button');
        const form = screen.queryByTestId('item-list');

        expect(form).toBeNull();
        fireEvent.click(btn);
        expect(form).toBeInTheDocument();
    });
})
