import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStore from 'components/GlobalStore';

import testComponent from 'helpers/testComponent';

import Content from '.';

import { TEST_ID } from './constants';

const ComponentWithStore = props => (
    <BrowserRouter>
        <GlobalStore>
            <Content {...props} />
        </GlobalStore>
    </BrowserRouter>
);

testComponent(ComponentWithStore, ({ testProp }) => {
    describe('Content', () => {
        test('renders successfully', () => {
            render(<ComponentWithStore />);

            const element = screen.getByTestId(TEST_ID);

            expect(element).toBeInTheDocument();
        });

        describe('props', () => {
            testProp('className');
            testProp('testId');
        });
    });
});
