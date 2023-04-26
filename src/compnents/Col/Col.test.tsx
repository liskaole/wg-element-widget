import React from 'react';
import { render, screen } from '@testing-library/react';
import Col from '.';

const TEXT = 'Test Col Text';

describe('Col component', () => {
    test('Match snapshot', () => {
        render(<Col>{TEXT}</Col>);
        expect(screen).toMatchSnapshot();
    })

    test('Render child', () => {
        render(<Col>{TEXT}</Col>);

        const text = screen.getByText(TEXT);
        expect(text).toBeInTheDocument();
    });
    
    test('Span style', () => {
        render(<Col span={3}>{TEXT}</Col>);

        const col = screen.getByTestId('col-id');
        expect(col).toHaveStyle({flex: 3});
    });
})
