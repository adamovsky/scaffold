import { fireEvent, render, screen } from '@testing-library/react';

const TEST_ID = 'testId';

const onDragEnter = ({ Component }) =>
    describe('onDragEnter', () => {
        let handleEnter;

        beforeEach(() => {
            handleEnter = jest.fn();
        });

        test('when defined', () => {
            render(<Component onDragEnter={handleEnter} testId={TEST_ID} />);

            const element = screen.getByTestId(TEST_ID);

            fireEvent.dragEnter(element, {
                dataTransfer: {
                    setData: jest.fn()
                }
            });

            expect(handleEnter).toHaveBeenCalled();
        });

        test('when undefined', () => {
            render(<Component testId={TEST_ID} />);

            const element = screen.getByTestId(TEST_ID);

            fireEvent.dragEnter(element, {
                dataTransfer: {
                    setData: jest.fn()
                }
            });

            expect(handleEnter).not.toHaveBeenCalled();
        });
    });

export default onDragEnter;
