import { render, screen } from '@testing-library/react';

const children = ({ Component }) =>
    describe('children', () => {
        const TEST_CHILDREN = 'test children';

        test('when defined', () => {
            render(<Component>{TEST_CHILDREN}</Component>);

            const element = screen.getByText(TEST_CHILDREN);

            expect(element).toBeInTheDocument();
        });

        test('when undefined', () => {
            render(<Component />);

            const element = screen.queryByText(TEST_CHILDREN);

            expect(element).not.toBeInTheDocument();
        });
    });

export default children;
