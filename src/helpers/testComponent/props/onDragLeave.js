import { fireEvent, render, screen } from '@testing-library/react';

const TEST_ID = 'testId';

const onDragLeave = ({ Component }) =>
    describe('onDragLeave', () => {
        let handleLeave;

        beforeEach(() => {
            handleLeave = jest.fn();
        });

        test('when defined', () => {
            render(<Component onDragLeave={handleLeave} testId={TEST_ID} />);

            const element = screen.getByTestId(TEST_ID);

            fireEvent.dragLeave(element, {
                dataTransfer: {
                    setData: jest.fn()
                }
            });

            expect(handleLeave).toHaveBeenCalled();
        });

        test('when undefined', () => {
            render(<Component testId={TEST_ID} />);

            const element = screen.getByTestId(TEST_ID);

            fireEvent.dragEnter(element, {
                dataTransfer: {
                    setData: jest.fn()
                }
            });

            expect(handleLeave).not.toHaveBeenCalled();
        });
    });

export default onDragLeave;
