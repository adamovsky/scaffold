import { render } from '@testing-library/react';

const className = ({ Component }) =>
    describe('className', () => {
        const TEST_CLASSNAME = 'testClassName';

        test('when defined', () => {
            const { container } = render(
                <Component className={TEST_CLASSNAME} />
            );

            const elements = container.getElementsByClassName(TEST_CLASSNAME);

            expect(elements.length).toBe(1);
        });

        test('when undefined', () => {
            const { container } = render(<Component />);

            const elements = container.getElementsByClassName(TEST_CLASSNAME);

            expect(elements.length).toBe(0);
        });
    });

export default className;
