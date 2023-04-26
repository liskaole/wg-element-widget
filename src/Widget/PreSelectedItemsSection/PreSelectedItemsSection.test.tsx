import React from 'react';
import { render, screen } from '@testing-library/react';
import PreSelectedItemsSection from '.';

describe('PreSelectedItemsSection component', () => {
    test('Match snapshot', () => {
        render(<PreSelectedItemsSection />);
        expect(screen).toMatchSnapshot();
    })
    
    test('Item Name', () => {
        render(<PreSelectedItemsSection />);

        const item = screen.getByText('Current selected items:');
        expect(item).toBeInTheDocument();
    });
})