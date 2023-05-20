import { render, screen } from '@testing-library/react';

const title = ({ Component }) =>
    describe('title', () => {
        const TEST_TITLE = 'test title';

        test('when defined', () => {
            render(<Component title={TEST_TITLE} />);

            const element = screen.getByText(TEST_TITLE);

            expect(element).toBeInTheDocument();
        });

        test('when undefined', () => {
            render(<Component />);

            const element = screen.queryByText(TEST_TITLE);

            expect(element).not.toBeInTheDocument();
        });
    });

export default title;
