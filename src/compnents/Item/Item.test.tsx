import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '.';

const ITEM_NAME = 'test name'

describe('Item component', () => {
    test('Match snapshot', () => {
        render(<Item itemName={ITEM_NAME} />);
        expect(screen).toMatchSnapshot();
    })
    
    test('Item Name', () => {
        render(<Item itemName={ITEM_NAME} />);

        const item = screen.getByText(ITEM_NAME);
        expect(item).toBeInTheDocument();
    });

    test('Item Name', () => {
        render(<Item itemName={ITEM_NAME} />);

        const icon = screen.getByTestId('close-icon');
        expect(icon).toBeInTheDocument();
    });
})