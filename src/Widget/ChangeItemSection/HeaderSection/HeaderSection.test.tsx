import { render, screen } from '@testing-library/react';
import HeaderSection from ".";

describe('HeaderSection component', () => {
    test('Match snapshot', () => {
        render(<HeaderSection />);
        expect(screen).toMatchSnapshot();
    })
    
    test('HeaderSection text', () => {
        render(<HeaderSection />);

        const item = screen.getByText('Select Items');
        expect(item).toBeInTheDocument();
    });
})