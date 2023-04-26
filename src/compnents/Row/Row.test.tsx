import React from 'react';
import { render, screen } from '@testing-library/react';
import Row from '.';

const TEXT = 'Test Row Text';

describe('Row component', () => {
    test('Match snapshot', () => {
        render(<Row>{TEXT}</Row>);
        expect(screen).toMatchSnapshot();
    })

    test('Render child', () => {
        render(<Row>{TEXT}</Row>);

        const text = screen.getByText(TEXT);
        expect(text).toBeInTheDocument();
    });
    
    test('Span style', () => {
        render(<Row gap={[3, 7]}>{TEXT}</Row>);

        const col = screen.getByTestId('row-id');
        expect(col).toHaveStyle({gap: '3px 7px'});
    });
})
