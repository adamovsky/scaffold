import { render, screen } from '@testing-library/react';

const text = ({ Component }) =>
    describe('text', () => {
        const TEST_TEXT = 'test text';

        test('when defined', () => {
            render(<Component text={TEST_TEXT} />);

            const element = screen.getByText(TEST_TEXT);

            expect(element).toBeInTheDocument();
        });

        test('when undefined', () => {
            render(<Component />);

            const element = screen.queryByText(TEST_TEXT);

            expect(element).not.toBeInTheDocument();
        });
    });

export default text;
