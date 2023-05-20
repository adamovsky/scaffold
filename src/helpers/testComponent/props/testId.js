import { render, screen } from '@testing-library/react';

const testId = ({ Component }) =>
    describe('testId', () => {
        const TEST_TEST_ID = 'testId';

        test('when defined', () => {
            render(<Component testId={TEST_TEST_ID} />);

            const element = screen.getByTestId(TEST_TEST_ID);

            expect(element).toBeInTheDocument();
        });

        test('when undefined', () => {
            render(<Component />);

            const element = screen.queryByTestId(TEST_TEST_ID);

            expect(element).not.toBeInTheDocument();
        });
    });

export default testId;
