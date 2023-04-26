import React from 'react';
import { render, screen } from '@testing-library/react';
import Button, { ButtonType } from '.';

const TEXT = 'Test Col Text';

describe('Button component', () => {
    test('Match snapshot', () => {
        render(<Button>{TEXT}</Button>);
        expect(screen).toMatchSnapshot();
    })

    test('Render child', () => {
        render(<Button>{TEXT}</Button>);

        const text = screen.getByText(TEXT);
        expect(text).toBeInTheDocument();
    });

    test('Success type class', () => {
        render(<Button>{TEXT}</Button>);

        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('successBtn');
    });
    
    test('Danger class type', () => {
        render(<Button type={ButtonType.danger}>{TEXT}</Button>);

        const btn = screen.getByRole('button');
        expect(btn).toHaveClass('dangerBtn');
    });
})
