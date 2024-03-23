import { fireEvent, render, screen } from '@testing-library/react';

const onClick = ({ Component }) =>
    describe('onClick', () => {
        let clickHandler;

        beforeEach(() => {
            clickHandler = jest.fn();
        });

        const TEST_ID = 'testId';

        test('when defined', () => {
            render(<Component onClick={clickHandler} testId={TEST_ID} />);

            const element = screen.getByTestId(TEST_ID);

            fireEvent.click(element);

            expect(clickHandler).toHaveBeenCalled();
        });

        test('when undefined', () => {
            render(<Component testId={TEST_ID} />);

            const element = screen.getByTestId(TEST_ID);

            fireEvent.click(element);

            expect(clickHandler).not.toHaveBeenCalled();
        });
    });

export default onClick;
